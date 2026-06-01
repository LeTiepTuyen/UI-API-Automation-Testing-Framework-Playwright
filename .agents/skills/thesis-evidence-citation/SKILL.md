---
name: thesis-evidence-citation
description: Use this skill when mapping thesis claims to repository evidence, official documentation, academic literature, figures, tables, references, or citation keys.
---

# Thesis Evidence and Citation Skill

## Trigger

Use this skill when:

- adding a technical claim
- adding a literature-review claim
- adding a figure or table
- adding a reference
- auditing unsupported statements
- preparing evaluation evidence

## Evidence hierarchy

1. Repository source code and project docs for implementation claims.
2. Actual command outputs, reports, traces, and screenshots for results.
3. Official documentation for tool capabilities.
4. Academic or professional sources for theory.
5. Thesis samples for structure only.

## Required files

- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/citation-register.md`
- `docs/thesis-workspace/references/references.bib`

## Rules

- Never fabricate citation keys, page numbers, URLs, or result metrics.
- If evidence is missing, mark `NEEDS_EVIDENCE`.
- If a source is missing, mark `NEEDS_SOURCE`.
- Ensure every reference used in body text appears in the reference list.
- Ensure every figure and table has a caption and is cited in the body.

## Output format

When auditing, return:

- supported claims
- unsupported claims
- missing citations
- missing evidence
- suggested source types
- files that need updates

## Private workflow exclusion

Do not include the private Codex thesis-writing workflow, private agents, private skills, or personal AI-assisted writing process in the thesis body, front matter, figures, references, or appendices.
