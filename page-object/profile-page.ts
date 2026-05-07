import { Element } from '../core/element/element';

export class ProfilePage {
  avatar: Element;
  photographerName: Element;
  profileFullName: Element;
  emailButton: Element;
  moreActionsButton: Element;
  introduce: Element;
  interestTitle: Element;
  interestsList: Element;
  getPhotoItemsCount: Element;
  editProfileButton: Element;

  constructor() {
    this.avatar = new Element("xpath=//div[@data-testid]//img[contains(@alt,'Avatar')]");
    this.photographerName = new Element("xpath=//button[contains(@aria-label,'Actions')]/parent::div/preceding-sibling::div");
    this.profileFullName = new Element("xpath=//a[contains(.,'Edit profile')]/parent::div/preceding-sibling::div");
    this.emailButton = new Element("xpath=//button[contains(@title,'Message')]");
    this.moreActionsButton = new Element("xpath=//button[.='More Actions']");
    this.introduce = new Element("xpath=//button[contains(@aria-label,'Actions')]/parent::div/preceding-sibling::div/parent::div/following-sibling::div/div[1]");
    this.interestTitle = new Element("xpath=//div[.='Interests']");
    this.interestsList = new Element("xpath=//div[.='Interests']/following-sibling::div//a");
    this.getPhotoItemsCount = new Element("xpath=//figure[@itemscope]");
    this.editProfileButton = new Element("xpath=//a[contains(.,'Edit profile')]");
  }

  getSubNavTab(tabName: string): Element {
    return new Element(`//a[contains(.,'${tabName}')]`); 
  }
  getSubNavTabNumber(tabName: string): Element {
    return new Element(`//a[contains(.,'${tabName}')]/span`);
  }

  async clickEditProfileButton() {
    await this.editProfileButton.click();
  }

  async getPhotographerName(): Promise<string> {
    return this.photographerName.getText();
  }

  async getProfileFullName(): Promise<string> {
    return this.profileFullName.getText();
  }

  async getPhotosListCount(): Promise<number> {
    await this.getPhotoItemsCount.waitForAnyElementToBeVisible();
    return await this.getPhotoItemsCount.getElement().count();
  }

  
}
