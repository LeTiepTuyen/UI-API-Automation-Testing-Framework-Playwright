import { test, expect } from '../fixtures/custome-fixture';
import { JsonHelper } from '../utils/json';
import { BrowserUtils } from '../core/browser/browser-utils';
import { UsersService } from '../api-service/users-service';
import { UpdateUserProfileRequestData } from '../data-object/request/update-user-profile-request-data';

const user = JsonHelper.getUserInfo('valid_account');
const accessToken = user.accessToken!;

test.describe('Scenario 2: Update the user in the Profile page', () => {
  test('Update username and verify profile full name', async ({ loginWorkflow, homePage, profilePage, accountPage }) => {
    await loginWorkflow.login(user.email, user.password);

    await homePage.clickUserAvatarIcon();
    await homePage.clickViewProfileButton();
    await profilePage.avatar.waitForElementToBeVisible();
    await profilePage.clickEditProfileButton();
    await accountPage.editTitle.waitForElementToBeVisible();

    const newUsername = `${user.username}_upd${Math.floor(Math.random()*1000)}`;
    await accountPage.fillUsername(newUsername);
    
    const firstName = await accountPage.getFirstName();
    const lastName = await accountPage.getLastName();
    
    await accountPage.clickUpdateAccountButton();
    await accountPage.waitForSuccessMessage();
    await expect.soft(await accountPage.isSuccessMessageVisible()).toBeTruthy();

    await BrowserUtils.navigate(`/@${newUsername}`);
    await profilePage.avatar.waitForElementToBeVisible();

    const profileFullName = await profilePage.getProfileFullName();
    await expect.soft(profileFullName.trim()).toBe(`${firstName} ${lastName}`);
  });
});

test.afterEach(async () => {
  const resetRequest = new UpdateUserProfileRequestData();
  resetRequest.username = user.username;
  await UsersService.updateCurrentUserProfile(resetRequest, accessToken);
});

