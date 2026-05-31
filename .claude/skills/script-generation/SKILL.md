---
name: playwright-mcp
description: Use this skill whenever the task involves exploring the real UI, understanding DOM structure, validating element behavior, identifying or refining selectors, checking page navigation, or confirming how a user flow behaves in the browser. This skill is especially useful before generating or updating Playwright automation code for the Unsplash automation framework.
---

# Playwright MCP Skill

This skill helps the model use **Playwright MCP** effectively for real browser inspection and UI understanding before or during automation work.

Use this skill when:
- a test scenario depends on the actual browser UI
- selectors need to be discovered, confirmed, or refined
- a page flow must be observed in the live application
- a generated automation script needs selector validation
- navigation, modal behavior, dynamic rendering, or state-dependent UI behavior must be confirmed

Do **not** use this skill as the main place to define framework structure, fixture policy, or test file generation rules.  
Those belong to other skills or project-level instructions.

---

## Core goals

When using Playwright MCP, your goals are:

1. Open the relevant page or flow in the real browser
2. Observe the actual DOM and interactive behavior
3. Identify stable and maintainable selectors
4. Understand whether the target user action is realistically automatable
5. Capture only the information needed for the next step in the workflow

---

## How to work with Playwright MCP

### 1. Start from the requested scenario
Before opening the browser, understand:
- what page or feature the user wants to automate
- what UI action or verification is needed
- what part of the flow is unclear and requires browser inspection

Do not inspect random pages without a clear purpose.

### 2. Navigate intentionally
Use Playwright MCP to open only the pages needed for the task.

Focus on:
- the target page
- the relevant component or flow
- the state required to reach the intended interaction

Avoid wasting context on unrelated areas of the application.

### 3. Inspect the DOM and UI behavior
Observe:
- visible elements
- hidden/revealed elements
- page transitions
- modals, dropdowns, tabs, popovers
- loaded text and attributes
- whether elements are dynamic or state-dependent

Pay attention to:
- whether the element appears immediately or after user interaction
- whether the page requires authentication or setup state
- whether the action depends on hover, focus, scroll, lazy loading, or network delay

### 4. Choose selectors carefully
Always aim for selectors that are:
- robust
- unique
- maintainable

Preferred selector order:
1. `data-testid`
2. stable `id`
3. stable `name`
4. stable semantic role / accessible role
5. stable CSS based on meaningful attributes
6. XPath only when relationship-based refinement is necessary

Avoid:
- fragile text-only selectors unless the text is stable and intentional
- deeply nested structural CSS selectors
- selectors that depend on position when a stable alternative exists

If a selector is not unique:
- refine with a parent/child/sibling relationship
- refine with a stable attribute
- verify again in the browser before using it

### 5. Validate, do not guess
If the UI can be inspected, do not guess selectors.

Before handing information back to script generation:
- confirm the element exists in the expected state
- confirm the interaction can be executed
- confirm the selector still points to the intended element after the required navigation or state change

---

## What to extract from Playwright MCP inspection

Only capture information that is useful for the next step, such as:
- page name or page responsibility
- key element selectors
- navigation path
- dependencies or preconditions
- state transitions
- validation-relevant behavior
- risks for flaky automation

Do not over-document the DOM.

---

## Output style for downstream usage

When this skill is used to support another agent, provide a compact summary containing:

- **Target page / flow**
- **Relevant UI state**
- **Recommended selectors**
- **Interaction notes**
- **Automation risks / caveats**

Example structure:

- Target page / flow: User profile page
- Relevant UI state: Logged-in user, profile page already loaded
- Recommended selectors:
  - Edit button → `button[data-testid="edit-profile"]`
  - Username input → `input[name="username"]`
- Interaction notes:
  - Edit form appears only after clicking Edit
  - Save button is disabled until a change is made
- Automation risks / caveats:
  - Profile section loads asynchronously after navigation

---

## Unsplash project-specific guidance

In this repository, Playwright MCP should support automation work that fits the existing framework structure.

That means:
- do not generate raw automation code directly from this skill
- instead, return information that helps the script-generation workflow reuse or update:
  - `page-object/`
  - `fixtures/`
  - `workflow/`
  - existing test flows

Always respect the current framework conventions from repository instructions.

---

## When to read reference files

Read files under `references/` only when needed:

- `dom-inspection.md` → when you need a structured browser inspection workflow
- `selector-strategy.md` → when selector choice is unclear or risky
- `navigation-and-auth.md` → when the flow depends on login state or route transitions
- `validation-flow.md` → when the scenario depends on UI state change or dynamic validation behavior