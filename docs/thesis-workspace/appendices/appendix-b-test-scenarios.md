# Appendix B: Test Scenario Matrix

This appendix maps the implemented UI and API scenarios to their automated test specifications. The matrix is based on the `.ts` test files included in the verified 3 June 2026 full-suite execution evidence. It does not include scenario-design Markdown notes or future scenario candidates that were not part of the verified executable suite.

## B.1 UI Scenario Matrix

| ID | Scenario | Source specification | Preconditions | Main automated actions | Main expected evidence |
|---|---|---|---|---|---|
| UI-01 | View authenticated photographer profile | `tests/ui/profile/view-profile.spec.ts` | A valid account exists in local test data; browser base URL is configured. | Log in through `LoginWorkflow`, open the profile page, verify avatar/edit-profile visibility, inspect available profile tabs, and check that non-empty tabs render at least one item. | Profile URL matches an authenticated profile route; avatar and edit profile controls are visible; at least one profile tab is available; non-empty tab content is visible. |
| UI-02 | Update photographer username and verify profile full name | `tests/ui/profile/update-profile.spec.ts` | A valid account and access token exist in local test data; API cleanup is available. | Log in, open profile editing, generate a temporary username, submit the profile update, navigate to the updated profile URL, and compare the visible profile full name with account form values. | Success message is visible; updated profile route loads; displayed full name matches the first-name and last-name values from the account form. |
| UI-03 | Display bookmarked photos in Bookmarks section | `tests/ui/profile/bookmarked-photos.spec.ts` | A valid account exists in local test data; the UI can access the Bookmarks section. | Log in, open Bookmarks, navigate home, open the first photo, toggle bookmark state, return to Bookmarks, and count bookmarked photos. | The Bookmarks section contains more than zero bookmarked photos after the scenario actions. |

## B.2 API Scenario Matrix

| ID | Scenario group | Source specification | Test count in verified run | Main checks |
|---|---|---|---:|---|
| API-01 | Public user profile | `tests/api/users/get-public-profile.spec.ts` | 3 | Valid public-profile response for `unsplash`; invalid username returns `404`; profile links use expected API and web URL patterns; rate-limit text is handled if returned by the live API. |
| API-02 | User statistics | `tests/api/users/get-statistics.spec.ts` | 4 | Default statistics include username, downloads, and views; custom resolution and quantity are accepted; unsupported parameters produce a client-side error response; expected metric groups are present or absent as implemented. |
| API-03 | User collections | `tests/api/users/list-collections.spec.ts` | 4 | Valid user returns collection summaries; pagination with `page` and `per_page` is supported; collection links use expected API and web URL patterns; invalid username returns `404`; rate-limit text is handled if returned. |
| API-04 | User photos | `tests/api/users/list-photos.spec.ts` | 4 | Default photo list shape is validated; pagination is supported; statistics can be included with query parameters; invalid username returns `404`; rate-limit text is handled if returned. |

## B.3 Verified Suite Coverage Summary

| Type | Specification files | Verified tests |
|---|---:|---:|
| UI | 3 | 3 |
| API | 4 | 15 |
| Total | 7 | 18 |

The verified scenario matrix demonstrates selected regression coverage for Unsplash UI and public API behavior. It does not claim complete functional coverage of Unsplash, non-functional coverage, or long-term reliability across repeated executions.
