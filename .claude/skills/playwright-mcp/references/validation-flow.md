# Validation Flow Guide for Playwright MCP

Use this reference when the scenario depends on visible state changes, dynamic validation, conditional rendering, or post-action UI confirmation.

## Objective

Understand how the UI changes before and after an action so downstream automation can:
- wait for the correct condition
- assert the correct state
- avoid flaky timing-based logic

---

## Validation flow thinking

For each important action, identify:

1. **Before state**
   - what is true before the action?
2. **Action**
   - what the user does
3. **Immediate effect**
   - what changes right away?
4. **Final expected state**
   - what stable UI result should eventually appear?

---

## What to inspect

### Form flows
Check:
- default field values
- disabled vs enabled state
- inline validation
- submit button state
- success message / updated UI state

### Navigation flows
Check:
- URL change
- header change
- visible page identity
- tab or section change

### Toggle / like / bookmark flows
Check:
- visual state before click
- visual state after click
- count or icon changes
- list or collection side effect

### Async update flows
Check:
- whether confirmation is shown
- whether content refreshes immediately
- whether page reload or refetch occurs
- whether state persists after revisiting the page

---

## What to capture

When UI validation behavior matters, return:
- precondition state
- action-triggered state change
- stable expected end state
- recommended wait or check strategy
- flakiness risks

### Example
- Before state: Save button disabled
- Action: Edit username field
- Immediate effect: Save button becomes enabled
- Final expected state: Updated username visible after successful save
- Risk: async save confirmation appears briefly

---

## Anti-patterns

Avoid:
- using arbitrary waits instead of state-based understanding
- asserting on transient UI that does not represent final completion
- ignoring delayed rendering or refetch behavior
- treating “click succeeded” as equivalent to “flow completed”

---

## Unsplash project notes

In this repository:
- UI assertions should reflect meaningful visible state
- scenario validation often involves:
  - route changes
  - profile data updates
  - likes / collection state changes
- inspection findings should be fed into Page Object methods and meaningful test assertions, not copied as raw browser notes