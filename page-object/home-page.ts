import { Element } from '../core/element/element';
import { BrowserManagement } from '../core/browser/browser-management';

export class HomePage {
  photoAvatarIcon: Element;
  personalMenuButton: Element;
  viewProfileButton: Element;
  personalPopup: Element;
  personalPopupLoadingSpinner: Element;
  avatarImgElement: Element;

  constructor() {
    this.photoAvatarIcon = new Element("xpath=//div[@data-testid]//header//img/parent::div");
    this.personalMenuButton = new Element("xpath=//img[contains(@alt,'Avatar of')]/ancestor::button");
    this.viewProfileButton = new Element("xpath=//*[.='View profile']");
    this.personalPopup = new Element("xpath=//div[@data-floating-ui-focusable]");
    this.personalPopupLoadingSpinner = new Element("xpath=//div[@data-floating-ui-focusable]//div[contains(@style,'thickness')]");
    this.avatarImgElement = new Element("xpath=//img[contains(@alt,'Avatar of')]");
  }

  getPhotoByNumber(photoNumber: number): Element {
    return new Element(`xpath=//div[@data-testid='masonry-grid-count-three']//figure[@data-masonryposition='${photoNumber}']`);
  }

  getPhotoAuthorLinkByNumber(photoNumber: number): Element {
    return new Element(`xpath=//div[@data-testid='masonry-grid-count-three']//figure[@data-masonryposition='${photoNumber}']//a[contains(@href,'/@')]`);
  }

  getPhotoLinkByNumber(photoNumber: number): Element {
    return new Element(`xpath=//div[@data-testid='masonry-grid-count-three']//figure[@data-masonryposition='${photoNumber}']//a[contains(@href,'/photos/')]`);
  }

  async clickPhotoByNumber(photoNumber: number) {
    await this.getPhotoByNumber(photoNumber).waitForAnyElementToBeVisible();
    await this.getPhotoByNumber(photoNumber).click();
  }

  async clickPhotoAuthorByNumber(photoNumber: number) {
    await this.getPhotoAuthorLinkByNumber(photoNumber).waitForAnyElementToBeVisible();
    await this.getPhotoAuthorLinkByNumber(photoNumber).click();
  }

  async getPhotoHrefByNumber(photoNumber: number): Promise<string | null> {
    return await this.getPhotoLinkByNumber(photoNumber).getAttribute('href');
  }

  async hoverPhotoAvatarIcon() {
    await this.photoAvatarIcon.hover();
    await this.personalPopupLoadingSpinner.waitForElementToBeHidden();
  }

  async clickUserAvatarIcon() {
    await this.personalMenuButton.click({retries: 2, delay: 1000});
  }

  async clickViewProfileButton() {
    await this.viewProfileButton.click({timeout: 10000});
  }

  async waitForAvatarImageLoaded() {
    await this.avatarImgElement.waitForElementToBeVisible();
  }
}
