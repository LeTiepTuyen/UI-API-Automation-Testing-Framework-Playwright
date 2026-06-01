# Citation Register

This register tracks every source intended for thesis use. It prevents missing references, duplicated citations, and unsupported claims.

Recommended citation style: choose one style and keep it consistent. Suggested options: IEEE for engineering style, or APA if required by VNUK. The final citation style is still an open decision.

---

## Project and repository sources

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| project_readme_2026 | Repository document | `README.md` | Project title, overview, purpose, tech stack, repository structure, key features, author/supervisor details. | READY |
| project_overview_2026 | Repository document | `docs/project-overview.md` | Framework summary, testing scope, core areas, and design principles. | READY |
| project_copilot_instructions_2026 | Repository document | `.github/copilot-instructions.md` | Existing framework conventions for Page Objects, fixtures, workflows, API services, and test organization. | READY |
| project_playwright_config_2026 | Source config | `playwright.config.ts` | Execution configuration, reporters, trace settings, CI retry behavior, and test directory. | READY |
| project_package_json_2026 | Source config | `package.json` | Dependencies: Playwright, dotenv, Ajv, Node types. | READY |
| project_custom_fixture_2026 | Source code | `fixtures/custome-fixture.ts`, `core/fixtures/base-fixture.ts` | Fixture-based Page Object/workflow injection and browser/request initialization. | READY |
| project_login_workflow_2026 | Source code | `workflow/login-workflow.ts` | Reusable login workflow example. | READY |
| project_users_service_2026 | Source code | `api-service/users-service.ts` | API service-layer implementation example for user endpoints. | READY |
| project_photos_service_2026 | Source code | `api-service/photos-service.ts` | API service-layer implementation example for photo interactions. | READY |
| project_api_utils_2026 | Source code | `core/api/api.ts` | HTTP utility abstraction and JSON schema validation helper. | READY |
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
| playwright_docs_test_runner | Official documentation | Playwright documentation | Test runner, projects, fixtures, retries, workers, and assertions. | TODO |
| playwright_docs_locators | Official documentation | Playwright documentation | Locators, auto-waiting, selector reliability, and UI interaction guidance. | TODO |
| playwright_docs_api_testing | Official documentation | Playwright documentation | APIRequestContext and API testing support. | TODO |
| playwright_docs_trace_viewer | Official documentation | Playwright documentation | Trace collection and debugging support. | TODO |
| playwright_docs_reporters | Official documentation | Playwright documentation | HTML reporter and JUnit reporter capabilities. | TODO |

---

## Academic and professional testing sources to add

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| istqb_glossary_or_syllabus | Official/professional source | ISTQB glossary or syllabus | Testing definitions and terminology. | TODO |
| test_pyramid_reference | Book/professional source | To be selected | Test pyramid and balanced test-level discussion. | TODO |
| test_automation_best_practices | Academic/professional source | To be selected | Automated testing benefits, limitations, maintenance cost, and regression value. | TODO |
| e2e_flakiness_reference | Academic/professional source | To be selected | Flaky test causes, synchronization, isolation, and reliability. | TODO |
| api_testing_reference | Academic/professional source | To be selected | REST/API testing concepts, response validation, and contract/schema considerations. | TODO |

---

## Execution evidence to add later

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| execution_test_run_2026 | Execution artifact | To be collected | Test counts, pass/fail/skipped counts, execution time, and command output. | NEEDS_EVIDENCE |
| execution_html_report_2026 | Execution artifact | To be collected | Report screenshot or exported report evidence. | NEEDS_EVIDENCE |
| execution_junit_results_2026 | Execution artifact | `results.xml` after verified run | JUnit result evidence after execution. | NEEDS_EVIDENCE |
| execution_trace_artifacts_2026 | Execution artifact | To be collected | Trace viewer/debugging evidence. | NEEDS_EVIDENCE |

---

## Citation usage rules

1. Use repository files for project-specific implementation claims.
2. Use official documentation for tool capabilities.
3. Use academic/professional sources for testing theory.
4. Use thesis samples for structure only.
5. Do not cite a sample thesis as evidence for this project's implementation.
6. Do not expose credential or token values from `test-data/`.
7. Do not include uncited references unless the selected VNUK citation style allows bibliography-only entries.
8. Each citation key must appear in `references/references.bib` before final assembly.
