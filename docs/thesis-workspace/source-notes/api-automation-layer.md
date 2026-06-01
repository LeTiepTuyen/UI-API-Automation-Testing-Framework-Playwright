# API Automation Layer Source Note

## Purpose

This source note summarizes evidence for the API automation layer, including representative service and test design.

## API Test Location

API tests are stored under `tests/api/`, with inspected user endpoint tests under `tests/api/users/`. The representative test inspected for this note is `tests/api/users/get-public-profile.spec.ts`.

## API Service Evidence

`api-service/users-service.ts` centralizes Unsplash user endpoint access through `UsersService`. The class provides methods for:

- `updateCurrentUserProfile()`
- `getUserPublicProfile()`
- `listUserPhotos()`
- `listUserCollections()`
- `getUserStatistics()`

Endpoint paths are not hardcoded inside the test file. They are imported from `constants/api-endpoints.ts`, including:

- `GET_USER_PUBLIC_PROFILE_PATH`
- `GET_USER_PHOTOS_PATH`
- `GET_USER_COLLECTIONS_PATH`
- `GET_USER_STATISTICS_PATH`
- `UPDATE_ME_PROFILE_PATH`

API URLs are composed through `utils/api-url.ts`, which appends endpoint paths to `process.env.API_BASE_URL`.

## Core API Utility Evidence

`core/api/api.ts` defines `APIUtils` methods for:

- `get()`
- `post()`
- `put()`
- `delete()`

Each method accepts optional query parameters, headers, and request data. The utility uses `BrowserManagement.getRequest()` to access the Playwright request context.

The same file also includes helper methods for security-header checks and JSON schema validation through Ajv. The existence of these helpers should not be treated as evidence that every API test currently performs schema validation.

## Representative API Scenario

`tests/api/users/get-public-profile.spec.ts` validates the public profile endpoint for:

- a valid username returning status `200` and expected profile fields;
- an invalid username returning status `404` and an error array;
- link fields matching expected URL patterns.

The test reads an access token through `JsonHelper.getUserInfo('valid_account').accessToken`. It includes rate-limit handling by detecting the text `Rate Limit Exceeded` and returning early after asserting that the text is present.

## Authentication Evidence

`UsersService.getPublicReadHeaders()` supports two header strategies:

- `Bearer` token when an access token is supplied.
- `Client-ID` authorization using `UNSPLASH_ACCESS_KEY` or `UNSPLASH_CLIENT_ID` from environment variables when no access token is supplied.

## Evidence Gaps

- Execution evidence is required before claiming that API tests pass.
- API rate-limit behavior is visible in test handling, but actual rate-limit occurrence must be supported by execution evidence.
- Schema validation support exists in `core/api/api.ts`, but schema-validation coverage should not be claimed unless specific tests use it.
