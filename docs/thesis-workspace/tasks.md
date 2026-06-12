# Thesis Task Board

Status values: `TODO`, `IN_PROGRESS`, `BLOCKED`, `REVIEW`, `DONE`.

Priority values: `P0` mandatory, `P1` important, `P2` useful, `P3` optional.

This board tracks thesis-writing preparation and drafting. Chapter prose must be drafted only when the relevant evidence, citation, figure, and chapter gates are ready.

---

## Phase 0: Discovery and preflight

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-000 | Inspect repository structure, project documents, Playwright config, package file, and workflow guidance. | REVIEW | P0 | Codex | Repository evidence sources in `evidence-matrix.md` |
| T-001 | Inspect UI/API tests, Page Objects, fixtures, workflows, services, DTOs, constants, test data, and utilities. | REVIEW | P0 | Codex | Framework evidence sources in `evidence-matrix.md` |
| T-002 | Confirm thesis source/reference area and note path risks. | REVIEW | P0 | Codex | `docs/final-graduation-thesis-doc/` confirmed |
| T-003 | Check Mermaid rendering readiness through local `npx` and Mermaid CLI availability. | REVIEW | P1 | Codex | Rendering blocker recorded in `progress.md` |
| T-004 | Scan thesis-facing files for private workflow references before drafting. | REVIEW | P0 | Codex | Exclusion status recorded in `progress.md` |

---

