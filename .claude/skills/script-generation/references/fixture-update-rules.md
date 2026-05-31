# Fixture Update Rules

Use this reference when deciding whether to update fixtures during script generation.

## Objective

Keep fixture usage clean, minimal, and aligned with the existing framework so tests can access reusable Page Objects and helpers without clutter.

---

## When fixture updates are appropriate

Update fixtures when:
- a new Page Object should be injected into tests
- a new reusable helper is needed by multiple tests
- the existing fixture model already supports similar injection patterns

---

## When fixture updates are not necessary

Do not update fixtures when:
- the new Page Object is only used once and local construction is acceptable under the current framework style
- the change adds complexity without meaningful reuse value
- a workflow or helper can be reused directly without fixture expansion

---

## Fixture update checklist

Before changing a fixture, ask:
1. Is the object likely to be reused?
2. Does the current framework already inject similar objects?
3. Will fixture injection make tests cleaner?
4. Will the change stay understandable for future maintainers?

If most answers are no, do not update fixtures.

---

## Good fixture changes

Good fixture changes:
- inject clearly reusable Page Objects
- follow the existing typing and naming pattern
- stay consistent with current project style
- keep the test setup easy to understand

---

## Bad fixture changes

Avoid:
- adding one-off test-specific objects into shared fixtures
- bloating fixtures with rarely used utilities
- creating fixture layers that make tests harder to read
- duplicating an existing fixture binding under a different name

---

## Unsplash project notes

This framework already uses fixtures as a clean injection mechanism.  
Any new fixture binding should:
- support reuse
- improve readability
- follow the existing repository style
- avoid over-engineering