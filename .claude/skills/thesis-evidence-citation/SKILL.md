---
name: thesis-evidence-citation
description: Use this skill when mapping thesis claims to repository evidence, official documentation, academic literature, figures, tables, or citation keys. Also use when auditing unsupported statements or preparing evaluation evidence.
---

# Thesis Evidence and Citation Skill

## Trigger

Use this skill when:
- adding a technical or implementation claim
- adding a literature-review claim
- adding a figure or table
- adding a reference to the reference list
- auditing unsupported statements in a chapter
- preparing evaluation or results evidence

## Evidence hierarchy

1. Repository source code and project documents for implementation claims.
2. Actual command outputs, reports, traces, and screenshots for results evidence.
3. Official documentation (Playwright, TypeScript, Node.js) for tool capability claims.
4. Academic or professional software testing literature for theory claims.
5. Thesis samples for structure reference only — never copy or closely paraphrase.

## Required files

- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/citation-register.md`
- `docs/thesis-workspace/references/references.bib`

## Rules

- Never fabricate citation keys, page numbers, URLs, DOIs, or result metrics.
- If evidence is missing, mark `NEEDS_EVIDENCE`.
- If a source is missing, mark `NEEDS_SOURCE`.
- Add in-text citations only where source attribution is needed: theory claims, official documentation claims, external benchmark claims, execution result claims, and specific repository/source-code evidence.
- Avoid over-citing every sentence when one citation clearly supports a paragraph or group of closely related statements.
- Do not self-define academic or specialized testing concepts; definition paragraphs must identify an academic, official, or professional source.
- For Literature Review chapters, avoid relying on one source family when broader academic or professional literature is available.
- Ensure every reference used in the body appears in the reference list.
- Ensure every figure and table has a caption and is cited in the body.

## Output format

When auditing, return:
- Supported claims (with evidence path)
- Unsupported claims (with suggested evidence type)
- Missing citations (with suggested source type)
- Missing evidence (with suggested collection method)
- Files that need updating

## Private workflow exclusion

Do not include the private Claude or Codex thesis-writing workflow, private agents, private skills, or AI-assisted writing process in the thesis body, front matter, figures, references, or appendices.
