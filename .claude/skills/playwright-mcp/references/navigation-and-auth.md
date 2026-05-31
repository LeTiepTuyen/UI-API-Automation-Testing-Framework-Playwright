
# Navigation and Authentication Guide for Playwright MCP

Use this reference when the UI scenario depends on login state, route transitions, profile context, or page access sequence.

## Objective

Understand what navigation path and authentication state are required before interacting with the target UI.

This avoids false assumptions such as:
- trying to inspect a page that only exists after login
- trying to automate a button that appears only after hover or route change
- inspecting a page in the wrong user state

---

## Navigation rules

### 1. Identify the real entry point
Before inspecting or automating a flow, determine:
- where the user starts
- what route or page is needed
- whether the target state depends on earlier interaction

### 2. Use the shortest realistic path
When inspecting UI:
- navigate directly if route access is valid and stable
- otherwise, reproduce the necessary path through the UI

Do not overcomplicate navigation when a clean direct route already exists.

### 3. Confirm route-dependent rendering
Some pages load sections asynchronously or conditionally.
Check whether:
- the page shell loads before content
- the component requires scroll or interaction
- a tab or modal must be opened first

---

## Authentication rules

### 1. Confirm whether login is required
For each flow, determine:
- public page vs authenticated page
- user-specific route vs generic route
- read-only access vs action permission

### 2. Reuse existing login support
Before designing login-related automation:
- inspect current `workflow/`
- inspect fixtures and test-data usage
- reuse the existing login mechanism if one exists

### 3. Keep auth handling reusable
Authentication logic should not be rewritten in every test.
If login is needed repeatedly:
- use workflow
- use fixture
- use stable test data source

---

## State notes to capture during inspection

When auth or navigation matters, record:
- required user state
- start page
- route transitions
- required pre-step actions
- post-navigation load behavior

### Example
- Required state: Logged-in valid user
- Start page: Home page
- Navigation path: Open photo → hover photographer icon → click View profile
- Note: Profile content is only fully visible after navigation completes and image section loads

---

## Anti-patterns

Avoid:
- assuming all flows can start from root URL
- repeating login logic inside every test
- navigating through long UI flows when direct route access is safer and already accepted by the product
- skipping auth dependencies during DOM inspection

---

## Unsplash project notes

In this repository:
- login and user-state-sensitive flows should prefer reuse of existing workflows and fixtures
- profile, likes, and user-specific sections may depend on valid authenticated state
- navigation decisions should support reusable automation design, not ad-hoc test logic