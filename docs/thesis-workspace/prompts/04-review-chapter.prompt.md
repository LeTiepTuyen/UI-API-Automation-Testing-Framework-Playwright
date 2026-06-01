# Prompt: Review One Chapter

Replace `<CHAPTER_FILE>` before using.

```text
/review Use the thesis-reviewer and thesis-citation-auditor agents.

Task: review <CHAPTER_FILE>.

Read:
- docs/thesis-workspace/outline.md
- docs/thesis-workspace/evidence-matrix.md
- docs/thesis-workspace/citation-register.md
- docs/thesis-workspace/quality-checklist.md
- <CHAPTER_FILE>

Review criteria:
- VNUK structure alignment
- academic English quality
- logical flow
- evidence coverage
- citation coverage
- unresolved NEEDS_EVIDENCE or NEEDS_SOURCE markers
- figure/table references
- no copied sample-thesis wording

Return:
- verdict
- required fixes
- optional improvements
- citation/evidence issues
- whether the chapter can move to DONE
Do not edit unless I explicitly approve.
```
```
