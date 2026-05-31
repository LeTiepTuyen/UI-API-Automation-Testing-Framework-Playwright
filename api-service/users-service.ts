import { APIUtils } from '../core/api/api';
import {
  GET_USER_COLLECTIONS_PATH,
  GET_USER_PHOTOS_PATH,
  GET_USER_PUBLIC_PROFILE_PATH,
  GET_USER_STATISTICS_PATH,
  UPDATE_ME_PROFILE_PATH,
} from '../constants/api-endpoints';
import { UpdateUserProfileRequestData } from '../data-object/request/update-user-profile-request-data';
import { getApiUrl } from '../utils/api-url';
import { APIResponse } from 'playwright';

type PublicApiHeaders = Record<string, string>;

type UserPhotosQueryParams = {
  page?: number;
  per_page?: number;
  order_by?: string;
  stats?: boolean;
  resolution?: string;
  quantity?: number;
  orientation?: string;
};

type UserCollectionsQueryParams = {
  page?: number;
  per_page?: number;
};

type UserStatisticsQueryParams = {
  resolution?: string;
  quantity?: number;
};

export class UsersService {
  private static getPublicReadHeaders(accessToken?: string): PublicApiHeaders {
    if (accessToken) {
      return {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      };
    }

    const accessKey = (globalThis as any).process?.env?.UNSPLASH_ACCESS_KEY ?? (globalThis as any).process?.env?.UNSPLASH_CLIENT_ID;

    if (!accessKey) {
      throw new Error('Missing UNSPLASH_ACCESS_KEY or UNSPLASH_CLIENT_ID environment variable for public Unsplash API requests.');
    }

    return {
      'Authorization': `Client-ID ${accessKey}`,
      'Content-Type': 'application/json',
    };
  }

  static async updateCurrentUserProfile(
    data: UpdateUserProfileRequestData,
    accessToken: string
  ) {
    return await APIUtils.put(getApiUrl(UPDATE_ME_PROFILE_PATH), {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data,
    });
  }

  static async getUserPublicProfile(username: string, accessToken?: string): Promise<APIResponse> {
    return await APIUtils.get(getApiUrl(GET_USER_PUBLIC_PROFILE_PATH(username)), {
      headers: this.getPublicReadHeaders(accessToken),
    });
  }

  static async listUserPhotos(username: string, params?: UserPhotosQueryParams, accessToken?: string): Promise<APIResponse> {
    return await APIUtils.get(getApiUrl(GET_USER_PHOTOS_PATH(username)), {
      headers: this.getPublicReadHeaders(accessToken),
      params,
    });
  }

  static async listUserCollections(username: string, params?: UserCollectionsQueryParams, accessToken?: string): Promise<APIResponse> {
    return await APIUtils.get(getApiUrl(GET_USER_COLLECTIONS_PATH(username)), {
      headers: this.getPublicReadHeaders(accessToken),
      params,
    });
  }

  static async getUserStatistics(username: string, params?: UserStatisticsQueryParams, accessToken?: string): Promise<APIResponse> {
    return await APIUtils.get(getApiUrl(GET_USER_STATISTICS_PATH(username)), {
      headers: this.getPublicReadHeaders(accessToken),
      params,
    });
  }
}
