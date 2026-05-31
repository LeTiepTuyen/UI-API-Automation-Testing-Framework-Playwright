# Unsplash Automation Framework - Agentic AI Workflow Overview

## 1. Purpose

This document explains the Agentic AI workflow added to the Unsplash UI & API Automation Testing Framework.

The purpose of this workflow is to help QA engineers use GitHub Copilot in VS Code Agent mode more effectively for:
- understanding the repository before making changes
- designing UI and API test scenarios
- generating Playwright automation scripts that follow the existing framework
- reviewing generated automation code for maintainability and framework compliance

This workflow is intended to **wrap around the existing framework**, not replace it.

---

## 2. Current Framework Context

The current repository is already a structured Playwright + TypeScript automation framework with support for both UI and API testing.

The framework already contains reusable layers such as:
- `tests/`
- `page-object/`
- `fixtures/`
- `workflow/`
- `api-service/`
- `core/`
- `data-object/`
- `test-data/`
- `constants/`
- `utils/`

Because the framework already exists, the Agentic AI workflow must:
- respect the current project structure
- reuse existing assets before creating new ones
- preserve the Page Object Model and fixture-based testing style
- avoid isolated or ad-hoc Playwright code

---

## 3. Core Workflow Design

The repository uses a lightweight agent-based workflow built around:

- repository-wide Copilot instructions
- custom agents
- prompt files
- reusable skills
- Playwright MCP for real UI inspection

The main idea is:

1. understand the scenario
2. inspect the repository and find reuse candidates
3. inspect the UI through Playwright MCP if needed
4. generate the smallest clean code change
5. review the generated result

---

## 4. Main Workflow Components

### 4.1 `copilot-instructions.md`
This is the repository-wide rulebook.

It defines:
- framework structure
- Page Object rules
- fixture conventions
- test file expectations
- reuse-first policy
- preference for Playwright MCP when UI understanding is needed

This file is always-on guidance for Copilot in this repository.

---

### 4.2 `AGENTS.md`
This file explains:
- what custom agents exist
- what each agent is responsible for
- how agents work together
- how handoff between agents should happen

It acts as a workflow map for the repository.

---

### 4.3 Custom Agents

#### `DesignTestCase`
Purpose:
- design automation-ready UI and API scenarios
- turn feature requests into clear testable scenarios
- focus on meaningful happy paths, negative paths, and useful edge cases

#### `GenerateTestScript`
Purpose:
- generate or update automation code
- inspect the repository before generating anything
- reuse existing Page Objects, fixtures, workflows, services, and tests
- use Playwright MCP when real browser inspection is needed
- create the smallest clean implementation
- validate runnability when practical

#### `CodeReview`
Purpose:
- review generated code for framework compliance
- detect duplication and missed reuse
- review selector robustness
- review Page Object, fixture, workflow, and test quality
- improve maintainability before final acceptance

---

### 4.4 Skills

The skill layer exists to support the agents with focused, reusable guidance.

Current initial skills:
- `playwright-mcp`
- `script-generation`
- `design-test-case`
- `code-review`

Each skill contains:
- a `SKILL.md` file
- optional `references/` files with more detailed guidance

Skills are used to:
- reduce repeated long instructions in agent files
- keep workflow guidance modular
- improve consistency across multiple tasks

---

### 4.5 Prompt Files

Prompt files under `.github/prompts/` are reusable task entrypoints.

They are used for tasks such as:
- understanding the project
- designing UI scenarios
- designing API scenarios
- generating UI scripts
- generating API scripts
- reviewing generated scripts

Prompt files are intended for daily use in Copilot Chat.

---

## 5. Why Playwright MCP Is Important

This workflow prefers **Playwright MCP** for browser understanding and DOM inspection.

Playwright MCP helps the workflow:
- open the real browser
- inspect the actual DOM
- validate selectors
- observe page transitions and UI state changes
- reduce guesswork during script generation

This is especially important for UI automation tasks where selector quality strongly affects stability.

---

## 6. Reuse-First Generation Model

The most important design rule in this workflow is:

**Reuse before creation.**

Before creating new files or logic, the workflow should inspect:
1. `tests/`
2. `page-object/`
3. `fixtures/`
4. `workflow/`
5. `api-service/`
6. `core/`
7. `constants/`
8. `utils/`
9. `data-object/`
10. `test-data/`

Only after this inspection should the workflow decide whether to:
- reuse as-is
- extend existing code
- lightly refactor existing code
- create something new

---

## 7. Typical End-to-End Flows

### 7.1 Scenario Design Flow
1. User asks for UI or API scenarios for a feature
2. `DesignTestCase` analyzes the request and repository context
3. Agent produces automation-ready scenario definitions

### 7.2 Script Generation Flow
1. User provides a test scenario
2. `GenerateTestScript` understands the scenario
3. It inspects the repository and finds reuse candidates
4. It uses Playwright MCP if UI inspection is needed
5. It generates or updates the minimal required code
6. It validates runnability where feasible
7. It hands the result to `CodeReview`

### 7.3 Review Flow
1. `CodeReview` inspects generated or updated code
2. It checks structure, reuse, selectors, and maintainability
3. It returns:
   - review summary
   - issues
   - recommended changes
   - final assessment

---

## 8. Project-Specific Constraints

This repository differs from some enterprise demo workflows in several important ways:

- there is no Azure DevOps dependency for test case retrieval
- test scenarios can come from:
  - direct user prompts
  - local docs
  - repository understanding
  - manual feature exploration
- `chatmodes/` are not required
- Playwright MCP is preferred over a CLI-driven browser workflow

These constraints are intentional and are part of the project design.

---

## 9. Quality Goals

The final goal of this workflow is not just to generate code quickly.

It is to generate automation code that is:
- framework-compliant
- reusable
- readable
- maintainable
- runnable
- reviewable

The workflow should help QA engineers move faster without damaging the long-term quality of the framework.

---

## 10. Recommended Usage Pattern

For most day-to-day work, the recommended order is:

1. Use a prompt file to start the task
2. Let the relevant agent perform the work
3. Use `GenerateTestScript` for code generation tasks
4. Use `CodeReview` before final acceptance
5. Keep refining the skill and agent layers as the project grows

---

## 11. Future Extension Ideas

This workflow foundation can later be extended with:
- more specialized skills
- richer prompt libraries
- project-specific review checklists
- local scenario catalogs
- stronger documentation for onboarding and maintenance

The current setup is intentionally lightweight and practical for the current Unsplash automation project.

---

## 12. Final Note

This Agentic AI workflow exists to support the current automation framework, not to compete with it.

The framework remains the source of truth.
The agents, prompts, and skills help Copilot work **with** the framework more intelligently.