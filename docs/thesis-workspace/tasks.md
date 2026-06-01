# Thesis Task Board

Status values: `TODO`, `IN_PROGRESS`, `BLOCKED`, `REVIEW`, `DONE`.

Priority values: `P0` mandatory, `P1` important, `P2` useful, `P3` optional.

---

## Phase 0: Discovery

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-000 | Read README, project overview, Playwright config, package file, and existing repository workflow docs. | TODO | P0 | Codex | `source-notes/repo-analysis.md` |
| T-001 | Inspect UI test structure, API test structure, Page Objects, fixtures, workflows, API services, DTOs, constants, and utilities. | TODO | P0 | Codex | `evidence-matrix.md` entries |
| T-002 | Read VNUK template and extract mandatory front matter and formatting requirements. | TODO | P0 | Codex | `source-notes/vnuk-template-analysis.md` |
| T-003 | Read VNUK completed sample and extract chapter structure patterns. | TODO | P0 | Codex | `source-notes/vnuk-sample-analysis.md` |
| T-004 | Read Playwright thesis samples and extract automation-specific chapter patterns. | TODO | P0 | Codex | `source-notes/playwright-samples-analysis.md` |

---

## Phase 1: Bootstrap harness

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-010 | Create root Codex `AGENTS.md`. | TODO | P0 | Codex | `AGENTS.md` |
| T-011 | Create thesis-specific `docs/thesis-workspace/AGENTS.md`. | TODO | P0 | Codex | `docs/thesis-workspace/AGENTS.md` |
| T-012 | Create Codex config template. | TODO | P1 | Codex | `.codex/config.toml` |
| T-013 | Create custom thesis agents. | TODO | P1 | Codex | `.codex/agents/*.toml` |
| T-014 | Create thesis skills. | TODO | P1 | Codex | `.agents/skills/*/SKILL.md` |
| T-015 | Create prompt files for bootstrap, evidence matrix, drafting, review, and final QA. | TODO | P1 | Codex | `docs/thesis-workspace/prompts/*.prompt.md` |

---

## Phase 2: Planning and traceability

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-020 | Finalize thesis outline. | TODO | P0 | User + Codex | `outline.md` |
| T-021 | Build citation register with project sources, thesis samples, official docs, and academic literature. | TODO | P0 | Codex | `citation-register.md` |
| T-022 | Build evidence matrix for every planned chapter. | TODO | P0 | Codex | `evidence-matrix.md` |
| T-023 | Create quality checklist and writing style guide. | TODO | P1 | Codex | `quality-checklist.md`, `writing-style-guide.md` |

---

## Phase 3: Draft front matter

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-030 | Draft title page placeholder following VNUK structure. | TODO | P0 | Codex | `front-matter/title-page.md` |
| T-031 | Draft approval page placeholder following VNUK structure. | TODO | P0 | Codex | `front-matter/approval-page.md` |
| T-032 | Draft definitions. | TODO | P0 | Codex | `front-matter/definitions.md` |
| T-033 | Draft abbreviations. | TODO | P0 | Codex | `front-matter/abbreviations.md` |
| T-034 | Draft author contribution statement. | TODO | P0 | Codex | `front-matter/author-contribution.md` |
| T-035 | Draft acknowledgements. | TODO | P1 | User + Codex | `front-matter/acknowledgements.md` |
| T-036 | Draft abstract after Chapters 1, 3, 4, and 5 are stable. | BLOCKED | P0 | Codex | `front-matter/abstract.md` |

---

## Phase 4: Draft chapters

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-040 | Draft Chapter 1: Introduction. | TODO | P0 | Codex | `chapters/chapter-1-introduction.md` |
| T-041 | Review Chapter 1. | TODO | P0 | Codex | Review notes + edits |
| T-042 | Draft Chapter 3: System Analysis and Framework Design. | TODO | P0 | Codex | `chapters/chapter-3-system-analysis-and-design.md` |
| T-043 | Review Chapter 3. | TODO | P0 | Codex | Review notes + edits |
| T-044 | Draft Chapter 4: Implementation. | TODO | P0 | Codex | `chapters/chapter-4-implementation.md` |
| T-045 | Review Chapter 4. | TODO | P0 | Codex | Review notes + edits |
| T-046 | Draft Chapter 2: Literature Review and Theoretical Background. | TODO | P0 | Codex | `chapters/chapter-2-literature-review.md` |
| T-047 | Review Chapter 2. | TODO | P0 | Codex | Review notes + edits |
| T-048 | Execute tests and collect evaluation evidence. | TODO | P0 | User + Codex | Test output, report screenshots, trace evidence |
| T-049 | Draft Chapter 5: Evaluation and Discussion. | BLOCKED | P0 | Codex | `chapters/chapter-5-evaluation-and-discussion.md` |
| T-050 | Review Chapter 5. | BLOCKED | P0 | Codex | Review notes + edits |
| T-051 | Draft Chapter 6: Conclusion and Future Work. | TODO | P0 | Codex | `chapters/chapter-6-conclusion-and-future-work.md` |
| T-052 | Review Chapter 6. | TODO | P0 | Codex | Review notes + edits |

---

## Phase 5: Appendices and final assembly

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-060 | Draft Appendix A: Installation and Execution. | TODO | P1 | Codex | `appendices/appendix-a-installation-and-execution.md` |
| T-061 | Draft Appendix B: Test Scenario Matrix. | TODO | P1 | Codex | `appendices/appendix-b-test-scenarios.md` |
| T-062 | Draft Appendix C: Framework Source Map. | TODO | P1 | Codex | `appendices/appendix-c-framework-source-map.md` |
| T-063 | Draft Appendix D: Sample Reports. | BLOCKED | P1 | Codex | `appendices/appendix-d-sample-reports.md` |
| T-065 | Assemble `thesis.md`. | TODO | P0 | Codex | `thesis.md` |
| T-066 | Run final consistency pass. | TODO | P0 | Codex | Updated thesis files |
| T-067 | Prepare Word migration checklist. | TODO | P0 | Codex | `quality-checklist.md` updated |

---

## Active task protocol

When Codex starts a task, it must:

1. Change the task status to `IN_PROGRESS`.
2. Work only on the task scope.
3. Update evidence and citations when introducing new claims.
4. Change the task status to `REVIEW` when ready.
5. Add a `progress.md` entry with files changed, decisions made, and unresolved blockers.
6. Wait for approval before marking major chapter tasks as `DONE`.


## Diagram and figure tasks

| ID | Task | Target file(s) | Status |
|---|---|---|---|
| DIA-001 | Review `diagram-workflow.md` and confirm the thesis diagram toolchain. | `diagram-workflow.md` | TODO |
| DIA-002 | Create or refine the framework architecture diagram. | `assets/diagrams/src/framework-architecture.mmd` | TODO |
| DIA-003 | Create UI and API test execution flow diagrams. | `assets/diagrams/src/ui-test-execution-flow.mmd`, `assets/diagrams/src/api-test-execution-flow.mmd` | TODO |
| DIA-004 | Create Playwright reporting and evaluation workflow diagrams. | `assets/diagrams/src/playwright-reporting-pipeline.mmd`, `assets/diagrams/src/evaluation-workflow.mmd` | TODO |
| DIA-006 | Render all diagram sources to SVG and review readability for Word insertion. | `assets/diagrams/out/` | TODO |
| DIA-007 | Update `figure-register.md`, chapter references, and captions. | `figure-register.md`, `chapters/*.md` | TODO |
