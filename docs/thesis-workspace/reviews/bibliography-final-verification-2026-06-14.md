# Bibliography Final Verification (T-096)

- **Actor:** Claude (verification/audit; no chapter prose changed)
- **Date:** 2026-06-14
- **Inputs:** `bibliography/references.bib`, `build/main.bbl`, `build/main.blg`, `build/main.log`, rendered Reference List in `build/main.pdf`.

## Verdict: PASS — bibliography is final-ready. No edits required.

## Integrity checks

| Check | Result |
|---|---|
| Total entries in `references.bib` | 52 |
| Entries cited / printed | 49 (all resolve) |
| Undefined citations or references (log) | **0** |
| Biber warnings/errors (`.blg`) | **0** |
| Duplicate citation keys | **0** |
| Self-repository (`project_*`) keys | **0** |
| Self-artifact (`execution_*`, `visual_*`) keys | **0** |
| Leftover `[Accessed]` / missing-URL / `n.d.` markers | **0** |

## Entry-type mix

7 `@article`, 1 `@book`, 2 `@inproceedings`, 1 `@misc` (URL-less professional paper `martin_solid_principles_2000`), 41 `@online`.

## Uncited entries (intentional candidate bank — NOT citation gaps)

Three vetted entries are present in `references.bib` but not cited, so biblatex does not print them; the rendered Reference List remains correct (only cited works appear). All three are registered `READY` in `citation-register.md` as prepared candidates:

- `leotta_page_object_2013` — Page Object is already cited via `fowler_page_object_2013` (+ Selenium/Playwright docs); the *other* Leotta paper `leotta_e2e_web_testing_2016` **is** cited. Redundant candidate, no gap.
- `puppeteer_overview_2026`, `webdriverio_overview_2026` — Puppeteer/WebdriverIO are **not mentioned anywhere** in the chapters (the Chapter 5 comparison covers Playwright/Cypress/Selenium only). Unused comparison-baseline candidates, no gap.

Decision: **left in `.bib` as a candidate bank** (harmless; they do not print). Removing them is optional and would not change the rendered PDF. Documented here so the state is intentional, not an oversight.

## APA 7 rendering spot-check (pdftotext of the Reference List)

- Scholarly: `Almabruk, S., Abdalhamid, S., & Almabruk, T. (2025). … Asian Journal of Research in Computer Science, 18(1), 34–44. https://doi.org/10.9734/ajrcos/2025/v18i1546` — author, year, title (sentence case), journal, volume(issue), pages, DOI. ✔
- Book: `Ammann, P., & Offutt, J. (2016). Introduction to software testing (2nd ed.). Cambridge University Press.` ✔
- Web doc: `Cypress.io. (2026a). Launching browsers in cypress. Retrieved June 3, 2026, from https://docs.cypress.io/…` — group author, year+suffix, sentence-case title, retrieval date + URL. ✔
- Year-suffix disambiguation correct (`2026a–f`, `2003a/b`); single alphabetical order by surname (`sorting=nyt`); hanging indent + single-spaced entries (per `formatting.tex`). ✔

(`�` glyphs seen in `pdftotext` output are ASCII-export artifacts for en-dash/`ä`; the XeLaTeX PDF renders them correctly.)

## Recommendation

T-096 complete — bibliography verified final. Next: T-097 remaining figures / T-098 QA gate / T-099 Overleaf sync. User runs Turnitin externally.
