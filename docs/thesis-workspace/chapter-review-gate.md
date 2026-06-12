# Chapter Review Gate Workflow

This workflow defines the formal review gate that must run after each chapter draft and before the chapter is submitted to the user for approval. It is private thesis-writing harness infrastructure and must not appear in the thesis body, front matter, appendices, references, figures, captions, or final Word document.

## Purpose

The Chapter Review Gate turns the existing chapter approval checkpoint into a repeatable, evidence-grounded review process. It verifies that each drafted chapter is academically coherent, technically accurate, supported by evidence and citations, and consistent with registered figures and visual evidence before the user decides whether the chapter can be accepted.

## Preconditions

Before running this gate:

1. The target chapter draft exists under `docs/thesis-workspace/chapters/`.
2. `docs/thesis-workspace/outline.md` has been checked for the chapter structure and intended scope.
3. `docs/thesis-workspace/evidence-matrix.md` and `docs/thesis-workspace/citation-register.md` have been checked for claim support.
4. `docs/thesis-workspace/figure-register.md` has been checked for any diagram figures used in the chapter.
5. `docs/thesis-workspace/visual-evidence-register.md` has been checked for any screenshots, report captures, browser captures, or external images used in the chapter.
6. The chapter task in `docs/thesis-workspace/tasks.md` is in `REVIEW` or another review-ready state.

If any precondition is missing, the gate verdict is `BLOCKED`.

## Reviewer Roles

| Review Role | Responsibility |
|---|---|
| Academic thesis reviewer | Check VNUK structure alignment, outline alignment, heading consistency, academic research-report tone, paragraph flow, no README/repository-documentation voice, no informal or marketing language, no copied or closely paraphrased sample-thesis wording, concise conceptual section titles, logical parent/sub-section hierarchy, and Word-template migration readiness. |
| Technical reviewer | Check repository-grounded architecture and implementation claims, source-path correctness, Playwright and TypeScript framework accuracy, implementation boundaries, secret leakage risk, overclaiming, and the boundary between the project Copilot automation-testing workflow and the private thesis-writing harness. |
| Evidence/citation auditor | Check that technical claims map to `evidence-matrix.md`, external/tool/theory claims map to `citation-register.md`, specialized concepts are not self-defined, Chapter 2 definitions and literature claims use appropriate academic/professional source attribution, source coverage is not over-dependent on one source family when broader literature is available, necessary in-text citations appear where readers need source attribution, citations are not repeated excessively after every sentence, result claims remain `NEEDS_EVIDENCE` unless verified, unsupported metrics are absent, sample theses are used only for structure, and unresolved `NEEDS_EVIDENCE` or `NEEDS_SOURCE` markers are listed. |
| Figure and visual evidence reviewer | Check that diagram figures are registered in `figure-register.md`; screenshots and external visuals are registered in `visual-evidence-register.md`; all figures have captions, are cited in body text, are grounded in evidence, are readable for Word/PDF use, and exclude secrets, private account data, and private thesis-harness content. |

## Verdict Rules

| Verdict | Meaning |
|---|---|
| `READY_FOR_USER_APPROVAL` | No blocking issues remain; the chapter can be presented to the user for approval. |
| `READY_WITH_MINOR_FIXES` | Small fixes are needed, but there is no structural, evidence, citation, figure, or visual-evidence blocker. |
| `NEEDS_REVISION` | The chapter requires revision and should be re-reviewed before user approval. |
| `BLOCKED` | Missing evidence, missing sources, missing figures, unsafe screenshots, unlicensed external visuals, or unresolved scope conflicts prevent meaningful approval. |

The gate can recommend approval, but it must not mark a chapter as final or move the next chapter forward without explicit user approval.

## Review Artifact

Every gate run must save the complete review result under `docs/thesis-workspace/reviews/`.

Use this naming convention:

- Chapter 1: `docs/thesis-workspace/reviews/chapter-1-review.md`
- Chapter 2: `docs/thesis-workspace/reviews/chapter-2-review.md`
- Chapter 3: `docs/thesis-workspace/reviews/chapter-3-review.md`
- Chapter 4: `docs/thesis-workspace/reviews/chapter-4-review.md`
- Chapter 5: `docs/thesis-workspace/reviews/chapter-5-review.md`
- Chapter 6: `docs/thesis-workspace/reviews/chapter-6-review.md`

