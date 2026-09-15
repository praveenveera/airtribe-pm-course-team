import { chromium, devices } from 'playwright';
import { existsSync } from 'fs';
import { mkdir } from 'fs/promises';
import { AUTH_DIR, AUTH_STATE } from './paths.js';

const desktop = devices['Desktop Chrome'];

export const DESKTOP_CONTEXT = {
  ...desktop,
  locale: 'en-IN',
  timezoneId: 'Asia/Kolkata',
  viewport: { width: 1440, height: 900 },
  extraHTTPHeaders: {
    'Accept-Language': 'en-IN,en;q=0.9',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  },
};

export async function launchBrowser({ headless = true } = {}) {
  const launchOptions = {
    headless,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--disable-http2',
      '--no-sandbox',
    ],
  };

  try {
    return await chromium.launch({ ...launchOptions, channel: 'chrome' });
  } catch {
    return await chromium.launch(launchOptions);
  }
}

export async function createContext(browser, { useAuth = true } = {}) {
  const options = { ...DESKTOP_CONTEXT };

  if (useAuth && existsSync(AUTH_STATE)) {
    options.storageState = AUTH_STATE;
    console.log('Using saved login session:', AUTH_STATE);
  } else if (useAuth) {
    console.warn('No login session found. Run: npm run login');
  }

  const context = await browser.newContext(options);
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });
  return context;
}

export async function ensureDirs(...dirs) {
  for (const d of dirs) await mkdir(d, { recursive: true });
}

export async function pageLooksLikeTimeout(page) {
  const body = await page.locator('body').innerText().catch(() => '');
  return /upstream server is timing out|pretty-print/i.test(body);
}

export async function gotoWithRetry(page, url, label) {
  const strategies = [
    { waitUntil: 'domcontentloaded', timeout: 60000 },
    { waitUntil: 'commit', timeout: 60000 },
    { waitUntil: 'load', timeout: 90000 },
  ];
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    for (const strategy of strategies) {
      try {
        await page.goto(url, strategy);
        if (page.url().startsWith('chrome-error')) continue;
        if (await pageLooksLikeTimeout(page)) {
          lastError = new Error(`${label}: upstream timeout JSON`);
          await page.waitForTimeout(2500 * (attempt + 1));
          continue;
        }
        return;
      } catch (err) {
        lastError = err;
      }
    }
  }
  throw lastError ?? new Error(`Failed to load ${label}`);
}

export async function dismissOverlays(page) {
  const selectors = [
    'button:has-text("Accept")',
    'button:has-text("Got it")',
    'button:has-text("OK")',
    'button:has-text("Close")',
    '[aria-label="Close"]',
    '#smart-banner button[aria-label="Close"]',
    '#smart-banner [data-role="close"]',
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1200 })) {
        await el.click({ timeout: 2000 });
        await page.waitForTimeout(400);
      }
    } catch {
      /* ignore */
    }
  }
  // Dismiss app download smart banner if still visible
  try {
    const banner = page.locator('#smart-banner');
    if (await banner.isVisible({ timeout: 800 })) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    }
  } catch {
    /* ignore */
  }
}

export { AUTH_STATE, AUTH_DIR };
