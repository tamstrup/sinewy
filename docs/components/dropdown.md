---
title: Dropdown
description: Headless and themed dropdown-menu components for Sin.js.
---

## Overview

`Dropdown` is a headless dropdown-menu component for Sin.js. It provides structure, state, accessibility attributes, focus management, keyboard navigation, and selection behavior. It deliberately provides almost no visual design.

The current implementation targets browsers with the Popover API and CSS anchor positioning. It uses a native `popover="auto"`, so top-layer rendering, light dismissal, and Escape handling come from the browser rather than a portal or overlay manager.

Run the complete interactive example from the repository root with:

```sh
npm run demo
```

See [`../../examples/demo.js`](../../examples/demo.js) for a styled demonstration plus an evaluation lab covering collision strategy, viewport edges, oversized content, moving and clipped anchors, deep submenus, lifecycle cancellation, and rapid clicks.

## Import

The package root is the canonical headless entry:

```js
import { Dropdown } from 'sinewy'
```

`sinewy/dropdown` exposes the focused implementation module with default and named exports.

The reusable visual facade has the same structure and is exported separately:

```js
import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger({ variant: 'outline', color: 'accent' },
    'Actions',
    Dropdown.TriggerIcon()
  ),
  Dropdown.Content({ size: '2', variant: 'soft', color: 'indigo' },
    Dropdown.Item({ shortcut: '⌘ D' }, 'Duplicate'),
    Dropdown.Item({ color: 'red', shortcut: '⌘ ⌫' }, 'Delete')
  )
)
```

The theme adds an inherited `size="1|2|3"` menu scale with 12/14/16px item typography and size-specific height, spacing, radius, indicator, and gutter metrics. Setting `size` on content scopes labels, items, shortcuts, indicators, and nested menus; a part-level size is an explicit override. When a menu contains a checkbox or radio item, every item in that menu reserves the indicator gutter, while parent and nested menu scopes remain independent.

Content and subcontent accept `variant="solid|soft"`, `color`, and `highContrast`. Triggers accept `variant="solid|soft|outline|ghost"` plus the same color and contrast options. Items inherit the menu palette and variant but may use `color` or `highContrast` as semantic overrides. Available colors are `gray`, `accent`, `red`, `orange`, `amber`, `green`, `teal`, `cyan`, `blue`, `indigo`, `purple`, `pink`, and `crimson`; `accent` currently aliases indigo. The light/dark-aware palette is adapted from Radix Colors 3.0.0 under its MIT license, recorded in [`../../licenses/radix-colors.txt`](../../licenses/radix-colors.txt).

These options become stable `data-*` styling hooks and are not forwarded as invalid DOM attributes. The facade also supplies the `shortcut` convenience, styled indicators, `.Shortcut`, and an SVG `.TriggerIcon`.

Both the headless and themed modules have adjacent TypeScript declarations. The theme wraps each directly styled headless primitive in an explicit Sin component so call-site template extensions retain the intermediate theme class.

## API stability

The source-level public names were reviewed and frozen for the current-browser preview on 25 August 2026:

- callable root: `Dropdown`
- headless parts: `.Trigger`, `.Content`, `.Item`, `.Checkbox`, `.RadioGroup`, `.Radio`, `.Indicator`, `.Group`, `.Label`, `.Separator`, `.Sub`, `.SubTrigger`, and `.SubContent`
- themed conveniences: `.TriggerIcon` and `.Shortcut`

Component identifiers use PascalCase throughout the public API. The short `Checkbox` and `Radio` names are deliberate in the scoped `Dropdown.*` namespace. The root is directly callable, so there is no redundant `.Root`; native top-layer popovers remove the need for `.Portal`. Callbacks retain Sin's lower-case event naming, and `bind` remains the Sin-native live-value convenience alongside controlled and uncontrolled state.

An anchor arrow, modal behavior, outside-interaction hooks, collision padding, and legacy fallbacks are not reserved public parts or attributes. They should be added only when the platform can support a truthful contract. Compatibility-only no-ops are deliberately excluded.

The names are frozen, but production accessibility sign-off still requires keyboard and assistive-technology testing in each supported browser.

## Basic usage

