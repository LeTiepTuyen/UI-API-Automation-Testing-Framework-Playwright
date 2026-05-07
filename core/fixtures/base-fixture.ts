import { test as base } from '@playwright/test';
import { BrowserManagement } from '../browser/browser-management';

export const test = base.extend<{
  browserFixture: void;
}>({
  browserFixture: [
    async ({ browser, context, page, request }, use) => {
      BrowserManagement.initializeBrowser(browser, context, page, request);
      await use();
    },
    { scope: 'test', auto: true }
  ],
});

export { expect } from '@playwright/test';
