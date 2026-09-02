---
title: Combobox
description: An accessible searchable single- or multiple-selection control for Sin.js.
---

## Overview

For selection without a search field, use [CustomSelect](./custom-select.md). It shares the selection foundation and themed options but exposes a separate, non-editable control.

`Combobox` is a searchable selection component with a headless primitive and an optional themed facade. Typing narrows its list of options while focus stays in the text input. Single selection displays the chosen option as input text; multiple selection displays chosen values as removable pills inside the control.

The component owns selection, filtering, active-option state, keyboard behavior, and ARIA relationships. Consumers own labels, option data, and visual styling. Values are strings so selection identity is stable across redraws and can be submitted or persisted without an object-identity contract.

## Import

```js
import { Combobox } from 'sinewy'
import { Combobox as ThemedCombobox } from 'sinewy/theme'
```

`sinewy/combobox` also exposes the focused module with default and named exports.

## Basic usage

```js
import s from 'sin'
import { Combobox } from 'sinewy'

const accounts = s.live([])

const AccountPicker = () => Combobox({ multiple: true, bind: accounts },
  s`label`({ for: 'accounts-input' }, 'Accounts'),
  Combobox.Control(
    Combobox.Pills({
      removelabel: (_, text) => `Fjern ${text}`
    }),
    Combobox.Input({ id: 'accounts-input', placeholder: 'Find an account' })
  ),
  Combobox.Content(
    Combobox.Item({ value: 'assets:bank', textValue: 'Assets:Bank' }, 'Assets:Bank'),
    Combobox.Item({ value: 'expenses:office', textValue: 'Expenses:Office' }, 'Expenses:Office')
  )
)
```

In single-selection mode, omit `multiple` and `Combobox.Pills`. Use only one state mode: `defaultValue` for uncontrolled state, `value` plus `onvaluechange` for controlled state, or `bind` for Sin-native two-way live state.

## Themed facade

The named `Combobox` export from `sinewy/theme` preserves the headless part structure and behavior while adding a positioned root, field surface, pills, listbox, option states, and inherited theme colors:

```js
import { Combobox } from 'sinewy/theme'

Combobox({ size: '2', color: 'indigo' },
  s`label`({ for: 'account' }, 'Account'),
  Combobox.Control(
    Combobox.Input({ id: 'account', placeholder: 'Find an account' })
  ),
  Combobox.Content(
    Combobox.Item({ value: 'assets:bank', textValue: 'Assets:Bank' }, 'Assets:Bank'),
    Combobox.Item({ value: 'expenses:office', textValue: 'Expenses:Office' }, 'Expenses:Office')
  )
)
```

The themed root accepts `size="1|2|3"`, `color`, and `highContrast`, plus normal root `style` and `data` values. It deliberately has one field treatment rather than the action-oriented `solid`, `soft`, `outline`, and `ghost` variants used by Button.

Unlike the headless root, the themed root renders a positioned wrapper. Its listbox inherits the root's light/dark-aware palette. Both versions place the listbox in the browser's popover top layer, aligned with the control and flipped above it when space below is limited. The list is at least as wide as the control and can grow to fit option labels within the viewport. Resize and scroll keep the list aligned. All themed parts still support normal Sin style extension.

## Styling

Each headless or themed visible part is a normal Sin component and accepts call-site style extensions:

```js
const Control = Combobox.Control`
  display flex
  flex-wrap wrap
  gap 6
  padding 6
  border 1px solid #d8d8d8
  border-radius 8
`

const Input = Combobox.Input`
  flex 1
  min-width 8ch
  border 0
  outline 0
`

const Content = Combobox.Content`
  max-height 240
  overflow auto
  border 1px solid #d8d8d8
`
```

## API reference

### `Combobox(attrs?, ...children)`

Creates a shared combobox state scope without adding a wrapper element.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `id` | `string` | generated | Base for deterministic input, listbox, and option IDs. |
| `multiple` | `boolean` | `false` | Uses an array selection and enables pills and multi-select semantics. |
| `defaultValue` | `string \| null \| string[]` | `null` or `[]` | Initial uncontrolled selection. |
| `value` | `string \| null \| string[]` | — | Controlled selection. Its shape must match `multiple`. |
| `bind` | `s.Live<string \| null>` or `s.Live<string[]>` | — | Sin-native two-way selection binding. |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Controls logical Arrow Left/Right pill navigation. |
| `filter` | `(textValue, query, value) => boolean` | case-insensitive contains | Determines which options match the input query. |
| `formatValue` | `(value) => string` | item `textValue` or value | Formats selected input text and pills. Useful when stored values differ from labels. |
| `onvaluechange` | `(value, event) => void` | — | Reports a requested selection change. |

### `Combobox.Control(attrs?, ...children)`

Renders the textbox-area `div`. Place `Combobox.Pills` before `Combobox.Input` in multiple mode. Clicking otherwise empty control space focuses the input. It exposes `data-state="open|closed"` and `data-multiple`.

### `Combobox.Pills(attrs?)`

Renders the selected values as buttons in multiple mode and renders nothing in single mode. Every pill exposes `data-sinewy-combobox-pill`, `data-value`, and `data-selected` while keyboard-selected. Activating a pill removes it.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `removelabel` | `(value, textValue) => string` | ``(_, text) => `Remove ${text}` `` | Localizes the accessible label for each remove button. |

### `Combobox.Input(attrs?)`

Renders the text input with `role="combobox"`, `aria-autocomplete="list"`, `aria-controls`, `aria-expanded`, and active-option state. It accepts ordinary input attributes. Its value is owned by the combobox query or current single selection.

### `Combobox.Content(attrs?, ...children)`

Renders the `role="listbox"` container. It is hidden while closed and exposes `data-state="open|closed"`. Multiple mode adds `aria-multiselectable="true"`.

### `Combobox.Item(attrs?, ...children)`

Renders one `role="option"`.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | `string` | required | Stable selection identity. |
| `textValue` | `string` | `value` | Text used for filtering and selected-value display. Supply it when children are not identical plain text. |
| `disabled` | `boolean` | `false` | Removes the option from keyboard and mouse selection. |
| `onselect` | Sin mouse-event handler | — | Runs before selection. Prevent default to cancel selection. |

Items expose `aria-selected`, `aria-disabled`, `data-selected`, `data-disabled`, `data-highlighted`, `data-value`, and `data-text-value`.

## Accessibility

The component supplies the ARIA combobox, listbox, and option relationships and keeps DOM focus in the input while options are navigated. Consumers must provide an accessible name using a native `<label for>` or `aria-label` on `Combobox.Input`. Visual themes should make highlighted options, selected options, disabled options, and keyboard-selected pills distinguishable.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| Type in input | Filters options. |
| Arrow Down / Arrow Up | Opens the list and moves through matching enabled options, wrapping at either edge. |
| Enter | Selects the active option. |
| Escape | Closes the list and restores selected text in single mode. |
| Backspace at input position 0 | Keyboard-selects the last pill in multiple mode. |
| Arrow Left at input position 0 | Also selects the last pill in left-to-right mode; direction reverses in RTL. |
| Arrow Left / Arrow Right on pill | Moves between pills and back to the input using logical direction. |
| Backspace / Delete on pill | Removes it and keeps focus on a neighboring pill or the input. |

## Current limits

- The headless component positions its listbox but does not theme it. Popover API and ResizeObserver support are required.
- Values are strings; richer records remain consumer-owned option data.
- The listbox stays in its DOM context for inherited styles while the browser renders it in the top layer, outside ancestor overflow clipping.