```js
import s from 'sin'
import { Dropdown } from 'sinewy'

const selected = s.live('Nothing selected')

const App = () => Dropdown(
  Dropdown.Trigger('Options'),

  Dropdown.Content(
    Dropdown.Label('File actions'),
    Dropdown.Group({ ariaLabel: 'File actions' },
      Dropdown.Item({
        textValue: 'Edit',
        onselect: () => selected('Edit')
      }, 'Edit'),

      Dropdown.Item({ disabled: true }, 'Rename')
    ),
    Dropdown.Separator(),
    Dropdown.Item({
      onselect: event => {
        selected('Kept open')
        event.preventDefault()
      }
    }, 'Keep menu open')
  )
)

s.mount(App)
```

`Dropdown.Trigger`, `Dropdown.Content`, and `Dropdown.Item` must render below a `Dropdown` root. The root shares one private state object with its parts through Sin context. Rendering one of these parts outside a root throws an error. Development builds also warn when more than one trigger or content is mounted in the same state scope.

## Styling

Every part is a normal Sin component and accepts call-site style extensions:

```js
const Trigger = Dropdown.Trigger`
  padding 8 12
  border-radius 8
`

const Content = Dropdown.Content`
  position-area block-end span-inline-end
  position-try-fallbacks flip-block, flip-inline
  min-width 220
  padding 6
  border 1px solid #ddd
  border-radius 10
  background white
  box-shadow 0 16px 40px rgb(0 0 0 / 0.16)
`

const Item = Dropdown.Item`
  padding 7 9

  &[data-highlighted] {
    background #7c3aed
    color white
  }

  &[data-disabled] {
    color #aaa
  }
`
```

The headless content supplies `position: fixed`, `inset: auto`, anchor placement, logical collision fallbacks, size-constraining fallbacks, and offset margins. When no natural placement fits, the final fallbacks stretch the menu along its placement axis to the available viewport space. Set `overflow: auto` in the theme to make oversized content scroll within that space. Consumers provide dimensions, animation, and all other theme styles. An object passed through `style` can override the generated placement declarations.

### Themed facade

The themed facade keeps the same component structure and adds these visual options:

| Part | Option | Values | Default and behavior |
| --- | --- | --- | --- |
| trigger | `size` | `1 \| 2 \| 3` | `2`; controls trigger metrics. |
| trigger | `variant` | `solid \| soft \| outline \| ghost` | `solid`. |
| trigger | `color` | theme color | `gray`. |
| content, subcontent | `size` | `1 \| 2 \| 3` | `2` on root content; inherited by submenu content and menu parts. |
| content, subcontent | `variant` | `solid \| soft` | `solid`; controls highlighted and open-subtrigger treatment. |
| content, subcontent | `color` | theme color | `gray` on root content; inherited by submenu content and item states. |
| trigger, content, subcontent, item | `highContrast` | `boolean` | Strengthens solid highlighted states. |
| item, checkbox, radio, subtrigger | `color` | theme color | Inherits menu state styling; an explicit value provides a semantic override. |
| item, checkbox, radio, subtrigger | `shortcut` | Sin children | Renders a trailing themed `kbd`. |

The palette is expressed through inline `--sinewy-accent-*`, neutral, panel, contrast, and extreme custom properties. Consumer `style` values take precedence, so a component can remap individual theme tokens without replacing its behavioral attributes. Light and dark values follow the inherited CSS `color-scheme`; no React-style theme provider is required.

## API reference

### `Dropdown(attrs?, ...children)`

Creates a dropdown state scope. It does not render a wrapper element.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `id` | `string` | generated | Base ID. The trigger receives `${id}-trigger` and content receives `${id}-content`. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. Open content is shown after mounting. |
| `open` | `boolean` | — | Controlled open state. Native interactions call `onopenchange` and reconcile to this value. |
| `bind` | `s.Live<boolean>` | — | Optional two-way live binding synchronized with the native popover. |
| `loop` | `boolean` | `true` | Whether Arrow Up/Down wrap at the first and last enabled items. |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction, including submenu forward/back keyboard behavior. |
| `onbeforeopenchange` | `(open, event) => void` | — | Runs for native `beforetoggle`. Preventing the opening event keeps the menu closed; native closing events are not cancelable. |
| `onopenchange` | `(open, event) => void` | — | Called after the native popover emits `toggle`. |

Generated IDs are deterministic within a render and are shared through Sin context, including during SSR and hydration.

Use only one state mode at a time. `defaultOpen` initializes uncontrolled state. With `open`, the prop remains authoritative and `onopenchange` reports requested transitions. With `bind`, native transitions update the live value and external live-value changes update the popover.

