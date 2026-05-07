import { LoginPage } from '../page-object/login-page';
import { HomePage } from '../page-object/home-page';
import { BrowserUtils } from '../core/browser/browser-utils';

export class LoginWorkflow {
  private loginPage: LoginPage;
  private homePage: HomePage;

  constructor() {
    this.loginPage = new LoginPage();
    this.homePage = new HomePage();
  }

  async login(email: string, password: string): Promise<void> {
    await BrowserUtils.navigate('/login');
    await this.loginPage.login(email, password);
    await this.homePage.waitForAvatarImageLoaded();
  }
}
