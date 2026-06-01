# Figure Register

This file tracks every planned, drafted, rendered, reviewed, and inserted figure in the thesis.

Status values:

- `PLANNED`
- `DRAFT_SOURCE_READY`
- `RENDERED`
- `REVIEWED`
- `INSERTED_IN_CHAPTER`
- `NEEDS_REVISION`

| ID | Figure caption placeholder | Target chapter/section | Type | Source file | Rendered output | Status | Evidence/source notes |
|---|---|---|---|---|---|---|---|
| F-01 | Figure 2.1. The practical test automation pyramid and the role of E2E testing. | Chapter 2 / Software Test Automation | Mermaid | `assets/diagrams/src/test-automation-pyramid.mmd` | `assets/diagrams/out/test-automation-pyramid.svg` | PLANNED | Ground in literature review and cited sources. |
| F-02 | Figure 3.1. Layered architecture of the Playwright UI and API automation framework. | Chapter 3 / Framework Architecture | Mermaid | `assets/diagrams/src/framework-architecture.mmd` | `assets/diagrams/out/framework-architecture.svg` | DRAFT_SOURCE_READY | Ground in repository folders and README/project overview. |
| F-03 | Figure 3.2. UI automation execution flow using fixtures, workflows, and Page Objects. | Chapter 3 or 4 / UI Test Design | Mermaid | `assets/diagrams/src/ui-test-execution-flow.mmd` | `assets/diagrams/out/ui-test-execution-flow.svg` | DRAFT_SOURCE_READY | Ground in `tests/ui/`, `fixtures/`, `workflow/`, `page-object/`. |
| F-04 | Figure 3.3. API automation execution flow using service classes and API utilities. | Chapter 3 or 4 / API Test Design | Mermaid | `assets/diagrams/src/api-test-execution-flow.mmd` | `assets/diagrams/out/api-test-execution-flow.svg` | DRAFT_SOURCE_READY | Ground in `tests/api/`, `api-service/`, `core/api/`, `constants/`, `data-object/`. |
| F-05 | Figure 4.1. Playwright execution and reporting pipeline. | Chapter 4 / Reporting and Results | Mermaid | `assets/diagrams/src/playwright-reporting-pipeline.mmd` | `assets/diagrams/out/playwright-reporting-pipeline.svg` | PLANNED | Ground in `playwright.config.ts` and generated reports. |
| F-06 | Figure 5.1. Evaluation workflow for coverage, maintainability, execution, and limitations. | Chapter 5 / Evaluation Methodology | Mermaid | `assets/diagrams/src/evaluation-workflow.mmd` | `assets/diagrams/out/evaluation-workflow.svg` | PLANNED | Ground in evaluation plan and actual test results. |
