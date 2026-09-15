/**
 * Run a persona scenario: discover → bag → cart → checkout (stops before payment).
 *
 * Usage:
 *   npm run login
 *   npm run journey -- skincare-budget
 *   npm run journey -- all
 *   STOP_AT=discover npm run journey -- makeup-beginner
 *   npm run journey -- skincare-budget --pause-before-checkout
 */
import { readFile, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import {
  launchBrowser,
  createContext,
  ensureDirs,
  gotoWithRetry,
  pageLooksLikeTimeout,
} from './lib/browser.js';
import { JourneyRunner, searchNykaa, clickFirstVisible, dismissOverlays, visibleText } from './lib/journey-runner.js';
import {
  SCENARIOS_DIR,
  SCREENSHOTS_WEB,
  SCREENSHOTS_GOOD,
  SCREENSHOTS_BAD,
  OUTPUT_DIR,
} from './lib/paths.js';

const PAUSE_BEFORE_CHECKOUT = process.argv.includes('--pause-before-checkout');
const STOP_AT = process.env.STOP_AT || '';

async function loadScenario(id) {
  const path = join(SCENARIOS_DIR, `${id}.json`);
  if (!existsSync(path)) throw new Error(`Unknown scenario: ${id}`);
  return JSON.parse(await readFile(path, 'utf8'));
}

async function listScenarios() {
  const files = await readdir(SCENARIOS_DIR);
  return files.filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', ''));
}

async function runScenario(scenario, browser) {
  const context = await createContext(browser, { useAuth: true });
  const page = await context.newPage();
  const runner = new JourneyRunner(page, {
    scenarioId: scenario.id,
    persona: scenario.persona,
    title: scenario.title,
    goal: scenario.goal,
    buyerMindset: scenario.buyerMindset,
    platform: 'Nykaa desktop web (Playwright Desktop Chrome 1440×900)',
    startedAt: new Date().toISOString(),
  });

  await gotoWithRetry(page, 'https://www.nykaa.com/', 'home');
  await page.waitForTimeout(2000);
  await dismissOverlays(page);

  await runner.runStep('01-home', async () => ({
    notes: `Homepage loaded for scenario: ${scenario.title}`,
    verdict: 'neutral',
    buyerInsight: 'Entry point sets discovery mode — browse vs search vs category shortcut.',
    uxNote: 'Promo density vs goal-directed shortcuts (e.g. Face Moisturizer tile).',
    screenshotName: '01-home',
  }));

  if (scenario.id === 'window-shopping' || !String(scenario.searchQuery || '').trim()) {
    await runner.runStep('02-search', async () => {
      await clickFirstVisible(page, ['text=OFFERS', 'a:has-text("Offers")', 'text=Beauty Advice']);
      await page.waitForTimeout(2000);
      await dismissOverlays(page);
      return {
        notes: 'Window shop: browsed home / offers. No product search, no add-to-bag.',
        verdict: 'neutral',
        buyerInsight: 'Browse job is inspiration and deals, not a SKU hunt.',
        uxNote: 'Promo density vs a calm browse path (lookbooks, Beauty Advice).',
        screenshotName: '02-search-plp',
      };
    });
  } else if (scenario.id === 'replenishment') {
    await runner.runStep('02-search', async () => {
      await gotoWithRetry(page, 'https://www.nykaa.com/my/orders', 'orders').catch(async () => {
        await gotoWithRetry(page, 'https://www.nykaa.com/account/', 'account');
      });
      await page.waitForTimeout(2500);
      await dismissOverlays(page);
      const loginWall = await visibleText(page, /Login or Signup/i);
      const ordersVisible = await visibleText(page, /My Orders|Reorder|Order History|Delivered/i);
      if (!ordersVisible && !loginWall) {
        await searchNykaa(page, 'serum', gotoWithRetry);
      }
      return {
        notes: loginWall
          ? 'Orders/account gated — login required for replenishment. Run: npm run login'
          : ordersVisible
            ? 'Order history / reorder surface opened for loyal replenisher.'
            : 'Fell back to search for a known-category product (serum).',
        verdict: loginWall ? 'bad' : ordersVisible ? 'good' : 'neutral',
        buyerInsight: loginWall
          ? 'Repeat buyers cannot skip discovery without a session — retention leak.'
          : 'Reorder from history is the job; search is a fallback tax.',
        uxNote: 'Account → Orders vs search-from-scratch for known SKUs.',
        screenshotName: '02-search-plp',
      };
    });
  } else {
  await runner.runStep('02-search', async () => {
    const mode = await searchNykaa(page, scenario.searchQuery, gotoWithRetry);
    const bodyText = await page.locator('body').innerText().catch(() => '');
    const resultMatch = bodyText.match(/Showing\s+([\d,]+)\s+results/i);
    const count = resultMatch ? resultMatch[1].replace(/,/g, '') : null;
    const tooMany = count && parseInt(count, 10) > 100;
    return {
      notes: `Search "${scenario.searchQuery}" via ${mode}. ${count ? `${count} results` : 'Results loaded'}.`,
      verdict: tooMany ? 'bad' : 'good',
      buyerInsight: tooMany
        ? 'Choice overload — buyer must self-filter; wrong-product risk for concern-based buys.'
        : 'Manageable results; PLP cards help shortlist.',
      uxNote: tooMany ? 'Need guided narrowing (skin type + budget).' : 'Ratings, badges, offer prices on cards.',
      screenshotName: '02-search-plp',
    };
  });
  }

  if (STOP_AT === 'discover' || (Array.isArray(scenario.phases) && !scenario.phases.includes('cart'))) {
    await runner.save(`journey-${scenario.id}.json`);
    await context.close();
    return;
  }

  await runner.runStep('03-filters', async () => {
    await dismissOverlays(page);
    const opened = await clickFirstVisible(page, ['text=Filter', 'button:has-text("Filter")']);
    await page.waitForTimeout(2000);
    const loginVisible = await visibleText(page, /Login or Signup/i);
    return {
      notes: opened
        ? loginVisible
          ? 'Filter opened but login modal blocked filter application.'
          : 'Filter panel opened with beauty taxonomies.'
        : 'Filter not found.',
      verdict: loginVisible ? 'bad' : opened ? 'good' : 'neutral',
      buyerInsight: loginVisible
        ? 'Cannot narrow 100+ results without friction — delays or abandons purchase.'
        : 'Filters match beauty decision criteria (skin type, concern, price).',
      uxNote: loginVisible ? 'Login gate on filter = funnel leak.' : 'Strong taxonomy when accessible.',
      screenshotName: '03-filters',
    };
  });

  await runner.runStep('04-add-to-bag', async () => {
    await dismissOverlays(page);
    await page.keyboard.press('Escape').catch(() => {});
    await page.waitForTimeout(500);
    const added = await clickFirstVisible(page, [
      'button:has-text("Add to Bag")',
      'text=Add to Bag',
    ]);
    if (!added) {
      const viewSizes = await clickFirstVisible(page, ['text=View Sizes', 'button:has-text("View Sizes")']);
      if (viewSizes) {
        await page.waitForTimeout(1500);
        await clickFirstVisible(page, ['button:has-text("Add to Bag")', 'text=Add to Bag']);
      }
    }
    await page.waitForTimeout(2500);
    const toast = await page.locator('text=Product added to bag').first().isVisible().catch(() => false);
    return {
      notes: toast ? 'Added to bag with toast confirmation.' : 'Add to bag action attempted.',
      verdict: toast ? 'good' : 'neutral',
      buyerInsight: 'Confirmation reduces anxiety before proceeding to cart.',
      uxNote: 'Inline PLP add-to-bag vs View Sizes for variants.',
      screenshotName: '04-add-to-bag',
    };
  });

  if (STOP_AT === 'cart') {
    await runner.save(`journey-${scenario.id}.json`);
    await context.close();
    return;
  }

  await runner.runStep('05-bag-cart', async () => {
    await dismissOverlays(page);
    await gotoWithRetry(page, 'https://www.nykaa.com/shoppingbag/', 'bag').catch(async () => {
      await clickFirstVisible(page, ['a[href*="shoppingbag"]', 'a[href*="cart"]']);
    });
    await page.waitForTimeout(3000);
    await dismissOverlays(page);
    const timedOut = await pageLooksLikeTimeout(page);
    const hasPrice = await page.locator('text=₹').first().isVisible().catch(() => false);
    return {
      notes: timedOut
        ? 'Bag page returned raw upstream timeout JSON instead of cart UI.'
        : hasPrice
          ? 'Shopping bag shows items and pricing.'
          : 'Bag page opened.',
      verdict: timedOut ? 'bad' : hasPrice ? 'good' : 'neutral',
      buyerInsight: timedOut
        ? 'Cart reliability failure at the moment of purchase intent — high abandonment.'
        : 'Buyer validates subtotal, savings, delivery promise before checkout.',
      uxNote: timedOut
        ? 'No branded retry/empty-state — raw JSON is a trust and conversion leak.'
        : 'Coupon complexity and delivery ETA clarity matter here.',
      screenshotName: '05-bag-cart',
    };
  });

  await runner.runStep('06-checkout-entry', async () => {
    await dismissOverlays(page);
    await clickFirstVisible(page, [
      'button:has-text("Proceed")',
      'text=Proceed to Buy',
      'text=Checkout',
    ]);
    await page.waitForTimeout(3000);
    const timedOut = await pageLooksLikeTimeout(page);
    const loginRequired = await visibleText(page, /Login or Signup/i);
    return {
      notes: timedOut
        ? 'Checkout entry returned upstream timeout JSON.'
        : loginRequired
          ? 'Checkout blocked — login required. Run: npm run login'
          : 'Checkout flow entered.',
      verdict: timedOut || loginRequired ? 'bad' : 'good',
      buyerInsight: timedOut
        ? 'Checkout unavailable at the last mile — conversion and trust both drop.'
        : loginRequired
          ? 'Late login at checkout causes abandonment.'
          : 'Saved address / wallet should accelerate repeat buyers.',
      uxNote: timedOut
        ? 'Raw timeout JSON at checkout is a P0 reliability/UX issue.'
        : 'Guest checkout vs forced login trade-off.',
      screenshotName: '06-checkout-entry',
    };
  });

  if (PAUSE_BEFORE_CHECKOUT) {
    console.log('\n⏸  Paused before address/payment. Re-run without --pause-before-checkout to continue.\n');
    await runner.save(`journey-${scenario.id}.json`);
    await context.close();
    return;
  }

  await runner.runStep('07-address-payment', async () => {
    await page.waitForTimeout(2000);
    const timedOut = await pageLooksLikeTimeout(page);
    const addressVisible = await visibleText(page, /Address|Deliver|Pincode/i);
    const paymentVisible = await visibleText(page, /Payment|UPI|Cash on Delivery|\bCOD\b/i);
    return {
      notes: timedOut
        ? 'Checkout returned upstream timeout JSON instead of address/payment UI.'
        : `Checkout captured. Address UI: ${addressVisible}. Payment UI: ${paymentVisible}. Stopped before payment.`,
      verdict: timedOut ? 'bad' : addressVisible || paymentVisible ? 'good' : 'neutral',
      buyerInsight: 'Final cost, delivery date, and payment trust decided here.',
      uxNote: 'Hidden fees or offer confusion = highest abandonment risk.',
      screenshotName: '07-address-payment',
    };
  });

  await runner.save(`journey-${scenario.id}.json`);
  await context.close();
}

async function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const scenarioArg = args[0] || 'skincare-budget';

  await ensureDirs(SCREENSHOTS_WEB, SCREENSHOTS_GOOD, SCREENSHOTS_BAD, OUTPUT_DIR);

  const browser = await launchBrowser({ headless: true });
  const ids = scenarioArg === 'all' ? await listScenarios() : [scenarioArg];

  for (const id of ids) {
    console.log(`\n========== Scenario: ${id} ==========\n`);
    await runScenario(await loadScenario(id), browser);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