## Phase 1: Planning and traceability

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-020 | Approve or revise the working thesis outline before chapter drafting. | DONE | P0 | User + Codex | Revised Chapter 2 direction and optimized drafting order approved by the user |
| T-021 | Build citation register with repository sources, thesis structure references, official Playwright docs, and testing theory sources. | IN_PROGRESS | P0 | Codex | `citation-register.md`; Chapter 2 official/theory source selection is registered |
| T-022 | Build evidence matrix for every planned chapter and mark gaps explicitly. | IN_PROGRESS | P0 | Codex | `evidence-matrix.md`; Chapter 2 source readiness and Chapter 5 execution/comparison evidence are updated with explicit boundaries |
| T-023 | Decide final citation style before literature review drafting. | DONE | P0 | User + Codex | APA 7th edition selected and recorded in tracking/reference files |
| T-024 | Verify source notes against `docs/final-graduation-thesis-doc/` before using thesis samples. | TODO | P1 | Codex | Source-note readiness notes |
| T-058 | Integrate supervisor feedback by making Chapter 2 the dedicated automation-testing foundations and framework-patterns chapter while preserving approved Chapters 3 and 4. | DONE | P0 | Codex | Updated `outline.md`, `plan.md`, `tasks.md`, `evidence-matrix.md`, `citation-register.md`, `figure-register.md`, and `progress.md` |
| T-059 | Collect and register Chapter 2 official documentation and testing-theory sources for automation benefits, POM, fixtures, API testing, DTOs, data-driven testing, and OOP/SOLID-oriented design. | DONE | P0 | Codex | Updated `citation-register.md`, `evidence-matrix.md`, `references.bib`, and `source-notes/chapter-2-source-selection.md` |
| T-061 | Audit and strengthen Chapter 2 foundations outline, planned visuals, and diagram-writing rules before drafting. | DONE | P0 | Codex | Updated `outline.md`, `diagram-workflow.md`, `thesis-diagramming` skill, `figure-register.md`, `evidence-matrix.md`, `citation-register.md`, source-note audit, and rendered Chapter 2 diagram pack |
| T-062 | Audit screenshot and non-diagram visual evidence needs across the thesis before Chapter 2 drafting. | DONE | P0 | Codex | `visual-evidence-register.md`, updated `AGENTS.md`, `outline.md`, `plan.md`, `tasks.md`, `progress.md`, `citation-register.md`, `evidence-matrix.md`, and `quality-checklist.md` |
| T-063 | Collect, sanitize, register, and insert approved screenshot evidence after the relevant evidence gate. | REVIEW | P0 | Codex | V-01/V-12 inserted in Chapter 3 as Figures 3.12-3.13; V-13 inserted in Chapter 4 as Figure 4.1; V-04 inserted in Chapter 5 as Figure 5.1; V-05 inserted in Chapter 5 as Figure 5.4 after loaded-trace capture and sanitization; V-06 represented through Chapter 5 tables. |
| T-064 | Compact `progress.md` by archiving historical progress entries by date while preserving current state and recent entries. | DONE | P0 | Codex | `progress.md`, `progress-archive/`, updated harness progress policy |
| T-066 | Define Chapter 1 section-length and concision guardrails before later full drafting. | DONE | P0 | Codex | Updated `chapters/chapter-1-introduction.md`, `outline.md`, `writing-style-guide.md`, `quality-checklist.md`, and `progress.md` |
| T-067 | Revise Chapter 5 after user feedback by adding Playwright/Cypress/Selenium comparison, tool-selection criteria, and concise automation-versus-manual analysis before approval. | DONE | P0 | Codex | Revised `chapter-5-evaluation-and-discussion.md`, updated comparison source note, citations, evidence matrix, outline, and refreshed Chapter 5 review artifact; approved by user on 2026-06-04 |
| T-068 | Condense revised Chapter 5 after user feedback by removing low-value sections and shortening explanatory prose while preserving evidence tables and result data. | DONE | P0 | Codex | Condensed `chapter-5-evaluation-and-discussion.md`, updated `outline.md`, `tasks.md`, `progress.md`, and refreshed Chapter 5 review artifact; approved by user on 2026-06-04 |
| T-069 | Integrate newly added external PDF benchmark references into Chapter 5 by converting PDFs, adapting benchmark charts from cited tables, and replacing lower-value sections with external benchmark context. | DONE | P0 | Codex | Converted reference Markdown files, generated Figure 5.2 and Figure 5.3, revised `chapter-5-evaluation-and-discussion.md`, updated evidence/citation/visual registers, and refreshed Chapter 5 review artifact; approved by user on 2026-06-04 |
| T-070 | Document the thesis harness figure and citation/reference management workflow for future learning. | DONE | P1 | Codex | `harness-citation-and-figure-guide.vi.md` |
| T-071 | Audit existing drafted chapters for necessary in-text citation coverage and strengthen Chapter 3/4 repository evidence citations. | DONE | P0 | Codex | Updated Chapter 3/4 in-text citations, `references.bib`, `citation-register.md`, and `reviews/in-text-citation-audit-2026-06-04.md` |
| T-072 | Formalize the necessary in-text citation placement rule across the thesis harness. | DONE | P0 | Codex | Updated `plan.md`, workspace `AGENTS.md`, `citation-register.md`, `quality-checklist.md`, `writing-style-guide.md`, `chapter-review-gate.md`, and `thesis-evidence-citation` skill |
| T-073 | Audit and refine the Chapter 1 outline, concision plan, and visual decision before full Chapter 1 drafting. | DONE | P0 | Codex | `reviews/chapter-1-outline-audit-2026-06-04.md`, updated Chapter 1 skeleton, outline, visual guidance, tasks, and progress |
| T-074 | Condense Chapter 1 after user feedback and remove separate Scope of the System and Success Criteria sections. | DONE | P0 | Codex | Completed and superseded by the further-condensed T-075 revision |
| T-075 | Further condense Chapter 1 by merging Project Aim and Objectives and removing Thesis Structure. | DONE | P0 | Codex | Completed and superseded by T-076, which renames the objective section to `1.3 Research Objectives` and adds problem-statement subsections |
| T-076 | Restructure Chapters 1-3 after user-approved outline change: keep Chapter 2 as Literature Review, move framework design mechanisms to Chapter 3, and preserve Chapter 4 for later review. | DONE | P0 | Codex | Revised Chapters 1-3, moved framework diagrams to Chapter 3, refreshed review artifacts, and approved by user on 2026-06-08 |
| T-077 | Review Chapter 4 for duplication or outdated section boundaries after the revised Chapters 1-3 are approved. | DONE | P0 | Codex | Chapter 4 restructured, optional fixes applied (stale trace sentence + figure alt-text deduplication), reviewed via formal gate (Opus 4.8), and approved by user on 2026-06-11 |
| T-078 | Refine Chapters 1-3 after follow-up feedback: align objectives and research questions, strengthen Chapter 2 citations/visual tables, and improve Chapter 3 section hierarchy. | DONE | P0 | Codex | Revised Chapters 1-3, updated citation/figure/table metadata, refreshed review artifacts, and approved by user on 2026-06-08 |
| T-079 | Strengthen academic research writing rules and refine Chapters 1-3 for general project framing, source diversity, and academic heading style. | DONE | P0 | Codex | Harness academic-style rules, Codex custom-instruction suggestion, revised Chapters 1-3, updated citation/evidence metadata, refreshed review artifacts, and approved by user on 2026-06-08 |
| T-080 | Optimize thesis progress storage by enforcing active-state progress, dated archives, and daily compaction rules across the harness. | DONE | P0 | Codex | `progress.md` compacted, `progress-archive/2026-06-03.md` refreshed, `2026-06-04.md` and `2026-06-05.md` created, and archive rules reinforced in harness files |
| T-081 | Revise Chapter 3 diagrams, heading names, evidence-boundary treatment, shared runtime context figure, and citation discipline after user feedback. | DONE | P0 | Codex | Revised Chapter 3, removed evidence-boundary diagram nodes and standalone evidence-boundary table, added F-17 shared runtime context figure, rendered SVG outputs, updated registers/harness rules, refreshed review artifact, and approved by user on 2026-06-08 |
| T-082 | Rewrite Chapter 5 — Evaluation and Discussion after user-requested quality improvement: deep pre-rewrite review, re-outline, full rewrite with resolved issues, and formal Chapter Review Gate run before user approval. | DONE | P0 | Claude | `chapters/chapter-5-evaluation-and-discussion.md` rewritten to the 8-section structure (5.1 Evaluation Approach; 5.2 Criteria; 5.3 Comparative Analysis with 5.3.1–5.3.3; 5.4 Verified Execution Results; 5.5 Automation vs Manual; 5.6 Discussion answering RQ1–RQ4; 5.7 Boundaries; 5.8 Summary). Six tables, four figures (5.1/5.4 in §5.4, 5.2/5.3 in §5.3.3), `garousi_mantyla_automation_2016` added in §5.5. Formal Chapter Review Gate passed (READY_FOR_USER_APPROVAL); approved by user on 2026-06-11. |
| T-084 | Pre-approval structural cleanup: (1) remove citations from Chapter 1 Section 1.3 Research Objectives; (2) remove §5.6 Discussion and §5.7 Evaluation Boundaries from Chapter 5 (content relocated to Chapter 6 §6.1/§6.3); (3) redesign Chapter 6 outline to 4-section academic structure (6.1 Discussion / 6.2 Conclusion / 6.3 Limitations / 6.4 Future Work); (4) add T-083 References task; update outline.md, tasks.md, progress.md, next-chat-handoff.md. | DONE | P0 | Claude | Chapter 1 Section 1.3 citations removed; Chapter 5 now ends at §5.5; Chapter 6 outline replaced; T-083 added; tracking files updated. |

