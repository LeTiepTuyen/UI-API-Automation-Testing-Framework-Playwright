# A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach

Graduation Project for the Bachelor of Computer Science and Engineering program.

## Overview

This repository contains a Playwright + TypeScript automation framework for the Unsplash web application and its public API. The codebase is organized for reusable UI and API automation, stable test maintenance, and clear separation of concerns.

## Purpose

The project demonstrates how to build a professional automation framework that supports:

- UI and API test automation
- reusable Page Objects and workflows
- centralized API services and DTOs
- maintainable test data and shared utilities
- scalable execution with Playwright

## Tech Stack

- Playwright
- TypeScript
- Node.js
- REST API testing
- Page Object Model

## Project Structure

```text
AutoTestingFramework/
├── api-service/
├── constants/
├── core/
├── data-object/
├── fixtures/
├── page-object/
├── test-data/
├── tests/
├── utils/
├── workflow/
├── package.json
├── playwright.config.ts
├── README.md
└── results.xml
```

## Key Features

- UI test coverage for main Unsplash user flows
- API service layer for reusable endpoint logic
- fixture-based dependency injection for tests
- centralized test data and constants
- soft assertions with detailed reporting
- Playwright trace and HTML report support

## Repository Highlights

- `tests/` contains the UI and API specifications
- `page-object/` contains page-level UI abstractions
- `workflow/` contains reusable business flows
- `api-service/` contains service-layer API clients
- `core/` contains browser, API, and element utilities
- `data-object/` contains request and response models
- `test-data/` contains static test data used by tests
- `utils/` contains shared helpers

## Getting Started

```bash
npm install
npx playwright test
```

## Running Common Commands

```bash
npx playwright test
npx playwright test --headed
npx playwright test --debug
npx playwright show-report
```

## Test Data

User accounts and access tokens are stored in `test-data/user-info.json`.

## Author

| Item | Details |
|---|---|
| Full Name | Le Tiep Tuyen |
| Student ID | 22020015 |
| Program | Computer Science and Engineering |
| Cohort | K22 |
| Institution | VN-UK Institute For Research and Executive Education (VNUK), The University of Danang |

## Supervisor

| Item | Details |
|---|---|
| Full Name | Le Dinh Dung |
| Academic Title | PhD in Computer Science |
| Position | Lecturer |
| Affiliation | VN-UK Institute For Research and Executive Education (VNUK), The University of Danang |

## Notes

This README is intentionally concise and serves as the main entry point for the repository. Detailed documentation and workflow materials are kept outside the public project summary.
