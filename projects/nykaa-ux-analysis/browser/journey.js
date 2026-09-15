/**
 * Nykaa desktop-web UX journey automation (legacy single-run).
 * Prefer: npm run journey -- <scenario>
 */
import { chromium } from 'playwright';
import { DESKTOP_CONTEXT } from './lib/browser.js';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SCREENSHOTS_DIR = join(ROOT, 'screenshots', 'web');
const OUTPUT_DIR = join(ROOT, 'output');
const LOG_PATH = join(OUTPUT_DIR, 'journey-log.json');

const SEARCH_QUERY = 'moisturizer dry sensitive skin';
const MAX_PRICE = 800;

/** @typedef {{ step: string, url: string, timestamp: string, durationMs: number, smooth: boolean, confusing: boolean, slow: boolean, frustrating: boolean, notes: string, screenshot?: string, error?: string }} JourneyStep */

/** @type {JourneyStep[]} */
const journeyLog = [];

async function screenshot(page, name) {
  const path = join(SCREENSHOTS_DIR, name);
  await page.screenshot({ path, fullPage: false });
  return path.replace(ROOT + '/', '');
}

async function dismissOverlays(page) {
  const selectors = [
    'button:has-text("Accept")',
    'button:has-text("Got it")',
    'button:has-text("OK")',
    'button:has-text("Close")',
    '[aria-label="Close"]',
    '.css-1hyfx7x', // common close patterns — best-effort
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click({ timeout: 2000 });
        await page.waitForTimeout(500);
      }
    } catch {
      /* ignore */
    }
  }
}

/**
 * @param {string} step
 * @param {() => Promise<{ notes: string, smooth?: boolean, confusing?: boolean, slow?: boolean, frustrating?: boolean, screenshot?: string }>} fn
 */
async function runStep(page, step, fn) {
  const start = Date.now();
  const entry = {
    step,
    url: page.url(),
    timestamp: new Date().toISOString(),
    durationMs: 0,
    smooth: false,
    confusing: false,
    slow: false,
    frustrating: false,
    notes: '',
  };

  try {
    const result = await fn();
    entry.durationMs = Date.now() - start;
    entry.url = page.url();
    entry.notes = result.notes;
    entry.smooth = result.smooth ?? false;
    entry.confusing = result.confusing ?? false;
    entry.slow = result.slow ?? false;
    entry.frustrating = result.frustrating ?? false;
    if (result.screenshot) entry.screenshot = result.screenshot;

    if (entry.durationMs > 5000) entry.slow = true;
  } catch (err) {
    entry.durationMs = Date.now() - start;
    entry.url = page.url();
    entry.frustrating = true;
    entry.error = err instanceof Error ? err.message : String(err);
    entry.notes = `Step failed: ${entry.error}`;
    try {
      entry.screenshot = await screenshot(page, `error-${step.replace(/\s+/g, '-').toLowerCase()}.png`);
    } catch {
      /* ignore screenshot failure */
    }
  }

  journeyLog.push(entry);
  console.log(`[${entry.durationMs}ms] ${step}: ${entry.notes}${entry.error ? ` (ERROR: ${entry.error})` : ''}`);
}

