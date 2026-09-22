import path from "node:path";
import { chromium } from "playwright";

const buildDir = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride/v3/.build";
const htmlPath = path.join(buildDir, "evidence_manifest.html");
const outputPath = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride/v3/submission-ready/evidence/Evidence-Manifest.pdf";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();
