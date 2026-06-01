# Test Data and Configuration Source Note

## Purpose

This source note summarizes repository evidence for test data, constants, environment configuration, and helper utilities.

## Environment Configuration Evidence

`playwright.config.ts` loads environment variables from `config/.env` through `dotenv`. It uses:

- `process.env.BASE_URL` for browser navigation base URL.

`utils/api-url.ts` constructs API URLs using:

- `process.env.API_BASE_URL`.

`api-service/users-service.ts` also references:

- `process.env.UNSPLASH_ACCESS_KEY`
- `process.env.UNSPLASH_CLIENT_ID`

These environment variables support UI base URL configuration and public Unsplash API authorization configuration. The exact runtime values must not be included in thesis content.

## Static Test Data Evidence

`constants/file-paths.ts` defines `USER_INFO_DATA_PATH` as `test-data/user-info.json`. `utils/json.ts` uses this constant to read user data with `JsonHelper.getUserInfo()`.

The representative UI and API tests both use:

- `JsonHelper.getUserInfo('valid_account')`

This indicates that static account data is centralized in `test-data/user-info.json`.

## Constants Evidence

`constants/api-endpoints.ts` centralizes endpoint paths for:

- the current user profile update endpoint;
- random photos;
- liking/unliking photos;
- public user profile;
- user photos;
- user collections;
- user statistics.

The service layer imports these constants instead of defining endpoint path strings directly in API tests.

## DTO and Model Evidence

The inspected update-profile UI test imports `UpdateUserProfileRequestData` from `data-object/request/update-user-profile-request-data.ts`. This request object is used in `test.afterEach()` to reset the username through `UsersService.updateCurrentUserProfile()`.

The repository also contains response models such as `data-object/response/photo-response-data.ts`.

## Evidence Gaps

- The presence of test data does not prove that credentials are valid.
- Runtime configuration values are not visible and should not be exposed.
- Claims about environment portability require setup and execution evidence.
- Cleanup effectiveness requires execution evidence.
