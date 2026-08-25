---
title: Sinewy documentation authoring
description: Portable authoring conventions for Sinewy component documentation.
---

## Format

Write documentation as [GitHub Flavored Markdown](https://github.github.io/gfm/) with YAML frontmatter. GFM gives us a specified, broadly supported Markdown dialect with fenced code blocks and tables. YAML frontmatter is not part of GFM, but it is the common metadata convention supported by the documentation generators we are likely to evaluate.

Keep documents generator-neutral:

- Use `.md`, not MDX or framework components.
- Avoid generator-specific directives, imports, shortcodes, and frontmatter.
- Use relative links between documentation files and include the `.md` extension.
- Let the eventual renderer generate heading IDs and tables of contents.
- Use the file path for grouping and the lowercase, kebab-case filename for the default slug.

## Frontmatter

Every published page starts with exactly these required fields:

```yaml
---
title: Component name
description: One-sentence plain-text description of the component.
---
```

`title` is the canonical page title. Do not repeat it as a level-one Markdown heading. Page content starts at level two so a documentation utility can render the title and derive the page outline consistently.

Do not add navigation order, slug, layout, sidebar, or table-of-contents fields yet. Those fields vary between generators. Directory structure and heading structure should carry that information until a utility is selected.

## Component document structure

Use the following sections when they apply, in this order:

1. `Overview` — purpose, status, platform requirements, and important constraints.
2. `Import` — public import forms.
3. `Basic usage` — the smallest representative example.
4. `Styling` — Sin style extension and theming examples.
5. `API reference` — one level-three section per root or attached component.
6. `Accessibility` — provided semantics and consumer responsibilities.
7. `Keyboard and focus behavior` — interaction table for keyboard-driven components.
8. `Styling hooks` — stable attributes, pseudo-classes, and CSS variables.
9. `Current limits` — experimental behavior and intentionally unsupported surface.

Omit irrelevant sections rather than creating empty placeholders. Use descriptive level-two and level-three headings; the eventual documentation utility will derive the on-page table of contents from them.

## API tables

Document component signatures as headings:

```md
### `component.part(attrs?, ...children)`
```

Use a table for attributes with consistent columns:

```md
| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Prevents interaction. |
```

Describe attributes owned by the component separately from forwarded DOM attributes. Use Sin's actual lower-case callback names such as `onclick`, `onselect`, and `onopenchange`.

## Examples

Use fenced code blocks with an explicit language. Examples should be valid, minimal Sin code and use the public surface rather than internal state:

````md
```js
import s from 'sin'

const Example = () => s`button`('Example')
```
````

Prefer examples that demonstrate one behavior. Larger end-to-end demonstrations belong in runnable source files and should be linked from the document.

## Reusable template

````md
---
title: Component name
description: One-sentence plain-text description of the component.
---

## Overview

What the component does, its current status, and its important constraints.

## Import

```js
import component from '../component.js'
```

## Basic usage

```js
// Minimal representative example.
```

## Styling

How to extend the component with Sin's tagged-template styles.

## API reference

### `component(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |

## Accessibility

Semantics supplied by the component and responsibilities left to consumers.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |

## Styling hooks

| Hook | Element | Meaning |
| --- | --- | --- |

## Current limits

- Known or intentionally unsupported behavior.
````
