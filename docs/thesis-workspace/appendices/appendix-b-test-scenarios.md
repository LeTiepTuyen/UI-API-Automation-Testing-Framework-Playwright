# Appendix B: Test Scenario Matrix

This appendix maps the implemented UI and API scenarios to their automated test specifications. The matrix is based on the `.ts` test files included in the verified 3 June 2026 full-suite execution evidence. It does not include scenario-design Markdown notes or future scenario candidates that were not part of the verified executable suite.

## B.1 UI Scenario Matrix

| ID | Scenario | Source specification | Preconditions | Main automated actions | Main expected evidence |
|---|---|---|---|---|---|
| UI-01 | View authenticated photographer profile | `tests/ui/profile/view-profile.spec.ts` | Valid account in local test data; base URL configured. | Log in, open profile, verify avatar and edit-profile controls, inspect tabs, and confirm non-empty tabs render items. | Authenticated profile route loads; avatar and edit controls visible; at least one tab available with visible content. |
| UI-02 | Update photographer username and verify profile full name | `tests/ui/profile/update-profile.spec.ts` | Valid account and access token in local test data; API cleanup available. | Log in, edit profile, set a temporary username, submit the update, open the new profile URL, and compare the full name with form values. | Success message shown; updated route loads; displayed full name matches the form first/last name. |
| UI-03 | Display bookmarked photos in Bookmarks section | `tests/ui/profile/bookmarked-photos.spec.ts` | Valid account in local test data; Bookmarks section reachable. | Log in, open Bookmarks, go home, open the first photo, toggle bookmark, return, and count bookmarks. | Bookmarks section shows more than zero bookmarked photos. |

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
