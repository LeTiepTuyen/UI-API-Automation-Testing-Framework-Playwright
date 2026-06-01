# Copilot Agentic-AI Automation Workflow Source Note

## Purpose

This source note summarizes the project-level Copilot Agentic-AI workflow used to support automation testing development in the Unsplash UI and API automation framework. It is not a thesis chapter draft. It should be used as organized evidence for Chapter 3 design discussion and Chapter 4 implementation discussion.

The workflow exists to help QA engineers use GitHub Copilot in VS Code Agent mode more consistently for repository understanding, UI/API test scenario design, Playwright script generation, and automation code review. The repository documentation explicitly frames this workflow as a support layer around the existing Playwright framework rather than a replacement for the framework.

## Evidence Sources

Primary evidence files:

- `docs/agentic-workflow/workflow-overview.md`
- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/agents/DesignTestCase.agent.md`
- `.github/agents/GenerateTestScript.agent.md`
- `.github/agents/CodeReview.agent.md`
- `.github/agents/GitHubPhaseWorkflow.agent.md`
- `.github/prompts/understand-project.prompt.md`
- `.github/prompts/design-ui-scenarios.prompt.md`
- `.github/prompts/design-api-scenarios.prompt.md`
- `.github/prompts/generate-ui-script.prompt.md`
- `.github/prompts/generate-api-script.prompt.md`
- `.github/prompts/review-generated-script.prompt.md`
- `.github/prompts/GitHubPhaseWorkflow-3step.prompt.md`
- `.claude/skills/playwright-mcp/SKILL.md`
- `.claude/skills/script-generation/SKILL.md`
- `.claude/skills/design-test-case/SKILL.md`
- `.claude/skills/code-review/`

Supporting reference files:

- `.claude/skills/script-generation/references/reuse-first-policy.md`
- `.claude/skills/script-generation/references/page-object-rules.md`
- `.claude/skills/script-generation/references/fixture-update-rules.md`
- `.claude/skills/script-generation/references/test-file-placement.md`
- `.claude/skills/playwright-mcp/references/dom-inspection.md`
- `.claude/skills/playwright-mcp/references/selector-strategy.md`
- `.claude/skills/playwright-mcp/references/navigation-and-auth.md`
- `.claude/skills/playwright-mcp/references/validation-flow.md`
- `.claude/skills/code-review/references/maintainability-checklist.md`
- `.claude/skills/code-review/references/pom-review.md`
- `.claude/skills/code-review/references/selector-review.md`

## Main Workflow Components

### Repository-Wide Copilot Instructions

`.github/copilot-instructions.md` acts as the repository-wide rulebook for generated or updated automation code. It documents the Playwright and TypeScript framework structure, Page Object rules, fixture rules, workflow reuse rules, API service-layer rules, test file placement conventions, naming expectations, and the reuse-first policy.

The file also documents a preference for Playwright MCP when browser understanding, DOM inspection, selector validation, or UI behavior confirmation is required.

### Repository Agent Map

`.github/AGENTS.md` describes the project-level Agentic AI workflow and identifies supported roles. It states that the workflow is intended to assist with UI automation and API automation while preserving the repository structure and reuse-first approach.

The documented agent sequence is:

1. `GitHubPhaseWorkflow` for phase and repository workflow orchestration.
2. `DesignTestCase` for automation-ready UI/API scenario design.
3. `GenerateTestScript` for framework-aware Playwright script generation.
4. `CodeReview` for generated-code review and refinement.

### Custom Agents

The custom agent files under `.github/agents/` provide role-specific guidance:

- `DesignTestCase.agent.md` supports automation-ready UI and API scenario design based on user requests, repository context, existing tests, reusable assets, and product behavior.
- `GenerateTestScript.agent.md` supports Playwright UI/API script generation or update tasks. It requires repository inspection before code generation, reuse of existing Page Objects, fixtures, workflows, services, DTOs, constants, utilities, and optional Playwright MCP inspection for UI understanding.
- `CodeReview.agent.md` supports review of generated or modified automation code for framework compliance, Page Object Model quality, fixture integration, selector robustness, duplication, TypeScript quality, and maintainability.
- `GitHubPhaseWorkflow.agent.md` supports phase-level repository workflow orchestration, including issue, branch, pull request, project board, and close-out planning.

## Prompt Files

Prompt files under `.github/prompts/` provide reusable entry points for daily Copilot workflow tasks:

- `understand-project.prompt.md` guides repository analysis before major automation generation work.
- `design-ui-scenarios.prompt.md` and `design-api-scenarios.prompt.md` guide scenario design for UI and API areas.
- `generate-ui-script.prompt.md` and `generate-api-script.prompt.md` guide framework-aware script generation.
- `review-generated-script.prompt.md` guides review of new or modified automation code.
- `GitHubPhaseWorkflow-3step.prompt.md` provides a reusable three-step phase workflow for GitHub planning, local implementation, and close-out.

These prompts support consistency by making common automation-development tasks repeatable and aligned with the repository rules.

## Reusable Skills

The reusable skill layer under `.claude/skills/` provides focused guidance for recurring automation-development activities:

- `playwright-mcp` supports browser and DOM inspection, selector validation, navigation understanding, and UI behavior confirmation.
- `script-generation` supports framework-aware script creation or update work.
- `design-test-case` supports automation-ready UI/API scenario design.
- `code-review` contains review reference materials for maintainability, Page Object Model quality, and selector quality.

The reference files reinforce the same core principles as the repository instructions: reuse existing assets before creating new ones, keep UI interaction logic in Page Objects, keep endpoint logic in API services, use fixtures consistently, and keep generated automation code maintainable.

## Support for Repository Understanding

The workflow requires repository inspection before major script generation or scenario design. Evidence for this appears in:

- `docs/agentic-workflow/workflow-overview.md`, which lists repository understanding as the first workflow goal.
- `.github/copilot-instructions.md`, which requires inspection of `tests/ui/`, `tests/api/`, `page-object/`, `fixtures/`, `workflow/`, `api-service/`, `core/`, `constants/`, `utils/`, `data-object/`, and `test-data/`.
- `.github/prompts/understand-project.prompt.md`, which provides a dedicated repository-analysis entry point.

This supports the thesis claim that the workflow is designed to reduce ad hoc generation and keep automation work grounded in the existing framework.

## Support for UI and API Scenario Design

The workflow supports scenario design through `DesignTestCase.agent.md`, `design-ui-scenarios.prompt.md`, `design-api-scenarios.prompt.md`, and `.claude/skills/design-test-case/SKILL.md`.

The evidence indicates that scenario design should be based on user requests, repository context, existing tests, reusable assets, and product behavior. The UI guidance targets realistic user flows such as login, profile viewing, profile editing, likes, and collections. The API guidance targets endpoint purpose, request/response behavior, response validation, and meaningful negative or edge cases.

## Support for Playwright Script Generation

The workflow supports Playwright script generation through `GenerateTestScript.agent.md`, `generate-ui-script.prompt.md`, `generate-api-script.prompt.md`, `.claude/skills/script-generation/SKILL.md`, and script-generation reference files.

The evidence shows that script generation is intended to:

- inspect the repository before generating code;
- identify reusable Page Objects, fixtures, workflows, API services, DTOs, constants, utilities, and test data;
- generate only the smallest clean code change needed;
- place UI tests under `tests/ui/` and API tests under `tests/api/`;
- keep UI logic in Page Objects and endpoint logic in service classes;
- validate the generated script at the smallest practical scope when feasible.

## Support for Code Review

The workflow supports code review through `CodeReview.agent.md`, `review-generated-script.prompt.md`, and the review references under `.claude/skills/code-review/references/`.

The review evidence focuses on:

- framework structure compliance;
- Page Object Model quality;
- fixture and workflow integration;
- selector robustness;
- missed reuse or duplication;
- TypeScript readability and maintainability;
- final assessment before accepting generated automation code.

## Playwright MCP Preference

Playwright MCP is documented as the preferred mechanism for UI understanding and DOM inspection when selector quality or UI behavior is uncertain. This preference appears in `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `GenerateTestScript.agent.md`, `generate-ui-script.prompt.md`, and `.claude/skills/playwright-mcp/SKILL.md`.

