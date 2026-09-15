import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 120_000,
  retries: 0,
  use: {
    ...devices['iPhone 13'],
    baseURL: 'https://www.nykaa.com',
    trace: 'off',
    screenshot: 'off',
    video: 'off',
  },
});