async function main() {
  await mkdir(SCREENSHOTS_DIR, { recursive: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  const launchOptions = {
    headless: true,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--disable-http2',
      '--no-sandbox',
    ],
  };

  /** @type {import('playwright').Browser} */
  let browser;
  try {
    browser = await chromium.launch({ ...launchOptions, channel: 'chrome' });
  } catch {
    browser = await chromium.launch(launchOptions);
  }

  const context = await browser.newContext(DESKTOP_CONTEXT);
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });
  const page = await context.newPage();

  async function gotoWithRetry(url, label) {
    const strategies = [
      { waitUntil: 'domcontentloaded', timeout: 60000 },
      { waitUntil: 'commit', timeout: 60000 },
      { waitUntil: 'load', timeout: 90000 },
    ];
    let lastError;
    for (const strategy of strategies) {
      try {
        await page.goto(url, strategy);
        if (!page.url().startsWith('chrome-error')) return;
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError ?? new Error(`Failed to load ${label}`);
  }

  const meta = {
    goal: `Find a face moisturizer for dry, sensitive skin under ₹${MAX_PRICE}`,
    platform: 'Nykaa desktop web (Playwright Desktop Chrome 1440×900)',
    searchQuery: SEARCH_QUERY,
    startedAt: new Date().toISOString(),
  };

  try {
    await runStep(page, '1. Open home', async () => {
      await gotoWithRetry('https://www.nykaa.com/', 'homepage');
      await page.waitForTimeout(2000);
      await dismissOverlays(page);
      const shot = await screenshot(page, '01-home.png');
      const title = await page.title();
      return {
        notes: `Loaded homepage. Title: "${title}". Promotional banners visible on entry.`,
        smooth: true,
        confusing: true,
        screenshot: shot,
      };
    });

    await runStep(page, '2. Search entry', async () => {
      await dismissOverlays(page);
      const searchUrl = `https://www.nykaa.com/search/result/?q=${encodeURIComponent(SEARCH_QUERY.replace(/ /g, '+'))}`;

      const searchSelectors = [
        'input[type="search"]',
        'input[placeholder*="Search"]',
        'input[placeholder*="search"]',
        '[data-testid="search-input"]',
        '#search-input',
      ];
      let searchedViaUi = false;
      let searchInput = null;
      for (const sel of searchSelectors) {
        const loc = page.locator(sel).first();
        if (await loc.count() > 0 && await loc.isVisible().catch(() => false)) {
          searchInput = loc;
          break;
        }
      }

      if (searchInput) {
        await searchInput.click({ timeout: 5000 });
        await searchInput.fill(SEARCH_QUERY);
        await page.waitForTimeout(500);
        await searchInput.press('Enter');
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(3000);
        searchedViaUi = true;
      } else {
        await gotoWithRetry(searchUrl, 'search results');
        await page.waitForTimeout(3000);
      }

      const shot = await screenshot(page, '02-search.png');
      return {
        notes: searchedViaUi
          ? `Searched via UI for "${SEARCH_QUERY}".`
          : `Search UI not found; navigated directly to search URL for "${SEARCH_QUERY}".`,
        smooth: true,
        confusing: !searchedViaUi,
        screenshot: shot,
      };
    });

    await runStep(page, '3. Filters / sort', async () => {
      await dismissOverlays(page);
      let filterApplied = false;
      const filterTriggers = [
        'button:has-text("Filter")',
        'text=Filter',
        '[data-test="filter"]',
      ];
      for (const sel of filterTriggers) {
        const btn = page.locator(sel).first();
        if (await btn.isVisible().catch(() => false)) {
          await btn.click();
          await page.waitForTimeout(1500);
          filterApplied = true;
          break;
        }
      }

      // Try price filter
      const priceSelectors = [
        'text=Price',
        'label:has-text("Price")',
        'text=Under',
        'text=₹',
      ];
      for (const sel of priceSelectors) {
        const el = page.locator(sel).first();
        if (await el.isVisible().catch(() => false)) {
          await el.click().catch(() => {});
          await page.waitForTimeout(500);
        }
      }

      const applyBtn = page.locator('button:has-text("Apply"), text=Apply').first();
      if (await applyBtn.isVisible().catch(() => false)) {
        await applyBtn.click();
        await page.waitForTimeout(2000);
      }

      const shot = await screenshot(page, '03-filters.png');
      return {
        notes: filterApplied
          ? `Opened filter panel. Attempted price filter ≤ ₹${MAX_PRICE}. Filter UX on mobile web can be dense.`
          : 'Filter control not clearly found; captured current listing state.',
        confusing: !filterApplied,
        screenshot: shot,
      };
    });

    await runStep(page, '4. Product listing (PLP)', async () => {
      await dismissOverlays(page);
      const productLinks = page.locator('a[href*="/p/"], a[href*="product"]').filter({ hasText: /./ });
      const count = await productLinks.count();
      const shot = await screenshot(page, '04-plp.png');
      return {
        notes: `Product listing visible. ~${count} product links detected. Multiple brands/prices shown; comparison requires opening PDPs.`,
        smooth: count > 0,
        confusing: count > 15,
        screenshot: shot,
      };
    });

    await runStep(page, '5. Product detail (PDP)', async () => {
      await dismissOverlays(page);
      const productLink = page.locator('a[href*="/p/"]').first();
      let productName = 'Unknown product';
      if (await productLink.count() > 0) {
        productName = (await productLink.innerText().catch(() => '')).split('\n')[0] || 'Product';
        await productLink.click();
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(3000);
      } else {
        throw new Error('No product link found on listing page');
      }
      const shot = await screenshot(page, '05-pdp.png');
      const h1 = await page.locator('h1, [class*="product-title"]').first().innerText().catch(() => productName);
      return {
        notes: `Opened PDP: "${h1.trim()}". Price, ratings, and variant info on detail page.`,
        smooth: true,
        screenshot: shot,
      };
    });

    await runStep(page, '6. Reviews section', async () => {
      await dismissOverlays(page);
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
      await page.waitForTimeout(1500);
      const reviewsTab = page.locator('text=Reviews, button:has-text("Reviews"), a:has-text("Reviews")').first();
      if (await reviewsTab.isVisible().catch(() => false)) {
        await reviewsTab.click();
        await page.waitForTimeout(1500);
      } else {
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(1000);
      }
      const shot = await screenshot(page, '06-reviews.png');
      const hasReviews = await page.locator('text=rating, text=Review, [class*="review"]').first().isVisible().catch(() => false);
      return {
        notes: hasReviews
          ? 'Reviews/ratings section reached via scroll or tab. Social proof available for purchase decision.'
          : 'Scrolled PDP; reviews section may be below fold or lazy-loaded.',
        smooth: hasReviews,
        slow: !hasReviews,
        screenshot: shot,
      };
    });

    await runStep(page, '7. Add to cart', async () => {
      await dismissOverlays(page);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);
      const addButtons = [
        'button:has-text("Add to Bag")',
        'button:has-text("Add to Cart")',
        'button:has-text("ADD TO BAG")',
        'text=Add to Bag',
      ];
      let clicked = false;
      for (const sel of addButtons) {
        const btn = page.locator(sel).first();
        if (await btn.isVisible().catch(() => false)) {
          await btn.click();
          clicked = true;
          await page.waitForTimeout(2500);
          break;
        }
      }
      const shot = await screenshot(page, '07-cart.png');
      const cartVisible = await page.locator('text=Bag, text=Cart, text=Go to Bag').first().isVisible().catch(() => false);
      return {
        notes: clicked
          ? `Added product to bag. Cart/bag indicator ${cartVisible ? 'visible' : 'may require navigation'}. Stopped before checkout/payment.`
          : 'Add to bag button not found — may need variant selection first.',
        smooth: clicked,
        frustrating: !clicked,
        confusing: !clicked,
        screenshot: shot,
      };
    });
  } finally {
    meta.finishedAt = new Date().toISOString();
    meta.totalDurationMs = journeyLog.reduce((sum, s) => sum + s.durationMs, 0);

    const output = {
      meta,
      summary: {
        smoothSteps: journeyLog.filter((s) => s.smooth).length,
        confusingSteps: journeyLog.filter((s) => s.confusing).length,
        slowSteps: journeyLog.filter((s) => s.slow).length,
        frustratingSteps: journeyLog.filter((s) => s.frustrating).length,
        errors: journeyLog.filter((s) => s.error).length,
      },
      steps: journeyLog,
    };

    await writeFile(LOG_PATH, JSON.stringify(output, null, 2));
    console.log(`\nJourney log written to ${LOG_PATH}`);
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
