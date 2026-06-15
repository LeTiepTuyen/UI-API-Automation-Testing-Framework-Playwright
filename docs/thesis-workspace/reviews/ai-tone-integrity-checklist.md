# Thesis AI-Tone & Integrity Review Checklist

Reusable checklist for the per-chapter deep review pass (derived from the Chapter 4 review, 2026-06-13). Applies to the **LaTeX deliverable** (`docs/thesis-latex/chapters/*.tex`). One chapter per approval gate: save a review artifact under `reviews/`, apply polish to the `.tex` only, document the intentional prose divergence from the frozen Markdown, rebuild, then user approval.

## A. AI-tone / formulaic writing
- **A1. Repetitive caveats.** Same disclaimer in identical template form closing multiple sections ("should not be interpreted as…", "rather than inferred from…", "without a separate evaluation method"). Keep the scoping discipline, but consolidate into one chapter-level scope statement and vary the wording of the rest.
- **A2. Meta-filler self-reference.** "This chapter focuses on…", "keeping Chapter X focused on…". Allowed once as signposting; trim repeats.
- **A3. Long comma-chain enumerations.** "combines A, B, C, D, E, and F" — tighten where the list is not itself the point.
- **A4. Vague hedging / buzzwords.** robust, comprehensive, seamless, powerful, cutting-edge, leverage, delve, realm. Replace with concrete claims.
- **A5. Hyperbole / unsupported superlatives.**

## B. Self-reference & voice consistency
- **B1.** Standardize voice: "this study"/"this research" = the investigation; "the proposed framework"/"the implemented framework" = the artifact; "the project" = the concrete engineering work. Avoid "the thesis [verb]" as an actor; avoid "the repository" in prose (AGENTS.md).
- **B2.** Consistent tense: present for design/claims; past for the verified execution run.

## C. Plagiarism / integrity (heuristic — author runs Turnitin separately for the official score)
- **C1.** Every external concept/definition carries an APA citation; no self-defined testing concepts (AGENTS.md).
- **C2.** No verbatim or close-paraphrase of a source without quotation marks + cite; reword into the author's own framing.
- **C3.** No self-repository citations (`project_*_2026`).
- **C4.** Claims map to `evidence-matrix.md`; unsupported → `NEEDS_EVIDENCE`; no invented metrics/results.
- **C5.** Immutable execution evidence unchanged (18 tests, 18 passed, 0 failed, 28.890057s, 2026-06-03).

## D. Mechanics
- **D1.** American spelling throughout (-ize/-or): organization, behavior, sanitized, analyze, modeled.
- **D2.** APA in-text forms correct: `\autocite` (parenthetical) vs `\textcite` (narrative).
- **D3.** Cross-references via `\Cref`/`\cref`; no hard-coded figure/chapter/appendix numbers.
- **D4.** Build clean: 0 undefined; no body overfull; marker scan clean (`project_`, raw `[@...]`, `NEEDS_`, `PLACEHOLDER`, `migrationpending`).

## E. Structure
- **E1.** Chapter opens with a brief lead-in (purpose + structure).
- **E2.** Section order logical; headings grammatically parallel.

## Findings legend
Tag each finding HIGH / MEDIUM / LOW and map to the codes above (e.g. "A1-HIGH"). Record which were applied vs deferred.
