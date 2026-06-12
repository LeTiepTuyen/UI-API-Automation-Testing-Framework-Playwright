# Citation Register

This register tracks every source intended for thesis use. It prevents missing references, duplicated citations, and unsupported claims.

Selected citation style: **APA 7th edition**.

Drafting note: Markdown chapter drafts may continue to use stable Pandoc-style citation keys such as `[@playwright_docs_configuration_2026]` for traceability. During final thesis assembly and Word migration, in-text citations and the reference list must be formatted according to APA 7th edition author-date rules.

## APA 7 in-text citation convention (authoritative)

Every in-text citation uses one of two APA 7 forms. The author/year text is generated automatically by `biblatex` `style=apa` (LaTeX) or by APA author-date formatting (Markdown/Word) from `references.bib`. Author names, years, and the "et al." rule are NEVER typed by hand, never bold, never shown as raw keys with underscores.

| Form | Use when | LaTeX | Markdown (Pandoc) | Renders as |
|---|---|---|---|---|
| Parenthetical | The source supports the statement (author not in the sentence) | `\autocite{key}` / `\autocite{a,b}` | `[@key]` / `[@a; @b]` | `(Kim & Ham, 2016)` / `(Garcia et al., 2009; E. Kim & Ham, 2016)` |
| Narrative | The author is the subject of the sentence | `\textcite{key}` | `@key` | `Kim and Ham (2016) found that ...` |

- Two authors: `&` in parentheses, "and" in narrative. 3+ authors → "et al." automatically. Same author/year → `2026a`, `2026b` automatically.
- **A citation that prints as a bold raw key with underscores (e.g. `istqb_ctfl_syllabus_2024`) is NOT a prose error** — it means the LaTeX `bibliography/references.bib` is still the empty placeholder. Fix by porting `references.bib` (T-096), not by editing chapter text. Full rules: `latex-migration/latex-migration-spec.md` Section 5a.
- **NO self-repository citations:** do not cite the author's own GitHub repository or source files (the removed `project_*_2026` keys). Describe the implemented framework directly instead.

Current chapter-boundary note: after the 2026-06-04 restructuring, T-078 refinement, and T-079 academic-style update, Chapter 2 is a Literature Review chapter for theoretical background and methodology only. Specialized definitions in Chapter 2, such as test automation, test automation framework, test case, test data preparation, and test report, must use academic, official, or professional source attribution with necessary APA 7 in-text citations. Literature Review paragraphs should synthesize multiple source families where appropriate and should not rely almost entirely on ISTQB when broader testing literature is available. Repository-specific Page Object, fixture, API service, DTO, cleanup, design-pattern, and reporting-configuration citations should be used mainly in Chapter 3 and Chapter 4, not as detailed implementation explanation in Chapter 2.

Chapter 3 revision note: after the T-081 Chapter 3 refinement, concept introductions in Chapter 3 should cite academic, official, or professional sources before project application. Evidence-boundary material should not appear as decorative or low-value diagram nodes; keep it as concise scope prose in Chapter 3 and reserve detailed evaluation boundaries for Chapter 5.

Chapter 4 revision note: after the T-077 Chapter 4 refinement on 2026-06-08, Chapter 4 should use repository and official Playwright citations to explain implementation mechanisms, while avoiding repeated design theory from Chapter 3. Verified execution evidence may be cross-referenced from Chapter 5, but Chapter 4 should not become the evaluation chapter or introduce new result metrics.

Chapter 6 note: Chapter 6 was drafted by Codex on 2026-06-11, reviewed by Claude's Formal Chapter Review Gate, and approved by the user on 2026-06-11 (final). It uses existing citation keys only — repository evidence for framework abstractions, verified execution artifacts for the 18-test local run, and the project Copilot Agentic-AI workflow source as an automation-testing support feature. No new citation keys were introduced.

References finalization note: T-083 was completed by Codex on 2026-06-11. `docs/thesis-workspace/references/references.md` contains APA 7-style reference entries; all used keys resolve to `references/references.bib`. Chapter-level Pandoc citation keys remain in the approved Markdown drafts for traceability until final in-text author-date conversion during final assembly / Word or LaTeX migration.

