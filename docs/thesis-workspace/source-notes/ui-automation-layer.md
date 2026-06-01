# UI Automation Layer Source Note

## Purpose

This source note summarizes evidence for the UI automation layer. It is based on actual repository files and does not draft chapter content.

## UI Test Location

UI tests are stored under `tests/ui/`, with inspected profile-related tests under `tests/ui/profile/`. The representative test inspected for this note is `tests/ui/profile/update-profile.spec.ts`.

## Page Object Evidence

The repository contains Page Object classes under `page-object/`. The update-profile test uses these Page Objects through fixture injection:

- `homePage`
- `profilePage`
- `accountPage`
- `loginWorkflow`

Relevant Page Object evidence includes:

- `page-object/home-page.ts` provides actions for opening the user menu and navigating to the profile.
- `page-object/profile-page.ts` provides profile page elements and actions such as `clickEditProfileButton()` and `getProfileFullName()`.
- `page-object/account-page.ts` provides account edit interactions such as username input, first name and last name access, update submission, and success-message checks.

## Representative UI Scenario

`tests/ui/profile/update-profile.spec.ts` performs the following verified sequence:

1. Loads user data through `JsonHelper.getUserInfo('valid_account')`.
2. Logs in through `loginWorkflow.login(user.email, user.password)`.
3. Navigates to the user profile using `homePage` actions.
4. Opens the edit profile page through `profilePage.clickEditProfileButton()`.
5. Generates a temporary username using the existing username and a random numeric suffix.
6. Updates the username through `accountPage.fillUsername(newUsername)`.
7. Submits the form and checks that the success message is visible.
8. Navigates to the updated profile URL with `BrowserUtils.navigate()`.
9. Verifies that the profile full name matches the account first and last name.
10. Resets the username in `test.afterEach()` by calling `UsersService.updateCurrentUserProfile()`.

## Design Evidence

The UI layer demonstrates:

- Test-level use of fixtures rather than direct Page Object construction inside the test.
- Page-level encapsulation of selectors and actions.
- Reuse of a workflow abstraction for login.
- A cleanup mechanism that uses an API service after the UI test.

## Evidence Gaps

- The current note does not prove that the UI test passes; execution evidence is still required.
- The selectors are repository evidence, but selector stability must be evaluated through actual browser execution.
- The test uses account data from `test-data/user-info.json`; thesis content must not expose sensitive values.
