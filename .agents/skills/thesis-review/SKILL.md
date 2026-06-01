---
name: thesis-review
description: Use this skill when reviewing thesis drafts for VNUK structure, academic quality, evidence coverage, citation consistency, and final-readiness.
---

# Thesis Review Skill

## Trigger

Use this skill when the user asks for:

- chapter review
- final consistency pass
- VNUK compliance review
- academic English review
- citation/evidence review
- pre-submission QA

## Review checklist

1. VNUK structure compliance
2. alignment with `outline.md`
3. academic tone and clarity
4. logical flow and transitions
5. evidence support for technical claims
6. citation support for theory and documentation claims
7. figure/table numbering and captions
8. unresolved `NEEDS_EVIDENCE` or `NEEDS_SOURCE` markers
9. no copied or overly similar sample thesis wording
10. Word-template migration readiness

## Output format

Return:

- overall verdict: `READY`, `READY_WITH_MINOR_FIXES`, `NEEDS_REVISION`, or `BLOCKED`
- strengths
- required fixes
- optional improvements
- evidence/citation issues
- final approval recommendation

## Private workflow exclusion

Do not include the private Codex thesis-writing workflow, private agents, private skills, or personal AI-assisted writing process in the thesis body, front matter, figures, references, or appendices.