The saved artifact must include the Chapter Review Gate Summary table, detailed findings by role, unresolved blockers, and the final approval recommendation. Saving the review artifact does not imply user approval.

## Required Inputs

Read these files for every gate run:

- `AGENTS.md`
- `docs/thesis-workspace/AGENTS.md`
- `docs/thesis-workspace/outline.md`
- `docs/thesis-workspace/plan.md`
- `docs/thesis-workspace/tasks.md`
- `docs/thesis-workspace/progress.md`
- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/citation-register.md`
- `docs/thesis-workspace/figure-register.md`
- `docs/thesis-workspace/visual-evidence-register.md`
- `docs/thesis-workspace/quality-checklist.md`
- `docs/thesis-workspace/writing-style-guide.md`
- target chapter file

For Chapter 2, also verify claims C-005 to C-007, C-040, C-060, and C-061 in `evidence-matrix.md`; verify that specialized definitions have source attribution and that Tables 2.1 to 2.4 are captioned and cited in the body.

For Chapter 3, also verify claims C-008 to C-011, C-025 to C-026, C-030 to C-032, and C-042 to C-052 plus C-063 to C-064 in `evidence-matrix.md`, and figures F-02, F-11, F-16, F-13, F-17, F-14, F-15, F-12, F-03, F-04, and F-07 in `figure-register.md`. F-08 may be noted as reviewed but intentionally not inserted.

For Chapter 1, also verify that Unsplash is framed as the selected demonstration system or selected system under test, not as the only possible target of the framework; that Chapter 1 does not explain repository folders or file paths; and that research objectives and research questions remain logically aligned.

For Chapter 3, also verify that concept introductions use source attribution before project application where needed, and that listing-style headings such as "Reporting, Debugging, and Traceability" are replaced by broader academic headings such as "Execution Evidence and Debugging Support" with sub-sections when appropriate.

## Output Format

```markdown
# Chapter Review Gate Summary

Chapter:
Draft file:
Review date:
Overall verdict: READY_FOR_USER_APPROVAL | READY_WITH_MINOR_FIXES | NEEDS_REVISION | BLOCKED
Approval recommendation:

| Review Role | Verdict | Required Fixes | Optional Improvements | Evidence / Citation / Figure / Visual Notes | Approval Impact |
|---|---|---|---|---|---|
| Academic thesis reviewer |  |  |  |  |  |
| Technical reviewer |  |  |  |  |  |
| Evidence/citation auditor |  |  |  |  |  |
| Figure and visual evidence reviewer |  |  |  |  |  |

| Gate Item | Status | Notes |
|---|---|---|
| Can chapter move to user approval? |  |  |
| Can chapter be marked DONE after user approval? |  |  |
| Can the next chapter begin? |  |  |
```

## Approval Rules

- If the overall verdict is `READY_FOR_USER_APPROVAL`, present the table to the user and wait for approval.
- If the overall verdict is `READY_WITH_MINOR_FIXES`, list the fixes clearly and ask whether to apply them before approval.
- If the overall verdict is `NEEDS_REVISION`, revise only after the user approves the revision scope.
- If the overall verdict is `BLOCKED`, do not mark the chapter as complete or start the next chapter.
- Save every gate result under `docs/thesis-workspace/reviews/` before asking for final user approval.
- After explicit user approval, update `tasks.md` and `progress.md` to reflect the approved chapter state.

## Chapter 3 Gate Notes

After the T-078 refinement, the Chapter 3 gate must verify that related framework mechanisms are grouped under logical parent sections and sub-sections rather than presented as an overly flat sequence of peer-level headings.

After the T-081 Chapter 3 revision, the gate must also verify that evidence-boundary content is not presented as low-value diagram nodes or as a standalone Chapter 3 design table; it should remain concise scope prose in Chapter 3 and detailed evaluation-boundary discussion should remain in Chapter 5.
