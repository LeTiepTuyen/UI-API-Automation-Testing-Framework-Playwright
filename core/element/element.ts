import { expect, Locator, Page } from '@playwright/test';
import { BrowserManagement } from '../browser/browser-management';

export enum LocatorType {
  ROLE = 0,
  TEXT = 1,
  LABEL = 2,
  PLACEHOLDER = 3,
  ALT_TEXT = 4,
  TITLE = 5,
  TEST_ID = 6,
  DEFAULT = 7,
}

interface ElementOptions {
  [key: string]: any;
}

export class Element {
  locator: any;
  locatorType: LocatorType;
  options: ElementOptions;

  constructor(locator: string, locatorType: LocatorType = LocatorType.DEFAULT, options: ElementOptions = {}) {
    this.locator = locator;
    this.locatorType = locatorType;
    this.options = options;
  }

  getElement() {
    switch (this.locatorType) {
      case LocatorType.ROLE:
        return BrowserManagement.getCurrentPage().getByRole(this.locator, this.options);
      case LocatorType.TEXT:
        return BrowserManagement.getCurrentPage().getByText(this.locator, this.options);
      case LocatorType.LABEL:
        return BrowserManagement.getCurrentPage().getByLabel(this.locator, this.options);
      case LocatorType.PLACEHOLDER:
        return BrowserManagement.getCurrentPage().getByPlaceholder(this.locator, this.options);
      case LocatorType.ALT_TEXT:
        return BrowserManagement.getCurrentPage().getByAltText(this.locator, this.options);
      case LocatorType.TITLE:
        return BrowserManagement.getCurrentPage().getByTitle(this.locator, this.options);
      case LocatorType.TEST_ID:
        return BrowserManagement.getCurrentPage().getByTestId(this.locator);
      default:
        return BrowserManagement.getCurrentPage().locator(this.locator);
    }
  }

  async click(options?: any) {
    return await this.getElement().click(options);
  }

   async doubleClick(options?: any) {
    return await this.getElement().dblclick(options);
  }

  async clickMultipleTimes(clickCount: number) {
    return await this.getElement().click({
      clickCount: clickCount,
    });
  }

  async rightClick() {
    return await this.getElement().click({
      button: 'right',
    });
  }

  async middleClick() {
    return await this.getElement().click({
      button: 'middle',
    });
  }

  async holdKeyAndClick(options: any) {
    return await this.getElement().click(options);
  }

  async clickAndHold() {
    return await this.getElement().click({ delay: 1000 });
  }

  async focus() {
    return await this.getElement().focus();
  }

  async hover() {
    await this.getElement().hover();
  }

  async type(text: string) {
    await this.getElement().pressSequentially(text);
  }

  async fillText(text: string) {
    await this.getElement().fill(text);
  }

  async pressKey(key: string) {
    return await this.getElement().press(key);
  }

  async waitForElement(options: any) {
    await this.getElement().waitFor(options);
  }

  async waitForElementToBeVisible(timeout = 10000) {
    await this.waitForElement({ state: 'visible', timeout: timeout });
  }

  async waitForElementToBeAttached(timeout = 10000) {
    await this.waitForElement({ state: 'attached', timeout: timeout });
  }

  async waitForElementToBeHidden(timeout = 5000) {
    await this.waitForElement({ state: 'hidden', timeout: timeout });
  }

  async isEnable(): Promise<boolean> {
    return await this.getElement().isEnabled();
  }

  async isVisible(): Promise<boolean> {
    return await this.getElement().isVisible();
  }

  async getText() {
    const elementText = await this.getElement().innerText();
    return elementText;
  }

  async getInputValue() {
    const elementText = await this.getElement().inputValue();
    return elementText;
  }

  async getAttribute(attribute: string): Promise<string | null> {
    return await this.getElement().getAttribute(attribute);
  }

  async getNumberOfElements() {
    return await this.getElement().count();
  }

  async verifyElementIsVisible() {
    await expect(this.getElement()).toBeVisible();
  }


  async waitForAnyElementToBeVisible(timeout = 5000) {
    await this.getElement().first().waitFor({ state: 'visible', timeout });
  }
}
