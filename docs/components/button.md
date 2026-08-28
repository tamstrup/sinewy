---
title: Button
description: A themed native button control for common actions.
---

## Overview

`Button` renders a native HTML `button` with Sinewy's reusable control theme. The browser supplies activation, keyboard, form, disabled, and focus semantics; Sinewy supplies size, variant, color, contrast, and interaction styling.

The first release is intentionally one directly callable component. Icons are ordinary children. There is no `Button.Root`, `as`, `asChild`, loading state, icon part, or radius option.

## Import

The package root and focused module both export Button:

```js
import { Button } from 'sinewy'
import Button from 'sinewy/button'
```

The themed facade also provides the same component as a named export:

```js
import { Button } from 'sinewy/theme'
```

## Basic usage

```js
import { Button } from 'sinewy'

Button({
  size: '2',
  variant: 'solid',
  color: 'accent',
  highContrast: false,
  type: 'button'
}, 'Save')
```

`type` defaults to `button`, preventing an otherwise implicit form submission. Set `type="submit"` or `type="reset"` when that native behavior is intended.

## Styling

Button supports normal Sin style extension and forwards `style`, `data`, native attributes, DOM hooks, and events to the button element:

```js
const WideButton = Button`
  min-width 180
`

WideButton({ onclick: save }, 'Save changes')
```

The four variants are `solid`, `soft`, `outline`, and `ghost`. Colors are `gray`, `accent`, `red`, `orange`, `amber`, `green`, `teal`, `cyan`, `blue`, `indigo`, `purple`, `pink`, and `crimson`. The palette responds to inherited `color-scheme`, and `highContrast` strengthens foregrounds and solid endpoints.

TypeScript consumers can reuse the component-neutral `ThemeSize`, `ThemeColor`, `ControlVariant`, `ThemeOptions`, and `ControlThemeOptions` exports when building related controls.

## API reference

### `Button(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Controls height, spacing, radius, and font size. |
| `variant` | `'solid' \| 'soft' \| 'outline' \| 'ghost'` | `'solid'` | Selects the visual treatment. |
| `color` | theme color | `'accent'` | Selects the light/dark-aware palette. |
| `highContrast` | `boolean` | `false` | Uses stronger palette endpoints. |
| `type` | `'button' \| 'submit' \| 'reset' \| 'menu'` | `'button'` | Native button type. |
| `disabled` | native button attribute | `false` | Uses native disabled semantics and suppresses activation. |

All other native button attributes and events are forwarded. Theme options become `data-size`, `data-variant`, `data-color`, and optional `data-high-contrast` hooks instead of leaking as invalid DOM attributes. Consumer `data` and `style` objects are preserved; explicit style values can override theme custom properties.

## Accessibility

Button keeps the native button element and its built-in accessibility semantics. Supply visible text or an accessible name when using only an icon. Native `disabled` buttons do not receive focus or dispatch click events.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| `Enter` or `Space` | Activates the native button. |
| `Tab` | Moves focus to an enabled button in normal document order. |
| Pointer press | Uses native pressed behavior plus the themed active treatment. |
| Keyboard focus | Shows the themed `:focus-visible` outline. |

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `data-size="1\|2\|3"` | Resolved size. |
| `data-variant="solid\|soft\|outline\|ghost"` | Resolved variant. |
| `data-color` | Resolved theme color. |
| `data-high-contrast` | Present when high contrast is enabled. |
| `:hover`, `:active`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Button always renders a native `button`; composition options remain unreserved until a concrete semantic use case can render truthfully.
- Loading and icon-specific APIs are not included. Pass icons as children and manage application state with native attributes.
