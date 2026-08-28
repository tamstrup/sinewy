---
title: Checkbox
description: A themed native checkbox with boolean and array-valued group binding.
---

## Overview

`Checkbox` renders a native `input type="checkbox"`. It preserves native labels, keyboard activation, validation, form data, reset, disabled behavior, and events while adding Sinewy theming and controlled, uncontrolled, or live boolean state.

`Checkbox.Group` is an optional native `fieldset`. It coordinates a shared `name` and an array of selected checkbox values, which makes one `s.Live<string[]>` useful for a real multi-value group. There are no decorative parts; associate each checkbox with an ordinary `label`, and put an ordinary `legend` inside a group.

## Import

```js
import { Checkbox } from 'sinewy'
import Checkbox from 'sinewy/checkbox'
```

## Basic usage

```js
s`label`(
  Checkbox({ name: 'terms', value: 'accepted', required: true }),
  'Accept the terms'
)
```

## Group binding

```js
const channels = s.live(['email'])

Checkbox.Group({ name: 'channels', bind: channels },
  s`legend`('Notifications'),
  s`label`(Checkbox({ value: 'email' }), 'Email'),
  s`label`(Checkbox({ value: 'sms' }), 'SMS')
)
```

The group reads and writes a new string array. Checked native inputs contribute repeated `name=value` pairs to `FormData`, exactly like ordinary HTML checkboxes.

HTML has no native “at least one checkbox in this group” constraint. `Checkbox.Group` therefore does not invent a `required` group attribute. Native `required` remains available on an individual Checkbox and means that particular checkbox must be checked.

## State

A standalone Checkbox accepts `defaultChecked`, controlled `checked`, or `bind: s.Live<boolean>`. `oncheckedchange` reports its next boolean state after the consumer's native `onchange` handler.

Within Checkbox.Group, the group value owns checked state. Its `defaultValue`, controlled `value`, or `bind: s.Live<string[]>` contains the values of checked items, and `onvaluechange` reports the next array. Individual `oncheckedchange` callbacks still report the changed item.

## Styling

Checkbox and Checkbox.Group support `size`, `color`, and `highContrast`. Group theme options are inherited by items unless an item overrides them. Both roots support normal Sin style extension.

## API reference

### `Checkbox(attrs?)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `checked` | `boolean` | — | Controls standalone checked state. |
| `defaultChecked` | `boolean` | `false` | Sets initial standalone state and reset baseline. |
| `bind` | `s.Live<boolean>` | — | Reads and writes standalone checked state. |
| `oncheckedchange` | `(checked, event) => unknown` | — | Reports the changed item. |
| `size` | `'1' \| '2' \| '3'` | inherited or `'2'` | Controls checkbox dimensions. |
| `color` | theme color | inherited or `'accent'` | Selects the checked palette. |
| `highContrast` | `boolean` | inherited or `false` | Uses a stronger checked endpoint. |

Checkbox owns `type="checkbox"` and its native checkbox semantics. Compatible native input attributes and events are forwarded.

### `Checkbox.Group(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | `string[]` | — | Controls the checked item values. |
| `defaultValue` | `string[]` | `[]` | Sets initial values and the reset baseline. |
| `bind` | `s.Live<string[]>` | — | Reads and writes checked item values. |
| `onvaluechange` | `(values, event) => unknown` | — | Reports the next selected values. |
| `name` | `string` | — | Supplies a shared native name to descendant items. |
| `disabled` | native fieldset attribute | `false` | Disables all descendant controls natively. |

The group renders `fieldset` and forwards compatible fieldset attributes. Use a native `legend` for its accessible group name.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| `Space` | Toggles the focused checkbox. |
| `Tab` | Moves through enabled checkboxes in document order. |
| Label click | Activates the associated checkbox. |

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `:checked` | Native checked state. |
| `data-state="checked\|unchecked"` | Stable public state hook. |
| `data-size`, `data-color`, `data-high-contrast` | Resolved theme options. |
| `::before` | Visual check mark. |
| `:hover`, `:active`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Indeterminate state is not yet public.
- Group values are strings, matching native form values.
- There are no indicator, label, or root subparts.
