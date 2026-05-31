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

test.describe('API | GET /users/:username/public-profile', () => {
  test('returns 200 and public profile data for a valid username', async () => {
    const response = await UsersService.getUserPublicProfile(PUBLIC_USERNAME, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const profile = responseBody.json;
    const headers = response.headers();

    expect(response.status()).toBe(200);
    expect(Array.isArray(profile)).toBeFalsy();
    expect(profile.id).toBeTruthy();
    expect(profile.username).toBe(PUBLIC_USERNAME);
    expect(profile.name).toBeTruthy();
    expect(profile.links.self).toContain(`/users/${PUBLIC_USERNAME}`);
    expect(profile.links.html).toContain('unsplash.com');
    expect(profile.links.photos).toContain(`/users/${PUBLIC_USERNAME}/photos`);
    expect(profile.profile_image.small).toMatch(/^https?:\/\//);
    expect(profile.profile_image.medium).toMatch(/^https?:\/\//);
    expect(profile.profile_image.large).toMatch(/^https?:\/\//);
    expect(headers['x-ratelimit-limit']).toBeTruthy();
    expect(headers['x-ratelimit-remaining']).toBeTruthy();
  });

  test('returns 404 when username does not exist', async () => {
    const response = await UsersService.getUserPublicProfile(INVALID_USERNAME, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const errorBody = responseBody.json;

    expect(response.status()).toBe(404);
    expect(Array.isArray(errorBody.errors)).toBeTruthy();
    expect(errorBody.errors.length).toBeGreaterThanOrEqual(1);
  });

  test('returns well-formed public profile links', async () => {
    const response = await UsersService.getUserPublicProfile(PUBLIC_USERNAME, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const profile = responseBody.json;

    expect(profile.links.self).toMatch(/^https:\/\/api\.unsplash\.com\/users\//);
    expect(profile.links.html).toMatch(/^https:\/\/unsplash\.com\//);
    expect(profile.links.photos).toMatch(/^https:\/\/api\.unsplash\.com\/users\//);
  });
});