### `Dropdown.Trigger(attrs?, ...children)`

Renders the button that toggles the menu.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `as` | Sin component | native button | Renders the supplied component with merged trigger attributes and children. |
| `disabled` | `boolean` | `false` | Suppresses pointer and keyboard activation and exposes disabled state. |
| `type` | `string` | `'button'` | Native button type. No default is supplied when using `as`. |
| `onclick` | Sin event handler | — | Runs before non-native trigger activation; preventing default suppresses opening. |
| `onkeydown` | Sin event handler | — | Runs before internal keyboard behavior; preventing default suppresses it. |
| `dom` | callback or callback array | — | Runs after the internal trigger reference is captured. |

It owns these attributes:

- `id`
- `popovertarget` and `popovertargetaction="toggle"`
- `aria-haspopup="menu"`
- `aria-controls`
- `aria-expanded`
- `data-state="open|closed"`

It accepts ordinary button attributes. A custom component must forward the received DOM attributes, event handlers, and `dom` callback to its interactive element. Native buttons use `popovertarget`; other rendered elements are toggled through the Popover API by the internal click handler.

### `Dropdown.Content(attrs?, ...children)`

Renders the menu as a `div` with `popover="auto"` and `role="menu"`.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Requested CSS anchor side. `SubContent` defaults to `'right'`. |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Alignment within the requested anchor side. |
| `offset` | `number \| CSS length` | `0` | Gap from the trigger; numbers are pixels. |
| `alignOffset` | `number \| CSS length` | `0` | Cross-axis adjustment; numbers are pixels. |
| `avoidCollisions` | `boolean` | `true` | Enables logical block/inline flip fallbacks. |
| `collisionStrategy` | `'preferred' \| 'most-space'` | `'preferred'` | Keeps the requested side first, or ranks fallbacks by available space on the placement axis. |
| `loop` | `boolean` | root value | Overrides keyboard looping for this content. |
| `aria-labelledby` | `string` | trigger ID | Overrides the accessible relationship when necessary. |
| `onbeforetoggle` | Sin event handler | — | Runs after the root `onbeforeopenchange` callback for the native pre-transition event. |
| `ontoggle` | Sin event handler | — | Runs after internal open-state synchronization. |
| `onkeydown` | Sin event handler | — | Runs before menu keyboard handling; preventing default suppresses the built-in behavior. |
| `dom` | callback or callback array | — | Runs after the internal content reference is captured. |

The component owns `id`, `popover`, `role`, `data-state`, `data-side`, and `data-align`. It exposes `--sinewy-trigger-width`, `--sinewy-trigger-height`, and `--sinewy-transform-origin` for theme CSS. The demo uses the transform-origin variable and disables motion under `prefers-reduced-motion: reduce`. `data-side`, `data-align`, and the transform origin currently describe the requested placement, not a collision-resolved fallback.

### `Dropdown.Item(attrs?, ...children)`

Renders an actionable `button` with `role="menuitem"` and roving `tabIndex`.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `as` | Sin component | native button | Renders the supplied component with merged item attributes and children. |
| `disabled` | `boolean` | `false` | Marks the item unavailable, removes it from keyboard movement, and suppresses activation. |
| `textValue` | `string` | text content | Explicit text used by typeahead. Recommended for items with complex children. |
| `onselect` | `(event, element) => void` | — | Called for activation. Prevent default to keep the menu open. |
| `onclick` | Sin event handler | — | Runs before `onselect`; preventing default also suppresses selection and closing. |
| `onfocus` | Sin event handler | — | Runs before internal highlighting. Prevent default to suppress highlighting. |
| `onpointermove` | Sin event handler | — | Runs before pointer focus/highlighting. Prevent default to suppress it. |

The component owns `role`, `tabIndex`, `aria-disabled`, `data-disabled`, and `data-text-value`. `type` defaults to `button` for the native element and has no default when using `as`. A custom component must forward its received attributes and handlers to the interactive element.

Disabled items use ARIA disabled state instead of the native `disabled` attribute so the menu can consistently control pointer and focus semantics.

### `Dropdown.Checkbox(attrs?, ...children)`