---

## Phase 2: Chapter pre-drafting tasks

| ID | Chapter | Task | Status | Priority | Required evidence before drafting |
|---|---|---|---|---|---|
| CH1-PRE | Chapter 1: Introduction | Prepare introduction framing: background, problem significance, project problem statement, research objectives, and research questions. | DONE | P0 | Approved Chapter 5 evidence, `README.md`, `docs/project-overview.md`, `outline.md`, `evidence-matrix.md`; restructured by T-076 |
| CH2-PRE | Chapter 2: Literature Review | Collect academic/professional testing sources for software testing fundamentals, manual/automated testing approaches, modern web automation, E2E methodology, test case design, framework concepts, test data preparation, and reporting methodology. | DONE | P0 | ISTQB CTFL, ISTQB CTAL-TAE, ISTQB glossary terms, flaky-test literature, selected Playwright reporting/trace docs, APA 7th edition citation style decision; Chapter 2 uses literature-based tables rather than diagrams after T-078 |
| CH3-PRE | Chapter 3: Framework Design | Map architecture and framework-design claims to repository folders, fixtures, Page Objects, workflows, API services, DTOs, constants, config, project Copilot workflow, planned diagrams, and logical parent/sub-section hierarchy. | DONE | P0 | Repository structure, `playwright.config.ts`, `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/agents/`, `.github/prompts/`, `.claude/skills/`, Figures F-02/F-11/F-16/F-13/F-14/F-15/F-12/F-03/F-04/F-07 |
| CH3-AI-PRE | Chapter 3: AI-Assisted Automation Testing Workflow Design | Prepare the design evidence for the project Copilot Agentic-AI workflow as an automation-testing feature. | DONE | P0 | `docs/thesis-workspace/source-notes/copilot-agentic-automation-workflow.md`, `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/agents/`, `.github/prompts/`, `.claude/skills/`, Figure F-07/F-08 |
| CH4-PRE | Chapter 4: Implementation | Map implementation claims to representative source files and configuration evidence. | DONE | P0 | Tests, Page Objects, services, utilities, DTOs, constants, config |
| CH4-AI-PRE | Chapter 4: Copilot Agentic Workflow Implementation | Map implementation evidence for repository instructions, agents, prompts, and skills used for automation test development. | DONE | P0 | `docs/thesis-workspace/source-notes/copilot-agentic-automation-workflow.md`, `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/agents/`, `.github/prompts/`, `.claude/skills/`, Figure F-09/F-10 |
| CH5-PRE | Chapter 5: Evaluation and Discussion | Collect actual execution results, reports, traces, screenshots, and limitation evidence. | DONE | P0 | Verified `2026-06-03` full-suite output, `results.xml`, HTML report screenshot, and supplemental trace artifact; loaded trace-viewer screenshot remains optional/needs replacement before insertion |
| CH6-PRE | Chapter 6: Conclusion and Future Work | Wait for reviewed Chapters 1-5 and verified evaluation evidence. Outline restructured 2026-06-11: new 4-section structure (6.1 Discussion / 6.2 Conclusion / 6.3 Limitations / 6.4 Future Work). §5.6 Discussion and §5.7 Boundaries content relocated here from Chapter 5. | DONE | P0 | Reviewed chapters, verified evaluation evidence — unblocked after Chapter 5 approval; completed before Codex draft |

