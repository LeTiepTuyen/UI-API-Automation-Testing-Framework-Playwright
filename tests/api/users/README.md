# Users API Spec Pack

This folder contains the automation-ready API test scenario pack for the Unsplash Users API.

## Scope

- `GET /users/:username` - Get a user's public profile
- `GET /users/:username/photos` - List a user's photos
- `GET /users/:username/collections` - List a user's collections
- `GET /users/:username/statistics` - Get a user's statistics

## Shared Assumptions

- These endpoints are public read endpoints.
- Future automation should use Client-ID authentication for public reads.
- Future implementation should follow the current service-layer pattern in `api-service/` and `core/api/`.
- The expected target folder for generated API tests is `tests/api/users/`.

## Design Principles

- Keep scenarios automation-friendly and stable.
- Prefer response-structure verification over brittle full-payload comparisons.
- Validate pagination and optional query parameters where the endpoint supports them.
- Include negative cases only where the API documentation clearly supports them.

## Suggested Execution Order

1. Public profile scenarios
2. User photos scenarios
3. User collections scenarios
4. User statistics scenarios
