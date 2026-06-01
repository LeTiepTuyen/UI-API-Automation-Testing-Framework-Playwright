# Evidence Matrix

This file maps thesis claims to supporting evidence. It must be updated whenever a new factual or technical claim is introduced.

Status values: `READY`, `NEEDS_EVIDENCE`, `NEEDS_SOURCE`, `REVIEWED`.

---

## Evidence sources

| Source ID | Source type | Location | Notes |
|---|---|---|---|
| SRC-REPO-README | Repository document | `README.md` | Project title, overview, purpose, tech stack, key features, repository highlights, author/supervisor metadata. |
| SRC-REPO-OVERVIEW | Repository document | `docs/project-overview.md` | Framework summary, testing scope, core areas, and design principles. |
| SRC-REPO-COPILOT | Repository document | `.github/copilot-instructions.md` | Framework conventions for Page Objects, fixtures, workflows, API services, test naming, and reuse-first policy. |
| SRC-REPO-AGENTIC-WORKFLOW | Project workflow document | `docs/agentic-workflow/workflow-overview.md` | Project Copilot Agentic-AI workflow for automation test case design, Playwright script generation, code review, prompt files, custom agents, and reusable skills. |
| SRC-REPO-GITHUB-AGENTS | Project workflow artifacts | `.github/AGENTS.md`, `.github/agents/` | Custom agent roles for automation test scenario design, script generation, code review, and GitHub phase workflow. |
| SRC-REPO-GITHUB-PROMPTS | Project workflow artifacts | `.github/prompts/` | Reusable prompt entrypoints for understanding the project, designing UI/API scenarios, generating UI/API scripts, and reviewing generated scripts. |
| SRC-REPO-CLAUDE-SKILLS | Project workflow artifacts | `.claude/skills/` | Reusable automation-development skills for Playwright MCP usage, script generation, scenario design, and code review. |
| SRC-REPO-PKG | Source config | `package.json` | Dependencies: Playwright, TypeScript-related packages, dotenv, Ajv. |
| SRC-REPO-PWCONFIG | Source config | `playwright.config.ts` | Timeout, test directory, parallelism, CI retry behavior, workers, base URL, trace mode, HTML and JUnit reporters. |
| SRC-REPO-UI-TESTS | Source code | `tests/ui/profile/` | UI scenario evidence for profile viewing, profile update, and bookmarked photos. |
| SRC-REPO-API-TESTS | Source code | `tests/api/users/` | API scenario evidence for public profile, statistics, photos, and collections endpoints. |
| SRC-REPO-POM | Source code | `page-object/` | Page Object implementation evidence for page-level UI abstractions. |
| SRC-REPO-FIXTURES | Source code | `fixtures/custome-fixture.ts`, `core/fixtures/base-fixture.ts` | Fixture-based injection and browser/request initialization evidence. |
| SRC-REPO-WORKFLOW | Source code | `workflow/login-workflow.ts` | Reusable business-flow abstraction for login. |
| SRC-REPO-API-SERVICE | Source code | `api-service/users-service.ts`, `api-service/photos-service.ts` | Service-layer API abstraction evidence. |
| SRC-REPO-CORE-API | Source code | `core/api/api.ts` | GET, POST, PUT, DELETE, security-header helper, and JSON schema validation utility evidence. |
| SRC-REPO-CORE-BROWSER | Source code | `core/browser/` | Browser, context, navigation, and request management evidence. |
| SRC-REPO-CORE-ELEMENT | Source code | `core/element/element.ts` | Element wrapper and locator abstraction evidence. |
| SRC-REPO-DATA | Source code | `data-object/` | Request and response DTO/model evidence. |
| SRC-REPO-CONSTANTS | Source code | `constants/api-endpoints.ts`, `constants/file-paths.ts` | Centralized endpoint and file-path constants. |
| SRC-REPO-TEST-DATA | Test data | `test-data/user-info.json` | Static user/test data source; do not expose secrets in thesis prose. |
| SRC-REPO-UTILS | Source code | `utils/json.ts`, `utils/api-url.ts` | JSON loading and API URL construction helpers. |
| SRC-VNUK-TEMPLATE | Thesis template | `docs/final-graduation-thesis-doc/thesis-template.md` | Mandatory thesis structure and front-matter guidance. Read `docs/final-graduation-thesis-doc/source-notes/vnuk-template-analysis.md` first. |
| SRC-VNUK-SAMPLE | Thesis sample | `docs/final-graduation-thesis-doc/reference-documents/Thesis_HaVu_VNUK-Sample.md` | Completed VNUK chapter organization reference. Read `docs/final-graduation-thesis-doc/source-notes/vnuk-sample-analysis.md` first. |
| SRC-PLAYWRIGHT-DUONG | Thesis sample | `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Duong_Sample1.md` | Automation thesis structure reference only. Read `docs/final-graduation-thesis-doc/source-notes/playwright-samples-analysis.md` first. |
| SRC-PLAYWRIGHT-BARBAGLIA | Thesis sample | `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Barbaglia_Sofia_Sample2.md` | Playwright/E2E thesis structure reference only. Read `docs/final-graduation-thesis-doc/source-notes/playwright-samples-analysis.md` first. |
| SRC-PLAYWRIGHT-DOCS | Official documentation | To be added | Playwright official docs for test runner, fixtures, locators, APIRequestContext, traces, and reporters. |
| SRC-TESTING-THEORY | Academic/professional source | To be added | Testing terminology, test automation benefits/limits, test pyramid, E2E reliability, and flakiness. |
| SRC-EXECUTION-EVIDENCE | Execution artifact | To be collected | Actual test output, `results.xml`, HTML report screenshots, trace artifacts, and execution notes. |
| SRC-NOTE-REPO-OVERVIEW | Source note | `docs/thesis-workspace/source-notes/repository-overview.md` | Organized repository overview evidence from project documents and manifests. |
| SRC-NOTE-FRAMEWORK-ARCH | Source note | `docs/thesis-workspace/source-notes/framework-architecture.md` | Organized architecture evidence from repository structure and conventions. |
| SRC-NOTE-PWCONFIG | Source note | `docs/thesis-workspace/source-notes/playwright-configuration.md` | Organized Playwright configuration evidence. |
| SRC-NOTE-UI-LAYER | Source note | `docs/thesis-workspace/source-notes/ui-automation-layer.md` | Organized UI automation evidence from representative test, fixtures, workflow, and Page Objects. |
| SRC-NOTE-API-LAYER | Source note | `docs/thesis-workspace/source-notes/api-automation-layer.md` | Organized API automation evidence from representative test, services, endpoint constants, and API utilities. |
| SRC-NOTE-FIXTURES | Source note | `docs/thesis-workspace/source-notes/fixtures-and-workflows.md` | Organized fixture and workflow evidence. |
| SRC-NOTE-DATA-CONFIG | Source note | `docs/thesis-workspace/source-notes/test-data-and-configuration.md` | Organized test data, constants, DTO, and environment-configuration evidence. |
| SRC-NOTE-REPORTING | Source note | `docs/thesis-workspace/source-notes/reporting-and-execution.md` | Organized execution and reporting configuration evidence, with missing execution artifacts noted. |
| SRC-NOTE-LIMITATIONS | Source note | `docs/thesis-workspace/source-notes/limitations-and-missing-evidence.md` | Organized limitations and missing-evidence register for drafting safeguards. |
| SRC-NOTE-COPILOT-WORKFLOW | Source note | `docs/thesis-workspace/source-notes/copilot-agentic-automation-workflow.md` | Organized evidence for the project Copilot Agentic-AI workflow for automation testing development. |

