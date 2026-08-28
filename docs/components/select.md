---
title: Select
description: A themed native single-value select with option and optgroup helpers.
---

## Overview

`Select` renders a native `select`. The browser supplies its popup, keyboard navigation, focus behavior, validation, form submission, and disabled semantics; Sinewy supplies sizing, color-aware interaction styling, controlled state, and live binding.

`Select.Option` renders `option`, and `Select.Group` renders `optgroup`. They exist because options and labelled groups are concrete parts of the native select model, not custom menu abstractions.

The initial contract is deliberately single-value. Native `multiple` selection is deferred because it needs an array-valued state contract and a materially different visual interaction.

## Import

```js
import { Select } from 'sinewy'
import Select from 'sinewy/select'
```

## Basic usage

```js
Select({ name: 'produce', defaultValue: 'pear' },
  Select.Group({ label: 'Fruit' },
    Select.Option({ value: 'apple' }, 'Apple'),
    Select.Option({ value: 'pear' }, 'Pear')
  ),
  Select.Group({ label: 'Vegetables' },
    Select.Option({ value: 'carrot' }, 'Carrot')
  )
)
```

Use a native `label` or an accessible name through `aria-label` or `aria-labelledby`.

## State and forms

Use `defaultValue` for local state, `value` for owner-controlled state, or `bind` with a `s.Live<string>`:

```js
const produce = s.live('pear')

Select({
  bind: produce,
  name: 'produce',
  onvaluechange(value, event) {
    console.log(value, event.type)
  }
},
Select.Option({ value: 'apple' }, 'Apple'),
Select.Option({ value: 'pear' }, 'Pear')
)
```

Native `name`, `required`, `form`, `disabled`, `autocomplete`, and other compatible select attributes are forwarded. Form reset restores `defaultValue` and synchronizes local or live-bound state. The consumer's native `onchange` handler runs before `onvaluechange`.

## Styling

Select supports `size`, `color`, and `highContrast`, plus normal Sin style extension:

```js
const WideSelect = Select`
  width 240
`
```

The browser continues to own the platform-specific popup and option rendering.

## API reference

### `Select(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | `string` | — | Controls the selected value. |
| `defaultValue` | `string` | — | Sets initial local state and the reset baseline. |
| `bind` | `s.Live<string>` | — | Reads and writes one selected value. |
| `onvaluechange` | `(value, event) => unknown` | — | Reports a native selection change. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Controls the closed control dimensions. |
| `color` | theme color | `'accent'` | Selects the interaction palette. |
| `highContrast` | `boolean` | `false` | Strengthens the border endpoint. |

### `Select.Option(attrs?, ...children)`

Renders a native `option` and forwards native option attributes such as `value`, `disabled`, and `label`. When Select owns a value, Option emits the matching native `selected` state for SSR and hydration.

### `Select.Group(attrs?, ...children)`

Renders a native `optgroup`. Supply its required visible group name with the native `label` attribute; `disabled` and other compatible attributes are forwarded.

## Keyboard and focus behavior

Keyboard and popup behavior follow the browser's native select implementation, including arrow navigation, typeahead, Escape, Enter, Space, and platform-specific modifier behavior.

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `data-size`, `data-color` | Resolved theme options. |
| `data-high-contrast` | Present when high contrast is enabled. |
| `:hover`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Select supports one scalar string value; `multiple` is not yet public.
- The native popup and its option styling remain browser and operating-system controlled.
- There is no custom trigger, portal, searchable combobox behavior, or composition API.
