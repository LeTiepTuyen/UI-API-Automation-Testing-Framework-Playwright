# Codex Thesis Writing Plan and Bootstrap Workflow

## Mission

Use Codex as a disciplined thesis-writing and repository-analysis assistant to produce the final graduation thesis. This is private productivity infrastructure only. Do not include the private Codex thesis-writing workflow, private agents, or private skills in the thesis content.

The thesis topic remains:

**A COMPREHENSIVE UI AND API AUTOMATION TESTING FRAMEWORK USING PLAYWRIGHT**

The final output must be a professional academic thesis in English, aligned with the VNUK thesis template and supported by the current GitHub repository implementation.

---

## Operating principles

1. **Evidence first**: no technical claim may be written without repository evidence, execution evidence, official documentation, academic literature, or explicitly marked assumption.
2. **VNUK compliance first**: the VNUK template and VNUK sample define the required thesis structure and front matter.
3. **Do not plagiarize samples**: sample theses are used only to learn structure, chapter flow, and academic style.
4. **Write in small reviewable increments**: draft one section or chapter at a time.
5. **Update tracking files continuously**: every completed task must update `tasks.md`, `progress.md`, and, when relevant, `evidence-matrix.md` and `citation-register.md`. Keep `progress.md` compact by preserving current state, the archive index, the current-day entry or latest handoff, and the next recommended task while archiving older daily entries under `progress-archive/`.
6. **Human approval gates**: stop for review after each chapter, after each major outline change, and before final assembly.
7. **No fake results**: test counts, pass rates, execution times, screenshots, and report evidence must come from actual runs or be marked `NEEDS_EVIDENCE`.
8. **Citation style**: the final thesis uses APA 7th edition. Markdown drafts may use stable citation keys for traceability, but final in-text citations and the reference list must be formatted according to APA 7 during final assembly and Word migration.
9. **In-text citation placement**: add in-text citations where source attribution is necessary for theory, official documentation, external benchmarks, execution results, or repository/source-code evidence; avoid excessive citation repetition when one citation clearly supports the paragraph.
10. **Academic research voice**: thesis prose must read as an academic research report, not README content or repository documentation. Use research framing, avoid raw folder/file paths in Chapter 1, use source-attributed definitions, synthesize multiple source families in Literature Review chapters, and use concise conceptual headings with sub-sections for grouped mechanisms.

---

## Workflow inclusion boundary

The thesis may include the repository's Copilot Agentic-AI workflow for automation testing because it is part of the graduation project. This project feature supports automation test case design, Playwright script generation, and automation code review through `.github/` and `.claude/` workflow artifacts.

The private thesis-writing harness remains private productivity infrastructure. It must not appear in the thesis body, appendices, references, figures, captions, or final Word document.

---

## Phase 0: Repository and source-document discovery

### Goals

- Understand the current Playwright framework.
- Understand VNUK thesis formatting and structure expectations.
- Understand Playwright-focused academic thesis patterns.
- Create source notes that Codex can reuse.

### Codex actions

1. Read these repository files first:
   - `README.md`
   - `docs/project-overview.md`
   - `docs/agentic-workflow/workflow-overview.md`
   - `.github/copilot-instructions.md`
   - `.github/AGENTS.md`
   - `package.json`
   - `playwright.config.ts`
2. Inspect source folders:
   - `tests/ui/`
   - `tests/api/`
   - `page-object/`
   - `fixtures/`
   - `core/fixtures/`
   - `workflow/`
   - `api-service/`
   - `core/api/`
   - `core/browser/`
   - `core/element/`
   - `data-object/`
   - `constants/`
   - `test-data/`
   - `utils/`
3. Read converted Markdown versions of these thesis references:
   - VNUK thesis template: `docs/final-graduation-thesis-doc/thesis-template.md`
   - VNUK completed sample thesis: `docs/final-graduation-thesis-doc/reference-documents/Thesis_HaVu_VNUK-Sample.md`
   - Playwright thesis by Duong: `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Duong_Sample1.md`
   - Playwright thesis by Barbaglia: `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Barbaglia_Sofia_Sample2.md`
