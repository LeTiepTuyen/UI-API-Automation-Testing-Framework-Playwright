# GET /users/:username/photos - User Photos Scenarios

## Scenario 1: Verify the default abbreviated photo list is returned

- **Title**: Verify GET /users/:username/photos returns the default photo list shape
- **Pre-conditions**: A public username with at least one photo is available. Public authentication is used.
- **Step Actions**:
  1. Send a `GET /users/:username/photos` request without optional query parameters.
  2. Capture the response body and pagination headers.
- **Expected Results**:
  - The response status is `200 OK`.
  - The response body is an array.
  - Each item contains the abbreviated photo shape, including `id`, `created_at`, `updated_at`, `urls`, `links`, and `user`.
  - The nested `user` object matches the requested username.
  - No `statistics` object is present when `stats` is not requested.
- **Test Data**: A public username with photos; Client-ID authentication.
- **Priority**: High
- **Test Type**: API, positive, response-structure verification

## Scenario 2: Verify pagination works for the photos list

- **Title**: Verify GET /users/:username/photos supports `page` and `per_page`
- **Pre-conditions**: A public username with enough photos to span multiple pages is available.
- **Step Actions**:
  1. Send a `GET /users/:username/photos` request with `page` and `per_page` values.
  2. Repeat the request for at least one additional page.
- **Expected Results**:
  - The response status is `200 OK`.
  - The number of returned items matches `per_page` when sufficient data exists.
  - The returned items differ between pages.
  - Pagination headers or `Link` relations are consistent with the requested page.
- **Test Data**: `page=1`, `page=2`, `per_page=2` or `5`.
- **Priority**: High
- **Test Type**: API, positive, pagination

## Scenario 3: Verify stats can be included for each photo

- **Title**: Verify GET /users/:username/photos supports `stats=true`
- **Pre-conditions**: A public username with enough photos is available.
- **Step Actions**:
  1. Send a `GET /users/:username/photos` request with `stats=true`.
  2. Inspect the returned photo items.
- **Expected Results**:
  - The response status is `200 OK`.
  - Each photo item includes a `statistics` object.
  - Historical stats metadata is present when `resolution` and `quantity` are supplied.
- **Test Data**: `stats=true`, `resolution=days`, `quantity=7`.
- **Priority**: High
- **Test Type**: API, positive, parameter coverage

## Scenario 4: Verify an invalid user returns not found for photos

- **Title**: Verify GET /users/:username/photos returns 404 for an invalid username
- **Pre-conditions**: Public authentication is available.
- **Step Actions**:
  1. Send a `GET /users/:username/photos` request with a username that does not exist.
  2. Capture the response status and error payload.
- **Expected Results**:
  - The response status is `404 Not Found`.
  - The response body contains an `errors` array.
  - No photo list is returned.
- **Test Data**: `not-a-real-user-12345`
- **Priority**: Medium
- **Test Type**: API, negative, validation
