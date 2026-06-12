# Chapter 5 External Benchmark Reference Note

## Purpose

This note records how two newly added external Playwright comparison PDFs were processed and how their benchmark data may be used in Chapter 5. The converted Markdown files are reading aids only. The original journal articles remain the citation targets.

## Converted Reference Files

| Original PDF | Converted Markdown | Extracted assets | Use status |
|---|---|---|---|
| `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_A comparative analysis of web application test automation tools - Michal & Beata Pańczyk - Thesis Reference.pdf` | `docs/final-graduation-thesis-doc/reference-documents/converted-markdown/thesis-playwright-a-comparative-analysis-of-web-application-test-automation-tools-michal-b.md` | `docs/final-graduation-thesis-doc/reference-documents/converted-markdown/thesis-playwright-a-comparative-analysis-of-web-application-test-automation-tools-michal-b_assets/` | Used as a reading aid for `mon_panczyk_tool_comparison_2025`. |
| `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Comparative-Reliability-Analysis-of-Selenium-and-Playwright-Evaluating-Automated-Software-Testing-Tools_Reference.pdf` | `docs/final-graduation-thesis-doc/reference-documents/converted-markdown/thesis-playwright-comparative-reliability-analysis-of-selenium-and-playwright-evaluating-a.md` | `docs/final-graduation-thesis-doc/reference-documents/converted-markdown/thesis-playwright-comparative-reliability-analysis-of-selenium-and-playwright-evaluating-a_assets/` | Used as a reading aid for `almabruk_selenium_playwright_reliability_2025`. |

Conversion helper:

- `docs/thesis-workspace/scripts/convert-reference-pdfs.py`

## Selected Data From Mon and Panczyk (2025)

The study compares Playwright, Cypress, and Selenium through test scenarios and documentation review. The Chapter 5 revision uses the numeric data from:

- Table 3: average test execution duration in seconds.
- Table 4: average CPU usage during test execution.
- Table 5: average RAM usage during test execution.

The thesis does not copy the source figures. Instead, it uses an author-created summary chart with mean values across the ten test cases:

| Metric | Playwright | Cypress | Selenium | Lower-is-better |
|---|---:|---:|---:|---|
| Execution time (s) | 6.26 | 6.48 | 6.10 | Yes |
| CPU usage (%) | 17.57 | 20.63 | 19.98 | Yes |
| RAM usage (%) | 28.77 | 33.51 | 28.08 | Yes |

Generated outputs:

- `docs/thesis-workspace/assets/figures/external-tool-benchmark-summary-mon-panczyk-2025.png`
- `docs/thesis-workspace/assets/tables/chapter-5-external-benchmarks/mon-panczyk-2025-summary-means.csv`

## Selected Data From Almabruk et al. (2025)

The study compares Selenium and Playwright through uptime and ROCOF. Chapter 5 uses it only as external reliability context:

| Metric | Selenium | Playwright | Boundary |
|---|---:|---:|---|
| Website uptime (%) | 100.00 | 99.72 | The original uptime observation used different hardware assignments. |
| ROCOF on HP / HDD (failures per second) | 0.1208 | 0.0272 | Lower is better; both tools had one failure per 10-test sequence. |
| ROCOF on Dell / SSD (failures per second) | 0.1336 | 0.0279 | Lower is better; both tools had one failure per 10-test sequence. |

Generated outputs:

- `docs/thesis-workspace/assets/figures/external-reliability-benchmark-almabruk-2025.png`
- `docs/thesis-workspace/assets/tables/chapter-5-external-benchmarks/almabruk-2025-reliability-summary.csv`

Chart generation helper:

- `docs/thesis-workspace/scripts/create-chapter5-external-benchmark-chart.py`

## Evidence Boundaries

- These sources may support Chapter 5 external benchmark context and balanced tool-selection discussion.
- These sources must not be described as this project's own Cypress, Selenium, or Playwright benchmark.
- The generated figures are adapted from published numeric tables, not copied screenshots from the source PDFs.
- The Chapter 5 verified project execution result remains only the 2026-06-03 Playwright run.
- External benchmark data must not override repository-specific architecture fit, because the project goal is a maintainable TypeScript UI/API framework rather than a general-purpose tool ranking.
