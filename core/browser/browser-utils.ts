import { BrowserManagement } from './browser-management';

export class BrowserUtils {
  static async navigate(url: string): Promise<void> {
    const page = BrowserManagement.getCurrentPage();
    await page.goto(url);
  }
}
