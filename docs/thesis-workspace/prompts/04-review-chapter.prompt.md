# Prompt: Chapter Review Gate

Replace `<CHAPTER_FILE>` before using.

```text
/review Use the thesis-reviewer, thesis-technical-reviewer, thesis-citation-auditor, and thesis-diagram-architect agents.

Task: run the formal Chapter Review Gate for <CHAPTER_FILE>.
Save the complete review result as docs/thesis-workspace/reviews/chapter-X-review.md, where X is the chapter number.

Read:
- AGENTS.md
- docs/thesis-workspace/AGENTS.md
- docs/thesis-workspace/chapter-review-gate.md
- docs/thesis-workspace/outline.md
- docs/thesis-workspace/plan.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/progress.md
- docs/thesis-workspace/evidence-matrix.md
- docs/thesis-workspace/citation-register.md
- docs/thesis-workspace/figure-register.md
- docs/thesis-workspace/quality-checklist.md
- docs/thesis-workspace/writing-style-guide.md
- <CHAPTER_FILE>

Review criteria:
- Academic thesis review: VNUK structure alignment, outline alignment, heading consistency, academic tone, paragraph flow, no informal or marketing language, no copied or closely paraphrased sample-thesis wording, and Word-template migration readiness.
- Technical review: repository-grounded architecture and implementation claims, correct source paths, correct Playwright + TypeScript framework descriptions, no invented architecture details, no source-code modification claims, no secret or token exposure, and a clear boundary between the project Copilot automation-testing workflow and the private thesis-writing harness.
- Evidence/citation audit: every technical claim maps to evidence-matrix.md, external/theory/tool claims map to citation-register.md, result claims remain NEEDS_EVIDENCE unless verified, no unsupported metrics, sample theses are used only for structure, and unresolved NEEDS_EVIDENCE / NEEDS_SOURCE markers are listed.
- Diagram review: figures used in the chapter are registered in figure-register.md, have captions, are cited in body text, have editable sources and rendered outputs where required, are grounded in evidence, are readable for Word/PDF use, and do not contain private thesis-harness content.

For Chapter 3 specifically:
- Review claims C-008 to C-011, C-025 to C-026, and C-030 to C-032.
- Verify figures F-02, F-03, F-04, and F-07 because they are inserted in the draft.
- Note that F-08 was reviewed but intentionally not inserted.
- Flag whether the figure-register statuses for inserted figures need normalization.

Return:
- the exact Chapter Review Gate Summary table defined in docs/thesis-workspace/chapter-review-gate.md
- overall verdict: READY_FOR_USER_APPROVAL, READY_WITH_MINOR_FIXES, NEEDS_REVISION, or BLOCKED
- approval recommendation
- whether the chapter can move to user approval
- whether the chapter can be marked DONE after explicit user approval
- whether the next chapter can begin after explicit user approval
- the saved review artifact path

Do not edit unless I explicitly approve.
Do not mark the chapter final automatically.
Do not invent evaluation metrics, execution results, citations, architecture details, or implementation results.
```
