---
name: design-test-case
description: Use this skill whenever the task is to design automation-ready test cases or test scenarios for the Unsplash automation framework. This includes breaking a feature or flow into meaningful UI or API scenarios, deciding positive and negative coverage, and producing practical scenario definitions that are realistic to automate within the current repository.
---

# Design Test Case Skill

This skill helps design clear, practical, automation-ready test cases or scenarios for the current project.

Use this skill when:
- the user wants to design scenarios for a feature or user flow
- a new UI or API test area needs coverage planning
- a feature is known, but the test scenarios are not yet defined
- an agent needs a clean scenario set before script generation

This skill is not for writing final automation code.  
Its purpose is to create the right testing targets first.

---

## Core objectives

The goal is to produce test cases or scenarios that are:
- meaningful
- clear
- realistic to automate
- aligned with the current project
- useful for downstream script generation

The output should help answer:
- what should be tested?
- what is the happy path?
- what are the most meaningful negative paths?
- which edge cases are worth automating?
- what is already covered and what is still missing?

---

## Design workflow

### 1. Understand the requested feature or flow
Clarify:
- is the target UI or API?
- is the user asking for:
  - one scenario
  - multiple scenarios
  - a scenario set for a whole feature?
- what business action or user goal is being tested?
- what evidence exists in the repo, README, or docs?

### 2. Review repository context
Before designing scenarios:
- inspect existing tests
- inspect existing Page Objects, workflows, and services
- inspect project documentation or README if relevant

Your purpose is to:
- understand how the feature behaves today
- avoid proposing duplicate coverage unless a new variation adds value
- keep the scenario design aligned with the maturity of the framework

### 3. Understand the product behavior
For UI scenarios:
- infer the real user journey
- identify meaningful entry point, action, state change, and expected outcome

For API scenarios:
- identify the endpoint purpose
- identify expected request/response behavior
- identify meaningful validations, failure cases, and business-rule behavior

### 4. Design practical coverage
Use testing design thinking pragmatically:
- Boundary Value Analysis
- Equivalence Partitioning
- Decision Table thinking
- State Transition thinking
- Error Guessing

Do not apply these mechanically.  
Use them only when they genuinely improve scenario quality.

### 5. Prioritize scenario value
Always include:
- the main happy path
- important negative or validation cases
- a few meaningful edge cases if practical

Avoid:
- over-fragmenting the scenario set
- writing many low-value or repetitive cases
- producing cases that are technically possible but poor candidates for automation in this framework

---

## UI scenario guidance

For UI scenario design, prioritize:
- main user journeys
- meaningful user actions
- visible state changes
- important validations
- realistic interactions a user would perform

Examples in this project may include:
- login flow
- profile viewing
- profile editing
- likes flow
- collection-related flows
- navigation to user-specific sections

---

## API scenario guidance

For API scenario design, prioritize:
- successful request handling
- required field validation
- invalid or missing input handling
- response data verification
- business-rule failures where meaningful

If the framework already has service-layer support for the area, design scenarios that can be automated cleanly through that service structure.

---

## Output expectations

Unless the user requests a different format, each test case should include:

- **Title**
- **Pre-conditions**
- **Step Actions**
- **Expected Results**
- **Test Data**
- **Priority**
- **Test Type**

If the user asks for a lighter-weight output, you may provide an automation-ready scenario list instead of full manual-style cases.

---

## Writing rules

- Keep each test case focused on one meaningful scenario
- Keep titles clear and business-readable
- Keep steps precise and testable
- Keep expected results concrete
- Prefer clarity over exhaustive verbosity
- Make the output easy to hand off to script generation

---

## Coverage rules

Where practical:
- include at least one strong positive scenario
- include negative scenarios that represent realistic validation or failure behavior
- include edge cases only if they add meaningful coverage value

Do not force a fixed number of negative cases if the feature does not justify them.

---

## Good scenario design in this project

A good scenario set for this project:
- maps to real product behavior
- is realistic to automate with the current framework
- can reuse existing framework assets
- helps the next step generate maintainable automation code

A poor scenario set:
- is overly theoretical
- ignores how the current framework is organized
- duplicates existing coverage unnecessarily
- contains many low-value cases

---

## What to provide to downstream automation generation

When this skill is used before script generation, include a short summary of:
- target feature / flow
- chosen scenarios
- most important validations
- possible reuse candidates in the repo
- any assumptions that affect automation

---

## When to read reference files

Read files under `references/` only when needed:

- `ui-scenario-patterns.md` → when designing UI-focused scenarios
- `api-scenario-patterns.md` → when designing API-focused scenarios