---

## Phase 3: Drafting gates

Drafting order:

1. Chapter 3: Framework Design
2. Chapter 4: Implementation
3. Chapter 2 source and citation preparation
4. Chapter 2: Literature Review
5. Chapter 1 pre-drafting alignment only
6. Evidence Gate: collect actual test execution, report, trace, screenshot, and `results.xml` evidence
7. Chapter 5: Evaluation and Discussion
8. Chapter 1: Introduction
9. User-approved restructuring pass for Chapters 1-3
10. Follow-up refinement pass for Chapters 1-3 citation discipline, objective-question alignment, and section hierarchy
11. Academic-style refinement pass for Chapters 1-3: research-report voice, generalized framework framing, Chapter 2 source diversity, and Chapter 3 concept/heading style
12. Chapter 4 duplication review after revised Chapters 1-3 are approved
13. Chapter 6: Conclusion and Future Work
14. Appendices
15. Front matter
16. Final `thesis.md` assembly

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-042 | Draft Chapter 3 only after architecture evidence and figures are ready. | DONE | P0 | Codex | Original Chapter 3 draft completed earlier; subsequent Chapter 3 hierarchy and diagram refinements were approved by the user on 2026-06-08 |
| T-043 | Draft the Chapter 3 project Copilot workflow design subsection only after `CH3-AI-PRE` is reviewed and F-07/F-08 are reviewed. | DONE | P0 | Codex | Section in `chapters/chapter-3-system-analysis-and-design.md` |
| T-044 | Draft Chapter 4 only after implementation evidence mapping is ready. | DONE | P0 | Codex | `chapters/chapter-4-implementation.md` |
| T-045 | Draft the Chapter 4 project Copilot workflow implementation subsection only after `CH4-AI-PRE` and F-09/F-10 are reviewed. | DONE | P0 | Codex | Section in `chapters/chapter-4-implementation.md` |
| T-046 | Draft Chapter 2 only after official/theory citations are selected. | DONE | P0 | Codex | Original Chapter 2 concise revision was approved on 2026-06-03; later Literature Review citation/table refinement was approved by the user on 2026-06-08 |
| T-047 | Prepare Chapter 1 framing skeleton only after Chapter 2 is approved; do not draft full Chapter 1 prose yet. | DONE | P0 | Codex | `chapters/chapter-1-introduction.md` framing skeleton prepared; full prose is now unblocked by Chapter 5 approval and T-073 outline audit |
| T-049 | Draft Chapter 5 only after actual execution evidence is collected. | DONE | P0 | Codex | `chapters/chapter-5-evaluation-and-discussion.md`; revised with tool-selection comparison, condensed after user feedback, strengthened with external benchmark context, reviewed, and approved by user on 2026-06-04 |
| T-040 | Draft full Chapter 1 only after Chapter 5 evaluation evidence and discussion are reviewed. | DONE | P0 | Codex | Chapter 1 revised under T-079 with generalized framework framing, no Chapter 1 folder/path exposition, and four research objectives aligned to four research questions; approved by user on 2026-06-08 |
| T-051 | Draft Chapter 6 only after Chapter 5 is approved. New 4-section structure: 6.1 Discussion / 6.2 Conclusion (integrated conclusion covering research objectives and RQ1–RQ4) / 6.3 Limitations (5 focused limitation themes in prose) / 6.4 Future Work (4 future-work directions in prose). No Key Contributions subsection. Keep concise and analytical. | DONE | P0 | Codex + Claude | `chapters/chapter-6-conclusion-and-future-work.md` drafted by Codex on 2026-06-11. Claude ran the independent Formal Chapter Review Gate (`reviews/chapter-6-review.md`, READY_FOR_USER_APPROVAL after three minor fixes applied) and the user approved Chapter 6 on 2026-06-11. Chapter 6 is final. |
| T-052 | Review each chapter through the formal Chapter Review Gate before approval. | DONE | P0 | Codex | Chapters 1-3 approved by user on 2026-06-08; Chapter 4 approved by user on 2026-06-11; Chapter 5 approved earlier |
| T-053 | Review project Copilot workflow sections through the technical and evidence/citation portions of the Chapter Review Gate. | DONE | P0 | Codex | Chapter 3 and revised Chapter 4 gates confirm evidence grounding and private-harness exclusion |
| T-054 | Create and adopt the formal Chapter Review Gate workflow for chapter approvals. | DONE | P0 | Codex | `chapter-review-gate.md`, updated review prompt, reviewer agent, skill, checklist, plan, tasks, and progress |
| T-055 | Run the formal Chapter Review Gate on Chapter 3 before user approval. | DONE | P0 | Codex | `reviews/chapter-3-review.md` and Chapter 3 gate summary table for user approval |
| T-056 | Create a concise daily prompting guide for using the thesis harness. | DONE | P1 | Codex | `daily-prompting-guide.md` |
| T-057 | Run the formal Chapter Review Gate on Chapter 4 before user approval. | DONE | P0 | Codex | `reviews/chapter-4-review.md` and Chapter 4 gate summary table for user approval |