---

## Chapter evidence readiness

| Chapter | Evidence readiness | Missing before drafting/finalizing |
|---|---|---|
| Chapter 1: Introduction | Partially ready | Repository overview source note is ready; still needs approved outline, final problem/scope wording, and citation style. |
| Chapter 2: Literature Review | Not ready | Needs official Playwright docs and academic/professional testing sources. |
| Chapter 3: System Analysis and Framework Design | Partially ready | Architecture source note and project Copilot workflow source note are ready; still needs architecture/workflow diagram review and final source-to-section mapping. |
| Chapter 4: Implementation | Partially ready | UI/API/configuration source notes and project workflow source note are ready; still needs representative excerpts selected and no secret leakage from test data. |
| Chapter 5: Evaluation and Discussion | Blocked | Needs actual execution output, pass/fail counts, report screenshots, trace evidence, and limitation evidence. |
| Chapter 6: Conclusion and Future Work | Blocked | Needs reviewed Chapters 1-5 and verified evaluation evidence. |

---

## Claim-to-evidence traceability

| Claim ID | Thesis section | Claim | Evidence source(s) | Status | Notes |
|---|---|---|---|---|---|
| C-001 | Ch.1 | The project is a Playwright + TypeScript automation framework for Unsplash UI and API testing. | SRC-REPO-README, SRC-REPO-OVERVIEW, SRC-REPO-PKG, SRC-NOTE-REPO-OVERVIEW | READY | Use project-specific wording only after outline approval. |
| C-002 | Ch.1 | The framework emphasizes maintainability, reuse, and separation of concerns. | SRC-REPO-README, SRC-REPO-OVERVIEW, SRC-REPO-COPILOT, SRC-NOTE-REPO-OVERVIEW | READY | Supported by project docs and repository rules. |
| C-003 | Ch.1 | The in-scope UI examples include photographer profile viewing, profile update, and bookmarked photos. | SRC-REPO-OVERVIEW, SRC-REPO-UI-TESTS, SRC-NOTE-UI-LAYER | READY | Do not claim complete Unsplash UI coverage. |
| C-004 | Ch.1 | The in-scope API examples include public profile, statistics, photos, and collections endpoints. | SRC-REPO-API-TESTS, SRC-REPO-API-SERVICE, SRC-REPO-CONSTANTS, SRC-NOTE-API-LAYER | READY | Do not claim full Unsplash API coverage. |
| C-005 | Ch.2 | Modern test automation improves repeatability and regression efficiency but does not remove the need for manual judgment. | SRC-TESTING-THEORY | NEEDS_SOURCE | Add academic/professional citation before drafting. |
| C-006 | Ch.2 | E2E tests validate integrated user-facing behavior but should be selected carefully because they can be costly and fragile. | SRC-TESTING-THEORY | NEEDS_SOURCE | Add theory/flakiness source before drafting. |
| C-007 | Ch.2 | Playwright provides browser automation and test runner capabilities suitable for UI and API-related testing. | SRC-PLAYWRIGHT-DOCS, SRC-REPO-PKG, SRC-REPO-PWCONFIG | NEEDS_SOURCE | Add official Playwright docs before drafting. |
| C-008 | Ch.3 | The framework uses a layered architecture separating tests, UI abstractions, workflows, API services, core utilities, data, constants, and configuration. | SRC-REPO-README, SRC-REPO-OVERVIEW, SRC-REPO-COPILOT, SRC-REPO-PWCONFIG, SRC-NOTE-FRAMEWORK-ARCH | READY | Pair with Figure F-02 after diagram review. |
| C-009 | Ch.3 | UI interactions are encapsulated in Page Object classes. | SRC-REPO-COPILOT, SRC-REPO-POM, SRC-REPO-UI-TESTS, SRC-NOTE-UI-LAYER | READY | Use representative examples only. |
| C-010 | Ch.3 | Playwright fixtures inject reusable Page Objects and workflows into tests. | SRC-REPO-FIXTURES, SRC-REPO-UI-TESTS, SRC-NOTE-FIXTURES | READY | Supported by `fixtures/custome-fixture.ts`. |
| C-011 | Ch.3 | API endpoint logic is centralized in service classes rather than duplicated directly in API test files. | SRC-REPO-COPILOT, SRC-REPO-API-SERVICE, SRC-REPO-API-TESTS, SRC-NOTE-API-LAYER | READY | Use `UsersService` and endpoint constants as evidence. |
| C-012 | Ch.4 | The Playwright configuration uses `./tests` as the test directory, Chromium project configuration, HTML and JUnit reporters, and trace collection on first retry. | SRC-REPO-PWCONFIG, SRC-NOTE-PWCONFIG, SRC-NOTE-REPORTING | READY | Avoid claiming successful report generation until execution evidence is collected. |
| C-013 | Ch.4 | API utility methods centralize GET, POST, PUT, and DELETE request execution. | SRC-REPO-CORE-API, SRC-NOTE-API-LAYER | READY | JSON schema validation helper exists; do not claim broad schema coverage without test evidence. |
| C-014 | Ch.4 | The UsersService encapsulates public user profile, photos, collections, statistics, and profile update API calls. | SRC-REPO-API-SERVICE, SRC-REPO-CONSTANTS, SRC-NOTE-API-LAYER | READY | Supported by `api-service/users-service.ts`. |
| C-015 | Ch.4 | The update-profile UI test resets profile username through the API after each test. | SRC-REPO-UI-TESTS, SRC-REPO-API-SERVICE, SRC-REPO-DATA, SRC-NOTE-UI-LAYER | READY | Useful for discussing cleanup and test independence. |
| C-016 | Ch.5 | The framework successfully executes all selected UI/API tests. | SRC-EXECUTION-EVIDENCE | NEEDS_EVIDENCE | Must run tests and record output before writing. |
| C-017 | Ch.5 | The final number of UI/API tests, pass/fail/skipped counts, and execution time are known. | SRC-EXECUTION-EVIDENCE | NEEDS_EVIDENCE | Do not infer from file count alone. |
| C-018 | Ch.5 | HTML report, JUnit result, and trace evidence are available for evaluation. | SRC-EXECUTION-EVIDENCE, SRC-REPO-PWCONFIG | NEEDS_EVIDENCE | Config supports reporters/traces; actual artifacts must be verified. |
| C-019 | Ch.5 | External API rate limiting can affect API test reliability. | SRC-REPO-API-TESTS, SRC-EXECUTION-EVIDENCE | NEEDS_EVIDENCE | Tests handle rate-limit body text; execution evidence still required. |
| C-020 | Ch.6 | The final contribution and limitations can be summarized. | Reviewed chapters, SRC-EXECUTION-EVIDENCE | NEEDS_EVIDENCE | Wait for reviewed chapters and evaluation results. |
| C-021 | Ch.4 | The framework loads browser base URL and API base URL from environment variables. | SRC-REPO-PWCONFIG, SRC-REPO-UTILS, SRC-NOTE-DATA-CONFIG | READY | Do not disclose runtime values. |
| C-022 | Ch.4 | Static user test data is centralized in `test-data/user-info.json`. | SRC-REPO-TEST-DATA, SRC-REPO-UTILS, SRC-REPO-CONSTANTS, SRC-NOTE-DATA-CONFIG | READY | Cite location only; do not expose credentials or tokens. |
| C-023 | Ch.5 | Generated report artifacts currently require verification before being used as evaluation evidence. | SRC-NOTE-REPORTING, SRC-NOTE-LIMITATIONS, SRC-EXECUTION-EVIDENCE | NEEDS_EVIDENCE | Existing artifacts must not be treated as final evidence without verified run context. |
| C-024 | Ch.5 | External-system dependency is a limitation because tests target Unsplash UI and public API behavior. | SRC-REPO-README, SRC-REPO-OVERVIEW, SRC-NOTE-LIMITATIONS | READY | Keep wording as a limitation, not a measured failure. |
| C-025 | Ch.3 | The project includes a Copilot Agentic-AI workflow intended to support automation test case design, Playwright script generation, and automation code review. | SRC-REPO-AGENTIC-WORKFLOW, SRC-REPO-GITHUB-AGENTS, SRC-REPO-GITHUB-PROMPTS, SRC-REPO-CLAUDE-SKILLS, SRC-NOTE-COPILOT-WORKFLOW | READY | Describe as a project workflow feature; do not claim measured productivity improvement without evaluation evidence. |
| C-026 | Ch.3 | The workflow is designed to wrap around the existing Playwright framework and preserve reuse-first repository conventions. | SRC-REPO-AGENTIC-WORKFLOW, SRC-REPO-COPILOT, SRC-REPO-GITHUB-AGENTS, SRC-NOTE-COPILOT-WORKFLOW | READY | Keep the framework as the source of truth. |
| C-027 | Ch.4 | The implemented workflow artifacts include repository-wide Copilot instructions, custom agents, reusable prompt files, and reusable skills. | SRC-REPO-AGENTIC-WORKFLOW, SRC-REPO-COPILOT, SRC-REPO-GITHUB-AGENTS, SRC-REPO-GITHUB-PROMPTS, SRC-REPO-CLAUDE-SKILLS, SRC-NOTE-COPILOT-WORKFLOW | READY | Cite paths and describe artifact responsibilities only. |
| C-028 | Ch.4 | The workflow encourages repository inspection, reuse of existing Page Objects/fixtures/workflows/services, optional Playwright MCP UI inspection, and code review before accepting generated automation code. | SRC-REPO-AGENTIC-WORKFLOW, SRC-REPO-COPILOT, SRC-REPO-GITHUB-AGENTS, SRC-REPO-CLAUDE-SKILLS, SRC-NOTE-COPILOT-WORKFLOW | READY | This supports design/implementation discussion; execution effectiveness remains outside current evidence. |
| C-029 | Ch.5 | The effectiveness of the Copilot Agentic-AI workflow for automation development has been quantitatively evaluated. | SRC-EXECUTION-EVIDENCE | NEEDS_EVIDENCE | Do not add productivity, quality, or time-saving metrics unless a documented evaluation is performed. |

---

## Evidence rules

- If a claim cannot be linked to a source, mark it `NEEDS_SOURCE` or remove it.
- If a result needs local execution, mark it `NEEDS_EVIDENCE` until the run is complete.
- If a source is a thesis sample, use it for structure and methodology only, not for project-specific implementation claims.
- If a source contains credentials or tokens, cite the file only as evidence of test-data location and do not expose secret values.
- Every figure and table must have an evidence source or a clear note that it is author-created from repository analysis.
