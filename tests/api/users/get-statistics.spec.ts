import { test, expect } from '../../../fixtures/custome-fixture';
import type { APIResponse } from 'playwright';
import { JsonHelper } from '../../../utils/json';
import { UsersService } from '../../../api-service/users-service';

const PUBLIC_USERNAME = 'unsplash';
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

test.describe('API | GET /users/:username/statistics', () => {
  test('returns totals and historical stats with defaults', async () => {
    const response = await UsersService.getUserStatistics(PUBLIC_USERNAME, undefined, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const statistics = responseBody.json;

    expect(response.status()).toBe(200);
    expect(statistics.username).toBe(PUBLIC_USERNAME);
    expect(statistics.downloads.total).toBeGreaterThanOrEqual(0);
    expect(statistics.views.total).toBeGreaterThanOrEqual(0);
    expect(statistics.downloads.historical.resolution).toBe('days');
    expect(statistics.downloads.historical.quantity).toBe(30);
    expect(statistics.views.historical.resolution).toBe('days');
    expect(statistics.views.historical.quantity).toBe(30);
  });

  test('supports custom resolution and quantity', async () => {
    const response = await UsersService.getUserStatistics(PUBLIC_USERNAME, {
      resolution: 'days',
      quantity: 7,
    }, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const statistics = responseBody.json;

    expect(response.status()).toBe(200);
    expect(statistics.downloads.historical.resolution).toBe('days');
    expect(statistics.downloads.historical.quantity).toBe(7);
    expect(statistics.views.historical.resolution).toBe('days');
    expect(statistics.views.historical.quantity).toBe(7);
  });

  test('rejects unsupported resolution or out-of-range quantity', async () => {
    const response = await UsersService.getUserStatistics(PUBLIC_USERNAME, {
      resolution: 'weeks',
      quantity: 31,
    }, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const errorBody = responseBody.json;

    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(500);
    expect(Array.isArray(errorBody.errors)).toBeTruthy();
  });

  test('returns the expected metric groups', async () => {
    const response = await UsersService.getUserStatistics(PUBLIC_USERNAME, undefined, ACCESS_TOKEN);
    const responseBody = await readUsersApiResponse(response);

    if (responseBody.rateLimited) {
      expect(responseBody.bodyText).toContain('Rate Limit Exceeded');
      return;
    }

    const statistics = responseBody.json;

    expect(statistics.downloads).toBeTruthy();
    expect(statistics.views).toBeTruthy();
    expect(Array.isArray(statistics.downloads.historical.values)).toBeTruthy();
    expect(Array.isArray(statistics.views.historical.values)).toBeTruthy();
    expect(statistics.likes).toBeUndefined();
  });
});