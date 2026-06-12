---
name: thesis-review
description: Use this skill when reviewing thesis drafts for VNUK structure compliance, academic quality, evidence coverage, citation consistency, figure accuracy, and final approval readiness.
---

# Thesis Review Skill

## Trigger

Use this skill when the user asks for:
- chapter review
- final consistency pass
- VNUK compliance review
- academic English review
- citation and evidence review
- pre-submission quality check

## Review checklist — four perspectives

### 1. Academic thesis review
- VNUK structure compliance against `outline.md`
- heading consistency across the chapter
- academic research-report tone; not README or repository-documentation voice
- no raw folder/file-path explanation in Chapter 1
- concise conceptual headings, not listing-style headings
- no private harness workflow details in thesis prose
- Copilot Agentic-AI feature described only as project automation-testing

### 2. Evidence and citation review
- every project-specific claim cross-checked against `evidence-matrix.md`
- every theory, tool, and external claim has an APA 7 in-text citation
- every cited key exists in `citation-register.md` and `references/references.bib`
- no `NEEDS_EVIDENCE` or `NEEDS_SOURCE` markers remaining
- no fabricated citation keys, URLs, DOIs, or page numbers

### 3. Figure and table review
- every figure and table has a caption
- every figure is cited in the body text
- every figure is registered in `figure-register.md`
- screenshots in `visual-evidence-register.md` are consistent with inserted figures
- figure numbering is sequential within the chapter

### 4. Technical accuracy review
- technical claims about Playwright, TypeScript, and the framework match the actual source code
- architecture descriptions match the actual repository structure
- test execution results cited match evidence in the repository
- no overclaiming capabilities the framework does not have

## Output format

Return a structured review:
1. Verdict: PASS / MINOR_REVISIONS / MAJOR_REVISIONS / FAIL
2. Strengths
3. Required fixes (numbered, specific, actionable)
4. Optional improvements
5. Missing evidence (claim → needed evidence)
6. Missing citations (claim → needed source)
7. Technical inaccuracies
8. Approval recommendation

## Rules

- Review only; do not rewrite chapter prose directly.
- Save review output to `docs/thesis-workspace/reviews/chapter-N-review.md`.
- Do not invent evidence, citations, or repository facts.
- If a claim cannot be verified, mark it as UNVERIFIABLE with explanation.
