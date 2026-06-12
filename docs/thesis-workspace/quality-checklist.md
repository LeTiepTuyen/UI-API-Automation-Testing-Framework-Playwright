# Thesis Quality Checklist

## VNUK structure

- [ ] Title page complete
- [ ] Approval page complete
- [ ] Table of Contents generated in Word
- [ ] List of Figures generated in Word if figures exist
- [ ] List of Tables generated in Word if tables exist
- [ ] Author Contribution Statement complete
- [ ] Acknowledgements complete
- [ ] Definitions complete
- [ ] List of Abbreviations complete
- [ ] Abstract complete
- [ ] Main chapters complete
- [ ] References complete
- [ ] Appendices complete if used

## Academic writing

- [ ] Formal academic English
- [ ] Prose reads as an academic thesis/research report, not README, repository documentation, or a technical note
- [ ] Research framing uses terms such as "this research", "this study", "the proposed framework", "the implemented framework", and "the selected system under test" where appropriate
- [ ] "The repository" and raw folder/file paths are avoided in Chapter 1 and used only where source-evidence mapping is necessary in design, implementation, appendix, or evidence tables
- [ ] Unsplash is framed as the selected demonstration system/system under test, while the framework contribution is generalized to modern web applications
- [ ] Literature Review paragraphs synthesize academic/professional sources and do not depend almost entirely on one source family
- [ ] Specialized concepts are not self-defined; definitions and concept introductions have source attribution and necessary APA 7 in-text citation
- [ ] Section headings are concise and conceptual, with sub-sections used instead of listing many technical terms in one title
- [ ] Section headings are not comma-separated artifact lists; implementation artifacts are explained in the body or in lower-level sub-sections
- [ ] Clear topic sentences
- [ ] No unsupported overclaiming
- [ ] No informal phrases
- [ ] No repeated paragraphs
- [ ] No copied thesis sample prose
- [ ] Consistent terminology
- [ ] Chapter 1 stays within the approved concise framing budget and uses Background, Problem Statement with significance/project-problem subsections, Research Objectives, and Research Questions
- [ ] Chapter 1 research objectives and research questions are logically aligned in count and meaning unless a different mapping is explicitly approved
- [ ] Chapter 2 is kept as Literature Review only and does not contain repository-specific POM, fixture, API service, DTO, cleanup, design-pattern, or reporting-configuration explanations
- [ ] Chapter 2 definitions and specialized testing concepts use necessary APA 7 in-text citations from academic, official, or professional sources
- [ ] Chapter 2 uses tables or visuals only when they clarify theory/methodology and are captioned, cited, and source-safe
- [ ] Chapter 3 is kept as the framework-design chapter and starts with Overall Framework Architecture
- [ ] Chapter 3 groups related technical material into logical parent sections and sub-sections instead of using an overly flat list of peer-level sections
- [ ] Chapter 3 uses broad academic headings such as `Execution Evidence and Debugging Support` instead of listing-style headings such as `Reporting, Debugging, and Traceability`

## Evidence and citations

- [ ] Every implementation claim maps to repository evidence
- [ ] Every tool capability claim maps to official documentation
- [ ] Every theory claim maps to academic/professional source
- [ ] Every result claim maps to execution evidence
- [ ] No `NEEDS_EVIDENCE` remains in final version
- [ ] No `NEEDS_SOURCE` remains in final version
- [ ] Necessary in-text citations appear in the body where theory, official documentation, external benchmark, execution result, or repository/source-code evidence is used
- [ ] In-text citations are not overused after every sentence when a paragraph-level citation is sufficient
- [ ] Every in-text citation has a reference entry
- [ ] Every figure and table is cited in the body
- [ ] Final in-text citations and reference list follow APA 7th edition
- [ ] Every screenshot or non-diagram visual is registered in `visual-evidence-register.md`
- [ ] Screenshot evidence is captured from a verified source/run and stored under `assets/figures/`
- [ ] External visuals have source, citation, and copyright/license review before insertion
- [ ] No screenshot exposes credentials, tokens, private account data, or private thesis-writing workflow content

## Framework explanation

- [ ] Playwright configuration explained
- [ ] UI test structure explained
- [ ] API test structure explained
- [ ] Page Object Model explained
- [ ] Fixtures explained
- [ ] Workflows explained
- [ ] API services explained
- [ ] Test data and configuration explained
- [ ] Reports and traces explained
- [ ] Limitations explained

## Chapter Review Gate

- [ ] Chapter draft is reviewed through `chapter-review-gate.md`
- [ ] Academic thesis reviewer verdict recorded
- [ ] Technical reviewer verdict recorded
- [ ] Evidence/citation auditor verdict recorded
- [ ] Diagram reviewer verdict recorded if the chapter uses figures or tables
- [ ] Overall gate verdict recorded as `READY_FOR_USER_APPROVAL`, `READY_WITH_MINOR_FIXES`, `NEEDS_REVISION`, or `BLOCKED`
- [ ] Complete review artifact saved under `docs/thesis-workspace/reviews/`
- [ ] Required fixes and approval impact are summarized in the gate table
- [ ] Chapter is not marked final until explicit user approval is received
- [ ] Next chapter does not begin until the current chapter approval gate is passed

## Word migration

- [ ] Markdown headings map cleanly to Word Heading styles
- [ ] Figures exported as high-resolution images
- [ ] Screenshots are cropped, readable, captioned, and high enough resolution for Word/PDF
- [ ] Tables are Word-compatible
- [ ] Captions use Word caption style
- [ ] References formatted consistently
- [ ] References formatted according to APA 7th edition
- [ ] Page numbers and section breaks are handled in Word
