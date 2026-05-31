# Selector Strategy for Playwright MCP

Use this reference when selector choice is unclear, risky, or likely to affect script stability.

## Objective

Choose selectors that are:
- robust
- unique
- maintainable
- understandable by future QA engineers

Selectors should survive reasonable UI change and should not depend on fragile DOM structure unless there is no better option.

---

## Selector priority order

```

### 2. stable id

Good when the id is not generated dynamically.

Examples:

```css
#username
#login-button
```

### 3. stable name

Useful for forms.

Examples:

```css
input[name="email"]
input[name="username"]
```

### 4. role-based selectors

Useful when the UI is accessible and semantics are stable.

Examples:

```ts
getByRole('button', { name: 'Save' })
getByRole('textbox', { name: 'Username' })
```

### 5. meaningful CSS selectors

Use attributes or component markers, not brittle structure.

Examples:

```css
button[type="submit"]
a[aria-label="View profile"]
section[data-testid="profile-header"] button
```

### 6. XPath

Use only when the target must be described through relationships.

Examples:

```xpath
//label[normalize-space()='Username']/following::input[1]
//section[@data-testid='profile-header']//button[contains(., 'Edit')]
```

### Refinement rules

If the selector is not unique:

- scope it to a stable container
- refine with a meaningful attribute
- refine with nearby stable text only if the text is intentional and stable
- use relationship-based XPath only as a last resort

### What to avoid

Avoid selectors that are:

- purely positional
- deeply nested and structure-heavy
- based on dynamic class names
- dependent on unstable text
- tied to implementation detail that is likely to change

### Bad examples

```
div > div > div > button
:nth-child(4) > span
button[class="btn-123-xzy"]
```

### Text-based selection guidance

Text-based selectors are allowed only when:

- the text is stable
- the text is user-facing and intentionally fixed
- no stronger selector exists

Even then, prefer scoped usage.

### Validation checklist

Before accepting a selector:

- is it unique in the required state?
- is it stable across reruns?
- is it readable?
- does it belong to the correct element?
- is there a better stronger selector available?

### Unsplash project notes

For this repository:

- selectors should fit cleanly into Page Objects
- selector strategy must support maintainable POM
- if a robust selector is not obvious, inspect the page with Playwright MCP before generating code
no stronger selector exists

Even then, prefer scoped usage.

Validation checklist

Before accepting a selector:

is it unique in the required state?
is it stable across reruns?
is it readable?
does it belong to the correct element?
is there a better stronger selector available?
Unsplash project notes

For this repository:

selectors should fit cleanly into Page Objects
selector strategy must support maintainable POM
if a robust selector is not obvious, inspect the page with Playwright MCP before generating code