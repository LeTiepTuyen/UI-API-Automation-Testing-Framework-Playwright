export const USER_INFO_DATA_PATH = 'test-data/user-info.json';
export const UPDATE_ME_PROFILE_PATH = '/me';
export const GET_RANDOM_PHOTOS_PATH = '/photos/random';
export const LIKE_PHOTO_PATH = (photoId: string) => `/photos/${photoId}/like`;
export const GET_USER_PUBLIC_PROFILE_PATH = (username: string) => `/users/${username}`;
export const GET_USER_PHOTOS_PATH = (username: string) => `/users/${username}/photos`;
export const GET_USER_COLLECTIONS_PATH = (username: string) => `/users/${username}/collections`;
export const GET_USER_STATISTICS_PATH = (username: string) => `/users/${username}/statistics`;
