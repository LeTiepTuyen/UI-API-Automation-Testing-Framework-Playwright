# Prompt: Draft One Chapter

Replace `<CHAPTER_FILE>` and `<CHAPTER_NUMBER>` before using.

```text
Use the thesis-drafter agent and $thesis-drafting skill.

Task: draft only <CHAPTER_FILE> for Chapter <CHAPTER_NUMBER>.

Read first:
- docs/thesis-workspace/outline.md
- docs/thesis-workspace/plan.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/evidence-matrix.md
- docs/thesis-workspace/citation-register.md
- the target chapter file

Rules:
- Write in formal academic English.
- Follow outline.md exactly.
- Use repository evidence for implementation claims.
- Use citation-register.md for external theory/tool claims.
- Insert NEEDS_EVIDENCE where exact metrics, screenshots, or command outputs are missing.
- Do not modify other chapters unless necessary for consistency; if necessary, ask first.
- After drafting, update tasks.md and progress.md.

Stop when the chapter is ready for review.
```
```