Self-repository citation removal (user decision, 2026-06-12): all 19 `project_*_2026` self-citations to the author's own GitHub repository (README, project-overview, source-code files, configs, and workflow artifacts) were removed from the thesis because citing one's own unpublished repository in-text is not appropriate academic practice. The corresponding prose now reads normally (the implemented framework is described directly), and the 19 entries were removed from both `references.bib` files and `references.md`. Citation counts dropped from 72 used / 76 bib entries to **54 used / 57 bib entries**. The mapping table below is retained only as engineering traceability of which repository files back which claims; these are NO LONGER cited in the thesis.

Front matter terminology note: T-032 was completed by Codex on 2026-06-11. `front-matter/definitions.md` uses only existing registered citation keys for source-attributed definitions of testing, automation, Playwright, Page Object Model, fixtures, test data management, CI, flakiness, Trace Viewer, HTML reporting, and JUnit reporting. No new citation keys were introduced. `front-matter/abbreviations.md` is a terminology list and does not require new sources.

Abstract note: T-036 was completed by Codex on 2026-06-11. `front-matter/abstract.md` summarizes existing approved thesis content only: the UI/API automation problem, the Playwright and TypeScript framework design, the project-level Copilot Agentic-AI workflow boundary, the Playwright/Cypress/Selenium project-fit comparison, the verified 3 June 2026 execution result, limitations, and future work. No new citation keys were introduced in the abstract.

---

## Project and repository sources

> **REMOVED FROM THESIS (2026-06-12).** Per the user decision, none of the `project_*_2026` keys below are cited in the thesis anymore (no in-text citations, no reference-list entries). The table is kept only as engineering traceability of which repository files support which claims. Do not re-introduce these as citations.

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| project_readme_2026 | Repository document | `README.md` | Project title, overview, purpose, tech stack, repository structure, key features, author/supervisor details. | READY |
| project_overview_2026 | Repository document | `docs/project-overview.md` | Framework summary, testing scope, core areas, and design principles. | READY |
| project_copilot_instructions_2026 | Repository document | `.github/copilot-instructions.md` | Existing framework conventions for Page Objects, fixtures, workflows, API services, and test organization. | READY |
| project_agentic_workflow_2026 | Repository document | `docs/agentic-workflow/workflow-overview.md` | Project Copilot Agentic-AI workflow overview for automation test design, script generation, and review. | READY |
| project_github_agents_2026 | Repository artifacts | `.github/AGENTS.md`, `.github/agents/` | Custom automation workflow agent roles and responsibilities. | READY |
| project_github_prompts_2026 | Repository artifacts | `.github/prompts/` | Prompt entrypoints for repository understanding, UI/API scenario design, script generation, and generated-code review. | READY |
| project_claude_skills_2026 | Repository artifacts | `.claude/skills/` | Reusable automation-development skills and review references. | READY |
| project_playwright_config_2026 | Source config | `playwright.config.ts` | Execution configuration, reporters, trace settings, CI retry behavior, and test directory. | READY |
| project_package_json_2026 | Source config | `package.json` | Dependencies: Playwright, dotenv, Ajv, Node types. | READY |
| project_custom_fixture_2026 | Source code | `fixtures/custome-fixture.ts`, `core/fixtures/base-fixture.ts` | Fixture-based Page Object/workflow injection and browser/request initialization. | READY |
| project_login_workflow_2026 | Source code | `workflow/login-workflow.ts` | Reusable login workflow example. | READY |
| project_users_service_2026 | Source code | `api-service/users-service.ts` | API service-layer implementation example for user endpoints. | READY |
| project_photos_service_2026 | Source code | `api-service/photos-service.ts` | API service-layer implementation example for photo interactions. | READY |
| project_api_utils_2026 | Source code | `core/api/api.ts` | HTTP utility abstraction and JSON schema validation helper. | READY |
| project_browser_element_utils_2026 | Source code | `core/browser/`, `core/element/` | Browser runtime management, navigation helper, and element wrapper implementation. | READY |
| project_page_objects_2026 | Source code | `page-object/` | Page Object Model implementation examples. | READY |
| project_ui_profile_tests_2026 | Source code | `tests/ui/profile/` | Representative UI test examples. | READY |
| project_api_users_tests_2026 | Source code | `tests/api/users/` | Representative API test examples. | READY |
| project_data_constants_utils_2026 | Source code | `data-object/`, `constants/`, `test-data/`, `utils/` | DTOs, endpoint constants, test data location, and helper utilities. | READY |

---

