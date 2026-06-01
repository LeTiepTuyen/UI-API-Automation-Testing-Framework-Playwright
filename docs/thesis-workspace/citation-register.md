# Citation Register

This register tracks every source intended for the thesis. It prevents missing references, duplicated citations, and unsupported claims.

Recommended citation style: choose one style and keep it consistent. Suggested options: IEEE for engineering style, or APA if required by VNUK.

---

## Project and repository sources

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| project_readme_2026 | Repository document | `README.md` | Project title, overview, purpose, tech stack, repository structure, author/supervisor details. | READY |
| project_overview_2026 | Repository document | `docs/project-overview.md` | Framework summary, core areas, testing scope, design principles. | READY |
| project_playwright_config_2026 | Source config | `playwright.config.ts` | Execution configuration, reporters, trace settings, CI retry behavior. | READY |
| project_package_json_2026 | Source config | `package.json` | Dependencies: Playwright, dotenv, Ajv, Node types. | READY |
| project_users_service_2026 | Source code | `api-service/users-service.ts` | API service-layer implementation example. | READY |
| project_api_utils_2026 | Source code | `core/api/api.ts` | HTTP utility abstraction and JSON schema validation. | READY |
| project_custom_fixture_2026 | Source code | `fixtures/custome-fixture.ts` | Fixture-based Page Object and workflow injection. | READY |
| project_ui_update_profile_2026 | Source code | `tests/ui/profile/update-profile.spec.ts` | Representative UI test example. | READY |
| project_api_public_profile_2026 | Source code | `tests/api/users/get-public-profile.spec.ts` | Representative API test example. | READY |

---

## VNUK thesis structure sources

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| vnuk_thesis_template_2024 | Template | `thesis-template-vnuk.docx` / converted Markdown | Mandatory VNUK front matter, approval page, lists, abstract, references, appendices, Word structure. | READY |
| truonghavu_vnuk_sample_2024 | Thesis sample | `Thesis-TruongHaVu-GraduationProject-VNUK-Sample.docx` / converted Markdown | VNUK completed thesis chapter flow and formatting reference. | READY |

---

## Playwright and automation thesis samples

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| duong_playwright_framework_2025 | Thesis sample | `Thesis_Playwright_Duong_Sample1.docx` / converted Markdown | Automation framework thesis structure: literature review, case study, framework design, implementation, discussion, future work. | READY |
| barbaglia_playwright_e2e_2026 | Thesis sample | `Thesis_Playwright_Barbaglia_Sofia_Sample2.docx` / converted Markdown | Playwright/E2E thesis structure: background, project specifications, tools, implementation, future development, conclusion. | READY |

---

## Official documentation to add

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| playwright_docs_test_runners | Official documentation | Playwright documentation | Test runner, fixtures, locators, auto-waiting, APIRequestContext, reports, traces. | TODO |
| playwright_docs_best_practices | Official documentation | Playwright documentation | Locator strategy, isolation, test reliability. | TODO |

---

## Academic and professional testing sources to add

| Citation key | Type | Source | Intended use | Status |
|---|---|---|---|---|
| istqb_glossary | Official/professional source | ISTQB glossary or syllabus | Testing definitions and terminology. | TODO |
| cohn_test_pyramid | Book/professional source | Mike Cohn or Practical Test Pyramid reference | Test pyramid discussion. | TODO |
| testing_automation_best_practices | Academic/professional source | To be selected | Automated testing benefits, limitations, maintainability. | TODO |
| e2e_flakiness_source | Academic/professional source | To be selected | Flaky test causes, synchronization, reliability. | TODO |

---

## Citation usage rules

1. Use repository files for project-specific implementation claims.
2. Use official documentation for tool capabilities.
3. Use academic/professional sources for testing theory.
4. Use thesis samples for structure only.
5. Do not cite a sample thesis as evidence for this project's implementation.
6. Do not include uncited references unless the selected VNUK citation style allows bibliography entries not cited in the body.
7. Each citation key must appear in `references/references.bib` before final assembly.
