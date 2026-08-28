---
title: Switch
description: A themed native form switch for immediate boolean settings.
---

## Overview

`Switch` renders a native `input type="checkbox"` with `role="switch"`. The checkbox supplies keyboard activation, focus, disabled behavior, validation, form submission, and reset semantics; Sinewy supplies the switch track, thumb, theme, and controlled state contract.

Use Switch for a setting that takes effect immediately, such as notifications or dark mode. Use Toggle for a pressed tool or formatting choice, and use an ordinary checkbox when the interaction represents selection rather than an immediate on/off setting.

The first API is one directly callable control. There is no `Switch.Root`, thumb part, label part, indeterminate state, variant, or composition option. Associate the input with an ordinary native `label`.

## Import

```js
import { Switch } from 'sinewy'
import Switch from 'sinewy/switch'
```

The themed facade also exports `Switch` by name:

```js
import { Switch } from 'sinewy/theme'
```

## Basic usage

```js
s`label`(
  Switch({
    defaultChecked: true,
    name: 'notifications',
    value: 'enabled'
  }),
  'Notifications'
)
```

The whole label activates the input. When a visible label is not available, provide an accessible name with `aria-label` or `aria-labelledby`.

## State

Use `defaultChecked` for native-style local state, `checked` when the owner controls state, or `bind` with a `s.Live<boolean>`:

```js
const notifications = s.live(true)

Switch({
  bind: notifications,
  oncheckedchange(checked, event) {
    console.log(checked, event.type)
  }
})
```

Controlled switches report the requested value through `oncheckedchange` and keep displaying the supplied `checked` value until the owner redraws with a new value. A live binding is read and written directly.

The consumer's native `onchange` handler runs before `oncheckedchange`. Native checkbox change events are not cancelable because the browser has already completed activation. To guard a transition, prevent the preceding native `click` event.

## Forms

Because Switch is a real checkbox, a checked switch contributes its `name` and `value` to `FormData`; an unchecked switch contributes nothing. Native `required`, `form`, `name`, `value`, and other input attributes are forwarded. Form reset restores `defaultChecked` and synchronizes uncontrolled or live-bound state.

Switch always owns `type="checkbox"` and `role="switch"`. Those attributes cannot be changed to a different input or accessibility role.

## Styling

Switch supports `size`, `color`, and `highContrast`. There is no `variant`: the switch track already has one concrete visual state transition. Normal Sin style extension and forwarded `style` and `data` objects are supported:

```js
const SpacedSwitch = Switch`
  margin-inline-start 8
`
```

## API reference

### `Switch(attrs?)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `checked` | `boolean` | — | Controls checked state. |
| `defaultChecked` | `boolean` | `false` | Sets initial uncontrolled state and the form reset baseline. |
| `bind` | `s.Live<boolean>` | — | Reads and writes checked state through a live binding. |
| `oncheckedchange` | `(checked, event) => unknown` | — | Reports a native checkbox change. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Controls track and thumb dimensions. |
| `color` | theme color | `'accent'` | Selects the checked track palette. |
| `highContrast` | `boolean` | `false` | Uses a stronger checked endpoint. |
| `disabled` | native input attribute | `false` | Disables focus and activation natively. |

All other compatible native input attributes, DOM hooks, and events are forwarded. Switch does not accept children.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| `Space` | Toggles the focused native checkbox. |
| `Tab` | Moves focus to an enabled switch in document order. |
| Label click | Activates the associated switch. |
| Pointer press | Uses native checkbox activation plus the themed active treatment. |
| Keyboard focus | Shows the themed `:focus-visible` outline. |

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `:checked` | Native checked state. |
| `data-state="checked\|unchecked"` | Stable state hook synchronized with the public state contract. |
| `data-size`, `data-color` | Resolved theme options. |
| `data-high-contrast` | Present when high contrast is enabled. |
| `::before` | Visual thumb on the native input. |
| `:hover`, `:active`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Switch always renders a native checkbox with the switch role.
- There are no structural parts; the thumb is a pseudo-element and labels remain native HTML.
- Indeterminate state is omitted because a switch represents a binary setting.
- Loading, icons, and speculative composition APIs are not included.
