---
title: Dialog
description: A themed native modal dialog for focused tasks and decisions.
---

## Overview

`Dialog` uses the native HTML `dialog` element and `showModal()`. The browser owns top-layer rendering, focus containment, page inertness, Escape cancellation, and the backdrop; Sinewy supplies state control, accessible relationships, themed parts, and event composition.

The initial API has only the parts needed for an accessible modal: `Trigger`, `Content`, `Title`, `Description`, and `Close`. There is no portal or overlay part because a modal native dialog already enters the top layer and exposes `::backdrop`.

## Import

```js
import { Dialog } from 'sinewy'
import Dialog from 'sinewy/dialog'
```

The themed facade also exports `Dialog` by name:

```js
import { Dialog } from 'sinewy/theme'
```

## Basic usage

```js
Dialog(
  Dialog.Trigger('Edit profile'),
  Dialog.Content(
    Dialog.Title('Edit profile'),
    Dialog.Description('Change the public details shown on your account.'),
    // Form fields and ordinary children can go here.
    Dialog.Close('Cancel'),
    Dialog.Close({ variant: 'solid', color: 'accent' }, 'Save changes')
  )
)
```

Trigger and Close render native buttons with `type="button"` by default. Content renders a native `dialog`. Icons, fields, forms, and action layouts are ordinary children.

## State

Use `defaultOpen` for local state, `open` for owner-controlled state, or `bind` with a `s.Live<boolean>`:

```js
const open = s.live(false)

Dialog({ bind: open, onopenchange(next, event) {
  console.log(next, event.type)
}},
  Dialog.Trigger('Open'),
  Dialog.Content(
    Dialog.Title('Settings'),
    Dialog.Description('Update your preferences.'),
    Dialog.Close('Done')
  )
)
```

Controlled dialogs report an open or close request through `onopenchange` and wait for the owner to update `open`. Consumer click and cancel handlers run first. Calling `event.preventDefault()` on a Trigger click, Close click, or Content `cancel` event suppresses Sinewy's corresponding transition.

## Accessible naming

`Dialog.Title` and `Dialog.Description` receive deterministic IDs. Content links to them with `aria-labelledby` and `aria-describedby`. Include both by default, even if they are visually styled to suit the layout.

For a dialog whose visible contents cannot include a title, give Content an `aria-label`. If a description is intentionally absent, pass `aria-describedby: null` to Content so it does not reference the default description ID.

If you replace a Title or Description `id`, also pass the matching `aria-labelledby` or `aria-describedby` value to Content so the relationship remains valid.

## Styling

Content supports `size`, `color`, and `highContrast`. Size controls the panel's maximum width, padding, and radius. Color supplies the focus palette and an inherited palette for themed descendants. Trigger and Close support the shared control `size`, `variant`, `color`, and `highContrast` options.

Every part supports normal Sin style extension:

```js
const WideContent = Dialog.Content`
  max-width 720
`
```

## API reference

### `Dialog(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `id` | `string` | generated | Establishes deterministic part IDs. |
| `open` | `boolean` | — | Controls modal visibility. |
| `defaultOpen` | `boolean` | `false` | Sets the initial uncontrolled state. |
| `bind` | `s.Live<boolean>` | — | Reads and writes visibility through a live binding. |
| `onopenchange` | `(open, event) => unknown` | — | Reports requested visibility changes. |

Dialog itself emits no wrapper element.

### `Dialog.Trigger(attrs?, ...children)`

Renders a themed native button with `aria-haspopup="dialog"`, `aria-controls`, and `aria-expanded`. It supports all shared control theme options, native button attributes, events, `data`, and `style`. `type` defaults to `button`.

### `Dialog.Content(attrs?, ...children)`

Renders a themed native `dialog`. It supports `size`, `color`, `highContrast`, native dialog attributes and events, `data`, and `style`. Native `cancel` and `close` events are forwarded.

### `Dialog.Title(attrs?, ...children)`

Renders the accessible `h2` title linked from Content.

### `Dialog.Description(attrs?, ...children)`

Renders the accessible description paragraph linked from Content.

### `Dialog.Close(attrs?, ...children)`

Renders a themed native button that requests closure. It supports shared control options and defaults to `variant="soft"`, `color="gray"`, and `type="button"`.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| Trigger `Enter` or `Space` | Opens the native modal. |
| `Tab` and `Shift+Tab` | Move within the modal while the rest of the page is inert. |
| `Escape` | Dispatches native `cancel` and closes unless prevented. |
| Close `Enter` or `Space` | Requests closure. |
| Close | Native dialog focus restoration returns focus to the invoking control. |

## Styling hooks

| Hook | Meaning |
| --- | --- |
| `data-state="open\|closed"` | Resolved root state on Trigger and Content. |
| `data-size`, `data-color`, `data-high-contrast` | Resolved Content theme options. |
| `data-variant` | Resolved Trigger or Close control variant. |
| `dialog::backdrop` | Native top-layer backdrop. |
| `:focus-visible` | Keyboard focus treatment. |

## Current limits

- Dialog is modal only. A non-modal `show()` mode is not exposed.
- There is no Portal or Overlay part; the native top layer and `::backdrop` provide those capabilities.
- Outside-pointer dismissal is not added because native modal dialogs do not define it as a default behavior.
- Include Title and Description, or explicitly replace their accessible relationships on Content.
