# Current and Proposed Repository Structure for the Thesis Writing Harness

## Purpose

This document defines the recommended repository structure for writing the final graduation thesis titled:

**A COMPREHENSIVE UI AND API AUTOMATION TESTING FRAMEWORK USING PLAYWRIGHT**

The goal is to let Codex work in a process-centric, evidence-driven, and reviewable way: discover context, plan, split work into tasks, draft chapter-by-chapter, review, update progress, and preserve traceability from thesis claims to project evidence.

---

## Source basis used for this proposal

| Source ID | Source | How it is used |
|---|---|---|
| SRC-REPO | GitHub repository: `LeTiepTuyen/UI-API-Automation-Testing-Framework-Playwright` | Project structure, source-code architecture, testing scope, framework components, existing agentic workflow. |
| SRC-VNUK-TEMPLATE | `thesis-template-vnuk.docx` | Mandatory VNUK front matter, approval page, table of contents, lists, definitions, abbreviations, abstract, body, references, appendices. |
| SRC-VNUK-SAMPLE | `Thesis-TruongHaVu-GraduationProject-VNUK-Sample.docx` | VNUK-style completed thesis structure and chapter organization. |
| SRC-PLAYWRIGHT-BARBAGLIA | `Thesis_Playwright_Barbaglia_Sofia_Sample2.docx` | Playwright/E2E automation thesis organization: background, specifications, tools, implementation, future work. |
| SRC-PLAYWRIGHT-DUONG | `Thesis_Playwright_Duong_Sample1.docx` | Automation framework thesis organization: literature review, case study, framework design, implementation, discussion, evaluation, future work. |

Academic integrity rule: the sample theses are structural and methodological references only. Codex must not copy or closely paraphrase their prose.

---

## Current high-level repository structure

The current project is a Playwright + TypeScript automation framework. Based on the repository README and project overview, the important existing areas are:

```text
UI-API-Automation-Testing-Framework-Playwright/
├── api-service/                     # API service-layer abstractions
├── config/                          # Environment and runtime configuration
├── constants/                       # Centralized constants and API endpoints
├── core/                            # Browser, API, element, and fixture utilities
│   ├── api/
│   ├── browser/
│   ├── element/
│   └── fixtures/
├── data-object/                     # Request/response DTOs and models
├── fixtures/                        # Playwright test fixtures
├── page-object/                     # Page Object Model classes
├── test-data/                       # Static test data and credentials placeholders
├── tests/
│   ├── api/                         # API specifications
│   └── ui/                          # UI specifications
├── utils/                           # Shared helpers
├── workflow/                        # Reusable business flows
├── docs/
│   ├── project-overview.md
│   ├── agentic-workflow/
│   └── project-management/
├── .github/
│   ├── copilot-instructions.md
│   ├── AGENTS.md                    # Existing Copilot-oriented agent map
│   ├── agents/
│   └── prompts/
├── .claude/
│   └── skills/                      # Existing Claude-oriented skills
├── package.json
├── playwright.config.ts
├── README.md
└── results.xml
```

---

## Recommended new thesis workspace structure

Add the following structure without deleting the current automation framework. This creates a dedicated thesis harness while preserving the existing source-code project.

