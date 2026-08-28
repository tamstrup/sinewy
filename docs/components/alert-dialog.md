---
title: Alert Dialog
description: A Dialog specialization for decisions that require immediate attention.
---

## Overview

`AlertDialog` is a semantic specialization of `Dialog`. It uses the same native modal engine, state contract, accessible relationships, theming, and parts, while Content always renders `role="alertdialog"` so assistive technology can announce an urgent decision appropriately.

Use Alert Dialog when the user must acknowledge or choose before continuing—for example, confirming permanent deletion. Use ordinary Dialog for focused tasks that are not urgent interruptions.

## Import

```js
import { AlertDialog } from 'sinewy'
import AlertDialog from 'sinewy/alert-dialog'
```

The themed facade also exports `AlertDialog` by name:

```js
import { AlertDialog } from 'sinewy/theme'
```

## Basic usage

```js
AlertDialog(
  AlertDialog.Trigger({ color: 'red' }, 'Delete account'),
  AlertDialog.Content({ color: 'red' },
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This action permanently removes the account.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({
      variant: 'solid',
      color: 'red',
      onclick: deleteAccount
    }, 'Delete')
  )
)
```

Put the least destructive choice first and give it `autofocus` when that is the safest initial focus. A destructive Close button may run the action in its native `onclick` handler and then use the shared close transition.

## Why it shares Dialog parts

Alert Dialog does not add `Action` or `Cancel` aliases. Both would render the same native button and request the same close transition, so those names would not express a distinct runtime contract. Use `AlertDialog.Close` with ordinary button theme options and event handlers to make each choice explicit.

This keeps the specialization small while `role="alertdialog"` provides the concrete semantic difference.

## State and events

Alert Dialog supports the same `open`, `defaultOpen`, `bind`, and `onopenchange` API as Dialog. Controlled state, live bindings, consumer event ordering, prevented Trigger and Close clicks, and prevented Content cancellation behave identically.

```js
const open = s.live(false)

AlertDialog({ bind: open },
  // parts
)
```

## API reference

### `AlertDialog(attrs?, ...children)`

Accepts the same root attributes as `Dialog`: `id`, `open`, `defaultOpen`, `bind`, and `onopenchange`. It emits no wrapper element.

### `AlertDialog.Trigger(attrs?, ...children)`

The same themed native trigger contract as `Dialog.Trigger`.

### `AlertDialog.Content(attrs?, ...children)`

The same themed native `dialog` contract as `Dialog.Content`, with `role="alertdialog"` enforced. A caller-provided `role` cannot weaken the specialization.

### `AlertDialog.Title(attrs?, ...children)`

The accessible heading linked from Content.

### `AlertDialog.Description(attrs?, ...children)`

The accessible consequence or decision description linked from Content. Keep it concise and specific.

### `AlertDialog.Close(attrs?, ...children)`

A themed native choice button that requests closure after its consumer click handler runs. Use `autofocus` on the safest choice where appropriate.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| Trigger `Enter` or `Space` | Opens the native alert dialog modally. |
| Initial focus | Follows native dialog focus, including an explicit `autofocus` choice. |
| `Tab` and `Shift+Tab` | Move within the modal while the rest of the page is inert. |
| `Escape` | Dispatches native `cancel` and closes unless prevented. |
| Choice activation | Runs its native click handler and requests closure unless prevented. |
| Close | Restores focus to the invoking control. |

## Styling

Alert Dialog inherits all Dialog theme axes and styling hooks. Content supports `size`, `color`, and `highContrast`; Trigger and Close support the shared control `size`, `variant`, `color`, and `highContrast` options. Every part supports normal Sin style extension.

## Current limits

- Alert Dialog is modal only and intentionally reuses the native Dialog engine.
- There are no compatibility-only `Action` or `Cancel` aliases; use `Close` with explicit attributes and handlers.
- There is no Portal or Overlay part because the native top layer and `::backdrop` already provide those behaviors.
- Async action progress and loading state remain application concerns until a concrete shared API is justified.
