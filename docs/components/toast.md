---
title: Toast
description: Small, non-modal notifications with polite announcements and pausable auto-dismiss.
---

## Overview

`Toast` confirms a completed action without interrupting the current task. The primitive owns
visibility, dismissal, and timing; the themed export adds a restrained panel and close button.
Use inline messages or dialogs for errors and decisions that must not disappear.

## Import

```js
import { Toast } from 'sinewy'
import Toast from 'sinewy/toast'
import { Toast as ThemedToast } from 'sinewy/theme'
```

## Basic usage

```js
import s from 'sin'
import { Button, Toast } from 'sinewy/theme'

const Example = s(() => {
  let notification = null, nextId = 0
  return () => s`div`(
    Button({ onclick: () => notification = { id: ++nextId, message: 'Query saved' } }, 'Save'),
    Toast.Viewport({ 'aria-label': 'Notifications' },
      notification && Toast({
        key: notification.id,
        onopenchange: open => { if (!open) notification = null }
      },
        s`span`(notification.message),
        Toast.Close({ 'aria-label': 'Dismiss notification' })
      )
    )
  )
})
```

Keep Viewport mounted, even while empty, so the live region exists before a notification arrives.
Use a new key for a new notification, including repeated identical messages: this restarts its
timer and inserts new content into the live region. Ordinary rerenders do not restart a timer.

## Styling

The themed toast defaults to a neutral surface, compact typography, a subtle border and shadow,
and a small close button. `color` changes its focus palette. It inherits the document's color scheme
and supports forced colors. There is no entrance animation or motion requirement.

All parts forward native attributes, styles, DOM hooks, and events. Extend them with Sin templates.
Viewport is fixed to the bottom inline end by default, with pointer events passing through its
empty space. Toasts stack vertically and accept pointer interaction. Its top/bottom positions
respect safe-area insets. Mount it near the app root, outside transformed/clipping containers.
It does not enter the browser top layer and does not appear above native modal dialogs.

## API reference

### `Toast(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `open` | boolean | — | Owner-controlled visibility. |
| `defaultOpen` | boolean | true | Initial uncontrolled visibility. |
| `bind` | `s.Live<boolean>` | — | Two-way visibility binding, taking precedence over `open`. |
| `duration` | number | 5000 | Visible milliseconds before requesting dismissal; 0 disables the timer. |
| `onopenchange` | `(open, event?) => unknown` | — | Reports a dismissal request. Timer dismissals have no native event. |
| `color` | theme color | gray | Themed export only. |

Duration must be finite and nonnegative; invalid values use 5000ms. Changing duration resets the
remaining time. Closing and reopening starts a fresh timer. A controlled owner may reject dismissal;
the timeout is requested only once until reopened or duration changes. No callback fires on mounting.
The root renders nothing while closed. `data-toast`, `data-state="open"`, and `aria-atomic="true"`
are supplied on its visible element.

### `Toast.Viewport(attrs?, ...children)`

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `position` | bottom-end, bottom-start, top-end, top-start | bottom-end | Fixed placement, respecting text direction. |
| `aria-label` | string | Notifications | Localizable label for the notification area. |

Viewport owns `role="status"`, `aria-live="polite"`, `aria-relevant="additions text"`, and
`aria-atomic="false"`. Each toast is atomic, so a message update is announced together without
re-reading the whole stack. Hooks: `data-toast-viewport` and `data-position`.

### `Toast.Close(attrs?, ...children)`

A native button, nested inside Toast, which requests dismissal. Its default text is `×` and its
default accessible label is “Dismiss notification”; localize `aria-label` when needed. `type`
defaults to button. Native disabled behavior applies. Consumer click handlers run first and can
prevent dismissal with `event.preventDefault()`.

## Accessibility

Opening a toast does not move focus. Keep notifications short and use the always-mounted Viewport
for [polite status announcements](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22).
Timers pause while hovered, while focus is inside the toast, when the window loses focus, or when
the document is hidden. Resuming uses the remaining time, not a new full duration. Every toast should
have a Close button. For important content or actions, use `duration: 0` and provide a persistent
alternative to the toast; do not use timed notifications as the only record of important information.

## Keyboard and focus behavior

| Input | Behavior |
| --- | --- |
| Tab / Shift+Tab | Normal document order; focus within the toast pauses its timer. |
| Enter / Space on Close | Dismisses the toast. |
| Escape inside a toast | Dismisses that toast only; Escape elsewhere is untouched. |

When a focused toast is dismissed, focus returns to the element active when it appeared if that
element remains available and focus has not already moved elsewhere. Automatic dismissal does not
steal focus. All timers and window/document listeners are removed on teardown.

## Current limits

- Preview component; manual screen-reader and mobile assistive-technology sign-off is outstanding.
- No global store, notification history, queue limit, swipe dismissal, or dedicated action part.
  Applications own message lists and may compose ordinary buttons as actions.
- Viewport should be mounted empty before messages appear. Server rendering is supported without
  starting timers; announcing a message already present in server HTML is not guaranteed.
