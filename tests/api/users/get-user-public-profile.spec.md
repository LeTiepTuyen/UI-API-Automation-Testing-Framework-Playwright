# GET /users/:username - Public Profile Scenarios

## Scenario 1: Verify a valid username returns the public profile

- **Title**: Verify GET /users/:username returns the public profile for a valid username
- **Pre-conditions**: A valid public Unsplash username is available. The request uses Client-ID authentication.
- **Step Actions**:
  1. Send a `GET /users/:username` request for a known public username.
  2. Capture the status code, response body, and response headers.
- **Expected Results**:
  - The response status is `200 OK`.
  - The response body is an object, not an array.
  - The response includes public profile fields such as `id`, `username`, `name`, `links`, and `profile_image`.
  - The response does not include private current-user-only data.
- **Test Data**: A stable public username; `Authorization: Client-ID <access-key>` or `client_id` query parameter.
- **Priority**: High
- **Test Type**: API, positive, response-structure verification

## Scenario 2: Verify an unknown username returns not found

- **Title**: Verify GET /users/:username returns 404 for an invalid username
- **Pre-conditions**: Public authentication is available.
- **Step Actions**:
  1. Send a `GET /users/:username` request using a username that does not exist.
  2. Capture the status code and error payload.
- **Expected Results**:
  - The response status is `404 Not Found`.
  - The response body contains an `errors` array.
  - No public profile payload is returned.
- **Test Data**: `not-a-real-user-12345`
- **Priority**: Medium
- **Test Type**: API, negative, validation

## Scenario 3: Verify response links are well formed

- **Title**: Verify GET /users/:username returns valid link relations in the public profile response
- **Pre-conditions**: A valid public username is available.
- **Step Actions**:
  1. Send a `GET /users/:username` request for a known public username.
  2. Inspect the `links` object and any profile image links in the response.
- **Expected Results**:
  - The `links` object contains expected relations such as `self`, `html`, and `photos`.
  - The returned links are non-empty and formatted as valid URLs.
- **Test Data**: A stable public username.
- **Priority**: Medium
- **Test Type**: API, positive, response integrity
