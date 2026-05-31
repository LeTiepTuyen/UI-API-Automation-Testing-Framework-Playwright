# Selector Review Checklist

Use this reference when selector quality is a key review concern.

## Objective

Review selectors for:
- uniqueness
- stability
- readability
- maintainability
- fit with the existing Page Object structure

---

## Review questions

For each selector, ask:

1. Is it unique in the required UI state?
2. Is it stable enough under likely UI changes?
3. Is there a stronger selector available?
4. Is it understandable by another QA engineer?
5. Does it belong in the current Page Object?

---

## Preferred selector characteristics

Strong selectors usually rely on:
- `data-testid`
- stable `id`
- stable `name`
- semantic role
- meaningful attribute combinations
- well-scoped CSS

XPath is acceptable only when:
- relationship-based refinement is truly needed
- a more stable CSS or semantic selector is not practical

---

## Review anti-patterns

Flag selectors that are:
- positional
- deeply nested
- dependent on unstable classes
- overly text-fragile
- copied directly from brittle browser devtools output without refinement

Examples of concern:
```ts
div > div > div > button
button:nth-child(3)
[class="abc123 random"]

```

### Review recommendation style

If a selector is weak:

- explain why it is risky
- suggest a stronger alternative
- keep the recommendation concrete

### Example

Current selector depends on DOM position and may break when card order changes. Prefer scoping to the profile container and targeting the button by a stable attribute or role.

Suggested change:

```ts
// current (risky)
div.cards > div:nth-child(3) button

// suggested (stronger)
section[data-testid="profile-card"] button[data-testid="follow"]
```

### Unsplash project notes

Since this project uses Page Objects, selector review should always consider:

- whether the selector fits cleanly into the Page Object
- whether another reusable method already exists
- whether the selector should be refined through Playwright MCP before final acceptance