# Optional Package Script Suggestions for Diagram Rendering

These scripts are optional. Add them to the root `package.json` only after confirming with the thesis owner.

```json
{
  "scripts": {
    "thesis:diagrams": "node docs/thesis-workspace/scripts/render-diagrams.mjs",
    "thesis:diagrams:one": "npx -y @mermaid-js/mermaid-cli"
  }
}
```

Recommended one-off command:

```bash
node docs/thesis-workspace/scripts/render-diagrams.mjs
```

Do not add heavyweight dependencies to `dependencies` for thesis-only rendering. Prefer `npx -y` or `devDependencies` if repeatable local rendering is required.
