import { Element, LocatorType } from '../core/element/element';

export class LoginPage {
  emailInput: Element;
  passwordInput: Element;
  loginButton: Element;

  constructor() {
    this.emailInput = new Element("xpath=//input[@name='email']");
    this.passwordInput = new Element("xpath=//input[@name='password']");
    this.loginButton = new Element("xpath=//button[@value='Login']");
  }

  async login(email: string, password: string) {
    await this.emailInput.fillText(email);
    await this.passwordInput.fillText(password);
    await this.loginButton.click();
  }
}
