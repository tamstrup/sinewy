---
title: Custom Select
description: A consistently themed single-choice control without a search field.
---

## Overview

`CustomSelect` displays a button-like trigger and a themed list of options. It shares selection state, option styling, and popup positioning with [Combobox](./combobox.md), but has no text input or filtering. Typing jumps to a matching option without hiding the others.

Use this component when consistent picker styling matters. Use [Select or NativeSelect](./select.md) when you want the platform's own picker. The existing `Select` export is unchanged; `NativeSelect` is an explicit alias, not a migration requirement.

The popup uses the Popover API's top layer to escape clipping ancestors, with viewport-aware positioning that flips above the trigger when needed. It is at least as wide as the trigger and can grow to fit option labels, capped to the viewport. Groups stay content-sized, including in Safari. Target browsers must support the Popover API and ResizeObserver. Custom selection requires JavaScript; choose NativeSelect for a functional no-JavaScript control.

## Import

```js
import { CustomSelect, NativeSelect } from 'sinewy'
import CustomSelect from 'sinewy/custom-select'
import NativeSelect from 'sinewy/native-select'
```

Both controls are also exported from `sinewy/theme`. CustomSelect is already themed.

## Basic usage

```js
import s from 'sin'
import { CustomSelect } from 'sinewy'

const produce = s.live('pear')

CustomSelect({ bind: produce, name: 'produce', 'aria-label': 'Produce' },
  CustomSelect.Group({ label: 'Fruit' },
    CustomSelect.Option({ value: 'apple' }, 'Apple'),
    CustomSelect.Option({ value: 'pear' }, 'Pear')
  ),
  CustomSelect.Option({ value: 'carrot' }, 'Carrot')
)
```

In TypeScript, declare nullable live state explicitly: `s.live<string | null>('pear')`. `null` represents no selection. Non-empty strings identify options; the empty string is reserved for the form placeholder.

## State and forms

Use `defaultValue` for local state, `value` plus `onvaluechange` for owner-controlled state, or `bind` for two-way live state. Controlled requests do not change the displayed or submitted value until the owner accepts them.

A visually hidden native select carries the selected value for `name`, external `form` association, `required` validation, and form reset. It is excluded from the accessibility tree and tab order. Failed required validation focuses the visible trigger and marks it invalid. Disabled controls and disabled fieldsets are excluded from submission.

Reset requests restore `defaultValue`, or `null` when omitted, and synchronize live state. Controlled owners receive the reset request through `onvaluechange` and remain authoritative. A cancelled native reset preserves the current state. Reset callbacks receive the native reset event; pointer and keyboard selections receive their originating events.

## Styling

Use `size="1|2|3"`, `color`, and `highContrast`. The option surface and selection/highlight colors are shared with the themed Combobox and inherit light/dark color schemes.

`style`, `data`, and call-site Sin template extensions apply to the outer wrapper. Other compatible button attributes, including `id`, accessible labels, `dom`, and native event handlers, apply to the trigger. Consumer trigger handlers run first and can prevent the internal action.

```js
const WideSelect = CustomSelect`width 360`
```

## API reference

### `CustomSelect(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | `string \| null` | — | Owner-controlled selection. |
| `defaultValue` | `string \| null` | `null` | Initial local selection and reset baseline. |
| `bind` | `s.Live<string \| null>` | — | Two-way selection state. |
| `onvaluechange` | `(value, event) => unknown` | — | Reports selection or reset requests. |
| `placeholder` | `string` | `'Choose an option'` | Text when nothing is selected. |
| `formatValue` | `(value) => string` | option text | Formats the selected trigger text. |
| `name`, `form`, `autocomplete` | `string` | — | Forwarded to the native form proxy. |
| `required` | `boolean` | `false` | Requires a selected option for valid submission. |
| `disabled` | `boolean` | `false` | Disables selection and submission. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Trigger and option dimensions. |
| `color` | theme color | `'accent'` | Interaction palette. |
| `highContrast` | `boolean` | `false` | Stronger trigger border and highlighted option contrast. |

### `CustomSelect.Option(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | non-empty `string` | required | Stable, unique selection identity. |
| `textValue` | `string` | plain children or value | Typeahead, selected display, and form option text. Supply it for rich children. |
| `disabled` | `boolean` | `false` | Excludes the option from selection and keyboard navigation. |
| `onselect` | mouse-event handler | — | Runs before pointer or keyboard activation; prevent default to cancel. |

### `CustomSelect.Group(attrs?, ...children)`

Renders a labelled `role="group"`. The required `label` is shown above its options; `disabled` disables the contained options. Use flat groups, not nested groups.

## Accessibility

The visible trigger has `role="combobox"`, `aria-expanded`, `aria-controls`, and active-option relationships. The popup uses listbox/option semantics, not action-menu semantics. DOM focus stays on the trigger during option navigation. Give the trigger an accessible name with a native `label` targeting its `id`, `aria-label`, or `aria-labelledby`.

Keyboard and DOM behavior have automated coverage. Manual screen-reader and mobile assistive-technology sign-off remains outstanding; this is a preview component. The interaction follows the [WAI-ARIA select-only combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| Click, Enter, Space, Arrow Down/Up | Opens at the selected option, or the first enabled option. |
| Arrow Down/Up while open | Moves through enabled options without wrapping or committing. |
| Home / End | Opens and highlights the first / last enabled option. |
| Printable characters | Opens and jumps to matching text; repeated characters cycle matches. |
| Enter / Space while open | Commits the highlighted option and closes. |
| Tab | Commits the highlighted option, closes, and permits normal focus movement. |
| Escape | Closes without changing the selected value. |
| Outside click or blur | Closes without committing the highlighted option. |

## Styling hooks

The wrapper exposes `data-size`, `data-color`, and `data-high-contrast`. The trigger exposes `data-state="open|closed"` and `data-placeholder`. Options expose `data-selected`, `data-highlighted`, `data-disabled`, `data-value`, and `data-text-value`. Native `:focus-visible`, `:disabled`, and `aria-invalid` style trigger interactions.

## Current limits

- Single string values only; no multiple-selection, filtering, or Input part.
- Options must be supplied as CustomSelect.Option, not native option elements.
- NativeSelect remains preferable when native picker behavior or no-JavaScript operation is required.
- Popup placement is automatic; there is no speculative portal or placement configuration API.