## VNUK thesis structure sources

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| vnuk_thesis_template_2024 | Template | `docs/final-graduation-thesis-doc/thesis-template.md`; source note: `docs/final-graduation-thesis-doc/source-notes/vnuk-template-analysis.md` | Mandatory VNUK front matter, approval page, lists, abstract, references, appendices, and Word structure. | READY |
| truonghavu_vnuk_sample_2024 | Thesis sample | `docs/final-graduation-thesis-doc/reference-documents/Thesis_HaVu_VNUK-Sample.md`; source note: `docs/final-graduation-thesis-doc/source-notes/vnuk-sample-analysis.md` | VNUK completed thesis chapter flow and formatting reference. | READY |

---

## Playwright and automation thesis samples

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| duong_playwright_framework_2025 | Thesis sample | `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Duong_Sample1.md`; source note: `docs/final-graduation-thesis-doc/source-notes/playwright-samples-analysis.md` | Automation framework thesis structure reference only. | READY |
| barbaglia_playwright_e2e_2026 | Thesis sample | `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Barbaglia_Sofia_Sample2.md`; source note: `docs/final-graduation-thesis-doc/source-notes/playwright-samples-analysis.md` | Playwright/E2E thesis structure reference only. | READY |

---

## Official documentation to add

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| playwright_docs_intro_2026 | Official documentation | `https://playwright.dev/docs/intro` | Playwright documentation baseline for installation, browser support, and Playwright Test overview. | READY |
| playwright_docs_configuration_2026 | Official documentation | `https://playwright.dev/docs/test-configuration` | Test runner configuration, test directory, projects, retries, workers, reporters, base URL, and trace settings. | READY |
| playwright_docs_locators_2026 | Official documentation | `https://playwright.dev/docs/locators` | Locator model, user-facing locator guidance, auto-waiting relationship, and selector reliability. | READY |
| playwright_docs_actionability_2026 | Official documentation | `https://playwright.dev/docs/actionability` | Auto-waiting/actionability checks and the relationship between action readiness and flakiness reduction. | READY |
| playwright_docs_assertions_2026 | Official documentation | `https://playwright.dev/docs/test-assertions` | Web-first assertions, auto-retrying assertions, and assertion timeout behavior. | READY |
| playwright_docs_fixtures_2026 | Official documentation | `https://playwright.dev/docs/test-fixtures` | Built-in and custom fixtures, `test.extend()`, isolated test setup, and type-safe fixture provisioning. | READY |
| playwright_docs_api_testing_2026 | Official documentation | `https://playwright.dev/docs/api-testing` | API testing, request contexts, setup/cleanup by API, and API plus UI combined flow examples. | READY |
| playwright_docs_apirequestcontext_2026 | Official documentation | `https://playwright.dev/docs/api/class-apirequestcontext` | `APIRequestContext`, browser-context request sharing, isolated request contexts, and HTTP method support. | READY |
| playwright_docs_trace_viewer_2026 | Official documentation | `https://playwright.dev/docs/trace-viewer-intro` | Trace recording, HTML report trace access, action replay, DOM snapshots, logs, source, network, errors, and console evidence. | READY |
| playwright_docs_reporters_2026 | Official documentation | `https://playwright.dev/docs/test-reporters` | Built-in reporters, HTML reporter output, JUnit XML reporter output, and multi-reporter configuration. | READY |
| playwright_docs_pom_2026 | Official documentation | `https://playwright.dev/docs/pom` | Playwright-specific Page Object Model guidance and application-specific Page Object APIs. | READY |
| playwright_docs_parallelism_2026 | Official documentation | `https://playwright.dev/docs/test-parallel` | Workers, parallel execution, state-isolation cautions, and worker configuration. | READY |
| playwright_docs_retries_2026 | Official documentation | `https://playwright.dev/docs/test-retries` | Retry configuration and Playwright's passed/flaky/failed categorization. | READY |

---

