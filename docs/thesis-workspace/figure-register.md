# Figure Register

This file tracks every planned, drafted, rendered, reviewed, and inserted figure in the thesis.

Status values:

- `PLANNED`
- `DRAFT_SOURCE_READY`
- `RENDERED`
- `REVIEWED`
- `INSERTED_IN_CHAPTER`
- `NEEDS_REVISION`
- `BLOCKED`

Figures must cover only the project framework, testing concepts, reporting, and evaluation evidence.

| ID | Figure caption placeholder | Target chapter/section | Type | Source file | Rendered output | Status | Evidence/source notes |
|---|---|---|---|---|---|---|---|
| F-01 | Figure 2.1. The practical test automation pyramid and the role of end-to-end testing. | Chapter 2 / Software Testing Fundamentals | Mermaid | `assets/diagrams/src/test-automation-pyramid.mmd` | `assets/diagrams/out/test-automation-pyramid.svg` | PLANNED | Needs official/professional testing sources before thesis use. |
| F-02 | Figure 3.1. Layered architecture of the Playwright UI and API automation framework. | Chapter 3 / Framework Architecture | Mermaid | `assets/diagrams/src/framework-architecture.mmd` | `assets/diagrams/out/framework-architecture.svg` | DRAFT_SOURCE_READY | Ground in `README.md`, `docs/project-overview.md`, `tests/`, `page-object/`, `workflow/`, `api-service/`, `core/`, `data-object/`, `constants/`, `test-data/`, and `utils/`. |
| F-03 | Figure 3.2. UI automation execution flow using fixtures, workflows, and Page Objects. | Chapter 3 or Chapter 4 / UI Automation Design | Mermaid | `assets/diagrams/src/ui-test-execution-flow.mmd` | `assets/diagrams/out/ui-test-execution-flow.svg` | DRAFT_SOURCE_READY | Ground in `tests/ui/profile/`, `fixtures/custome-fixture.ts`, `core/fixtures/base-fixture.ts`, `workflow/login-workflow.ts`, and `page-object/`. |
| F-04 | Figure 3.3. API automation execution flow using service classes and API utilities. | Chapter 3 or Chapter 4 / API Automation Design | Mermaid | `assets/diagrams/src/api-test-execution-flow.mmd` | `assets/diagrams/out/api-test-execution-flow.svg` | DRAFT_SOURCE_READY | Ground in `tests/api/users/`, `api-service/`, `core/api/api.ts`, `constants/api-endpoints.ts`, and `data-object/`. |
| F-05 | Figure 4.1. Playwright execution and reporting pipeline. | Chapter 4 / Reporting and Debugging Implementation | Mermaid | `assets/diagrams/src/playwright-reporting-pipeline.mmd` | `assets/diagrams/out/playwright-reporting-pipeline.svg` | PLANNED | Ground in `playwright.config.ts`; needs actual report artifacts before final use. |
| F-06 | Figure 5.1. Evaluation workflow for coverage, maintainability, execution evidence, and limitations. | Chapter 5 / Evaluation Methodology | Mermaid | `assets/diagrams/src/evaluation-workflow.mmd` | `assets/diagrams/out/evaluation-workflow.svg` | PLANNED | Ground in evaluation plan; blocked from final use until actual execution evidence exists. |

---

## Rendering readiness

| Item | Status | Notes |
|---|---|---|
| `npx` availability | READY | `npx` is available in the environment. |
| Local Mermaid CLI | BLOCKED | `node_modules/.bin/mmdc.cmd` and `node_modules/@mermaid-js/mermaid-cli` are not installed locally. |
| Existing render script | READY_WITH_NETWORK | `docs/thesis-workspace/scripts/render-diagrams.mjs` uses `npx -y @mermaid-js/mermaid-cli`, which may require network/download. |
| Rendered SVG outputs | BLOCKED | Render only after Mermaid CLI availability is confirmed. |
