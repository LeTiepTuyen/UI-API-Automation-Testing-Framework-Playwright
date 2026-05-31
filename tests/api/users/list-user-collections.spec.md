# GET /users/:username/collections - User Collections Scenarios

## Scenario 1: Verify the default collection summary list is returned

- **Title**: Verify GET /users/:username/collections returns collection summaries for a valid user
- **Pre-conditions**: A public username with collections is available. Public authentication is used.
- **Step Actions**:
  1. Send a `GET /users/:username/collections` request without optional query parameters.
  2. Capture the response body and pagination headers.
- **Expected Results**:
  - The response status is `200 OK`.
  - The response body is an array.
  - Each item includes summary fields such as `id`, `title`, `description`, `published_at`, `updated_at`, `total_photos`, `private`, `cover_photo`, `user`, and `links`.
  - The returned structure is abbreviated rather than a full editable collection payload.
- **Test Data**: A public username with collections; Client-ID authentication.
- **Priority**: High
- **Test Type**: API, positive, response-structure verification

## Scenario 2: Verify pagination works for the collections list

- **Title**: Verify GET /users/:username/collections supports `page` and `per_page`
- **Pre-conditions**: A public username with enough collections to paginate is available.
- **Step Actions**:
  1. Send a `GET /users/:username/collections` request with `page` and `per_page` values.
  2. Repeat the request for at least one additional page.
- **Expected Results**:
  - The response status is `200 OK`.
  - The number of returned items matches `per_page` when sufficient data exists.
  - The returned items differ between pages.
  - Pagination headers or `Link` relations are consistent with the requested page.
- **Test Data**: `page=1`, `page=2`, `per_page=2` or `5`.
- **Priority**: Medium
- **Test Type**: API, positive, pagination

## Scenario 3: Verify the collections links object is valid

- **Title**: Verify GET /users/:username/collections returns valid collection link relations
- **Pre-conditions**: A public username with collections is available.
- **Step Actions**:
  1. Send a `GET /users/:username/collections` request for a known public username.
  2. Inspect the `links` object of the returned collection items.
- **Expected Results**:
  - Each collection item includes a `links` object.
  - The `links` object contains valid relations such as `self`, `html`, and `photos`.
  - Returned links are non-empty and formatted as valid URLs.
- **Test Data**: A stable public username.
- **Priority**: Medium
- **Test Type**: API, positive, response integrity

## Scenario 4: Verify an invalid user returns not found for collections

- **Title**: Verify GET /users/:username/collections returns 404 for an invalid username
- **Pre-conditions**: Public authentication is available.
- **Step Actions**:
  1. Send a `GET /users/:username/collections` request with a username that does not exist.
  2. Capture the response status and error payload.
- **Expected Results**:
  - The response status is `404 Not Found`.
  - The response body contains an `errors` array.
  - No collection list is returned.
- **Test Data**: `not-a-real-user-12345`
- **Priority**: Medium
- **Test Type**: API, negative, validation
