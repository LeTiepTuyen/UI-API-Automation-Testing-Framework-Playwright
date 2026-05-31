import { test, expect } from '../../../fixtures/custome-fixture';
import { JsonHelper } from '../../../utils/json';
import { BrowserUtils } from '../../../core/browser/browser-utils';

const user = JsonHelper.getUserInfo('valid_account');

test.describe('UI | Bookmarked photos section', () => {
  test('displays bookmarked photos in the Bookmarks section', async ({ loginWorkflow, homePage, bookmarkPage }) => {
    await loginWorkflow.login(user.email, user.password);
    await bookmarkPage.clickBookmarksSidebarLink();

    await BrowserUtils.navigate('/');

    await homePage.clickPhotoByNumber(1);
    await bookmarkPage.clickBookmarkToggleButton();

    await bookmarkPage.clickBookmarksSidebarLink();

    const bookmarkedCount = await bookmarkPage.getBookmarkedPhotosCount();

    expect(bookmarkedCount).toBeGreaterThan(0);
  });
});