4. Produce or update source notes:
   - `docs/final-graduation-thesis-doc/source-notes/vnuk-template-analysis.md`
   - `docs/final-graduation-thesis-doc/source-notes/vnuk-sample-analysis.md`
   - `docs/final-graduation-thesis-doc/source-notes/playwright-samples-analysis.md`
   - `docs/final-graduation-thesis-doc/source-notes/repo-analysis.md`

### Done criteria

- Codex can summarize the project architecture without guessing.
- Codex can explain which thesis sections are mandatory for VNUK.
- `evidence-matrix.md` has initial entries for repository architecture and thesis sample structure.

---

## Phase 1: Bootstrap the thesis workspace

### Goals

Create the files needed for long-running, trackable thesis writing.

### Codex actions

1. Create root and nested instruction files:
   - `AGENTS.md`
   - `docs/thesis-workspace/AGENTS.md`
2. Create Codex configuration and custom agents:
   - `.codex/config.toml`
   - `.codex/agents/thesis-orchestrator.toml`
   - `.codex/agents/thesis-researcher.toml`
   - `.codex/agents/thesis-drafter.toml`
   - `.codex/agents/thesis-reviewer.toml`
   - `.codex/agents/thesis-citation-auditor.toml`
3. Create thesis skills:
   - `.agents/skills/thesis-planning/SKILL.md`
   - `.agents/skills/thesis-drafting/SKILL.md`
   - `.agents/skills/thesis-evidence-citation/SKILL.md`
   - `.agents/skills/thesis-review/SKILL.md`
4. Create thesis workspace files:
   - `docs/thesis-workspace/README.md`
   - `docs/thesis-workspace/outline.md`
   - `docs/thesis-workspace/plan.md`
   - `docs/thesis-workspace/tasks.md`
   - `docs/thesis-workspace/progress.md`
   - `docs/thesis-workspace/evidence-matrix.md`
   - `docs/thesis-workspace/citation-register.md`
   - `docs/thesis-workspace/quality-checklist.md`
   - `docs/thesis-workspace/writing-style-guide.md`
5. Create chapter, front-matter, appendix, references, assets, and prompt placeholders.

### Done criteria

- The workspace tree exists.
- Codex can detect `AGENTS.md` from the repository root.
- Codex can detect thesis-specific `AGENTS.md` when launched in `docs/thesis-workspace`.
- `tasks.md` contains an actionable task backlog.
- `progress.md` contains the first progress entry.

---

## Phase 2: Build the evidence base

### Goals

Create a traceability layer before drafting prose.

### Codex actions

1. Fill `evidence-matrix.md` with claims related to:
   - framework purpose
   - manual testing versus automation testing rationale
   - automation testing fundamentals
   - repository structure
   - UI test design
   - API test design
   - fixtures
   - Page Object Model
   - automation framework design patterns
   - OOP/SOLID-oriented engineering principles where supported by repository evidence
   - DTOs and data-driven testing
   - API services
   - Playwright config
   - reporting and traces
   - test data and configuration
   - limitations
2. Fill `citation-register.md` with:
   - project source references
   - official Playwright documentation references
   - software testing literature references
   - thesis sample references for structure only
3. Run or request execution evidence:
   - `npm install`
   - `npx playwright test`
   - `npx playwright show-report`
4. Save evidence artifacts under:
   - `docs/thesis-workspace/assets/figures/`
   - `docs/thesis-workspace/assets/tables/`
   - `docs/thesis-workspace/appendices/`
5. Track non-diagram visual evidence in:
   - `docs/thesis-workspace/visual-evidence-register.md`

### Done criteria

- Every planned chapter has at least one evidence source.
- Missing evidence is explicitly marked `NEEDS_EVIDENCE`.
- No result metric is invented.
- Screenshot and report evidence candidates are registered, source-safe, and marked `NEEDS_EVIDENCE` until captured from a verified run or reviewed source.

