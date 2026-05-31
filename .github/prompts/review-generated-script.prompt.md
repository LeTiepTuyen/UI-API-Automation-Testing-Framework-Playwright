---
agent: agent
description: Review newly generated or updated automation code for framework compliance, selector robustness, maintainability, and reuse quality.
---

Review the generated or modified automation code in the current repository.

Tasks:
1. Identify which files were added or changed.
2. Understand the target scenario or feature the code is trying to automate.
3. Review the change against:
   - `copilot-instructions.md`
   - current repository structure
   - `tests/ui/` for UI automation and `tests/api/` for API automation
   - Page Object Model expectations
   - fixture and workflow conventions
   - API service structure where relevant
4. Focus on:
   - framework compliance
   - missed reuse or duplication
   - selector robustness
   - Page Object quality
   - fixture integration
   - test readability
   - TypeScript quality
   - maintainability
5. Recommend concrete high-value improvements.
6. If the code is already acceptable, say so clearly.

Output structure:
- Review Summary
- High-impact Issues
- Recommended Changes
- Final Assessment

Important rules:
- Do not nitpick trivial style issues
- Focus on practical review value
- Prefer concrete fixes over generic criticism