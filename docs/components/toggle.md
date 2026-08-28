---
title: Toggle
description: A themed native two-state button for persistent choices.
---

## Overview

`Toggle` renders a native HTML `button` with `aria-pressed` and Sinewy's reusable control theme. Use it for a choice that stays on or off, such as bold text, muting audio, or pinning an item. Use `Button` for an action that happens once.

The initial API is deliberately direct: there is no `Toggle.Root`, group, indicator part, composition option, or indeterminate state. Icons and labels are ordinary children.

## Import

```js
import { Toggle } from 'sinewy'
import Toggle from 'sinewy/toggle'
```

The themed facade also exports `Toggle` by name:

```js
import { Toggle } from 'sinewy/theme'
```

## Basic usage

```js
Toggle({
  defaultPressed: false,
  size: '2',
  variant: 'soft',
  color: 'accent',
  onpressedchange(pressed) {
    console.log(pressed)
  }
}, 'Bold')
```

`type` defaults to `button`, preventing accidental form submission. The button exposes `aria-pressed="true|false"` and `data-state="on|off"`.

## State

Use `defaultPressed` for locally managed state, `pressed` when the owner controls state, or `bind` with a `s.Live<boolean>`:

```js
const bold = s.live(false)

Toggle({ bind: bold }, 'Bold')
```

When controlled with `pressed`, activation calls `onpressedchange` but does not mutate the rendered state. The owner must pass the new value back. A consumer `onclick` runs before Toggle's state transition; calling `event.preventDefault()` cancels that transition.

## Styling

Toggle shares `size`, `variant`, `color`, and `highContrast` with Button and Dropdown controls. The four variants are `solid`, `soft`, `outline`, and `ghost`. Its unpressed appearance uses the neutral theme scale, while its pressed appearance uses the selected color.

Normal Sin style extension is supported:

```js
const SquareToggle = Toggle`
  width 36
  padding 0
`
```

## API reference

### `Toggle(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `pressed` | `boolean` | — | Controls the pressed state. |
| `defaultPressed` | `boolean` | `false` | Sets the initial uncontrolled state. |
| `bind` | `s.Live<boolean>` | — | Reads and writes pressed state through a live binding. |
| `onpressedchange` | `(pressed, event) => unknown` | — | Reports a requested state change. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Controls height, spacing, radius, and font size. |
| `variant` | `'solid' \| 'soft' \| 'outline' \| 'ghost'` | `'soft'` | Selects the visual treatment. |
| `color` | theme color | `'accent'` | Selects the light/dark-aware pressed palette. |
| `highContrast` | `boolean` | `false` | Uses stronger pressed-state palette endpoints. |
| `type` | native button type | `'button'` | Selects native form behavior. |
| `disabled` | native button attribute | `false` | Disables focus and activation natively. |

All other native button attributes, DOM hooks, and events are forwarded. Consumer `data` and `style` objects are preserved.

## Accessibility

Toggle keeps native button keyboard and disabled behavior and communicates its persistent state with `aria-pressed`. Its accessible name should describe the choice without changing between states—for example, “Bold” rather than alternating between “Enable bold” and “Disable bold.”

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| `Enter` or `Space` | Toggles the native button. |
| `Tab` | Moves focus to an enabled toggle in document order. |
| Pointer press | Toggles state and applies the active treatment. |
| Keyboard focus | Shows the themed `:focus-visible` outline. |

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `aria-pressed="true\|false"` | Native accessible pressed state. |
| `data-state="on\|off"` | Stable styling state. |
| `data-size`, `data-variant`, `data-color` | Resolved theme options. |
| `data-high-contrast` | Present when high contrast is enabled. |
| `:hover`, `:active`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Toggle always renders a native `button`.
- Toggle groups, indeterminate state, and icon-specific parts are not included.
- Use a stable accessible name; visual state changes do not replace the button's label.
