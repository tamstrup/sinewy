---
title: Split Panel
description: Two resizable panes with a pointer- and keyboard-operated divider.
---

## Overview

`SplitPanel` arranges two panes around a draggable separator. Use it for a navigation sidebar,
editor/results workspace, or nested panes. The primitive owns layout, pointer capture, constraints,
keyboard behavior, and accessibility. The themed export adds a subtle divider and focus treatment.
It is not a docking system and does not persist layout settings.

## Import

```js
import { SplitPanel } from 'sinewy' // structural primitive
import SplitPanel from 'sinewy/split-panel'
import { SplitPanel as ThemedSplitPanel } from 'sinewy/theme'
```

## Basic usage

```js
import s from 'sin'
import { SplitPanel } from 'sinewy/theme'

const position = s.live(35)

SplitPanel({ bind: position, style: { height: '320px', '--min': '120px', '--max': 'calc(100% - 160px)' } },
  SplitPanel.Start({ id: 'navigation' }, 'Navigation'),
  SplitPanel.Divider({ 'aria-label': 'Navigation' }),
  SplitPanel.End('Content')
)
```

Supply exactly one Start, Divider, and End, in that order. Divider children may provide a decorative
grip; do not place buttons or other focusable controls inside the separator. Parts receive ordinary
div attributes, styles, DOM hooks, and events. Consumer handlers run first and may prevent default.

## Orientation and sizing

`orientation: 'horizontal'` places panes side by side, separated by a vertical divider. `'vertical'`
stacks them with a horizontal divider. Stacked layouts require a definite container height. Nested
SplitPanels work independently. Panes have zero minimum intrinsic size and hide overflow by default;
set pane `overflow: auto` or provide a scrollable child as appropriate.

Position is the size of the primary pane (Start when none is designated). Percentages use the space
available **after subtracting the divider**, so 50% gives equally sized panes. `primary: 'start'` or
`'end'` preserves that pane's pixel size when the container resizes; without it, the ratio is preserved.
Right-to-left layouts place Start at the inline start. Sizes are clamped to the available space.

## State

Use `defaultPosition` or `defaultPositionInPixels` for initial, internally managed state. Use `bind`
for two-way percentage state, or `position` / `positionInPixels` with `onreposition` for owner-controlled
state. Precedence is **bind, positionInPixels, position**, then the defaults. Pixel defaults take
precedence over percentage defaults. Avoid supplying multiple state modes.

Controlled pointer/keyboard requests are reported but do not move the divider until accepted by
the owner. Physical container constraints still clamp the rendered size. A primary pane preserves
its pixel size on parent resize; a bound percentage updates accordingly. Resize notifications let
controlled owners synchronize their state. Inputs are reapplied when changed.

`onreposition({ position, positionInPixels, source }, event)` reports pointer/keyboard requests and
container/constraint resizing. `source` is `pointer`, `keyboard`, or `resize`; the native event is
absent for resize notifications. No callback is emitted simply for initial mounting. Pointer moves
are coalesced to animation frames. Uncontrolled dragging updates layout and ARIA without remounting
children. Owners should avoid expensive work inside reposition callbacks.

## Snapping

Use `snap: '120px 50% repeat(100px)'` and `snapThreshold` (pixels, default 12). The nearest snap point
within the threshold wins, then constraints are applied. Invalid tokens and nonpositive repeat
intervals are ignored. Snapping applies only to pointer movement, so arrow keys cannot become trapped.

A custom `snap({ positionInPixels, size, snapThreshold })` may return a pixel position or `null`.
Custom functions own their threshold logic. Coordinates always measure from the primary pane's edge,
independently of orientation or text direction.

## API reference

| Attribute | Type | Default | Meaning |
| --- | --- | --- | --- |
| `defaultPosition` | number | 50 | Initial percentage. |
| `defaultPositionInPixels` | number | — | Initial pixel size. |
| `position` | number | — | Owner-controlled percentage. |
| `positionInPixels` | number | — | Owner-controlled pixel size. |
| `bind` | `s.Live<number>` | — | Two-way percentage binding. |
| `orientation` | `'horizontal' \| 'vertical'` | horizontal | Pane arrangement, not divider direction. |
| `primary` | `'start' \| 'end'` | — | Pane whose pixel size is preserved on resize. |
| `disabled` | boolean | false | Disables user resizing, not responsive layout. |
| `snap` | string or function | — | Pointer snap targets or transformation. |
| `snapThreshold` | number | 12 | Pixel distance for built-in snapping. |
| `onreposition` | `(detail, event?) => unknown` | — | Position requests and resize notifications. |
| `color` | theme color | accent | Themed export only. |

## Styling

Root CSS properties: `--divider-width` (4px), `--divider-hit-area` (12px), `--min` (0px), and `--max`
(100%). Constraints accept CSS lengths, percentages, and `calc()`, relative to the space available to
the panes. If constraints conflict, the maximum wins and the minimum is reduced to fit it. The reported
ARIA position reflects the actual constrained size. Root padding is supported; put decorative pane
padding on children so an empty pane can genuinely collapse.

Use `data-split-panel`, `data-split-start`, `data-split-end`, `data-split-divider`, `data-orientation`,
and the root's `data-dragging` hooks. `--split-start` and `--split-end` are internal layout properties,
not public configuration. Thin visible dividers can retain a generous invisible drag target.

## Accessibility and keyboard behavior

Give Divider an `aria-label` matching the primary pane, or `aria-labelledby` referencing its heading.
It supplies separator semantics, orientation, current/minimum/maximum values, and `aria-controls`.
Zero-size panes become inert while their content stays mounted. Disabled dividers leave the tab order.

| Key | Behavior |
| --- | --- |
| Left / Right | Move a vertical divider physically left / right. |
| Up / Down | Move a horizontal divider up / down. |
| Shift + arrow | Larger step (10% instead of 1%). |
| Home / End | Minimum / maximum primary pane size. |
| Enter | Toggle the minimum permitted size and the previous size. |

With a nonzero minimum, Enter minimizes rather than fully hides the pane. Pointer cancellation,
lost capture, disabling, and removal end dragging. Hidden containers preserve positioning intent
until they have a nonzero size. ResizeObserver and Pointer Events are required for interaction;
server rendering supplies the structural layout without accessing browser globals.

Behavior follows the [WAI-ARIA window splitter pattern](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/).
Automated keyboard, geometry, state, and DOM coverage is included. Manual screen-reader and mobile
assistive-technology sign-off remains outstanding; this is a preview component.