The documented purpose of Playwright MCP is to reduce guesswork by allowing inspection of real UI state, DOM structure, navigation behavior, selector uniqueness, and interaction feasibility before or during automation script generation.

## Reuse-First Framework Compliance

The workflow repeatedly emphasizes reuse before creation. The documented reuse order includes existing tests, Page Objects, fixtures, workflows, API services, core utilities, constants, utilities, DTOs, and test data.

This supports thesis discussion of maintainability because the workflow is designed to keep generated automation code aligned with the same architectural layers used by the framework:

- `tests/ui/` and `tests/api/`;
- `page-object/`;
- `fixtures/` and `core/fixtures/`;
- `workflow/`;
- `api-service/`;
- `core/`;
- `data-object/`;
- `constants/`;
- `test-data/`;
- `utils/`.

## Scope Boundaries and Limitations

The current evidence supports describing the workflow as a documented project feature for automation testing development. It does not support claims about measured productivity improvement, defect reduction, coverage increase, execution reliability, or time savings.

Current boundaries:

- The workflow is lightweight and documentation-driven.
- It is intended to assist QA engineers; it does not replace the Playwright framework.
- It does not replace manual review, manual exploratory testing, or verified test execution evidence.
- It does not provide final evaluation metrics by itself.
- Any effectiveness claim requires separate execution or evaluation evidence.
- `.claude/skills/code-review/SKILL.md` appears inconsistent with its folder name because its main content currently resembles scenario-design guidance, while the folder's reference files contain actual code-review checklists. This should be treated as a documentation consistency risk before using that skill as implementation evidence.

## Distinction From Thesis-Writing Infrastructure

This source note concerns the project Copilot Agentic-AI workflow for automation testing development. It is a project feature because it supports test scenario design, Playwright script generation, repository-aware reuse, and generated-code review.

It is distinct from the private Codex thesis-writing harness. The private thesis-writing harness must not be described as part of the automation testing framework, and it must not be inserted into thesis body text, figures, captions, references, appendices, or the final Word document.

## Thesis Use Guidance

For Chapter 3, this source note can support a design subsection explaining why the workflow exists and how its components fit around the framework.

For Chapter 4, this source note can support an implementation subsection mapping the documented workflow artifacts to repository files.

For Chapter 5, this source note does not support quantitative evaluation claims. Any claim about the effectiveness of the workflow must remain `NEEDS_EVIDENCE` until a documented evaluation method and evidence are available.