```text
UI-API-Automation-Testing-Framework-Playwright/
├── AGENTS.md
├── .codex/
│   ├── config.toml
│   └── agents/
│       ├── thesis-orchestrator.toml
│       ├── thesis-researcher.toml
│       ├── thesis-drafter.toml
│       ├── thesis-reviewer.toml
│       └── thesis-citation-auditor.toml
├── .agents/
│   └── skills/
│       ├── thesis-planning/
│       │   └── SKILL.md
│       ├── thesis-drafting/
│       │   └── SKILL.md
│       ├── thesis-evidence-citation/
│       │   └── SKILL.md
│       └── thesis-review/
│           └── SKILL.md
├── docs/
│   ├── final-graduation-thesis-doc/
│   │   ├── thesis-template.md
│   │   ├── reference-documents/
│   │   │   ├── Thesis_HaVu_VNUK-Sample.md
│   │   │   ├── Thesis_Playwright_Duong_Sample1.md
│   │   │   ├── Thesis_Playwright_Barbaglia_Sofia_Sample2.md
│   │   │   └── Thesis_VoLong_VNUK_Sample.md
│   │   └── source-notes/
│   │       ├── vnuk-template-analysis.md
│   │       ├── vnuk-sample-analysis.md
│   │       ├── playwright-samples-analysis.md
│   │       └── repo-analysis.md
│   └── thesis-workspace/
│       ├── README.md
│       ├── AGENTS.md
│       ├── thesis.md
│       ├── outline.md
│       ├── plan.md
│       ├── tasks.md
│       ├── progress.md
│       ├── evidence-matrix.md
│       ├── citation-register.md
│       ├── quality-checklist.md
│       ├── writing-style-guide.md
│       ├── prompts/
│       │   ├── 01-bootstrap-thesis-workspace.prompt.md
│       │   ├── 02-create-evidence-matrix.prompt.md
│       │   ├── 03-draft-chapter.prompt.md
│       │   ├── 04-review-chapter.prompt.md
│       │   └── 05-final-consistency-pass.prompt.md
│       ├── front-matter/
│       │   ├── title-page.md
│       │   ├── approval-page.md
│       │   ├── abstract.md
│       │   ├── acknowledgements.md
│       │   ├── definitions.md
│       │   ├── abbreviations.md
│       │   └── author-contribution.md
│       ├── chapters/
│       │   ├── chapter-1-introduction.md
│       │   ├── chapter-2-literature-review.md
│       │   ├── chapter-3-system-analysis-and-design.md
│       │   ├── chapter-4-implementation.md
│       │   ├── chapter-5-evaluation-and-discussion.md
│       │   └── chapter-6-conclusion-and-future-work.md
│       ├── appendices/
│       │   ├── appendix-a-installation-and-execution.md
│       │   ├── appendix-b-test-scenarios.md
│       │   ├── appendix-c-framework-source-map.md
│       │   ├── appendix-d-sample-reports.md
│       ├── assets/
│       │   ├── figures/
│       │   └── tables/
│       └── references/
│           ├── references.md
│           └── references.bib
```

---

## Why this structure is optimal for Codex

1. `AGENTS.md` at the repository root gives Codex persistent repository-wide rules.
2. `docs/thesis-workspace/AGENTS.md` provides a thesis-specific override when Codex is launched from the thesis workspace.
3. `.codex/agents/*.toml` defines specialized agents for planning, researching, drafting, reviewing, and citation auditing.
4. `.agents/skills/*/SKILL.md` makes recurring thesis workflows reusable and discoverable by Codex.
5. `outline.md`, `plan.md`, `tasks.md`, and `progress.md` separate strategic design from execution tracking.
6. `evidence-matrix.md` and `citation-register.md` prevent hallucinated academic claims and force traceability from each thesis claim to repository evidence or literature.
7. Separate chapter files make long-form writing easier for Codex and safer to review before merging into `thesis.md`.
8. Appendices keep implementation detail, test scenarios, execution commands, and framework source mapping outside the main narrative while preserving academic evidence.

---

## Files Codex should create first

The first Codex bootstrap task should create these files in this order:

1. `AGENTS.md`
2. `.codex/config.toml`
3. `.codex/agents/*.toml`
4. `.agents/skills/*/SKILL.md`
5. `docs/thesis-workspace/README.md`
6. `docs/thesis-workspace/AGENTS.md`
7. `docs/thesis-workspace/outline.md`
8. `docs/thesis-workspace/plan.md`
9. `docs/thesis-workspace/tasks.md`
10. `docs/thesis-workspace/progress.md`
11. `docs/thesis-workspace/evidence-matrix.md`
12. `docs/thesis-workspace/citation-register.md`
13. chapter, front-matter, appendix, asset, and reference placeholders.

---

## Naming conventions

- Markdown files: kebab-case, descriptive, and stable.
- Chapter files: `chapter-<number>-<short-title>.md`.
- Appendix files: `appendix-<letter>-<short-title>.md`.
- Agent files: lowercase kebab-case TOML.
- Skill directories: lowercase kebab-case.
- Figures: `fig-<chapter>-<number>-<short-title>.png` or `.svg`.
- Tables: `table-<chapter>-<number>-<short-title>.md`.

---

## Non-negotiable thesis writing rules

- The final thesis must be written in formal academic English.
- The VNUK template and VNUK completed sample are the primary structure references.
- The Playwright theses are used for academic content patterns, not copied wording.
- Every technical claim must be supported by one of: source code, execution output, project document, thesis sample, official documentation, or academic reference.
- Codex must update `progress.md` after each completed task.
- Codex must update `evidence-matrix.md` whenever it introduces a new claim, table, figure, or result.
- No fabricated metrics are allowed. If test execution results are not available, Codex must leave placeholders and mark them as `NEEDS_EVIDENCE`.

## Private workflow boundary

The Codex harness, private agents, private skills, and personal thesis-writing workflow are not part of the graduation thesis topic. They must not appear in the final thesis body, front matter, figures, tables, references, or appendices.
