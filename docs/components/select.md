---
title: Select
description: A themed native single-value select with option and optgroup helpers.
---

## Overview

Need a consistently styled picker without a search field? Use [CustomSelect](./custom-select.md). This page documents the native control, still exported as `Select` and now also available as `NativeSelect` from `sinewy`, `sinewy/theme`, or `sinewy/native-select`. Existing imports and behavior are unchanged.

`Select` renders a native `select`. The browser supplies its popup, keyboard navigation, focus behavior, validation, form submission, and disabled semantics; Sinewy supplies sizing, color-aware interaction styling, controlled state, and live binding.

In browsers with customizable Select support, Sinewy progressively enhances the native picker with the same surface, option sizing, selection gutter, group typography, shadow, and interaction colors used by Dropdown and ContextMenu. Other browsers keep their platform picker and the existing themed closed control.

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

The browser continues to own popup behavior and placement. Where `appearance: base-select` and `::picker(select)` are supported, Sinewy also themes the popup and options. The enhancement requires no additional public attribute and falls back to the platform picker without changing behavior.

> **Safari support:** Customizable picker styling requires Safari 27 or later. Safari 26 and earlier render the regular platform-native picker. Sinewy does not currently replace it with a custom listbox fallback.

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
| `:open` | Native open-picker state in customizable Select implementations. |
| `::picker(select)` | Native top-layer picker surface where supported. |
| `::picker-icon` | Native disclosure icon where supported. |
| `option:checked`, `option::checkmark` | Native selected option and indicator where supported. |
| `:hover`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Select supports one scalar string value; `multiple` is not yet public.
- Browsers without customizable Select support use their native popup appearance.
- Popup placement remains browser controlled and does not expose Dropdown placement options.
- There is no custom trigger, portal, searchable combobox behavior, or composition API.