---

## Phase 3: Finalize the thesis outline

### Goals

Turn the proposed outline into the final working outline.

### Codex actions

1. Review `outline.md` against VNUK template requirements.
2. Compare against VNUK completed sample chapter flow.
3. Compare against Playwright thesis samples for automation-specific chapter flow.
4. Adjust section names if needed.
5. Lock the outline for drafting.

### Done criteria

- `outline.md` is approved by the user.
- `tasks.md` contains section-level drafting tasks mapped to the final outline.

---

## Phase 4: Prepare front matter after chapters

### Drafting order

Front matter is prepared after the main chapters are stable so definitions, abbreviations, contribution wording, and the abstract match the actual thesis content.

1. `front-matter/definitions.md`
2. `front-matter/abbreviations.md`
3. `front-matter/author-contribution.md`
4. `front-matter/acknowledgements.md`
5. `front-matter/abstract.md`
6. `front-matter/title-page.md`
7. `front-matter/approval-page.md`

### Rules

- The abstract is drafted after at least Chapters 1, 3, 4, and 5 have stable content.
- Definitions and abbreviations must match terms actually used in the thesis.

### Done criteria

- Front matter exists in English.
- The VNUK-required front matter is complete.

---

## Phase 5: Draft chapters one by one

### Chapter drafting loop

For each chapter:

1. Read the chapter objective from `outline.md`.
2. Read relevant evidence from `evidence-matrix.md`.
3. Read relevant references from `citation-register.md`.
4. Draft only the target chapter file.
5. Add `NEEDS_EVIDENCE` markers where exact evidence is missing.
6. Run the formal Chapter Review Gate in `chapter-review-gate.md`, covering academic thesis review, technical review, evidence/citation audit, and diagram review.
7. Save the complete gate result under `docs/thesis-workspace/reviews/chapter-X-review.md`.
8. Return the Chapter Review Gate Summary table and ask for user approval.
9. Update `tasks.md` and compact `progress.md` only after the review outcome and approval state are clear.
10. Move to the next chapter only after explicit user approval.

### Drafting order

1. Chapter 3: Framework Design
2. Chapter 4: Implementation
3. Chapter 2 source and citation preparation
4. Chapter 2: Literature Review
5. Chapter 1 pre-drafting alignment only: problem, aim, scope, research questions, and success criteria skeleton
6. Evidence Gate: collect actual test execution, report, trace, screenshot, and `results.xml` evidence
7. Chapter 5: Evaluation and Discussion
8. Chapter 1: Introduction
9. User-approved restructuring pass for Chapters 1-3 after supervisor feedback: Chapter 2 becomes Literature Review only, and framework-design mechanisms move to Chapter 3
10. Follow-up refinement pass for Chapters 1-3: align research objectives/questions, strengthen Chapter 2 citation attribution and literature-based tables, and improve Chapter 3 parent/sub-section hierarchy
11. Academic-style refinement pass for Chapters 1-3: strengthen research-report voice, generalize the framework beyond Unsplash, diversify Chapter 2 academic sources, and improve Chapter 3 concept/heading style
12. Chapter 4 duplication review after the revised Chapters 1-3 are approved
13. Chapter 6: Conclusion and Future Work
14. Appendices
15. Front matter
16. Final `thesis.md` assembly

### Rationale for this order

Chapter 3 and Chapter 4 were drafted first because the repository design and implementation evidence was already organized. After later supervisor/user feedback, the chapter boundary was revised: Chapter 2 is now a Literature Review chapter for theoretical background and methodology only, while concrete framework-design mechanisms such as Page Object Model, fixture-based dependency injection, API service abstraction, DTO/data/cleanup strategy, reporting/traceability design, and framework design principles belong to Chapter 3.

