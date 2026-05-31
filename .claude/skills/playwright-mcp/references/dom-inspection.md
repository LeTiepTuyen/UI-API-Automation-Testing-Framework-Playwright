# DOM Inspection Guide for Playwright MCP

Use this reference when the automation task requires real browser inspection before generating or refining Playwright code.

## Objective

The goal of DOM inspection is to understand the real UI structure and user interaction behavior before writing automation logic.

Use DOM inspection to answer questions such as:
- What is the correct element to interact with?
- Does the element appear immediately or only after another action?
- Is the DOM state dependent on login, navigation, hover, modal open, or lazy loading?
- What selector is stable enough for automation?

---

## When to use DOM inspection

Use Playwright MCP DOM inspection when:
- a new UI scenario is being automated
- selectors are unclear or unreliable
- the UI is dynamic or state-dependent
- there are multiple similar elements on the page
- an existing script is flaky and selector quality needs validation
- a generated selector needs confirmation in the real browser

Do not use this step if the repository already has a reliable Page Object and selector for the same interaction.

---

## DOM inspection workflow

### 1. Start from the scenario, not the page
Before opening the browser, understand:
- what user flow is being automated
- what the target interaction is
- what element or state you need to verify

Do not inspect pages aimlessly.

### 2. Reproduce the relevant user state
Get the browser into the correct state before inspecting the element.

Examples:
- user must be logged in
- profile page must already be open
- modal must be triggered first
- hover state must be active
- a previous step must complete successfully

### 3. Focus on the target component
Inspect only the relevant part of the UI:
- target button
- form field
- tab
- dialog
- card
- menu
- list item
- confirmation state

Avoid overloading context with unrelated DOM detail.

### 4. Identify stable anchors
Look first for:
- `data-testid`
- stable `id`
- stable `name`
- accessible role
- consistent label or placeholder
- predictable component container

### 5. Check interaction behavior
For the target element, confirm:
- visibility
- enabled/disabled state
- clickability
- whether it changes after interaction
- whether the page navigates
- whether an API/network-triggered wait is needed
- whether the element is inside a modal, popup, menu, or dynamic container

### 6. Confirm uniqueness
If the first matching selector is not unique:
- scope it with a stable parent container
- add a stable attribute
- refine with structure only when necessary
- re-check in the real browser

---

## What to capture from DOM inspection

Return only what is useful for downstream automation work:

- page or flow name
- relevant UI state
- candidate selectors
- interaction notes
- validation notes
- automation risks or caveats

### Example output
- Page / flow: Edit profile form
- Required state: Logged-in user on Account page
- Candidate selectors:
  - Username input → `input[name="username"]`
  - Save button → `button[type="submit"]`
- Interaction notes:
  - Save button remains disabled until at least one field changes
- Risk:
  - form section renders after async page load

---

## Anti-patterns

Avoid:
- capturing the full DOM without purpose
- selecting by index when a meaningful selector exists
- trusting a guessed selector without browser confirmation
- assuming visibility means interactability
- ignoring state transitions such as disabled → enabled or hidden → visible

---

## Unsplash project notes

In this repository:
- browser inspection supports Page Object updates, not raw script generation by itself
- final interaction logic should live in `page-object/`, `workflow/`, or reusable helpers
- inspection findings should be minimal and actionable