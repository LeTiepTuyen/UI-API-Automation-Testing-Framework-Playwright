---
name: thesis-drafting
description: Use this skill when drafting or revising a thesis chapter, front-matter section, appendix, or the final thesis Markdown in formal academic English.
---

# Thesis Drafting Skill

## Trigger

Use this skill for drafting:
- front matter (abstract, acknowledgements, table of contents)
- chapter sections
- appendices
- thesis summary
- final `thesis.md`

## Required inputs

Before drafting, read:
- `docs/thesis-workspace/outline.md`
- the target chapter or section file
- relevant entries in `docs/thesis-workspace/evidence-matrix.md`
- relevant entries in `docs/thesis-workspace/citation-register.md`
- `docs/thesis-workspace/progress.md` to confirm the current approval gate allows drafting

## Drafting rules

- Use formal academic English.
- Write thesis prose as an academic research report, not as README content, repository documentation, or a technical note.
- Prefer research framing: "this research", "this study", "the proposed framework", "the implemented framework".
- Avoid "the repository" in thesis prose unless mapping implementation evidence in design, implementation, appendices, or evidence tables.
- Do not self-define academic testing concepts; use academic, official, or professional source attribution with APA 7 in-text citations.
- Do not copy or closely paraphrase any thesis sample.
- Mark missing project evidence as `NEEDS_EVIDENCE`.
- Mark missing theory or tool source support as `NEEDS_SOURCE`.
- Do not invent citation keys, page numbers, URLs, result metrics, or test outputs.
- Do not include private Claude or Codex thesis-writing harness details in thesis prose.
- The Copilot Agentic-AI workflow may appear only as a project automation-testing feature.
- Do not place raw repository folder/file paths in Chapter 1.

## After drafting

Update:
- `docs/thesis-workspace/progress.md`
- `docs/thesis-workspace/tasks.md`
- `docs/thesis-workspace/next-chat-handoff.md`
- `docs/thesis-workspace/evidence-matrix.md` if new evidence was used
- `docs/thesis-workspace/citation-register.md` if new citations were added

## Output format

Return the drafted prose inline, then a short summary of:
- what was added or revised
- any `NEEDS_EVIDENCE` or `NEEDS_SOURCE` markers placed
- which tracking files were updated