## Academic and professional testing sources to add

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| istqb_ctfl_syllabus_2024 | Official/professional source | `https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf` | Testing definitions, test levels/types, regression testing, exploratory testing, and benefits/risks of test automation. | READY |
| istqb_ctal_tae_syllabus_2024 | Official/professional source | `https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf` | Test automation engineering, generic test automation architecture, framework layering, test execution, logging, reporting, and maintainability considerations. | READY |
| istqb_glossary_test_automation_2026 | Official/professional source | `https://istqb-glossary.page/test-automation/` | Definition of test automation as software-supported test activities. | READY |
| istqb_glossary_test_automation_framework_2026 | Official/professional source | `https://istqb-glossary.page/test-automation-framework/` | Definition of test automation framework and its relationship to test harnesses and test libraries. | READY |
| istqb_glossary_test_case_2026 | Official/professional source | `https://istqb-glossary.page/test-case/` | Test case definition for inputs, preconditions, expected results, and postconditions. | READY |
| istqb_glossary_test_data_preparation_2026 | Official/professional source | `https://istqb-glossary.page/test-data-preparation/` | Test data preparation definition for selecting, creating, generating, manipulating, and editing data for testing. | READY |
| istqb_glossary_test_report_2026 | Official/professional source | `https://istqb-glossary.page/test-report/` | Test report definition as documentation of test activities and results. | READY |
| istqb_glossary_data_driven_testing_2026 | Official/professional source | `https://istqb-glossary.page/data-driven-testing/` | Data-driven testing definition and separation of control script from input/expected data. | READY |
| fowler_page_object_2013 | Professional source | `https://martinfowler.com/bliki/PageObject.html` | Page Object definition, UI-detail encapsulation, assertion boundary discussion, and test readability rationale. | READY |
| selenium_page_object_models_2026 | Official/professional source | `https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/` | POM as a test automation design pattern for reducing duplication and centralizing UI-change maintenance. | READY |
| leotta_page_object_2013 | Academic source | IEEE ICSTW 2013 paper | Industrial case-study support for Page Object maintainability discussion; use cautiously and avoid importing its metrics as this project result. | READY |
| fowler_dependency_injection_2004 | Professional source | `https://martinfowler.com/articles/injection.html` | Dependency injection, separation of configuration from use, and dependency provisioning theory. | READY |
| fowler_service_layer_2003 | Professional source | `https://martinfowler.com/eaaCatalog/serviceLayer.html` | Service-layer abstraction as a boundary with reusable operations. | READY |
| fowler_data_transfer_object_2003 | Professional source | `https://martinfowler.com/eaaCatalog/dataTransferObject.html` | DTO concept and serialization/data-transfer boundary explanation. | READY |
| microsoft_data_driven_testing_2021 | Official/professional source | `https://learn.microsoft.com/en-us/windows-hardware/drivers/taef/data-driven-testing` | Data-driven testing as separation of input/output values from test code. | READY |
| json_schema_overview_2026 | Official/professional source | `https://json-schema.org/overview/what-is-jsonschema` | JSON Schema as a declarative language for JSON structure and constraint validation. | READY |
| iso_25010_2023 | Official standard source | `https://www.iso.org/standard/78176.html` | Software product quality model terms for cautious quality-attribute mapping. | READY |
| martin_solid_principles_2000 | Professional source | Robert C. Martin, `Design Principles and Design Patterns` | SOLID-oriented explanation of single responsibility, dependency inversion, and maintainable object-oriented design; do not claim formal compliance. | READY |
| habchi_flaky_tests_2022 | Academic source | IEEE ICST 2022 paper | Flaky-test sources, impacts, and mitigation strategies. | READY |
| tahir_flakiness_review_2023 | Academic source | Journal of Systems and Software multivocal review | Broader research/practice support for flakiness causes, detection, impact, and responses. | READY |
| ammann_offutt_testing_2016 | Academic textbook | Ammann, P., & Offutt, J. (2016), `Introduction to Software Testing`, 2nd ed., Cambridge University Press | Software testing fundamentals, test design as a criteria-based activity, and structured testing concepts. | READY |
| bertolino_testing_research_2007 | Academic source | Bertolino, A. (2007), `Software Testing Research: Achievements, Challenges, Dreams`, FOSE 2007, DOI `10.1109/FOSE.2007.25` | Software testing as a broad research and quality-assurance discipline; supports Chapter 2 testing-foundations framing. | READY |
| garousi_mantyla_automation_2016 | Academic source | Garousi, V., & Mantyla, M. V. (2016), `Information and Software Technology`, DOI `10.1016/j.infsof.2016.04.015` | When and what to automate in software testing; supports automation suitability, manual/automation balance, cost/maintenance considerations, and source diversity beyond ISTQB. | READY |
| leotta_e2e_web_testing_2016 | Academic source | Leotta, M., Clerissi, D., Ricca, F., & Tonella, P. (2016), `Advances in Computers`, DOI `10.1016/bs.adcom.2015.11.007` | End-to-end web testing approaches, web automation tool context, dynamic web testing challenges, and E2E methodology. | READY |
| garousi_felderer_test_scripts_2016 | Academic/professional source | Garousi, V., & Felderer, M. (2016), `IEEE Software`, DOI `10.1109/MS.2016.30` | Automated test scripts as maintainable test code; supports framework design, test-code quality, and maintainability discussion. | READY |
| mon_panczyk_tool_comparison_2025 | Academic source | Moń, M., & Pańczyk, B. (2025), Journal of Computer Sciences Institute, DOI `10.35784/jcsi.7119` | Recent comparative analysis of Playwright, Cypress, and Selenium; supports Chapter 5 tool-comparison context and cautions that final tool choice is project-specific. | READY |
| almabruk_selenium_playwright_reliability_2025 | Academic source | Almabruk, S., Abdalhamid, S., & Almabruk, T. (2025), Asian Journal of Research in Computer Science, DOI `10.9734/ajrcos/2025/v18i1546` | External reliability comparison of Selenium and Playwright using uptime and ROCOF; supports Chapter 5 external benchmark context with explicit hardware and methodology boundaries. | READY |
| selenium_webdriver_2026 | Official documentation | `https://www.selenium.dev/documentation/webdriver/` | Automation-tool comparison baseline for Selenium WebDriver. | READY |
| selenium_docs_browsers_2026 | Official documentation | `https://www.selenium.dev/documentation/webdriver/browsers/` | Selenium browser-support baseline for Chapter 5 tool comparison. | READY |
| selenium_docs_waits_2026 | Official documentation | `https://www.selenium.dev/documentation/webdriver/waits/` | Selenium wait strategies and dynamic-UI synchronization risk for Chapter 5 tool comparison. | READY |
| selenium_docs_grid_2026 | Official documentation | `https://www.selenium.dev/documentation/grid/` | Selenium Grid parallel/distributed execution baseline for Chapter 5 tool comparison. | READY |
| cypress_browser_support_2026 | Official documentation | `https://docs.cypress.io/app/references/launching-browsers` | Automation-tool comparison baseline for Cypress browser support and execution model. | READY |
| cypress_docs_retryability_2026 | Official documentation | `https://docs.cypress.io/app/core-concepts/retry-ability` | Cypress retryability and dynamic-UI command/assertion behavior for Chapter 5 tool comparison. | READY |
| cypress_docs_request_2026 | Official documentation | `https://docs.cypress.io/api/commands/request` | Cypress `cy.request()` HTTP request capability for Chapter 5 UI/API support comparison. | READY |
| cypress_docs_screenshots_videos_2026 | Official documentation | `https://docs.cypress.io/app/guides/screenshots-and-videos` | Cypress screenshot/video artifact capability for Chapter 5 reporting/debugging comparison. | READY |
| cypress_docs_parallelization_2026 | Official documentation | `https://docs.cypress.io/cloud/features/smart-orchestration/parallelization` | Cypress Cloud multi-machine parallelization and CI orchestration for Chapter 5 comparison. | READY |
| cypress_docs_reporters_2026 | Official documentation | `https://docs.cypress.io/app/tooling/reporters` | Cypress built-in and custom reporter support for Chapter 5 comparison. | READY |
| puppeteer_overview_2026 | Official documentation | `https://developer.chrome.com/docs/puppeteer` | Automation-tool comparison baseline for Puppeteer browser automation scope. | READY |
| webdriverio_overview_2026 | Official documentation | `https://webdriver.io/docs/why-webdriverio/` | Automation-tool comparison baseline for WebdriverIO web/mobile automation scope. | READY |

