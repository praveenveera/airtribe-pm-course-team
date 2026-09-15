/**
 * Open Nykaa in a real browser window so YOU can log in manually.
 * Session is saved to .auth/nykaa-state.json for automated journeys.
 *
 * Usage: npm run login
 */
import { mkdir } from 'fs/promises';
import readline from 'readline';
import { launchBrowser, AUTH_DIR, AUTH_STATE, DESKTOP_CONTEXT } from './lib/browser.js';

const LOGIN_URL = 'https://www.nykaa.com/auth/login?ptype=login';

async function looksLoggedIn(page) {
  const url = page.url();
  if (/\/auth\/login/i.test(url)) return false;

  const cookies = await page.context().cookies();
  const authish = cookies.some((c) =>
    /token|auth|session|logged|customer|user/i.test(`${c.name}=${c.value}`),
  );

  const profileVisible = await page.getByText(/My Orders|My Profile|^Hi[,\s]/i).first().isVisible().catch(() => false);
  const accountLink = await page.locator('[href*="my-account"], [href*="orders"]').first().isVisible().catch(() => false);

  return profileVisible || accountLink || (authish && !/\/auth\//i.test(url));
}

async function main() {
  await mkdir(AUTH_DIR, { recursive: true });

  console.log('\n=== Nykaa Login Session ===\n');
  console.log('A Chrome window will open at Nykaa login.\n');
  console.log('Steps for you:');
  console.log('  1. Enter your mobile number → Get OTP → verify');
  console.log('     OR use "Continue With Google" / "Use Email ID"');
  console.log('  2. Confirm you are logged in (profile icon / account shows your name)');
  console.log('  3. Return here and press ENTER to save the session\n');
  console.log(`Login URL: ${LOGIN_URL}\n`);

  const browser = await launchBrowser({ headless: false });
  const context = await browser.newContext(DESKTOP_CONTEXT);
  const page = await context.newPage();

  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

  console.log('Waiting up to 5 minutes for a successful login (or press ENTER to save now)...\n');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  let enterHit = false;
  rl.question('Press ENTER after you have logged in successfully... ', () => {
    enterHit = true;
  });

  const deadline = Date.now() + 300000;
  while (Date.now() < deadline) {
    if (enterHit) break;
    if (await looksLoggedIn(page)) {
      console.log('\nDetected logged-in session. Saving...');
      break;
    }
    await page.waitForTimeout(2000);
  }
  rl.close();

  await context.storageState({ path: AUTH_STATE });
  console.log(`\nSession saved to: ${AUTH_STATE}`);
  console.log('Run scenarios with: npm run journey -- <scenario-id>');
  console.log('Example: npm run journey -- skincare-budget\n');

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
