---
title: Context Menu
description: A headless menu opened at a contextual pointer or keyboard invocation point.
---

## Overview

`ContextMenu` is a headless contextual menu for Sin.js. It opens from the native `contextmenu` event or a stationary touch or pen long press, positions its content at the invocation point, and reuses Sinewy's tested menu navigation, selection, checkbox, radio, and submenu behavior.

A non-mouse press is recognized after 700 milliseconds. Movement, cancellation, or an earlier release aborts it; once recognized, the menu opens immediately after release so the same pointer gesture cannot trigger native popover light-dismiss.

## Import

```js
import { ContextMenu } from 'sinewy'
```

The focused entrypoint provides the same default and named export:

```js
import ContextMenu from 'sinewy/context-menu'
```

The optional themed facade is a named export from the shared theme entrypoint:

```js
import { ContextMenu } from 'sinewy/theme'
```

## Basic usage

```js
ContextMenu(
  ContextMenu.Trigger('Right-click or press and hold here'),
  ContextMenu.Content(
    ContextMenu.Item({ onselect: rename }, 'Rename'),
    ContextMenu.Item({ onselect: duplicate }, 'Duplicate'),
    ContextMenu.Separator(),
    ContextMenu.Item({ onselect: remove }, 'Delete')
  )
)
```

Run the interactive example from the repository root with:

```sh
npm run context-menu-demo
```

## Styling

Every part is a normal Sin component and supports tagged-template style extension:

```js
const Target = ContextMenu.Trigger`
  min-height 240
  border 1px dashed #aaa
`

const Content = ContextMenu.Content`
  width 220
  padding 6
  border-radius 10
  background white
  box-shadow 0 16px 40px rgb(0 0 0 / 0.16)
`
```

### Themed facade

The themed facade leaves `ContextMenu.Trigger` visually unstyled because it represents an arbitrary contextual target rather than a menu button. `Content`, `SubContent`, and the shared menu parts reuse Dropdown's theme system:

| Part | Option | Values | Default and behavior |
| --- | --- | --- | --- |
| content, subcontent | `size` | `1 \| 2 \| 3` | `2` on root content; inherited by submenu content and menu parts. |
| content, subcontent | `variant` | `solid \| soft` | `solid`; controls highlighted and open-subtrigger treatment. |
| content, subcontent | `color` | theme color | `gray` on root content; inherited by submenu content and item states. |
| content, subcontent, item | `highContrast` | `boolean` | Strengthens solid highlighted states. |
| item, checkbox, radio, subtrigger | `color` | theme color | An explicit value provides a semantic override. |
| item, checkbox, radio, subtrigger | `shortcut` | Sin children | Renders a trailing themed `kbd`. |

`ContextMenu.Shortcut` is also available for explicit composition. Theme values are rendered as data attributes and CSS custom properties; ordinary `style` values and tagged-template extensions continue to work.

## API reference

### `ContextMenu(attrs?, ...children)`

Creates the contextual-menu state scope without rendering a wrapper.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `id` | `string` | generated | Base ID for the target and content relationship. |
| `loop` | `boolean` | `false` | Whether arrow navigation wraps at the menu edges. |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction, including submenu keys and keyboard-point placement. |
| `onbeforeopenchange` | `(open, event) => void` | — | Runs for the native `beforetoggle` event. Opening can be prevented. |
| `onopenchange` | `(open, event) => void` | — | Reports completed native popover transitions. |

Controlled `open`, `defaultOpen`, and `bind` are intentionally absent. Programmatic opening would be incomplete without a corresponding point or anchor contract.

### `ContextMenu.Trigger(attrs?, ...children)`

Renders the area that invokes the menu. The default element is a focusable `div`; `as` can supply a custom Sin component.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `as` | Sin component | `div` | Renders a custom target with the owned attributes and handlers. |
| `disabled` | `boolean` | `false` | Disables the custom menu and leaves the browser's native context menu available. |
| `oncontextmenu` | Sin event handler | — | Runs before internal opening. Prevent default to suppress the custom menu. |
| `onkeydown` | Sin event handler | — | Runs before shortcut handling. Prevent default to suppress Shift+F10 and the Context Menu key. |

Shift+F10 and the Context Menu key open at the target's logical lower-start corner. Sinewy handles those keys directly so invocation does not depend on whether a browser synthesizes a native `contextmenu` event. A consumer `onkeydown` handler runs first and can prevent the custom menu. Keyboard-origin `contextmenu` events use the same fallback point.

Touch and pen invocation uses a stationary 700 millisecond long press at the initial pointer coordinates. Sinewy suppresses the iOS touch callout by default; a consumer-provided `-webkit-touch-callout` style can override that behavior.

### `ContextMenu.Content(attrs?, ...children)`

Renders a `popover="auto"` menu positioned against an internal zero-sized point anchor. It accepts the same placement and collision attributes as `Dropdown.Content`.

### Shared menu parts

The remaining parts have the same observable behavior and attributes as their `Dropdown` counterparts:

- `ContextMenu.Item`
- `ContextMenu.Checkbox`
- `ContextMenu.RadioGroup`
- `ContextMenu.Radio`
- `ContextMenu.Indicator`
- `ContextMenu.Group`
- `ContextMenu.Label`
- `ContextMenu.Separator`
- `ContextMenu.Sub`
- `ContextMenu.SubTrigger`
- `ContextMenu.SubContent`

They use the same menu engine: their roles, focus movement, typeahead, selection, checked state, submenu intent, and styling hooks operate against the enclosing `ContextMenu` state.

## Accessibility

The target owns `aria-haspopup="menu"`, `aria-controls`, synchronized `aria-expanded`, and disabled state. Content and items use the WAI-ARIA menu roles and roving focus behavior already covered by the Dropdown suite. Closing restores focus to the invoking target when focus remained inside the menu.

Consumers using `as` must forward received attributes, event handlers, `dom`, and children. They are responsible for making a custom target keyboard-focusable when necessary.

## Current limits

- Programmatic or controlled opening has no public contract yet.
- The ephemeral point anchor is inserted into `document.body` when invoked and removed with the component; menu content itself remains in its original Sin ancestry and enters the top layer through the Popover API.
- Positioning requires named CSS Anchor Positioning (`anchor-name`, `position-anchor`, and `position-area`). There is no JavaScript positioning fallback for older browsers without that support.