Renders a checkable item with `role="menuitemcheckbox"`. It supports boolean and indeterminate state.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `checked` | `boolean \| 'indeterminate'` | — | Controlled checked state. |
| `defaultChecked` | `boolean \| 'indeterminate'` | `false` | Initial uncontrolled checked state. |
| `bind` | `s.Live<boolean \| 'indeterminate'>` | — | Optional two-way live binding. |
| `oncheckedchange` | `(checked, event) => void` | — | Called after activation with the next boolean value. |
| `onselect` | `(event, element) => void` | — | Prevent default to toggle without closing the menu. |
| `disabled`, `as`, `textValue` | as for `.Item` | — | Uses the same composition, disabled, and typeahead behavior as an ordinary item. |

The item exposes `aria-checked="true|false|mixed"` and `data-state="checked|unchecked|indeterminate"`. Activating an indeterminate checkbox changes it to `true`.

### `Dropdown.Indicator(attrs?, ...children)`

Renders a `span` inside a checkbox when its state is checked or indeterminate. Pass `forceMount: true` to keep it mounted while unchecked; in that case, use `data-state` to style visibility.

```js
Dropdown.Checkbox({ bind: notifications },
  Dropdown.Indicator('✓'),
  'Notifications'
)
```

An indicator exposes `data-state="checked|unchecked|indeterminate"` and defaults to `aria-hidden="true"`. It must be nested in a checkbox or radio item.

### `Dropdown.RadioGroup(attrs?, ...children)`

Provides exclusive selection state to nested radio items and renders a `div` with `role="group"`.

| Attribute | Type | Default | Behavior |
| --- | --- | --- | --- |
| `value` | any | — | Controlled selected value. |
| `defaultValue` | any | — | Initial uncontrolled selected value. |
| `bind` | `s.Live<any>` | — | Optional two-way live binding. |
| `onvaluechange` | `(value, event) => void` | — | Called when activation selects a different value. |
| `ariaLabel` | `string` | — | Convenience alias for `aria-label`. |

### `Dropdown.Radio(attrs?, ...children)`

Renders a `button` with `role="menuitemradio"`. It accepts a required `value` plus the same `disabled`, `as`, `textValue`, `onselect`, and DOM event attributes as `.Item`.

```js
Dropdown.RadioGroup({ bind: density, ariaLabel: 'Density' },
  Dropdown.Radio({ value: 'compact' },
    Dropdown.Indicator('•'),
    'Compact'
  ),
  Dropdown.Radio({ value: 'comfortable' },
    Dropdown.Indicator('•'),
    'Comfortable'
  )
)
```

The selected item exposes `aria-checked="true"` and `data-state="checked"`; its siblings expose false/unchecked state. Activation closes by default. Prevent `onselect` to change the value while leaving the menu open.

### `Dropdown.Group(attrs?, ...children)`

Renders a `div` with `role="group"`. `ariaLabel` is a convenience alias for `aria-label`; other DOM attributes are forwarded.

```js
Dropdown.Group({ ariaLabel: 'File actions' },
  Dropdown.Label('File actions'),
  Dropdown.Item('Edit')
)
```

### `Dropdown.Label(attrs?, ...children)`

Renders an unstyled, non-focusable `div`. It adds no role or automatic relationship, allowing the consumer to choose visible or ARIA labeling structure.

### `Dropdown.Separator(attrs?, ...children)`

Renders a `div` with `role="separator"`.

### `Dropdown.Sub(attrs?, ...children)`

Creates a nested menu state scope without rendering a wrapper. It accepts `defaultOpen`, controlled `open`, `bind: s.Live<boolean>`, `onbeforeopenchange`, `onopenchange`, and `loop` with the same meanings as the root. `openDelay` defaults to 100 ms and `closeDelay` to 300 ms for pointer interaction.

### `Dropdown.SubTrigger(attrs?, ...children)`

Renders the submenu trigger as a menu item with `aria-haspopup="menu"`, synchronized expanded state, and a native popover target. It accepts `as`, `disabled`, `textValue`, and ordinary item event attributes.

### `Dropdown.SubContent(attrs?, ...children)`

Renders a nested `popover="auto"` menu. It accepts the same attributes as `.Content`, with `side` defaulting to `right`.

```js
Dropdown.Sub(
  Dropdown.SubTrigger('More'),
  Dropdown.SubContent(
    Dropdown.Item({ onselect: archive }, 'Archive'),
    Dropdown.Item({ onselect: duplicate }, 'Duplicate')
  )
)
```

