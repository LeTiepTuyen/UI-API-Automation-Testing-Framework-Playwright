# Prompt: Create Evidence Matrix

```text
Use the thesis-researcher agent and $thesis-evidence-citation skill.

Task: populate docs/thesis-workspace/evidence-matrix.md and docs/thesis-workspace/citation-register.md.

Read:
- README.md
- docs/project-overview.md
- package.json
- playwright.config.ts
- fixtures/custome-fixture.ts
- core/api/api.ts
- api-service/users-service.ts
- tests/ui/profile/update-profile.spec.ts
- tests/api/users/get-public-profile.spec.ts
- docs/final-graduation-thesis-doc/**/*.md if available

Output:
1. Update evidence-matrix.md with claim-to-source mappings.
2. Update citation-register.md with project, official docs, and academic source candidates.
3. Mark every missing execution result as NEEDS_EVIDENCE.
4. Do not draft chapter prose yet.
```
```
