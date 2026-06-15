# LaTeX Document Setup Summary

This file summarizes the current thesis LaTeX document setup for quick reference.

**Last updated:** 2026-06-12 (table spacing convention added after Chapter 2 review).

## Document Setup

- Document class: `report`
- Main font size: `12pt` (raised from 11pt per user; intentional deviation from the 11pt guideline because 11pt read too small)
- Paper size: `a4paper`
- Layout mode: `oneside`
- Compiler target: `XeLaTeX` via `latexmk -xelatex`
- Bibliography backend: `biber`
- Citation style: `biblatex` with `style=apa`
- Bibliography sorting: `nyt`

## Page Layout

- Inside / binding margin for single-sided output: `2.0cm` on the left (intentional deviation from the formatting guideline's 3.0cm binding margin; user confirmed the uniform 2.0cm layout on 2026-06-14 during the T-098 QA gate)
- Right margin: `2.0cm`
- Top margin: `2.0cm`
- Bottom margin: `2.0cm`
- Header height: `15pt`

## Fonts and Encoding

- Text font: `Calibri` via `fontspec` when available
- Fallback font: `Carlito` if Calibri is unavailable
- Font style: Calibri-style sans-serif academic document font
- Input/font handling: native Unicode through XeLaTeX
- Language: English via `babel`

## Spacing and Paragraphs

- Line spacing: `\onehalfspacing`
- Paragraph indent: `1.25cm` (first-line indent retained)
- Paragraph spacing: `0.6\baselineskip plus 2pt minus 1pt` (added so paragraphs are visually separated; previously `0pt`, which made paragraphs run together)
- Text alignment: left-aligned via `\RaggedRight`
- First paragraph after headings is indented via `indentfirst`
- Emergency stretch: `0.5em`
- Orphan/widow control: `\clubpenalty`, `\widowpenalty`, `\displaywidowpenalty` set to `10000`, with `\raggedbottom`, to stop a single trailing line being pushed onto a new page

## Headings

- Chapter headings: left-aligned, bold, `14pt`, preceded by `Chapter` and the chapter number.
- Section and subsection headings: left-aligned, bold, normal body size.
- Chapter command: `\chapter{...}`
- Section command: `\section{...}`
- Subsection command: `\subsection{...}`

## Lists

- List package: `enumitem`
- List spacing: `\setlist{nosep}`

## Figures

- Figure packages: `graphicx`, `float`, `caption`, `subcaption`
- Caption font: `small`, single-spaced
- Caption label: bold
- Caption separator: colon
- Caption alignment: ragged-right / left-aligned
- Figure/table caption position: bottom
- Graphic paths:
  - `figures/`
  - `figures/logos/`
  - `figures/architecture/`
  - `figures/workflows/`
  - `figures/screenshots/`
  - `figures/reports/`

## Tables

- Table packages: `booktabs`, `array`, `tabularx`, `longtable`, `ragged2e`, `xcolor`
- Custom flexible column: `Y`
- Table font helper: `\tablefont` maps to `\footnotesize`
- Table style: `booktabs` horizontal rules, no vertical rules, bottom captions, and labels immediately after captions.
- Global row readability settings in `config/formatting.tex`: `\arraystretch=1.22`, `\extrarowheight=1.5pt`, `\tabcolsep=5.5pt`, and modest `booktabs` rule spacing.
- Default table construction for prose-heavy thesis tables: `tabularx` with `Y` columns; use `longtable` only when a table must break across pages.

## Code Listings

- Code package: `listings`
- Listing style: `thesislisting`
- Code font: `\ttfamily\footnotesize`
- Frame: single border
- Line numbers: left
- Line number font: `\tiny`
- Line wrapping: enabled
- Tab size: `2`
- Inline code helper: `\code{...}`

## References and Links

- Hyperlinks: `hyperref` with `hidelinks`
- Cross-references: `cleveref` with `nameinlink,noabbrev`
- Planned reference commands: `\cref{...}` and `\Cref{...}`

## Page Numbering

- Cover pages: hidden numbering via `\pagenumbering{gobble}`
- Front matter: roman numbering via `\pagenumbering{roman}`
- Main chapters: arabic numbering starts immediately before Chapter 1
- Blank page after the cover page: removed per user request (the second title/signature page now follows the cover directly)
- Final blank page at the end of the document: retained per VNUK guideline

## Front Matter Layout Notes (VNUK template aligned)

- Title page (`frontmatter/cover.tex`) is a single page following the VNUK template: bold university and institute, VNUK logo, thesis title, author, supervisor, the `A THESIS / Submitted in Partial Fulfillment of the Requirements for the Degree of <degree>` statement, bold `Da Nang, <year>`, and a `© <year> <author>` copyright line.
- The separate MIT-style signature page was removed (the VNUK template has only a title page and an approval page).
- Approval page (`frontmatter/approval.tex`) follows the VNUK template wording: "This thesis ... has been approved in partial fulfillment of the requirements for the Degree of <degree>." plus a "Department of <program>" line and Advisor / Co-Advisor / Department Chair signature lines. Defense committee members are deferred to the defense.
- Front-matter section names match the template: "Author Contribution Statement" and "Reference List".

## Table of Contents

- Title: `Table of Contents` (set via `\AtBeginDocument` so `babel` does not reset it to "Contents").
- Dotted leaders on every level, including chapter-level entries (`tocloft`: `\cftchapleader` = dotfill); chapter entries are non-bold to match the template.
- `List of Figures` and `List of Tables` are added as TOC entries via `\addcontentsline` and generated by `\listoffigures` / `\listoftables`.

## Metadata

- Thesis title: A COMPREHENSIVE UI AND API AUTOMATION TESTING FRAMEWORK USING PLAYWRIGHT
- Author: Le Tiep Tuyen
- Student ID: 22020015
- Cohort: K22
- Program: Computer Science and Engineering
- Degree: Bachelor in Computer Science and Engineering
- Institution: VNUK Institute for Research and Executive Education
- University: The University of Danang
- Supervisor: Le Dinh Dung, PhD
- Submission: Da Nang, 2026

## Source Files

- `main.tex`
- `config/packages.tex`
- `config/formatting.tex`
- `config/commands.tex`
- `config/metadata.tex`