The full Chapter 1 draft is intentionally delayed until after Chapter 5. Chapter 1 contains problem framing, objectives, research questions, success criteria, and contribution wording, which should align with the verified evaluation evidence. A limited Chapter 1 pre-drafting alignment step may be performed after Chapter 2 to keep the introduction direction clear, but full Chapter 1 prose should wait until execution evidence and Chapter 5 are available. Chapter 5 must wait until the execution-evidence gate is complete, because test counts, pass/fail/skipped results, execution duration, report screenshots, trace artifacts, and `results.xml` evidence must not be invented.

As of the 2026-06-04 restructuring, T-078 refinement, and T-079 academic-style refinement, Chapters 1-3 must be re-reviewed and approved again before Chapter 4 is edited for duplication cleanup and before Chapter 6 drafting begins. Chapter 1 must frame the framework as generally applicable to modern web applications while treating Unsplash as the selected demonstration system. Chapter 2 definitions must use source attribution from academic, official, or professional references and should draw from more than one source family where appropriate. Chapter 3 should use logical parent sections and sub-sections for related framework mechanisms and should introduce major concepts with citations before explaining the project application.

---

## Phase 6: Review and revise

### Review passes

1. Chapter Review Gate: run `chapter-review-gate.md` after each chapter draft before user approval.
2. Structural review: does every section match the outline?
3. Technical review: are architecture, implementation, source-path, and framework claims repository-grounded?
4. Evidence review: is every technical claim supported?
5. Citation review: are citations complete and consistent?
6. Academic tone review: is the writing formal and precise?
7. Diagram review: are figures registered, cited, captioned, readable, and grounded in evidence?
8. Visual evidence review: are screenshots, report captures, browser captures, GitHub project images, and external visuals registered, source-safe, citation-safe, and useful enough to include?
9. Consistency review: are terms, abbreviations, figure/table labels, and file paths consistent?
10. Word-template migration review: can the Markdown be copied into the VNUK `.docx` template cleanly?

### Done criteria

- No unresolved `NEEDS_EVIDENCE` markers in final chapters.
- No broken internal references.
- No duplicated or contradictory definitions.
- All figures and tables have captions.
- All accepted screenshots and external visuals have registered sources, safety notes, and captions.

---

## Phase 7: Assemble `thesis.md`

### Codex actions

1. Merge front matter and chapters into `docs/thesis-workspace/thesis.md`.
2. Keep each chapter source file unchanged for maintainability.
3. Add reference list and appendices.
4. Ensure heading levels are compatible with Word styles.
5. Create a copy/paste checklist for migration into the VNUK Word template.

### Done criteria

- `thesis.md` is complete.
- The source chapter files remain the source of truth.
- The user can copy content into the VNUK Word template.

---

## Phase 8: Final academic QA

### QA checklist

- Title is consistent across title page, abstract, and introduction.
- All front-matter sections exist.
- Chapter numbering is consistent.
- All figures and tables are cited in the text.
- All references are cited in the body.
- No citation appears in the body without a reference-list entry.
- No reference-list entry is unused unless VNUK allows bibliography-only sources.
- All in-text citations and reference-list entries follow APA 7th edition.
- No placeholder text remains.
- No source-code paths are wrong.
- No test result is claimed without evidence.
- English is academic, clear, and professional.

---

## Recommended Codex working modes

### For planning

Use plan mode:

```text
/plan Read docs/thesis-workspace/plan.md, docs/thesis-workspace/outline.md, docs/thesis-workspace/tasks.md, and propose the next 5 thesis-writing tasks only. Do not edit files yet.
```

### For implementation/drafting

Use local mode when editing files:

```text
/local
Use the thesis-drafter agent and $thesis-drafting skill. Draft only docs/thesis-workspace/chapters/chapter-1-introduction.md based on outline.md and evidence-matrix.md. Update tasks.md and progress.md after finishing. Do not modify source code.
```

### For review

Use review mode:

```text
/review Review the changes under docs/thesis-workspace only. Focus on VNUK structure compliance, academic English, evidence coverage, citation consistency, and unresolved NEEDS_EVIDENCE markers.
```

### For subagent parallel review

Use explicit subagent instruction:

