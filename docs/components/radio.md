---
title: Radio
description: A themed native radio with scalar group binding and fieldset semantics.
---

## Overview

`Radio` renders a native `input type="radio"`. `Radio.Group` renders a native `fieldset`, supplies one shared radio `name`, and coordinates one string value through controlled, uncontrolled, or live state.

The group is the recommended form because a radio represents one choice among alternatives. Native radios supply arrow-key movement, mutual exclusion, validation, labels, form submission, reset, focus, and disabled behavior. Use an ordinary `legend` for the group name and ordinary `label` elements for items.

## Import

```js
import { Radio } from 'sinewy'
import Radio from 'sinewy/radio'
```

## Basic usage

```js
const plan = s.live('free')

Radio.Group({ name: 'plan', bind: plan },
  s`legend`('Plan'),
  s`label`(Radio({ value: 'free' }), 'Free'),
  s`label`(Radio({ value: 'pro' }), 'Pro')
)
```

All radios in a group receive the same native name. `required` is inherited by the items and uses the browser's native one-choice-required validation.

## State

Radio.Group accepts `defaultValue`, controlled `value`, or `bind: s.Live<string>`. When a radio becomes checked, `onvaluechange` receives its string value. Form reset restores `defaultValue` and synchronizes local or live-bound state.

A standalone Radio can use `defaultChecked`, controlled `checked`, or `bind: s.Live<boolean>`, but Radio.Group should be preferred whenever several radios form one choice.

## Styling

Radio and Radio.Group support `size`, `color`, and `highContrast`. Group options are inherited by descendant radios unless an item overrides them. Both roots support ordinary Sin style extension.

## API reference

### `Radio(attrs?)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `checked` | `boolean` | — | Controls standalone checked state. |
| `defaultChecked` | `boolean` | `false` | Sets initial standalone state. |
| `bind` | `s.Live<boolean>` | — | Reads and writes standalone checked state. |
| `oncheckedchange` | `(checked, event) => unknown` | — | Reports a standalone or selected item change. |
| `value` | native string value | `'on'` | Identifies the item in a group and form. |
| `size` | `'1' \| '2' \| '3'` | inherited or `'2'` | Controls radio dimensions. |
| `color` | theme color | inherited or `'accent'` | Selects the checked palette. |
| `highContrast` | `boolean` | inherited or `false` | Uses a stronger checked endpoint. |

Radio owns `type="radio"` and its native radio semantics. Compatible native input attributes and events are forwarded.

### `Radio.Group(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | `string` | — | Controls the selected item value. |
| `defaultValue` | `string` | — | Sets initial selection and the reset baseline. |
| `bind` | `s.Live<string>` | — | Reads and writes the selected value. |
| `onvaluechange` | `(value, event) => unknown` | — | Reports a newly selected value. |
| `name` | `string` | required | Supplies the shared native radio name. |
| `required` | `boolean` | `false` | Requires one native radio selection. |
| `disabled` | native fieldset attribute | `false` | Disables every descendant natively. |

JavaScript calls that omit `name` receive a deterministic internal name so native grouping remains functional, but the typed API requires an explicit name for an intentional form contract.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| Arrow keys | Move selection within the native named group. |
| `Space` | Selects the focused radio. |
| `Tab` | Moves into or out of the radio group according to browser behavior. |
| Label click | Selects the associated radio. |

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `:checked` | Native selected state. |
| `data-state="checked\|unchecked"` | Stable public state hook. |
| `data-size`, `data-color`, `data-high-contrast` | Resolved theme options. |
| `::before` | Visual inner selection dot. |
| `:hover`, `:active`, `:focus-visible`, `:disabled` | Native interaction states. |

## Current limits

- Group values are strings, matching native radio values.
- Radio.Group does not invent roving focus; same-name native radios own keyboard movement.
- There are no indicator, item-label, or composition parts.
