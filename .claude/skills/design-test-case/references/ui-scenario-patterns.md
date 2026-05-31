# UI Scenario Patterns

Use this reference when designing automation-ready UI scenarios for the Unsplash framework.

## Objective

Design UI scenarios that are:
- meaningful
- realistic to automate
- aligned with real user behavior
- suitable for the current framework maturity

---

## Core UI scenario pattern

A strong UI scenario usually includes:

1. **Entry state**
2. **User action**
3. **System response**
4. **Visible verification**

This means every scenario should answer:
- where does the user start?
- what do they do?
- what changes?
- what should be visible or true afterward?

---

## High-value UI scenario categories

Prioritize the following categories:

### 1. Happy path flow
Core successful behavior the user is expected to perform.

### 2. Validation / guardrail flow
Invalid or incomplete action leading to visible prevention or feedback.

### 3. State-change flow
An action causes durable UI or business state change.

### 4. Navigation flow
User moves from one meaningful area to another and the target area loads correctly.

### 5. Persistence flow
A change remains visible after refresh, revisiting the page, or reloading the relevant state.

---

## Examples relevant to Unsplash

Examples of suitable UI scenario areas in this project:
- login
- view photographer profile
- update user profile
- bookmark a photo
- verify bookmarked items appear in the correct user area
- navigate to user collections
- verify account-specific content changes after an interaction

---

## Scenario writing guidance

Good UI scenarios should:
- focus on one meaningful flow
- use clear user intent
- describe observable expected outcomes
- avoid implementation detail
- be easy to hand off to script generation

Bad UI scenarios:
- are too vague
- combine many unrelated actions
- focus on DOM details instead of business behavior
- include too many low-value variations

---

## Recommended balance

For each feature area, try to include:
- one strong happy path
- one or two meaningful negative or validation scenarios if realistic
- one useful state/persistence scenario if the feature changes data or user state

Do not force exhaustive coverage if the scenario set is for early automation enablement.

---

## Output style reminder

When turning UI ideas into full test cases:
- keep titles clear
- steps should reflect user actions
- expected results should describe visible system behavior
- test data should be concrete when needed

---

## Unsplash project notes

In this repository, UI scenarios should map cleanly to:
- existing Page Objects
- reusable workflows
- visible application behavior
- maintainable automation structure