---

## Phase 4: Front matter, appendices, and final assembly

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-030 | Prepare title page and approval-page placeholders after final VNUK formatting details are confirmed. | IN_PROGRESS | P0 | Claude | Title page complete; approval page filled with advisor (Dr. Le Dinh Dung), department chair (Dr. Le Dinh Dung), and Co-Advisor=None (individual project) on 2026-06-12. Defense committee members deferred by user until the thesis defense. |
| T-032 | Draft definitions and abbreviations after terminology is fixed in chapters. | DONE | P0 | Codex | `front-matter/definitions.md`, `front-matter/abbreviations.md` drafted with source-attributed definitions and a terminology-matched abbreviation table. |
| T-035 | Draft acknowledgements after user-provided personal acknowledgements are available. | DONE | P1 | User + Claude | `front-matter/acknowledgements.md` written on 2026-06-12 per user scope: thanks the supervisor (Dr. Le Dinh Dung) and the VNUK Institute faculty/staff only. No AI-tool or private-workflow acknowledgement. |
| T-036 | Draft abstract after Chapters 1, 3, 4, and 5 are stable. | DONE | P0 | Codex | `front-matter/abstract.md` drafted from the approved chapters, verified execution evidence, tool-selection rationale, contribution, limitations, and future-work scope. |
| T-060 | Draft appendices after installation, scenario, source-map, and report evidence are verified. | DONE | P1 | Codex | Drafted Appendix A Installation and Execution Guide, Appendix B Test Scenario Matrix, Appendix C Framework Source Code Map, expanded Appendix D Sample Reports and Trace Evidence, and added Appendix E Copilot Agentic-AI Workflow Artifacts. |
| T-083 | Draft References section after all chapters, citations, and `citation-register.md` are finalized. Convert all `[@key]` citation keys to APA 7th edition formatted reference entries. Verify each key exists in `references.bib`. | DONE | P0 | Codex | `references/references.md` drafted with APA 7-style entries for the 72 citation keys used in Chapters 1-6; all bracket citation keys resolve to `references.bib`. |
| T-065 | Assemble `thesis.md` only after all chapter and appendix sources are reviewed. | DONE | P0 | Codex | `thesis.md` assembled from approved front matter, Chapters 1-6, References, and Appendices A-E; citation and image links verified on 2026-06-12. |

