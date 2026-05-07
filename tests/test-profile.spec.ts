import { test, expect } from '../fixtures/custome-fixture';
import { JsonHelper } from '../utils/json';

const user = JsonHelper.getUserInfo('valid_account');

test.describe('Scenario 1: View photographer profile', () => {
  test('View photographer profile with valid account', async ({ loginWorkflow, homePage, profilePage, likePage: illustrationPage, collectionPage }) => {
    await loginWorkflow.login(user.email, user.password);
    await homePage.clickPhotoByNumber(2);
    await homePage.hoverPhotoAvatarIcon();
    await homePage.clickViewProfileButton();

    await expect.soft(profilePage.avatar.getElement()).toBeVisible();
    await expect.soft(profilePage.photographerName.getElement()).toBeVisible();
    await expect.soft(profilePage.emailButton.getElement()).toBeVisible();
    await expect.soft(profilePage.moreActionsButton.getElement()).toBeVisible();
    await expect.soft(profilePage.introduce.getElement()).toBeVisible();

    if (await profilePage.interestTitle.getElement().isVisible()) {
      const interestsCount = await profilePage.interestsList.getElement().count();
      await expect.soft(interestsCount).toBeGreaterThanOrEqual(1);
    }

    const candidateTabNames = ['Photos', 'Illustrations', 'Collections'];
    const availableTabs: string[] = [];

    for (const tabName of candidateTabNames) {
      const tabLocator = profilePage.getSubNavTab(tabName).getElement().first();
      const isTabVisible = await tabLocator.isVisible();
      if (isTabVisible) {
        availableTabs.push(tabName);
      }
    }

    await expect.soft(availableTabs.length).toBeGreaterThanOrEqual(1);

    for (const tabName of availableTabs) {
      const tabLocator = profilePage.getSubNavTab(tabName).getElement().first();
      const numberText = await profilePage.getSubNavTabNumber(tabName).getElement().first().textContent();
      const numberOfItems = Number((numberText ?? '').replace(/[^\d]/g, ''));

      if (numberOfItems > 0) {
        if (tabName !== 'Photos') {
          await tabLocator.click();
        }

        let itemsCount = 0;
        if (tabName === 'Photos') {
          itemsCount = await profilePage.getPhotosListCount();
        } else if (tabName === 'Illustrations') {
          itemsCount = await illustrationPage.getLikedPhotosCount();
        } else if (tabName === 'Collections') {
          itemsCount = await collectionPage.getCollectionItemsListCount();
        }

        await expect.soft(itemsCount).toBeGreaterThanOrEqual(1);
      }
    }
  
  });
});
