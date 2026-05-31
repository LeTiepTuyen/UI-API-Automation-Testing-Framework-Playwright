import { Element, LocatorType } from '../core/element/element';
import { BrowserManagement } from '../core/browser/browser-management';

export class BookmarkPage {
  bookmarkToggleButton: Element;
  bookmarksSidebarLink: Element;
  bookmarksHeading: Element;
  bookmarkedPhotoItems: Element;

  constructor() {
    this.bookmarkToggleButton = new Element('button', LocatorType.ROLE, { name: 'Bookmark' });
    this.bookmarksSidebarLink = new Element("xpath=//a[@href='/bookmarks']");
    this.bookmarksHeading = new Element("xpath=//h1[normalize-space()='Bookmarks']");
    this.bookmarkedPhotoItems = new Element("xpath=//figure[.//a[contains(@href,'/photos/')]]");
  }

  async clickBookmarkToggleButton() {
    await this.bookmarkToggleButton.click({ timeout: 10000 });
  }

  async clickBookmarksSidebarLink() {
    await this.bookmarksSidebarLink.getElement().first().click({ timeout: 10000 });
    await BrowserManagement.getCurrentPage().waitForURL('**/bookmarks');
  }

  async waitForBookmarksHeading() {
    await this.bookmarksHeading.waitForElementToBeVisible();
  }

  async getBookmarkedPhotosCount(): Promise<number> {
    await this.bookmarkedPhotoItems.waitForAnyElementToBeVisible();
    return await this.bookmarkedPhotoItems.getElement().count();
  }

  async getBookmarkedPhotoHrefList(): Promise<string[]> {
    await this.bookmarkedPhotoItems.waitForAnyElementToBeVisible();

    return await this.bookmarkedPhotoItems.getElement().evaluateAll((items) =>
      items
        .map((item) => item.querySelector<HTMLAnchorElement>('a[href*="/photos/"]')?.href)
        .filter((href): href is string => Boolean(href)),
    );
  }

  async getBookmarksSidebarCount(): Promise<number> {
    const sidebarText = await this.bookmarksSidebarLink.getElement().first().innerText();
    const parsedCount = sidebarText.match(/\d+/)?.[0];

    return parsedCount ? Number(parsedCount) : 0;
  }
}