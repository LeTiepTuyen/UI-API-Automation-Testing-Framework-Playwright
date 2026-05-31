# Unsplash UI & API Automation Testing Framework

This document is the project overview for the graduation project:

**A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**

## Summary

This repository provides a structured Playwright + TypeScript automation framework for testing the Unsplash web application and its public API. The framework emphasizes maintainability, reuse, and clear separation of concerns through Page Objects, reusable workflows, API service classes, fixtures, DTOs, and centralized test data.

## Core Areas

- `tests/` for UI and API specifications
- `page-object/` for page-level UI encapsulation
- `fixtures/` and `core/fixtures/` for Playwright dependency injection
- `workflow/` for reusable business flows
- `api-service/` for API service-layer abstractions
- `data-object/`, `constants/`, and `utils/` for DTOs, shared constants, and helpers

## Testing Scope

The framework currently focuses on practical end-to-end coverage such as:

- viewing photographer profiles
- updating user profile information
- listing liked photos

The structure is intentionally reusable so additional UI and API scenarios can be added without duplicating framework logic.

## Key Design Principles

- Reuse existing framework assets before creating new code
- Keep UI interactions inside Page Objects
- Keep endpoint logic inside API services
- Use fixtures to inject reusable objects into tests
- Keep test data and configuration centralized

## Notes

This document preserves the broader project context that was previously captured in the root README, while the root `README.md` now serves as a concise project entry point.