import { Element } from '../core/element/element';

export class CollectionPage {
  collectionsCount: Element;
  collectionItemsCount: Element;

  constructor() {
    this.collectionsCount = new Element("//a[contains(.,'Collections')]/span");
    this.collectionItemsCount = new Element("xpath=//div[contains(@data-testid,'collection-feed-card')]");
  }

  async getCollectionsCountNumber(): Promise<number> {
    const collectionCountNumber = await this.collectionsCount.getText();
    return parseInt(collectionCountNumber, 10);
  }

  async getCollectionItemsListCount(): Promise<number> {
    await this.collectionItemsCount.waitForAnyElementToBeVisible();
    return await this.collectionItemsCount.getElement().count();
  }
}
