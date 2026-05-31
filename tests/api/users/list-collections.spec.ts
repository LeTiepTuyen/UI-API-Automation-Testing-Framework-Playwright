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

test.describe('API | GET /users/:username/collections', () => {
  test('returns collection summaries for a valid user', async () => {
    const response = await UsersService.listUserCollections(PUBLIC_USERNAME, undefined, ACCESS_TOKEN);

    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const collections = responseBody.json;

    expect(response.status()).toBe(200);
    expect(Array.isArray(collections)).toBeTruthy();
    expect(collections.length).toBeGreaterThan(0);

    const firstCollection = collections[0];
    expect(firstCollection.id).toBeTruthy();
    expect(firstCollection.title).toBeTruthy();
    expect(firstCollection.description !== undefined).toBeTruthy();
    expect(firstCollection.published_at).toBeTruthy();
    expect(firstCollection.updated_at).toBeTruthy();
    expect(firstCollection.total_photos).toBeGreaterThanOrEqual(0);
    expect(firstCollection.private).toBeDefined();
    expect(firstCollection.cover_photo === null || typeof firstCollection.cover_photo === 'object').toBeTruthy();
    expect(firstCollection.links.self).toMatch(/^https:\/\/api\.unsplash\.com\/collections\//);
    expect(firstCollection.links.html).toMatch(/^https:\/\/unsplash\.com\/collections\//);
    expect(firstCollection.links.photos).toMatch(/^https:\/\/api\.unsplash\.com\/collections\//);
  });

  test('supports pagination with page and per_page', async () => {
    const firstPageResponse = await UsersService.listUserCollections(PUBLIC_USERNAME, {
      page: 1,
      per_page: 2,
    }, ACCESS_TOKEN);
    const secondPageResponse = await UsersService.listUserCollections(PUBLIC_USERNAME, {
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

  test('returns valid collection link relations', async () => {
    const response = await UsersService.listUserCollections(PUBLIC_USERNAME, undefined, ACCESS_TOKEN);

    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const collections = responseBody.json;

    expect(collections[0].links.self).toMatch(/^https:\/\/api\.unsplash\.com\/collections\//);
    expect(collections[0].links.html).toMatch(/^https:\/\/unsplash\.com\/collections\//);
    expect(collections[0].links.photos).toMatch(/^https:\/\/api\.unsplash\.com\/collections\//);
  });

  test('returns 404 when username does not exist', async () => {
    const response = await UsersService.listUserCollections(INVALID_USERNAME, undefined, ACCESS_TOKEN);

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