---

## Execution evidence to add later

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| execution_test_run_2026 | Execution artifact | `docs/thesis-workspace/source-notes/chapter-5-execution-evidence-2026-06-03.md`; `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-test-run-2026-06-03.log` | Test counts, pass/fail/skipped/error counts, execution time, and command output from the verified `2026-06-03` full-suite run. | READY |
| execution_html_report_2026 | Execution artifact | `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-html-report-index-2026-06-03.html`; `docs/thesis-workspace/assets/figures/playwright-html-report-overview.png` | Exported HTML report and report overview screenshot from the verified `2026-06-03` full-suite run. | READY |
| execution_junit_results_2026 | Execution artifact | `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-results-2026-06-03.xml` | JUnit XML evidence from the verified `2026-06-03` full-suite run. | READY |
| execution_trace_artifacts_2026 | Execution artifact | `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-trace-view-profile-2026-06-03.zip`; sanitized screenshot: `docs/thesis-workspace/assets/figures/playwright-trace-viewer-loaded-trace-sanitized.png` | Supplemental trace artifact from one representative UI test run with `--trace on`; loaded Trace Viewer screenshot is inserted in Chapter 5 as Figure 5.4 after sanitization. | INSERTED_IN_CHAPTER |

---

## Screenshot and visual evidence sources to add later

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| visual_unsplash_sut_screenshot_2026 | Self-captured project screenshot | `assets/figures/unsplash-web-interface-context.png` | Contextual system-under-test image inserted in Chapter 3 as Figure 3.12. | INSERTED_IN_CHAPTER |
| visual_unsplash_api_documentation_screenshot_2026 | Self-captured project screenshot | `assets/figures/unsplash-api-documentation-context.png` | Contextual Unsplash API documentation image inserted in Chapter 3 as Figure 3.13. | INSERTED_IN_CHAPTER |
| visual_ui_scenario_screenshot_2026 | Self-captured project screenshot | `assets/figures/ui-scenario-profile-update-state.png` after verified capture | Optional UI scenario-state evidence for Chapter 4 or Appendix D. | NEEDS_EVIDENCE |
| visual_api_response_screenshot_2026 | Self-captured project screenshot | `assets/figures/api-response-evidence-sanitized.png` after verified capture | Optional sanitized API response/report evidence for Chapter 4 or Appendix D. | NEEDS_EVIDENCE |
| visual_playwright_html_report_2026 | Self-captured execution screenshot | `assets/figures/playwright-html-report-overview.png` | Main report screenshot evidence inserted in Chapter 5 as Figure 5.1 and reusable for Appendix D. | INSERTED_IN_CHAPTER |
| visual_playwright_trace_viewer_2026 | Self-captured execution screenshot | `assets/figures/playwright-trace-viewer-loaded-trace-sanitized.png`; trace zip at `assets/tables/execution-2026-06-03/playwright-trace-view-profile-2026-06-03.zip` | Supplemental debugging/trace evidence inserted in Chapter 5 as Figure 5.4 and referenced in Appendix D. | INSERTED_IN_CHAPTER |
| visual_execution_output_2026 | Self-captured execution screenshot or exported artifact | `assets/tables/execution-2026-06-03/playwright-results-2026-06-03.xml`; `assets/tables/execution-2026-06-03/playwright-test-run-2026-06-03.log` | Optional command-output or `results.xml` visual support for Chapter 5. | READY |
| visual_github_project_board_2026 | Self-captured project screenshot | `assets/figures/github-project-board-evidence.png` if relevant | Optional project workflow/task traceability evidence for Appendix E. | OPTIONAL_NEEDS_REVIEW |
| visual_vscode_test_explorer_2026 | User-provided project screenshot | `assets/figures/vscode-test-explorer-playwright-panel.png` | Chapter 4 implementation/tooling context image for VS Code Test Explorer and Playwright panel, inserted as Figure 4.1. | INSERTED_IN_CHAPTER |
| external_visual_source_to_be_selected | External visual source | To be selected only if needed | Any external model, benchmark chart, or literature figure used in Chapter 2. | NEEDS_SOURCE_AND_LICENSE_REVIEW |

---

## Citation usage rules

1. Use repository files for project-specific implementation claims.
2. Use official documentation for tool capabilities.
3. Use academic/professional sources for testing theory.
4. Use thesis samples for structure only.
5. Do not cite a sample thesis as evidence for this project's implementation.
6. Do not expose credential or token values from `test-data/`.
7. Add in-text citations at necessary source points in the thesis body: theory claims, official documentation claims, external benchmark claims, execution result claims, and specific repository/source-code evidence. Avoid excessive citation repetition when one citation clearly supports the paragraph.
8. Do not include uncited references in the final reference list unless the APA 7th edition finalization pass intentionally keeps a source for documented bibliography-only use.
9. Each citation key must appear in `references/references.bib` before final assembly.
10. Screenshots and external visuals must also be registered in `visual-evidence-register.md` before insertion.
11. External images, copied benchmark charts, and thesis-sample captures require source, citation, and copyright/license review; prefer original tables or prose when possible.
