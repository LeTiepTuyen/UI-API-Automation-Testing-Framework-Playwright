# AGENTS.md

This repository uses a lightweight Agentic AI workflow with GitHub Copilot in VS Code Agent mode to support automation testing development for the Unsplash UI & API Automation Testing Framework.

The goal of this workflow is to help QA engineers move faster while still following the framework structure, conventions, and reuse-first approach already established in the repository.

---

## 1. Agentic Workflow Goals

This workflow is designed to support the following activities:

- understand the existing automation framework before making changes
- design UI and API test scenarios for important business flows
- generate Playwright automation scripts that follow the current framework
- reuse existing Page Objects, fixtures, workflows, and services wherever possible
- review and refine generated code so it remains maintainable and consistent

This workflow is intended to assist with both:
- **UI automation**
- **API automation**

for the Unsplash project.

---

## 2. Supported Agent Roles

The repository is designed to work with the following custom agents:

### 2.0 GitHubPhaseWorkflow
Purpose:
- orchestrate GitHub repository workflow for future phases and feature deliveries
- define issue, label, board, branch, PR, merge, and close-out steps for a scoped phase
- keep GitHub governance aligned with the existing bootstrap and phase workflow patterns

Typical use cases:
- prepare the GitHub issue/task plan for a new phase
- create or update the phase branch and PR flow
- keep project board status synchronized with active work
- close issues and merge PRs in the documented repository workflow

### 2.1 DesignTestCase
Purpose:
- design test scenarios or test cases for UI and API flows
- turn a requested feature flow into automation-ready scenarios
- cover happy paths, negative paths, and meaningful edge cases where practical

Typical use cases:
- design scenarios for login
- design scenarios for updating profile
- design scenarios for liking/bookmarking photos
- design scenarios for Unsplash API features

---

### 2.2 GenerateTestScript
Purpose:
- generate automation scripts that follow the current framework structure
- inspect the project first before generating code
- reuse existing assets whenever possible
- inspect the UI using Playwright MCP when selector or UI understanding is needed
- create or update Page Objects, fixtures, workflows, test files, or API services only when necessary
- validate that generated scripts are runnable

Important note:
- this agent includes an internal project-understanding and reuse-discovery step before generating code
- there is no need for a separate ProjectDiscovery agent in the current workflow unless the workflow grows more complex later

---

### 2.3 CodeReview
Purpose:
- review newly generated or modified automation code
- check compliance with project structure and conventions
- identify duplication, weak selectors, fixture misuse, poor POM structure, or brittle logic
- recommend or apply improvements
- support script stabilization after generation

Typical review focus:
- structure and naming
- Page Object usage
- fixture integration
- selector quality
- duplication and reuse
- TypeScript quality
- test maintainability

---

## 3. Recommended Workflow Order

The normal workflow should be:

1. **GitHubPhaseWorkflow**
2. **DesignTestCase**
3. **GenerateTestScript**
4. **CodeReview**

### Practical flow
- First, use GitHubPhaseWorkflow when a new phase or scoped delivery needs GitHub issues, labels, board items, branch names, or PR orchestration.
- First, define or refine the test scenario
- Then, generate the automation code using the framework-aware generation flow
- Finally, review and refine the output for maintainability and compliance

---

## 4. Handoff Guidance

### DesignTestCase -> GenerateTestScript
Use this handoff when a scenario has been designed and is ready for automation.

The handoff should pass:
- the scenario title
- the intended business flow
- any important validations or constraints
- whether the target is UI, API, or both

### GenerateTestScript -> CodeReview
Use this handoff after the automation code has been generated and the first runnable version exists.

The handoff should ask CodeReview to focus on:
- framework structure compliance
- Page Object Model quality
- fixture integration
- selector robustness
- duplication and reuse
- TypeScript quality
- maintainability and readability

---

## 5. Core Working Principles for All Agents

All agents should follow these shared rules:

- always inspect the current repository before making structural decisions
- always prefer reuse before creating new files
- always align with `copilot-instructions.md`
- never generate isolated Playwright code that ignores the framework
- prefer Playwright MCP for browser understanding and DOM inspection
- do not rely on Playwright CLI as the primary browser automation workflow
- keep generated code minimal, reusable, and maintainable

---

## 6. Project-Specific Constraints

This repository currently differs from some enterprise demo workflows in the following ways:

- there is no Azure DevOps project dependency for test case retrieval
- test scenarios may come from:
  - manual user prompts
  - local documentation
  - repository understanding
  - direct UI/API exploration
- no `chatmodes/` setup is required in this project
- Playwright MCP is the preferred browser automation and DOM inspection approach

---

## 7. Scope of Agentic Support

This workflow is intended to assist with:

### UI automation
Examples:
- login
- view profile
- update profile
- like/bookmark photo
- navigate likes, collections, or related user flows

### API automation
Examples:
- user profile APIs
- update profile APIs
- photo-related APIs
- other API flows supported by the current framework design

---

## 8. Reuse-First Expansion Policy

Before adding any new file, agents should always check whether the needed logic already exists in:

- `tests/ui/`
- `tests/api/`
- `page-object/`
- `fixtures/`
- `workflow/`
- `api-service/`
- `core/`
- `utils/`
- `constants/`
- `data-object/`

New files should be created only when reuse or extension is not sufficient.

---

## 9. When to Create New Artifacts

### Create a new Page Object only when:
- the relevant page/component does not already exist
- or the existing Page Object cannot be cleanly extended

### Update fixtures only when:
- a new Page Object or reusable helper must be injected for test usage
- and the fixture pattern is already used in the framework for similar cases

### Create a new workflow only when:
- the flow spans multiple steps/pages
- and is expected to be reused by multiple tests

### Create a new API service or DTO only when:
- there is no suitable existing service/model
- and the new API logic would otherwise be duplicated in tests

---

## 10. Quality Bar for Final Output

Any code produced through this workflow should be:

- framework-compliant
- readable
- reusable
- minimal
- runnable
- reviewable
- easy to maintain by another QA engineer later

The purpose of this Agentic AI workflow is not only to generate code, but to generate code that fits naturally into the existing automation framework.