---

## Phase 5: LaTeX / Overleaf migration

This phase converts the finished, approved Markdown thesis into a professional LaTeX project for an Overleaf Premium account. Markdown remains the academic-content source of truth until the migration is fully approved; conversion changes presentation/structure only, never prose.

**Execution source of truth (both Codex and Claude):** `docs/thesis-workspace/latex-migration/latex-migration-spec.md`. Supporting rationale/background: `docs/Latex_approach_recommendation.md`; reference sample: `docs/thesis_latex_overleaf_structure_sample/`. Locked decisions: compiler **pdfLaTeX + Biber**, bibliography **APA 7th (`biblatex` `style=apa`)** (the sample's IEEE style is not reused), VNUK official template takes precedence over the friend's sample.

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-091 | Planning/audit (no content edits): audit VNUK official template + friend's LaTeX sample against `latex-migration-spec.md`, confirm margins/decisions, finalize the folder tree. | DONE | P0 | Claude | Audit recorded in `latex-migration/latex-migration-spec.md` Section 11. Structure/format/folder-tree confirmed. Citation-style conflict RESOLVED: user confirmed APA 7 on 2026-06-12 (template IEEE line overridden). MiKTeX installed and verified; no tooling prerequisite remains before T-092. |
| T-090 | Phase 0 content freeze: confirm all chapters approved, front matter + appendices + References complete, no `NEEDS_EVIDENCE`/`NEEDS_CITATION`, citation register and `.bib` synced, figures/tables registered; create a git checkpoint and `task/thesis-latex-migration` branch. | DONE | P0 | Codex | Markdown baseline frozen; freeze audit saved in `reviews/latex-freeze-audit-2026-06-12.md`; git checkpoint and migration branch created. |
| T-092 | Phase 1 bootstrap LaTeX skeleton under `docs/thesis-latex/` (main.tex, config/, frontmatter/, 6 chapter placeholders, appendices/, bibliography/, figures/, scripts/) and migration harness (`thesis-latex-migration` skill + LaTeX architect agent + `latex-migration/` control docs). Fix the sample's `frontmatter.tex` page-numbering bug. No content conversion. | TODO | P0 | Codex | `docs/thesis-latex/` skeleton; harness files |
| T-093 | Phase 2 convert chapters 1–6 from approved Markdown to LaTeX, one chapter per approval gate (compile + content-equivalence + visual review before next chapter). | BLOCKED | P0 | Codex | `docs/thesis-latex/chapters/0X-*.tex` |
| T-094 | Phase 2 convert front matter: cover, approval/declaration, acknowledgements, abstract, abbreviations, definitions, author contribution — using the author/supervisor metadata from `README.md`, not the sample's personal data. | BLOCKED | P0 | Codex | `docs/thesis-latex/frontmatter/*.tex` |
| T-095 | Phase 2 convert appendices A–E to LaTeX. | BLOCKED | P1 | Codex | `docs/thesis-latex/appendices/*.tex` |
| T-096 | Bibliography migration: port `references.bib`, set `biblatex style=apa` (APA 7 confirmed by user 2026-06-12), verify every `[@key]`/`\cite{}` resolves and no unused/undefined entries remain. | BLOCKED | P0 | Codex | `docs/thesis-latex/bibliography/references.bib` |
| T-097 | Figure migration: convert Mermaid SVG masters to PDF vector for LaTeX; keep screenshots as PNG; update figure paths. | BLOCKED | P1 | Codex | `docs/thesis-latex/figures/**` |
| T-098 | Final LaTeX/Overleaf readiness QA gate: clean `latexmk` compile, VNUK front-matter order, numbering, cross-references, citation keys, margins/typography, content parity, no leftover PLACEHOLDER/NEEDS_INPUT. | BLOCKED | P0 | Claude | `docs/thesis-workspace/reviews/latex-readiness-review.md` |
| T-099 | Overleaf Premium Git sync: create dedicated Overleaf project, clone as separate folder, push the LaTeX project, and document the pull/compile/push protocol. | BLOCKED | P1 | User + Codex | Overleaf project + `latex-migration/overleaf-sync-guide.md` |

---

## Diagram and figure tasks

| ID | Task | Target file(s) | Status |
|---|---|---|---|
| DIA-001 | Confirm diagram workflow and Mermaid rendering path. | `diagram-workflow.md`, `scripts/render-diagrams.mjs` | REVIEW |
| DIA-002 | Review and simplify framework architecture diagram source against repository structure. | `assets/diagrams/src/framework-architecture.mmd`, `assets/diagrams/out/framework-architecture.svg` | DONE |
| DIA-003 | Review UI and API execution flow diagram sources against tests, fixtures, workflows, Page Objects, services, and utilities. | `assets/diagrams/src/ui-test-execution-flow.mmd`, `assets/diagrams/src/api-test-execution-flow.mmd` | REVIEW |
| DIA-004 | Create/review Playwright reporting diagram against config; keep the archived evaluation workflow out of planned thesis insertion unless explicitly re-approved. | `assets/diagrams/src/playwright-reporting-pipeline.mmd`, `assets/diagrams/out/playwright-reporting-pipeline.svg`, `assets/diagrams/src/evaluation-workflow.mmd` | REVIEW |
| DIA-005 | Create, simplify, split, and render thesis-safe Copilot Agentic-AI workflow diagrams for automation test development only. | `figure-register.md`, `assets/diagrams/src/copilot-agentic-automation-workflow.mmd`, `assets/diagrams/src/copilot-test-case-design-workflow.mmd`, `assets/diagrams/src/copilot-script-generation-workflow.mmd`, `assets/diagrams/src/copilot-code-review-workflow.mmd` | DONE |
| DIA-006 | Render planned diagram sources to SVG; F-01 and F-06 remain rendered archive assets and are excluded from planned thesis insertion. | `assets/diagrams/out/` | REVIEW |
| DIA-007 | Review rendered diagrams for readability and thesis-safe content before chapter insertion. | `figure-register.md`, `assets/diagrams/out/` | REVIEW |
| DIA-008 | Create or revise the Page Object Model concept diagram; after T-076 it is inserted in Chapter 3. | `assets/diagrams/src/page-object-model-concept.mmd`, `assets/diagrams/out/page-object-model-concept.svg`, `figure-register.md` | DONE |
| DIA-009 | Strengthen diagram-writing rules for technically richer but bounded thesis diagrams. | `.agents/skills/thesis-diagramming/SKILL.md`, `diagram-workflow.md` | DONE |
| DIA-010 | Create and render focused framework mechanism diagrams; after T-076 they are inserted in Chapter 3. | `assets/diagrams/src/automation-framework-concept-map.mmd`, `fixture-dependency-injection-flow.mmd`, `api-service-abstraction-pipeline.mmd`, `test-data-dto-cleanup-strategy.mmd` | DONE |
| DIA-011 | Simplify selected framework mechanism diagrams after readability feedback while preserving key technical labels. | `page-object-model-concept.mmd`, `api-service-abstraction-pipeline.mmd`, `test-data-dto-cleanup-strategy.mmd`, `fixture-dependency-injection-flow.mmd` | DONE |
| DIA-012 | Add a practical Page Object Model application workflow and fix the fixture diagram overlapping edge label; after T-076 this workflow is inserted in Chapter 3. | `page-object-model-application-workflow.mmd`, `page-object-model-application-workflow.svg`, `fixture-dependency-injection-flow.mmd`, `fixture-dependency-injection-flow.svg` | DONE |
| DIA-013 | Exclude nonessential test-pyramid and evaluation-workflow diagrams from planned thesis insertion; original Chapter 2 figure numbering was superseded by T-076 Chapter 3 renumbering. | `figure-register.md`, `outline.md`, `tasks.md`, `evidence-matrix.md`, `plan.md`, `diagram-workflow.md`, `progress.md` | DONE |
| DIA-014 | Revise active Chapter 3 diagrams after feedback: remove evidence-boundary nodes, redraw POM concept, add shared runtime context flow, and render updated SVG outputs. | `page-object-model-concept.mmd`, `api-service-abstraction-pipeline.mmd`, `test-data-dto-cleanup-strategy.mmd`, `automation-framework-concept-map.mmd`, `shared-runtime-context-flow.mmd`, `figure-register.md` | DONE |

---

## Screenshot and visual evidence tasks

| ID | Task | Target file(s) | Status |
|---|---|---|---|
| VIS-001 | Create a register for non-diagram visual evidence and define screenshot safety rules. | `visual-evidence-register.md`, `figure-register.md`, `README.md` | DONE |
| VIS-002 | Identify chapter-level screenshot candidates without drafting or inserting them. | `outline.md`, `visual-evidence-register.md` | DONE |
| VIS-003 | Collect optional Unsplash SUT and UI/API scenario screenshots after capture safety review. | `assets/figures/`, `visual-evidence-register.md` | REVIEW |
| VIS-004 | Collect verified Playwright HTML report, trace viewer, terminal output, and `results.xml` screenshots after the execution-evidence gate. | `assets/figures/`, `appendices/appendix-d-sample-reports.md`, `visual-evidence-register.md` | REVIEW |
| VIS-006 | Capture or register VS Code Test Explorer and Playwright panel screenshot for Chapter 4 implementation context if a safe local image is available. | `assets/figures/vscode-test-explorer-playwright-panel.png`, `visual-evidence-register.md` | DONE |
| VIS-005 | Review any external images, benchmark charts, model figures, or thesis-sample captures for citation value and license/copyright suitability before use. | `citation-register.md`, `references/references.bib`, `visual-evidence-register.md` | REVIEW |

---

## Active task protocol

When thesis work starts, update this board and `progress.md` in the same work session. Keep `progress.md` compact: it should contain current status, archive index, the current-day entry or latest handoff, and the next recommended task. Before ending a thesis work session, move progress entries from previous dates into `progress-archive/YYYY-MM-DD.md` and update the archive index. Keep thesis-facing content free from private workflow, private agent, private skill, and personal AI-assisted writing-process references.
