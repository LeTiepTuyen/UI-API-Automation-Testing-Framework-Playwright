import { APIUtils } from '../core/api/api';
import { UPDATE_ME_PROFILE_PATH } from '../constants/api-endpoints';
import { UpdateUserProfileRequestData } from '../data-object/request/update-user-profile-request-data';
import { getApiUrl } from '../utils/api-url';

export class UsersService {
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
}
