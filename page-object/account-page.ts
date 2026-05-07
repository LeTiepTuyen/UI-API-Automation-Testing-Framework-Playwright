import { Element } from '../core/element/element';

export class AccountPage {
  usernameInput: Element;
  firstNameInput: Element;
  lastNameInput: Element;
  updateAccountButton: Element;
  successMessage: Element;
  editTitle: Element;

  constructor() {
    this.usernameInput = new Element('id=user_username');
    this.firstNameInput = new Element('id=user_first_name');
    this.lastNameInput = new Element('id=user_last_name');
    this.updateAccountButton = new Element("xpath=//div[@class='form']//input[@type='submit']");
    this.successMessage = new Element("xpath=//div[contains(@class,'message') and contains(.,'Account updated!')]");
    this.editTitle = new Element("xpath=//h1[.='Edit profile']");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fillText(username);
  }

  async getUsername(): Promise<string> {
    return this.usernameInput.getInputValue();
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fillText(firstName);
  }

  async getFirstName(): Promise<string> {
    return this.firstNameInput.getInputValue();
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fillText(lastName);
  }

  async getLastName(): Promise<string> {
    return this.lastNameInput.getInputValue();
  }

  async clickUpdateAccountButton() {
    await this.updateAccountButton.click();
  }

  async isSuccessMessageVisible(): Promise<boolean> {
    return this.successMessage.isVisible();
  }

  async waitForSuccessMessage() {
    await this.successMessage.waitForElementToBeVisible();
  }
}
