import { test, expect } from '../fixtures/custome-fixture';
import { JsonHelper } from '../utils/json';
import { PhotosService } from '../api-service/photos-service';
import { BrowserUtils } from '../core/browser/browser-utils';

const user = JsonHelper.getUserInfo('valid_account');
const accessToken = user.accessToken!;
let likedPhotoIds: string[] = [];

test.describe('Scenario 3: List of liked photos', () => {
  test('Display 3 liked photos in the Likes section', async ({ loginWorkflow, likePage }) => {
    await loginWorkflow.login(user.email, user.password);
    const randomPhotos = await PhotosService.getRandomPhotos(3, accessToken);
    const randomPhotosArr = Array.isArray(randomPhotos) ? randomPhotos : [randomPhotos];
    likedPhotoIds = randomPhotosArr.map(photo => photo.id);

    for (const photoId of likedPhotoIds) {
      await PhotosService.likePhoto(photoId, accessToken);
    }

    await BrowserUtils.navigate(`/${user.username}/likes`);

    const likesCount = await likePage.getLikesCountNumber();
    const uiLikedCount = await likePage.getLikedPhotosCount();

    expect.soft(likesCount).toBeGreaterThanOrEqual(3);
    expect.soft(uiLikedCount).toBeGreaterThanOrEqual(3);
  });
});

test.afterEach(async () => {
  for (const photoId of likedPhotoIds) {
    await PhotosService.unlikePhoto(photoId, accessToken);
  }
  likedPhotoIds = [];
});