import { writeFile } from 'fs/promises';
import { join } from 'path';
import { OUTPUT_DIR, SCREENSHOTS_WEB, SCREENSHOTS_GOOD, SCREENSHOTS_BAD } from './paths.js';
import { dismissOverlays } from './browser.js';

/**
 * @typedef {'good' | 'bad' | 'neutral'} Verdict
 * @typedef {{ step: string, url: string, timestamp: string, durationMs: number, verdict: Verdict, buyerInsight: string, uxNote: string, notes: string, screenshot?: string, goodScreenshot?: string, badScreenshot?: string, error?: string }} JourneyStep
 */

export class JourneyRunner {
  /** @param {import('playwright').Page} page */
  constructor(page, meta) {
    this.page = page;
    this.meta = meta;
    /** @type {JourneyStep[]} */
    this.steps = [];
    this.screenshotPrefix = meta.scenarioId ?? 'default';
  }

  async capture(name, verdict = 'neutral') {
    const base = `${this.screenshotPrefix}-${name}`;
    const webPath = join(SCREENSHOTS_WEB, `${base}.png`);
    await this.page.screenshot({ path: webPath, fullPage: false });

    const relWeb = `screenshots/web/${base}.png`;
    let goodScreenshot;
    let badScreenshot;

    if (verdict === 'good') {
      const goodPath = join(SCREENSHOTS_GOOD, `${base}.png`);
      await this.page.screenshot({ path: goodPath, fullPage: false });
      goodScreenshot = `screenshots/good/${base}.png`;
    } else if (verdict === 'bad') {
      const badPath = join(SCREENSHOTS_BAD, `${base}.png`);
      await this.page.screenshot({ path: badPath, fullPage: false });
      badScreenshot = `screenshots/bad/${base}.png`;
    }

    return { screenshot: relWeb, goodScreenshot, badScreenshot };
  }

  /**
   * @param {string} step
   * @param {() => Promise<{ notes: string, verdict?: Verdict, buyerInsight?: string, uxNote?: string, screenshotName?: string }>} fn
   */
  async runStep(step, fn) {
    const start = Date.now();
    const entry = {
      step,
      url: this.page.url(),
      timestamp: new Date().toISOString(),
      durationMs: 0,
      verdict: 'neutral',
      buyerInsight: '',
      uxNote: '',
      notes: '',
    };

    try {
      const result = await fn();
      entry.durationMs = Date.now() - start;
      entry.url = this.page.url();
      entry.notes = result.notes;
      entry.verdict = result.verdict ?? 'neutral';
      entry.buyerInsight = result.buyerInsight ?? '';
      entry.uxNote = result.uxNote ?? '';

      const shotName = result.screenshotName ?? step.replace(/[^\w]+/g, '-').toLowerCase();
      const shots = await this.capture(shotName, entry.verdict);
      Object.assign(entry, shots);
    } catch (err) {
      entry.durationMs = Date.now() - start;
      entry.url = this.page.url();
      entry.verdict = 'bad';
      entry.error = err instanceof Error ? err.message : String(err);
      entry.notes = `Step failed: ${entry.error}`;
      entry.uxNote = 'Broken or blocked flow — high abandonment risk.';
      const shots = await this.capture(`error-${step.replace(/[^\w]+/g, '-').toLowerCase()}`, 'bad');
      Object.assign(entry, shots);
    }

    this.steps.push(entry);
    const tag = entry.verdict === 'good' ? '✓' : entry.verdict === 'bad' ? '✗' : '·';
    console.log(`[${tag} ${entry.durationMs}ms] ${step}: ${entry.notes}`);
    return entry;
  }

  async save(logFileName = 'journey-log.json') {
    this.meta.finishedAt = new Date().toISOString();
    this.meta.totalDurationMs = this.steps.reduce((s, e) => s + e.durationMs, 0);

    const output = {
      meta: this.meta,
      summary: {
        good: this.steps.filter((s) => s.verdict === 'good').length,
        bad: this.steps.filter((s) => s.verdict === 'bad').length,
        neutral: this.steps.filter((s) => s.verdict === 'neutral').length,
        errors: this.steps.filter((s) => s.error).length,
      },
      steps: this.steps,
    };

    const path = join(OUTPUT_DIR, logFileName);
    await writeFile(path, JSON.stringify(output, null, 2));
    console.log(`\nJourney log: ${path}`);
    return output;
  }
}

export async function visibleText(page, pattern) {
  return page.getByText(pattern).first().isVisible().catch(() => false);
}

export async function clickFirstVisible(page, selectors, { timeout = 5000 } = {}) {
  for (const sel of selectors) {
    const el = page.locator(sel).first();
    if (await el.isVisible().catch(() => false)) {
      await el.click({ timeout });
      return true;
    }
  }
  return false;
}

export async function searchNykaa(page, query, gotoWithRetry) {
  await dismissOverlays(page);
  const searchUrl = `https://www.nykaa.com/search/result/?q=${encodeURIComponent(query.replace(/ /g, '+'))}`;
  const searchSelectors = ['input[type="search"]', 'input[placeholder*="Search"]', 'input[placeholder*="search"]'];

  for (const sel of searchSelectors) {
    const loc = page.locator(sel).first();
    if (await loc.count() > 0 && await loc.isVisible().catch(() => false)) {
      await loc.click({ timeout: 5000 });
      await loc.fill(query);
      await page.waitForTimeout(400);
      await loc.press('Enter');
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      return 'ui';
    }
  }

  await gotoWithRetry(page, searchUrl, 'search');
  await page.waitForTimeout(2500);
  return 'url';
}

export { dismissOverlays };
