# GET /users/:username/statistics - User Statistics Scenarios

## Scenario 1: Verify the default 30-day statistics response

- **Title**: Verify GET /users/:username/statistics returns totals and historical stats with defaults
- **Pre-conditions**: A public username with accessible statistics is available. Public authentication is used.
- **Step Actions**:
  1. Send a `GET /users/:username/statistics` request without optional parameters.
  2. Capture the response body.
- **Expected Results**:
  - The response status is `200 OK`.
  - The response body is an object containing `username`, `downloads`, `views`, and `likes`.
  - Each metric contains `total` and `historical` data.
  - Historical data uses `resolution=days` and `quantity=30` by default.
- **Test Data**: A public username with statistics; Client-ID authentication.
- **Priority**: High
- **Test Type**: API, positive, response-structure verification

## Scenario 2: Verify custom resolution and quantity are applied

- **Title**: Verify GET /users/:username/statistics applies custom `resolution` and `quantity`
- **Pre-conditions**: A public username with statistics is available.
- **Step Actions**:
  1. Send a `GET /users/:username/statistics` request with `resolution=days` and a valid `quantity` value.
  2. Inspect the `historical` metadata for each metric.
- **Expected Results**:
  - The response status is `200 OK`.
  - The `historical.resolution` value matches the requested resolution.
  - The `historical.quantity` value matches the requested quantity.
  - Totals remain present alongside the historical series.
- **Test Data**: `resolution=days`, `quantity=7` or `14`.
- **Priority**: Medium
- **Test Type**: API, positive, parameter coverage

## Scenario 3: Verify invalid statistics parameters are rejected

- **Title**: Verify GET /users/:username/statistics rejects unsupported `resolution` or out-of-range `quantity`
- **Pre-conditions**: Public authentication is available.
- **Step Actions**:
  1. Send a `GET /users/:username/statistics` request with an unsupported resolution or a quantity outside the documented 1 to 30 range.
  2. Capture the response status and error payload.
- **Expected Results**:
  - The API returns a validation failure status such as `400 Bad Request`.
  - The response body contains an `errors` array.
  - The request is not treated as a valid statistics query.
- **Test Data**: `resolution=weeks`, `quantity=0`, or `quantity=31`.
- **Priority**: Medium
- **Test Type**: API, negative, validation

## Scenario 4: Verify statistics response includes all metric groups

- **Title**: Verify GET /users/:username/statistics returns downloads, views, and likes groups
- **Pre-conditions**: A public username with accessible statistics is available.
- **Step Actions**:
  1. Send a `GET /users/:username/statistics` request for a known public username.
  2. Inspect the response keys.
- **Expected Results**:
  - The response includes `downloads`, `views`, and `likes` groups.
  - Each group contains both a total count and a historical breakdown.
  - The response structure is suitable for DTO mapping.
- **Test Data**: A stable public username.
- **Priority**: Medium
- **Test Type**: API, positive, response integrity
