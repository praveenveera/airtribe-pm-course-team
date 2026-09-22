import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const projectRoot = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride";
const appPath = path.join(projectRoot, "webapp/index.html");
const outputDir = path.join(projectRoot, "v3/submission-ready/evidence/02-Survey-Method/Screenshots");
await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 430, height: 932 }, deviceScaleFactor: 2 });
await page.route("https://script.google.com/**", async (route) => {
  await route.fulfill({ status: 200, contentType: "text/plain", body: "ok" });
});
await page.goto(`file://${appPath}`, { waitUntil: "load" });

async function capture(name) {
  await page.screenshot({ path: path.join(outputDir, name), fullPage: true });
}

await capture("01-language-and-consent.png");
await page.locator(".lang-gate-card").first().click();
await page.locator(".option-card").first().click();
await capture("02-consent-selected.png");

await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await capture("03-open-story-question.png");

await page.locator("#nextBtn").click();
await page.locator("#nextBtn").click();
await page.locator("#nextBtn").click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await capture("04-location-question.png");

await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").nth(2).click();
await page.locator("#nextBtn").click();
await capture("05-recovery-question.png");

await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").first().click();
await page.locator("#nextBtn").click();
await page.locator("#nextBtn").click();
await page.locator(".option-card").last().click();
await page.locator("#nextBtn").click();
await page.locator("#nextBtn").click();
await page.waitForSelector(".thankyou");
await capture("06-completion-screen.png");

await browser.close();
