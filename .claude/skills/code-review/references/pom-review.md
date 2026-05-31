# Page Object Model Review Checklist

Use this reference when reviewing Page Objects or test code that interacts with the UI.

## Objective

Ensure the code follows a clean Page Object Model approach and keeps responsibilities separated properly.

---

## What to check

### 1. Page Object responsibility
Check whether the Page Object:
- represents one page, component, or clearly scoped UI function
- avoids mixing unrelated concerns
- keeps UI interaction logic in the right layer

### 2. Locator placement
Check whether:
- locators live in the Page Object
- locators are not scattered through test files
- selectors are maintainable and understandable

### 3. Method quality
Check whether methods are:
- action-oriented
- reusable
- clearly named
- not too low-level
- not overloaded with assertion-heavy behavior

### 4. Test cleanliness
Check whether tests:
- call Page Object or workflow methods
- remain scenario-focused
- avoid direct raw UI plumbing

### 5. Workflow boundary
Check whether cross-page business logic belongs in:
- a workflow
- or whether it has been incorrectly stuffed into a single Page Object

---

## Positive signs

Good POM implementation usually looks like:
- thin tests
- reusable page methods
- minimal duplication
- selectors hidden behind Page Object abstractions
- business flow reuse through workflow when justified

---

## Red flags

Flag these issues:
- direct `page.locator()` or `page.click()` logic scattered in tests
- duplicate Page Objects for the same page
- methods that expose too much DOM detail
- giant Page Objects that mix unrelated areas
- workflows implemented ad hoc inside tests

---

## Review recommendation style

Recommendations should be practical:
- move raw interaction into Page Object
- extend existing Page Object instead of duplicating
- extract reusable multi-step flow into workflow only if reuse value is clear
- avoid major rewrites unless the structure is clearly broken

---

## Unsplash project notes

This repository already follows POM-oriented structure.  
Review should reinforce:
- `page-object/`
- `fixtures/`
- `workflow/`
- readable scenario-focused tests