# In-Text Citation Audit

Audit date: 2026-06-04

Scope:

- `docs/thesis-workspace/chapters/chapter-1-introduction.md`
- `docs/thesis-workspace/chapters/chapter-2-literature-review.md`
- `docs/thesis-workspace/chapters/chapter-3-system-analysis-and-design.md`
- `docs/thesis-workspace/chapters/chapter-4-implementation.md`
- `docs/thesis-workspace/chapters/chapter-5-evaluation-and-discussion.md`
- `docs/thesis-workspace/chapters/chapter-6-conclusion-and-future-work.md`

## Audit Result

| Area | Result | Notes |
|---|---|---|
| Chapter 2 | Pass | Contains in-text citations for testing theory, Playwright documentation, POM, fixtures, API testing, DTOs, data-driven testing, design principles, reporting, and tool comparison. |
| Chapter 3 | Strengthened | Added necessary in-text citations for repository structure, UI/API scope, Page Objects, fixtures, API services, configuration, and project Copilot workflow evidence. |
| Chapter 4 | Strengthened | Added necessary in-text citations for implementation evidence, including package/configuration files, fixtures, Page Objects, workflows, API services, core utilities, tests, reporting, and workflow artifacts. |
| Chapter 5 | Pass | Contains in-text citations for tool comparison, automation-versus-manual testing, verified execution evidence, and external benchmark context. |
| Chapter 1 | Deferred | Current file is a framing/length-control skeleton, not the full chapter draft. In-text citations must be added during the later full Chapter 1 drafting task. |
| Chapter 6 | Deferred | Current file is a placeholder. In-text citations must be added during the later Chapter 6 drafting task. |

## Verification

The chapter files were scanned for Pandoc-style in-text citation clusters such as `[@source_key]`. All unique citation keys found in chapter files have matching entries in `docs/thesis-workspace/references/references.bib`.

| Check | Result |
|---|---|
| Unique cited keys in current chapter files | 62 |
| Missing keys in `references.bib` | 0 |
| Citation style decision | APA 7th edition |
| Chapter 3/4 prose scope changed | No major content change; citation hardening only |
| Formal Chapter Review Gate required | No, because no chapter was newly drafted and no major argument was changed |

## Citation Placement Principle

In-text citations should be added only where they help readers identify the source of a theory claim, tool capability claim, benchmark claim, execution result, or repository/source-code evidence. They should not be repeated after every sentence when a paragraph or section already clearly points to the relevant source.

## Follow-Up

During full Chapter 1 and Chapter 6 drafting, add APA-traceable in-text citations for all background, problem-framing, contribution, limitation, and future-work claims that rely on project evidence, official documentation, execution evidence, or academic/professional literature.
