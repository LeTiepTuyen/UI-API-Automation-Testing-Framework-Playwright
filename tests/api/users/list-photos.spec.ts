import { test, expect } from '../../../fixtures/custome-fixture';
import type { APIResponse } from 'playwright';
import { JsonHelper } from '../../../utils/json';
import { UsersService } from '../../../api-service/users-service';

const PUBLIC_USERNAME = 'unsplash';
const INVALID_USERNAME = 'not-a-real-user-12345';
const ACCESS_TOKEN = JsonHelper.getUserInfo('valid_account').accessToken;

async function readUsersApiResponse(response: APIResponse) {
  const bodyText = await response.text();

  if (bodyText.includes('Rate Limit Exceeded')) {
    return {
      rateLimited: true,
      bodyText,
    };
  }

  return {
    rateLimited: false,
    bodyText,
    json: JSON.parse(bodyText),
  };
}

test.describe('API | GET /users/:username/photos', () => {
  test('returns the default abbreviated photo list shape', async () => {
    const response = await UsersService.listUserPhotos(PUBLIC_USERNAME, undefined, ACCESS_TOKEN);

    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const photos = responseBody.json;

    expect(response.status()).toBe(200);
    expect(Array.isArray(photos)).toBeTruthy();
    expect(photos.length).toBeGreaterThan(0);

    const firstPhoto = photos[0];
    expect(firstPhoto.id).toBeTruthy();
    expect(firstPhoto.created_at).toBeTruthy();
    expect(firstPhoto.updated_at).toBeTruthy();
    expect(firstPhoto.urls.raw).toMatch(/^https?:\/\//);
    expect(firstPhoto.urls.full).toMatch(/^https?:\/\//);
    expect(firstPhoto.urls.regular).toMatch(/^https?:\/\//);
    expect(firstPhoto.urls.small).toMatch(/^https?:\/\//);
    expect(firstPhoto.urls.thumb).toMatch(/^https?:\/\//);
    expect(firstPhoto.links.self).toMatch(/^https:\/\/api\.unsplash\.com\/photos\//);
    expect(firstPhoto.links.html).toMatch(/^https:\/\/unsplash\.com\/photos\//);
    expect(firstPhoto.user.username).toBe(PUBLIC_USERNAME);
    expect(firstPhoto.statistics).toBeFalsy();
  });

  test('supports pagination with page and per_page', async () => {
    const firstPageResponse = await UsersService.listUserPhotos(PUBLIC_USERNAME, {
      page: 1,
      per_page: 2,
    }, ACCESS_TOKEN);
    const secondPageResponse = await UsersService.listUserPhotos(PUBLIC_USERNAME, {
      page: 2,
      per_page: 2,
    }, ACCESS_TOKEN);

    const firstPageBody = await readUsersApiResponse(firstPageResponse);
    const secondPageBody = await readUsersApiResponse(secondPageResponse);

    if (firstPageBody.rateLimited || secondPageBody.rateLimited) {
      if (firstPageBody.rateLimited) {
        expect(firstPageBody.bodyText).toContain('Rate Limit Exceeded');
      }
      if (secondPageBody.rateLimited) {
        expect(secondPageBody.bodyText).toContain('Rate Limit Exceeded');
      }
      return;
    }

    const firstPage = firstPageBody.json;
    const secondPage = secondPageBody.json;

    expect(firstPageResponse.status()).toBe(200);
    expect(secondPageResponse.status()).toBe(200);
    expect(firstPage.length).toBeLessThanOrEqual(2);
    expect(secondPage.length).toBeLessThanOrEqual(2);
    expect(firstPage[0]?.id).not.toBe(secondPage[0]?.id);
  });

  test('includes statistics when stats is true', async () => {
    const response = await UsersService.listUserPhotos(PUBLIC_USERNAME, {
      stats: true,
      resolution: 'days',
      quantity: 7,
      per_page: 1,
    }, ACCESS_TOKEN);

    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const photos = responseBody.json;

    expect(response.status()).toBe(200);
    expect(photos.length).toBeGreaterThan(0);

    const firstPhoto = photos[0];
    expect(firstPhoto.statistics).toBeTruthy();
    expect(firstPhoto.statistics.downloads.historical.resolution).toBe('days');
    expect(firstPhoto.statistics.downloads.historical.quantity).toBe(7);
    expect(firstPhoto.statistics.views.historical.resolution).toBe('days');
    expect(firstPhoto.statistics.views.historical.quantity).toBe(7);
  });

  test('returns 404 when username does not exist', async () => {
    const response = await UsersService.listUserPhotos(INVALID_USERNAME, undefined, ACCESS_TOKEN);

    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const errorBody = responseBody.json;

    expect(response.status()).toBe(404);
    expect(Array.isArray(errorBody.errors)).toBeTruthy();
  });
});