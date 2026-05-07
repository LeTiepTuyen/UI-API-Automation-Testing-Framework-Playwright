import { Browser, BrowserContext, Page, APIRequestContext } from '@playwright/test';

export class BrowserManagement {
  private static browser: Browser;
  private static browserContext: BrowserContext;
  private static page: Page;
  private static request: APIRequestContext;

  static initializeBrowser(browser: Browser, browserContext: BrowserContext, page: Page, request: APIRequestContext): void {
    BrowserManagement.browser = browser;
    BrowserManagement.browserContext = browserContext;
    BrowserManagement.page = page;
    BrowserManagement.request = request;
  }

  static setCurrentContext(browserContext: BrowserContext): void {
    BrowserManagement.browserContext = browserContext;
  }

  static setCurrentPage(page: Page): void {
    BrowserManagement.page = page;
  }

  static getCurrentPage(): Page {
    return this.page;
  }

  static getCurrentContext(): BrowserContext {
    return this.browserContext;
  }

  static getRequest(): APIRequestContext {
    return this.request;
  }
}
