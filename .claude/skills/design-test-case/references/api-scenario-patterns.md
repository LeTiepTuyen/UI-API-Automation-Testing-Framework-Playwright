# API Scenario Patterns

Use this reference when designing automation-ready API scenarios for the Unsplash framework.

## Objective

Design API scenarios that are:
- meaningful
- realistic to automate
- aligned with endpoint purpose
- suitable for the existing service-layer-based framework

---

## Core API scenario pattern

A strong API scenario usually includes:

1. **Request intent**
2. **Input conditions**
3. **Expected response behavior**
4. **Validation target**

This means each scenario should answer:
- what request is being made?
- under what conditions?
- what should the API return or reject?
- what result matters most to validate?

---

## High-value API scenario categories

### 1. Successful request handling
Valid request, expected success status, expected response shape or state effect.

### 2. Required field validation
Missing required data produces correct rejection behavior.

### 3. Invalid input handling
Malformed or unsupported input is handled correctly.

### 4. Authorization-sensitive behavior
Only if relevant to the current project and endpoint usage.

### 5. Business-rule behavior
When the endpoint has important rule-driven outcomes.

### 6. Data integrity / persistence
The result of the request changes or retrieves the correct state.

---

## Scenario writing guidance

Good API scenarios should:
- be specific about input conditions
- be specific about what is validated
- focus on one meaningful request path
- be suitable for clean automation through `api-service/` and `core/api/`

Bad API scenarios:
- are overly generic
- duplicate the same validation idea many times with little value
- mix many validation purposes in one case
- ignore how the framework structures API interaction

---

## Examples relevant to this project

Depending on supported API flows in the framework, useful API scenario categories may include:
- get user profile successfully
- update profile successfully with valid payload
- reject profile update with missing required data
- verify photo-related endpoints return expected response data
- verify authenticated API interaction behaves as expected

---

## Recommended balance

For each endpoint area, try to include:
- one strong happy path
- one meaningful invalid-input or missing-data case
- one useful response/data-integrity case
- additional negative cases only when they add real value

---

## Output style reminder

When converting API ideas into full test cases:
- title should clearly state endpoint purpose and expected outcome
- steps should describe request setup and execution cleanly
- expected results should state response behavior clearly
- test data should be concrete and automation-friendly

---

## Unsplash project notes

This framework already has:
- `api-service/`
- `core/api/`
- `data-object/`
- `constants/`

So API scenarios should be designed in a way that can later be automated through these existing layers rather than through raw request logic inside tests.