# Thesis Writing Style Guide

## Tone

Use formal, precise, and objective academic English.

Prefer:

- "This research addresses..."
- "This study proposes..."
- "The proposed framework is designed to..."
- "The implemented framework demonstrates..."
- "The evaluation results suggest..."
- "A limitation of this study is..."

Avoid:

- "This framework is perfect"
- "Playwright is the best tool"
- "Obviously"
- "Very easy"
- "Amazing"
- Unsupported claims such as "enterprise-grade" unless defined and evidenced.

## Academic research writing style

Thesis prose must read as an academic research report, not as a README, repository tour, or technical note.

Core rules:

- Frame the work through research language such as "this research", "this study", "the proposed framework", "the implemented framework", "the selected system under test", and "the evaluation evidence".
- Avoid "the repository" in thesis body prose unless the section is explicitly mapping implementation evidence in Chapter 3, Chapter 4, an appendix, or a source-evidence table.
- Do not introduce project folder paths in Chapter 1. Chapter 1 should frame the problem, objectives, and research questions; file-path evidence belongs in later design, implementation, or appendix sections.
- Generalize the thesis contribution as a UI and API automation testing framework for modern web applications. Unsplash should be described as the selected demonstration system or selected system under test, not as the only possible target of the framework.
- Avoid long lists of technical terms in one sentence or heading. Use an academic parent concept first, then explain concrete mechanisms in a controlled list, table, or sub-section.
- Do not name a section or sub-section as a comma-separated list of implementation artifacts. Prefer a conceptual heading that names the role of the section, such as `Centralized Test Data and Configuration`, then explain DTOs, constants, data files, and environment settings inside the section body.
- Do not self-define academic or specialized testing concepts. Definitions in Chapter 2 and concept introductions in Chapter 3 require source attribution and necessary APA 7 in-text citations.
- Literature Review prose should synthesize multiple academic, official, or professional sources. Do not rely on a single source family when the topic has broader literature support.
- Section titles should be short, academic, and conceptual. If a topic combines several ideas, use a concise parent heading and clear sub-sections instead of a listing-style title.
- Avoid AI-like formulaic phrasing, marketing claims, and documentation voice. Prefer cautious, evidence-bounded claims.

## Paragraph structure

Each paragraph should generally contain:

1. topic sentence
2. explanation
3. evidence or example
4. link to the next idea where useful

## Chapter length balance

Use chapter length according to the chapter's function. Foundations or implementation chapters may need more explanation, figures, and tables, but introduction and conclusion chapters should be tighter.

For Chapter 1:

- Target approximately 800 to 1,100 words after the latest Chapter 1 concision revision.
- Keep each subsection focused on framing, not detailed theory or implementation.
- Use only four main sections unless the user or supervisor explicitly asks for more: Background, Problem Statement, Research Objectives, and Research Questions.
- Split `1.2 Problem Statement` into concise `Significance of the Problem` and `Project Problem Statement` subsections.
- Use `1.3 Research Objectives` as the objective section title.
- Keep the number of research objectives aligned with the number of research questions unless the user explicitly approves a different mapping.
- Do not include a standalone Thesis Structure section in Chapter 1 unless explicitly re-approved.
- Integrate scope and success/evaluation boundaries briefly into the problem statement and objective section rather than using separate long sections.
- If Chapter 1 exceeds approximately 1,200 words, shorten repeated background, generic automation explanation, and low-value transition prose first.

For Chapter 2:

- Use the title `Chapter 2: Literature Review`.
- Keep Chapter 2 focused on theoretical background and methodology: testing fundamentals, manual/automated testing approaches, modern web automation, E2E methodology, test case design, framework concepts, and reporting methodology.
- Do not include repository-specific Page Object, fixture, API service, DTO, cleanup, design-pattern, or reporting-configuration explanations in Chapter 2.
- Define theory concepts through academic, official, or professional sources with necessary APA 7 in-text citations. Do not self-define specialized testing terms without source attribution.
- Use citation-backed tables when they clarify concepts such as manual versus automated testing, test case design, or general automation framework capabilities.
- Keep `2.7` focused on test data generation/preparation and reporting in automated testing unless the user explicitly approves CI/CD discussion supported by repository evidence.
- Do not add a standalone literature-based summary section unless the user explicitly re-approves it.

For Chapter 3:

- Use Chapter 3 as the main framework-design chapter.
- Place Overall Framework Architecture first.
- Group related framework-design material under parent sections and sub-sections instead of listing too many peer-level sections. Prefer concise parent headings such as UI Abstraction Design, Runtime Composition Design, API Automation Design, Test Data and State Management Design, Framework Quality Design, and Automation Execution Flow.
- Put Page Object Model, practical POM workflow, fixture/dependency injection, API service abstraction, DTO/data/cleanup strategy, design patterns, execution evidence/debugging support, UI/API execution flows, and the project Copilot automation-testing workflow in Chapter 3.
- Use `Execution Evidence and Debugging Support` or a similarly broad academic heading instead of listing-style headings such as `Reporting, Debugging, and Traceability`.
- Do not restore separate Requirements Analysis, System Under Test, or Chapter Summary sections unless explicitly re-approved.

## Technical claims

Every technical claim must be traceable to:

- a repository file
- an execution result
- an official documentation source
- an academic/professional source

## Result claims

Do not write final numbers until evidence exists.

Use temporary placeholder:

```text
NEEDS_EVIDENCE: Add final test execution result after running `npx playwright test`.
```

## Citation style

Use **APA 7th edition** consistently across the final thesis.

Drafting rules:

- Markdown chapter drafts may use stable citation keys such as `[@source_key]` for maintainability.
- Add in-text citations only where they are needed to show the source of information: theory claims, official tool documentation claims, external benchmark claims, execution result claims, and specific repository/source-code evidence.
- Avoid over-citing every sentence when one citation clearly supports the paragraph or a group of closely related factual statements.
- Final in-text citations must follow APA 7th edition author-date formatting.
- The final reference list must follow APA 7th edition formatting.
- Do not mix APA 7th edition with IEEE numbering or other citation styles.
- Repository source files may be cited as project documents or source-code evidence, but they must be formatted consistently in the final APA-style reference list.

## Markdown-to-Word guidance

- Use `#` only for major sections if needed.
- Use `##` for chapter titles during drafting if the final Word heading style requires adjustment later.
- Keep tables simple.
- Keep figures as separate image files and reference them with captions.
- Do not rely on Markdown automatic numbering for the final Word version.
