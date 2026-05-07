import { APIUtils } from '../core/api/api';
import { GET_RANDOM_PHOTOS_PATH, LIKE_PHOTO_PATH } from '../constants/api-endpoints';
import { getApiUrl } from '../utils/api-url';
import { PhotoReponseData } from '../data-object/response/photo-response-data';
import { expect } from 'playwright/test';

export class PhotosService {
  static async getRandomPhotos(count: number, accessToken: string): Promise<PhotoReponseData[]> {
    const response = await APIUtils.get(getApiUrl(GET_RANDOM_PHOTOS_PATH), {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      params: { count },
    });
    return await response.json();
  }

  static async likePhoto(photoId: string, accessToken: string) {
    return await APIUtils.post(getApiUrl(LIKE_PHOTO_PATH(photoId)), {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  }

  static async unlikePhoto(photoId: string, accessToken: string) {
    return await APIUtils.delete(getApiUrl(LIKE_PHOTO_PATH(photoId)), {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  }
}
