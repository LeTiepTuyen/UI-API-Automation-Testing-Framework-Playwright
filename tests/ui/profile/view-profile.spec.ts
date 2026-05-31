import { test, expect } from '../../../fixtures/custome-fixture';
import { JsonHelper } from '../../../utils/json';

const user = JsonHelper.getUserInfo('valid_account');

test.describe('UI | Photographer profile page', () => {
  test('displays photographer profile for a valid account', async ({ page, loginWorkflow, homePage, profilePage, likePage: illustrationPage, collectionPage }) => {
    await loginWorkflow.login(user.email, user.password);
    await homePage.clickUserAvatarIcon();
    await homePage.clickViewProfileButton();

    await profilePage.avatar.waitForElementToBeVisible();

    await expect.soft(page).toHaveURL(/\/@/);
    await expect.soft(profilePage.avatar.getElement()).toBeVisible();
    await expect.soft(profilePage.editProfileButton.getElement()).toBeVisible();

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