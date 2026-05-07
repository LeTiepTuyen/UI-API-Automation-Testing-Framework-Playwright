import { Element } from '../core/element/element';

export class LikePage {
  likesCount: Element;
  likedPhotoItems: Element;

  constructor() {
    this.likesCount = new Element("//a[contains(.,'Likes')]/span");
    this.likedPhotoItems = new Element("//figure[@itemscope]");
  }

  async getLikesCountNumber(): Promise<number> {
    const LikedCountNumber = await this.likesCount.getText();
    return parseInt(LikedCountNumber, 10);
  }

  async getLikedPhotosCount(): Promise<number> {
    await this.likedPhotoItems.waitForAnyElementToBeVisible();
    return await this.likedPhotoItems.getElement().count();
  }
}
