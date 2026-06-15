# Reference List APA 7 Formatting Fix — Documentation Web Sources

- **Actor:** Claude
- **Date:** 2026-06-14
- **Trigger:** User questioned the `Cypress.io. (2026a). … [Accessed 2026-06-03]` style and whether grouping references by type was advisable.
- **Decisions (user-approved):** (1) convert documentation entries to proper APA via `@online` + `url` + retrieval date; (2) keep a single alphabetical Reference List (no grouping by source type).

## Problem (verified against build/main.bbl and PDF)
The 41 documentation references were stored as `@misc` with `howpublished = {\url{...}}` and `note = {Accessed 2026-06-03}`. The `biblatex-apa` style **does not print `howpublished` for `@misc`**, so:
1. **All 41 URLs were missing** from the rendered Reference List — a hard APA 7 violation (web sources require a URL).
2. **`[Accessed 2026-06-03]`** is a Vancouver/Harvard-style tag, not APA 7. APA 7 uses `Retrieved <Month Day, Year>, from <URL>` and only when warranted (living, unarchived pages such as documentation — which qualifies).

## APA 7 best practice applied (group/organization web document)
> Group Author. (Year). *Title* (sentence case). Site Name [omitted when = author]. Retrieved Month Day, Year, from URL

The `(2026a)/(2026b)` year-disambiguation letters were already correct APA and were kept.

## Changes applied (`bibliography/references.bib`)
- 41 documentation entries: `@misc` → `@online`; `howpublished = {\url{X}}` → `url = {X}`; `note = {Accessed Y}` → `urldate = {Y}`.
- Left untouched: `@article` (7 scholarly papers), `@book` (1), `@inproceedings` (2), and `@misc{martin_solid_principles_2000}` (a professional paper with no URL).
- Final entry mix: 7 `@article`, 1 `@book`, 2 `@inproceedings`, 1 `@misc`, 41 `@online`.

## Verified rendering (pdftotext of the Reference List)
- `Cypress.io. (2026a). Launching browsers in cypress. Retrieved June 3, 2026, from https://docs.cypress.io/app/references/launching-browsers`
- `Fowler, M. (2003a). Data transfer object. Retrieved June 3, 2026, from https://martinfowler.com/...`
- URLs now print; `[Accessed]` replaced by APA `Retrieved …, from …`; in-text citations unchanged (e.g., `(Cypress.io, 2026c)`).
- Build: `latexmk -xelatex` EXIT 0, 0 undefined, 0 overfull, 74 pages.

## Reference List ordering (user question 2)
**Kept a single alphabetical list** (biblatex `sorting=nyt`). APA 7 (and IEEE author-date / thesis convention) require one alphabetical sequence by author surname; segmenting into "scholarly papers" vs "documentation" is not standard for an APA empirical/engineering thesis and was therefore not done.

## Scope note
This was a formatting-compliance fix within the already-selected APA 7 style (not a style change) and edited only `references.bib`; no chapter prose or in-text citation commands changed.
