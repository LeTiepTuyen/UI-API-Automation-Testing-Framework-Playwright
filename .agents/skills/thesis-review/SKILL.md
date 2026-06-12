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

Use the formal Chapter Review Gate when reviewing a chapter draft. The gate has four perspectives:

1. Academic thesis review:
   - VNUK structure compliance
   - alignment with `outline.md`
   - heading consistency
   - academic research-report tone and clarity
   - no README/repository-documentation voice in thesis prose
   - no raw folder/file-path explanation in Chapter 1
   - concise conceptual headings rather than listing-style headings
   - logical parent/sub-section hierarchy for grouped mechanisms
   - logical flow and transitions
   - no copied or overly similar sample-thesis wording
   - Word-template migration readiness
2. Technical review:
   - repository-grounded architecture and implementation claims
   - correct source paths
   - accurate Playwright + TypeScript framework descriptions
   - no invented architecture details
   - no source-code modification claims unless explicitly requested and actually performed
   - no credential, token, or runtime secret exposure
   - clear boundary between the project Copilot automation-testing workflow and the private thesis-writing harness
3. Evidence/citation audit:
   - evidence support for technical claims
   - citation support for theory, documentation, and external claims
   - source-attributed definitions for academic or specialized testing concepts
   - source diversity for Literature Review chapters where broader academic/professional literature exists
   - result claims remain `NEEDS_EVIDENCE` until verified
   - unresolved `NEEDS_EVIDENCE` or `NEEDS_SOURCE` markers are listed
   - no unsupported metrics
   - sample theses used only for structure
4. Diagram review:
   - figure/table numbering and captions
   - figures are registered in `figure-register.md`
   - figures have editable sources and rendered outputs where required
   - figure references appear in the chapter body
   - diagram content is evidence-grounded and thesis-safe

## Output format

Return the Chapter Review Gate Summary:

```markdown
# Chapter Review Gate Summary

Chapter:
Draft file:
Review date:
Overall verdict: READY_FOR_USER_APPROVAL | READY_WITH_MINOR_FIXES | NEEDS_REVISION | BLOCKED
Approval recommendation:

| Review Role | Verdict | Required Fixes | Optional Improvements | Evidence / Citation / Figure Notes | Approval Impact |
|---|---|---|---|---|---|
| Academic thesis reviewer |  |  |  |  |  |
| Technical reviewer |  |  |  |  |  |
| Evidence/citation auditor |  |  |  |  |  |
| Diagram reviewer |  |  |  |  |  |

| Gate Item | Status | Notes |
|---|---|---|
| Can chapter move to user approval? |  |  |
| Can chapter be marked DONE after user approval? |  |  |
| Can the next chapter begin? |  |  |
```

Verdict values:

- `READY_FOR_USER_APPROVAL`: no blocking issues; user may approve.
- `READY_WITH_MINOR_FIXES`: small fixes needed, but no structural/evidence blocker.
- `NEEDS_REVISION`: chapter should be revised and re-reviewed.
- `BLOCKED`: missing evidence/source/figure readiness prevents meaningful approval.

The gate may recommend approval, but it must not mark a chapter final or start the next chapter without explicit user approval.

## Private workflow exclusion

Do not include the private Codex thesis-writing workflow, private agents, private skills, or personal AI-assisted writing process in the thesis body, front matter, figures, references, or appendices.