```text
Spawn four subagents and wait for all results:
1. thesis-reviewer: review academic structure and tone.
2. thesis-citation-auditor: review citation and evidence coverage.
3. thesis-researcher: check whether any factual claims need stronger sources.
4. thesis-orchestrator: verify progress.md and tasks.md are updated.
Return a consolidated review and do not edit files until I approve.
```

---

## Human approval gates

Codex must stop and ask for approval after:

- creating or changing the master outline
- finishing each chapter draft
- changing citation style
- adding or removing a major thesis section
- claiming final evaluation results
- modifying source code outside `docs/thesis-workspace`, `.codex`, `.agents`, or `AGENTS.md`

## Progress compaction policy

`docs/thesis-workspace/progress.md` is the active state file, not the full historical log. It should stay fast to read at the start of a new session.

Maintain it with this structure:

1. current status summary;
2. progress archive index;
3. current-day progress entry or latest handoff;
4. next recommended task;
5. update rules and thesis-content exclusion rule.

Archive older entries by date under `docs/thesis-workspace/progress-archive/YYYY-MM-DD.md`. Before ending any thesis work session, move detailed entries from previous dates out of `progress.md`, update the archive index, and leave only the compact active state. A future session should read archive files only when older context is needed for traceability, review, or debugging. Do not delete archive files unless the user explicitly asks.


## Diagram and figure production gate

For every major chapter, evaluate whether a diagram would improve reader comprehension. When a diagram is useful, the assistant must:

1. consult `diagram-workflow.md`;
2. add or update the entry in `figure-register.md`;
3. create an editable diagram source under `assets/diagrams/src/`;
4. render an SVG/PNG output under `assets/diagrams/out/` when tooling is available;
5. insert a figure reference and academic caption into the relevant chapter;
6. update `progress.md` and `tasks.md`.

Active required diagram categories:

After the 2026-06-03 figure-scope decision, standalone test automation pyramid and evaluation workflow diagrams are not required for the thesis. Test-level context and evaluation methodology should be presented through concise prose, lists, and evidence tables unless the user explicitly re-approves dedicated diagrams later.

After the 2026-06-04 Chapter 2/3 restructuring, the framework mechanism diagrams are assigned to Chapter 3 rather than Chapter 2. Chapter 2 should rely mainly on literature-review prose and concise tables.

- automation framework concept map and quality-attribute relationships;
- framework layered architecture;
- Page Object Model concept and separation of responsibilities;
- practical Page Object Model application workflow;
- fixture-based dependency injection and shared runtime context;
- shared runtime context flow through Playwright fixtures and framework utilities;
- API service abstraction and validation pipeline;
- test data, DTO, and cleanup strategy;
- UI test execution flow;
- API test execution flow;
- Playwright reporting pipeline;
- Copilot Agentic-AI workflow for Automation Testing.

## Screenshot and visual evidence gate

For every major chapter, evaluate whether a screenshot or non-diagram image would add real evidence or reader comprehension. Use screenshots sparingly. When a screenshot or external visual is useful, the assistant must:

1. consult `visual-evidence-register.md`;
2. store accepted project screenshots under `assets/figures/`;
3. register the source/capture method, target chapter, evidence status, and safety notes;
4. verify that no credentials, tokens, private account data, or private thesis-writing workflow content are visible;
5. use external images only after source, citation, and copyright/license review;
6. avoid using screenshots of thesis samples or benchmark charts when a cited original table or paraphrased discussion is academically cleaner;
7. update `evidence-matrix.md`, `citation-register.md`, `tasks.md`, and `progress.md` when the visual supports a claim.

Recommended screenshot priorities:

- Chapter 3: optional sanitized Unsplash system-under-test context screenshot.
- Chapter 4: optional scenario-state or sanitized API evidence screenshot only if it improves implementation explanation.
- Chapter 5: high-priority verified Playwright HTML report, trace viewer, terminal output, and `results.xml` evidence after the execution-evidence gate.
- Appendices: detailed report, trace, command-output, GitHub project, or workflow artifact screenshots that would crowd the main chapters.