In LTR mode, Right Arrow opens a focused submenu and Left Arrow closes it. RTL reverses those keys. Pointer movement over a subtrigger opens it after `openDelay`; leaving its trigger or content closes it after `closeDelay`. A geometric pointer-grace region preserves the active submenu while the pointer moves diagonally from its trigger into the nested content. Escape closes only the current submenu, including through multiple nested levels. Selecting a nested item closes the full dropdown tree.

## Accessibility

The primitive supplies menu roles, trigger/content relationships, synchronized expanded state, roving focus, and ARIA-disabled item state. Consumers remain responsible for providing a meaningful trigger label, a visible or ARIA menu label, sufficient color contrast, and styles that make focus and disabled states distinguishable.

The implementation follows the browser's native popover lifecycle. Keyboard-only and assistive-technology testing is still required before treating the component as stable.

## Keyboard and focus behavior

| Input | Current behavior |
| --- | --- |
| Trigger click | Toggles the native popover and focuses the first enabled item when opening. |
| Enter/Space on trigger | Opens and focuses the first enabled item. |
| Arrow Down on trigger | Opens and focuses the first enabled item. |
| Arrow Up on trigger | Opens and focuses the last enabled item. |
| Arrow Down/Up in menu | Moves through enabled items and optionally loops. |
| Home/End | Focuses the first/last enabled item. |
| Printable characters | Runs prefix typeahead with a 500 ms search reset; repeated characters cycle matching items. Space is excluded. |
| Enter/Space on an item | Uses native button activation, invoking `onselect`. |
| Escape | Uses native popover dismissal; focus is restored to the trigger. |
| Tab/Shift+Tab | Closes without forcing focus back to the trigger, allowing normal tab movement. |
| Pointer movement | Focuses and marks the enabled item under the pointer. |

When an ordinary item is selected, the popover closes. Calling `event.preventDefault()` from `onclick` or `onselect` keeps it open. Disabled items are skipped by navigation and typeahead.

## Styling hooks

| Hook | Element | Meaning |
| --- | --- | --- |
| `[data-state="open\|closed"]` | trigger, content | Current native popover state. |
| `[data-highlighted]` | item | Current roving-focus/pointer-highlighted item. |
| `[data-disabled]` | trigger, item | Trigger or item is disabled. |
| `[data-text-value]` | item | Explicit typeahead value when supplied. |
| `[data-side]` | content | Requested side metadata. |
| `[data-align]` | content | Requested alignment metadata. |
| `:popover-open` | content | Native open-state pseudo-class, useful for animation. |

## Platform contract and boundaries

This implementation intentionally keeps the browser's native popover lifecycle and CSS anchor-positioning engine as the source of truth:

- Content is non-modal. A `modal` option is not exposed because `popover="auto"` does not trap focus or make the rest of the page inert.
- Content always remains in the DOM, including while closed, so there is no content-level `forceMount` attribute. Indicator-level `forceMount` remains meaningful because indicators are conditionally rendered.
- `onbeforeopenchange` can cancel opening. Native closing `beforetoggle` events are observational and non-cancelable, and the stable event does not distinguish Escape from light dismissal well enough to support faithful escape/outside/focus-outside cancellation hooks.
- Collision fallback selection is browser-owned. `data-side`, `data-align`, and `--sinewy-transform-origin` describe the requested placement because Anchor Positioning Level 1 does not expose the winning fallback to script or ordinary selectors.
- A detached-anchor option is not exposed yet. The current CSS draft defines conditional anchor visibility, but adjacent trigger/content topology and current browser behavior do not provide a dependable cross-browser "hide when detached" contract.

The supported target is current evergreen browsers implementing the Popover API and CSS anchor positioning. There is intentionally no portal, JavaScript geometry engine, or legacy fallback. Test in every browser your application supports before adopting the primitive.

## Current limits

This current-browser preview has a reviewed component API, but it intentionally does not yet include:

- an anchor-pointing menu arrow
- collision padding, available-space variables, or resolved fallback metadata
- modal behavior or cancelable outside-interaction callbacks
- dependable detached-anchor hiding
- a legacy positioning or popover fallback

See [`../../PLAN.md`](../../PLAN.md) for the completed milestones and remaining platform questions, [`../../examples/demo.js`](../../examples/demo.js) for the evaluation lab, and [`../../examples/spike.js`](../../examples/spike.js) for the focused development example.
