# Sinewy Dropdown Plan

## Goal

Build a Sin-native dropdown menu with behavioral and API parity comparable to Radix UI Dropdown Menu while using modern browser primitives instead of reimplementing overlay infrastructure.

Sinewy is maintained as an independent library for Sin.js; it is not an official Sin.js project.

The first supported target is current evergreen browsers. Older-browser compatibility and a JavaScript positioning fallback are explicitly out of scope until the component API and behavior are stable.

Parity means matching the useful public behavior, accessibility, composability, state control, styling hooks, and component parts. It does not mean copying Radix's React internals or preserving React-specific APIs such as `asChild` and an otherwise redundant `.Root` component.

## Current Status

Milestones 0 through 8, 10, and 11 are complete in [`src/dropdown.js`](src/dropdown.js), [`src/theme.js`](src/theme.js), [`src/theme-colors.js`](src/theme-colors.js), [`examples/demo.js`](examples/demo.js), and their test suites. Milestone 9 is complete except for manual accessibility and cross-browser verification. The reusable palette and expanded dropdown theme axes are implemented; contrast and visual auditing remain part of ongoing stabilization as additional components begin to share the tokens.

The spike demonstrates:

- `popover="auto"` and `popovertarget`
- top-layer rendering without a portal
- implicit CSS anchor association
- `position-area` and `position-try-fallbacks`
- open-state synchronization through `toggle`
- initial focus and focus restoration
- Arrow Up/Down and Home/End navigation
- typeahead
- disabled-item skipping
- cancellable selection that can keep the menu open
- controlled, uncontrolled, and live-bound root open state
- scoped styling and entry/exit transitions

It runs with:

```sh
sin dev examples/spike.js
```

Run all automated checks with `npm test`, or run the browser, server-rendering, and declaration checks separately with the corresponding `npm run test:*` scripts.

The spike now consumes the extracted headless parts. The source-level public API has completed its name review and is frozen for the current-browser preview.

## Platform Strategy

Use the browser for the mechanics it now handles well:

| Concern | Platform mechanism |
| --- | --- |
| Top-layer rendering | Popover API |
| Light dismiss and Escape | `popover="auto"` |
| Trigger/content relationship | `popovertarget` and matching `id` |
| Open/closed lifecycle | `beforetoggle` and `toggle` |
| Open-state styling | `:popover-open` |
| Trigger anchoring | Implicit anchor relationship from `popovertarget` |
| Placement | `position-area` |
| Collision fallback | `position-try-fallbacks` and `@position-try` |
| Entry/exit animation | `@starting-style`, discrete `display`/`overlay` transitions |
| Nested overlay stack | Nested auto popovers |

Implement the behavior the platform does not provide:

- ARIA roles, relationships, and state
- focus placement and restoration
- roving focus
- keyboard navigation
- typeahead
- item selection semantics
- disabled behavior
- checkbox and radio state
- submenu keyboard behavior
- submenu pointer intent and grace region
- controlled and uncontrolled state
- LTR/RTL behavior
- SSR/hydration-safe identity
- public callbacks and cancellable events
- stable data attributes and CSS variables

Do not introduce a portal for ordinary dropdown content. Native popovers enter the top layer without moving in the DOM, which preserves Sin ancestry and context. A future explicit portal utility may still be useful for components that cannot use popovers.

## Reviewed Sin API

Use a directly callable root with attached Sin components:

```js
import dropdown from 'sinewy/theme'

dropdown(
  dropdown.trigger({ variant: 'soft' },
    'Options',
    dropdown.triggerIcon()
  ),
  dropdown.content({ align: 'end', offset: 6 },
    dropdown.item({ shortcut: '⌘ E', onselect: edit }, 'Edit'),
    dropdown.item({ shortcut: '⌘ D', onselect: duplicate }, 'Duplicate'),
    dropdown.separator(),
    dropdown.sub(
      dropdown.subtrigger('More'),
      dropdown.subcontent(
        dropdown.item({ onselect: moveToProject }, 'Move to project…'),
        dropdown.item({ onselect: moveToFolder }, 'Move to folder…')
      )
    ),
    dropdown.separator(),
    dropdown.item({ color: 'red', onselect: remove }, 'Delete')
  )
)
```

Every part should remain a normal Sin component and support call-site style overrides:

```js
dropdown.content`
  min-width 260
  border-radius 14
`(
  dropdown.item('Edit')
)
```

### Reviewed Parts

| Part | Purpose and initial attributes |
| --- | --- |
| `dropdown(...)` | Root state: `open`, `defaultOpen`, `onopenchange`, `bind`, `dir` |
| `.trigger` | Invoker: `as`, `disabled` |
| `.triggerIcon` | Optional themed affordance |
| `.content` | Menu and positioning: `side`, `align`, `offset`, `alignOffset`, `avoidCollisions`, `collisionStrategy`, `loop` |
| `.item` | Action: `as`, `disabled`, `onselect`, `textValue`, `shortcut` |
| `.group` | Groups related items |
| `.label` | Non-focusable group label |
| `.separator` | Non-focusable separator |
| `.checkbox` | `checked`, `defaultChecked`, `oncheckedchange`, `bind`, `disabled` |
| `.radioGroup` | `value`, `defaultValue`, `onvaluechange`, `bind` |
| `.radio` | `value`, `disabled` |
| `.indicator` | Custom checkbox/radio indicator |
| `.sub` | Submenu state: `open`, `defaultOpen`, `onopenchange` |
| `.subtrigger` | Submenu invoker: `disabled`, `textValue` |
| `.subcontent` | Nested menu with content-positioning attributes |

Use lower-case callback names to match Sin's event style. `onselect` must represent both pointer and keyboard activation. Calling `event.preventDefault()` during selection should keep the menu open.

Prefer `as: Component` over React's `asChild`. The part owns behavior and renders the supplied Sin component with merged attributes and children.

## State Model

Support uncontrolled state:

```js
dropdown({ defaultOpen: true }, ...children)
```

Support controlled state:

```js
dropdown({
  open,
  onopenchange: next => open = next
}, ...children)
```

Evaluate an explicit Sin live binding convenience:

```js
const open = s.live(false)
dropdown({ bind: open }, ...children)
```

Native popover state is authoritative when the component is uncontrolled. `toggle` synchronizes internal state and notifies `onopenchange`. Controlled state and live bindings call `showPopover()` or `hidePopover()` to reconcile the DOM.

The root provides one menu state object to its parts through Sin context. Expected internal capabilities include:

```js
{
  id,
  open,
  trigger,
  content,
  activeItem,
  setOpen,
  close,
  focusFirst,
  focusLast
}
```

For the initial implementation, query menu items from the live DOM when opening or handling input. Do not build a second virtual item registry until dynamic-item behavior or profiling demonstrates a need.

## Implementation Milestones

### 0. Platform Spike — Complete

- Prove native popover behavior in Sin.
- Prove implicit anchoring and fallback placement.
- Exercise basic focus, keyboard navigation, selection, and animation.

### 1. Extract the Headless Core — Complete

- Create `src/dropdown.js`.
- Keep `examples/spike.js` as the development example consuming the extracted component.
- Implement `dropdown`, `trigger`, `content`, `item`, `separator`, `group`, and `label`.
- Move root state and DOM helpers out of the example.
- Generate deterministic IDs that survive SSR and hydration.
- Add stable state attributes:
  - `data-state="open|closed"`
  - `data-highlighted`
  - `data-disabled`
  - `data-side`
  - `data-align`
- Preserve call-site style overrides on every part.

### 2. Complete Menu Keyboard Behavior — Complete

- Enter and Space open from the trigger and focus the first item.
- Arrow Down opens and focuses the first item.
- Arrow Up opens and focuses the last item.
- Arrow Up/Down move through items with configurable looping.
- Home/End move to the first/last item.
- Tab and Shift+Tab close the menu and move focus out naturally.
- Escape closes and restores trigger focus.
- Printable-key typeahead uses `textValue` or normalized text content.
- Pointer movement and keyboard movement share one highlighted item.
- Dynamic insertion and removal do not leave stale focus state.

### 3. Selection and Composition — Complete

- Normalize pointer and keyboard activation through `onselect`.
- Close after ordinary selection.
- Keep open when selection is prevented.
- Forward standard DOM attributes.
- Implement `as: Component` for trigger and item composition.
- Confirm link items navigate correctly without double activation.
- Define and test disabled-item behavior against Radix.

### 4. Checkbox and Radio Items — Complete

- Add checkbox roles and checked/indeterminate state. — Complete
- Add radio groups and exclusive value selection. — Complete
- Add controlled, uncontrolled, and optional live-bound state. — Complete
- Add `.indicator` customization. — Complete
- Decide through parity testing whether checkbox/radio activation closes the menu. — Close by default; preventing `onselect` keeps it open

### 5. Submenus

- Implement nested auto popovers anchored to subtriggers. — Complete
- Right Arrow opens and focuses the first submenu item. — Complete for LTR
- Left Arrow closes and restores focus to the parent subtrigger. — Complete for LTR
- Escape closes the current submenu before its ancestors. — Complete
- Reverse directional keys for RTL. — Complete
- Add delayed pointer opening and closing. — Complete
- Add a pointer grace region for diagonal movement into submenu content. — Complete
- Closing a parent closes all descendant submenus. — Complete for item selection and native dismissal
- Verify native nested-popover dismissal behavior across multiple levels. — Complete through two nested submenu levels

### 6. Positioning and Animation Parity

- Map `side`, `align`, `offset`, and `alignOffset` to anchor-positioning CSS. — Complete
- Provide collision fallbacks for each side/alignment combination. — Complete with logical flip fallbacks
- Allow fallbacks to be ranked by available block/inline space. — Complete with `collisionStrategy="most-space"`
- Expose actual resolved `data-side` and `data-align` where the platform makes this observable.
- Constrain available dimensions without JavaScript measurement where possible. — Complete with axis-specific stretch fallbacks; themes opt into scrolling with `overflow: auto`
- Expose stable CSS variables such as:

```css
--sinewy-trigger-width /* Complete */
--sinewy-trigger-height /* Complete */
--sinewy-available-width
--sinewy-available-height
--sinewy-transform-origin /* Complete for requested placement */
```

- Make animations origin-aware and respect `prefers-reduced-motion`. — Complete for the requested placement in the demo theme
- Verify trigger movement, scrolling, viewport resizing, and edge collisions. — Complete except manual viewport-resize coverage

### 7. Public Lifecycle and Advanced Controls

- Support controlled `open` and `bind: s.Live<boolean>`. — Complete
- Add cancellable `onopenchange`-adjacent behavior where useful. — Complete with native `beforetoggle`-backed `onbeforeopenchange`; opening is cancelable and closing is observational
- Add equivalents for escape, pointer-outside, focus-outside, and interact-outside hooks. — Deferred: native closing is non-cancelable and does not expose a dependable stable dismissal reason
- Decide whether `modal` has meaningful dropdown behavior when the underlying popover remains non-modal. — Resolved: do not expose `modal` on this non-modal primitive
- Decide whether content needs `forceMount` for animation and composition. — Resolved: do not expose it; native popover content always remains mounted, so the attribute would be a compatibility-only no-op. Indicator `forceMount` remains meaningful because indicators render conditionally
- Add development warnings for invalid part placement or duplicate content. — Complete for missing state scope and duplicate trigger/content

### 8. Theme Layer

- Keep behavior in the headless implementation. — Complete
- Create a themed facade with the same structural API. — Complete in [`src/theme.js`](src/theme.js)
- Add only visual attributes such as `size`, `variant`, `color`, and `highContrast`. — Complete
- Add conveniences such as `shortcut` and `triggerIcon` without making them behavior requirements. — Complete
- Consume only public data attributes and CSS variables from the headless core. — Complete

### 9. Stabilization

- Complete TypeScript declarations for every component and attribute. — Complete
- Verify SSR output and hydration with initially open and closed state. — Complete
- Document feature requirements and the intentional lack of legacy fallback. — Complete
- Run accessibility checks with keyboard-only use and assistive technology.
- Freeze names only after the example and parity suite feel natural in real Sin code.

### 10. Shared Theme Tokens and Palette — Complete for Dropdown

- Establish reusable color tokens before adding more component-local color literals. — Complete
- Use a curated Radix Colors subset as the initial palette source. Its 12-step light and dark scales map directly to backgrounds, interactive states, borders, solid fills, and text. — Complete
- Vendor the minimal token subset without a runtime dependency and preserve the upstream MIT license and attribution. — Complete
- Define Sinewy semantic aliases for accent, neutral, panel, border, text, focus, and contrast roles without exposing upstream implementation names unnecessarily. — Complete for the dropdown vocabulary
- Support light and dark appearance from the same component contracts. — Complete through inherited `color-scheme`
- Keep tokens overrideable with ordinary CSS custom properties and usable from normal Sin template extensions. — Complete
- Add computed-style checks and visual examples for variants, sizes, dark appearance, item overrides, nested scopes, and high-contrast states. — Complete; retain manual contrast and interaction-state auditing during stabilization
- Defer a public theme-provider component until a second themed component proves which configuration must be inherited through Sin context and which belongs in CSS. — Deliberately deferred

### 11. Expanded Dropdown Theme Axes — Complete

- Replace the dropdown theme's hard-coded gray, accent, and red values with the shared palette and semantic tokens. — Complete
- Expand `color` beyond the initial `gray | accent | red` set, while retaining semantic accent and destructive defaults and allowing item-level overrides. — Complete with `gray | accent | red | orange | amber | green | teal | cyan | blue | indigo | purple | pink | crimson`
- Add truthful `variant`, `color`, and `highContrast` styling to content and subcontent. Use the menu-relevant `solid | soft` content variants rather than copying every trigger variant onto every part. — Complete
- Keep trigger variants aligned with the eventual button vocabulary: `solid | soft | outline | ghost`. — Complete
- Make content size establish the default density for its labels, items, indicators, shortcuts, and submenu parts, with explicit part-level size remaining an override. — Complete
- Retain the reviewed `1 | 2 | 3` size scale and tune each size as a coherent set of typography, height, spacing, radius, gutter, and submenu metrics. — Complete
- Add a documentation-site matrix for colors, variants, sizes, light/dark appearance, and high contrast. — Complete
- Add type, computed-style, inheritance, nested-scope, dark-mode, high-contrast, and interaction coverage before expanding the frozen theme unions. — Complete

## Test Plan

Create `test/dropdown.test.js` using `sin/test` and run DOM/layout cases with `sin test test/dropdown.test.js --headless`.

### Structure and ARIA

- Trigger has button semantics, `aria-haspopup="menu"`, `aria-controls`, and synchronized `aria-expanded`.
- Content has `role="menu"` and an accessible label.
- Parts receive the correct menu item, checkbox, radio, separator, and grouping roles.
- Checked, expanded, highlighted, disabled, side, and alignment state are exposed correctly.

### Opening and Dismissal

- Pointer, Enter, Space, Arrow Down, and Arrow Up open correctly.
- Escape, outside interaction, Tab, and ordinary selection close correctly.
- Focus returns only when appropriate; clicking another focusable control must retain that target's focus.
- Prevented selection and prevented outside interaction keep the menu open.

### Navigation

- Initial focus is correct for each opening key.
- Arrow navigation, Home/End, wrapping, and disabled behavior match the chosen parity contract.
- Typeahead supports repeated characters, multi-character prefixes, wraparound, and timeout reset.
- Dynamic item changes are reflected immediately.

### State

- Uncontrolled defaults work.
- Controlled props cannot drift from native popover state.
- `onopenchange` fires once per actual transition.
- Live bindings synchronize in both directions without observer leaks.
- Checkbox and radio state works in controlled and uncontrolled modes.

### Submenus

- Keyboard and pointer opening work independently.
- Focus crosses and returns across submenu boundaries correctly.
- Parent dismissal closes descendants.
- Pointer grace prevents accidental closure.
- LTR and RTL directional behavior is correct.

### Layout and Animation

- Placement works near every viewport edge.
- Fallback placement avoids overflow where the platform can satisfy it.
- Menus follow moving and scrolling triggers.
- Constrained content remains usable.
- Opening and closing transitions complete without flashes.
- Reduced-motion users do not receive unnecessary motion.

### Rendering

- Multiple dropdowns receive unique stable IDs.
- SSR markup hydrates without replacement or warnings.
- Conditional and keyed items retain correct identity and focus.
- Removing an open dropdown performs cleanup without errors.

## Public API Review Criteria

The completed public API review used these criteria:

- all proposed structural parts work together in one example;
- keyboard, focus, typeahead, checkbox, radio, and submenu behavior pass the headless browser suite;
- the API supports uncontrolled, controlled, and decided live-binding state;
- positioning and collision behavior work using browser primitives without a JavaScript geometry engine;
- SSR and hydration are stable;
- the headless component can be styled entirely through normal Sin overrides, data attributes, and CSS variables;
- the theme layer uses the same structure rather than a parallel component API;
- remaining differences from Radix are documented and intentional.

## Resolved Behavior Decisions

- Disabled menu items are skipped by focus navigation and typeahead while remaining exposed with `aria-disabled`.
- Checkbox and radio activation closes by default; preventing `onselect` keeps the menu open.
- Keep `bind: s.Live<T>` as a Sin-native two-way state convenience alongside controlled and uncontrolled modes.
- `as: Component` receives the part's owned attributes, composed DOM handlers, `dom` hooks, and children. Consumer handlers run first (including Sin handler arrays and `handleEvent` objects), and `preventDefault()` suppresses the corresponding internal action. The custom component must forward them to its interactive element.
- Visual intent uses the shared themed color set. Content and subcontent establish inherited `size`, `variant`, `color`, and `highContrast` defaults; individual items can override size or color locally.

## Remaining Platform Questions

- Can resolved collision placement be exposed reliably without JavaScript measurement?
- Is an explicit `.arrow` useful with CSS anchor positioning, and how should its fallback orientation be determined?
- Which outside-interaction hooks remain necessary when native popover dismissal owns the transition?
- Revisit detached-anchor hiding when `position-visibility` behavior is interoperable for adjacent popover content.

## Public API Review — Complete

The source-level names are frozen for the current-browser preview:

- `dropdown(...)` is the directly callable root; no redundant `.root` is added.
- Headless parts are `.trigger`, `.content`, `.item`, `.checkbox`, `.radioGroup`, `.radio`, `.indicator`, `.group`, `.label`, `.separator`, `.sub`, `.subtrigger`, and `.subcontent`.
- The theme adds `.triggerIcon` and `.shortcut` without changing the headless structure.
- Lower-case callbacks follow Sin event naming; `bind` is the deliberate Sin-native state convenience.
- `.portal` and `modal` are omitted because native non-modal popovers own top-layer behavior.
- Compatibility-only no-ops are omitted; public attributes must have observable, testable Sin or platform semantics.
- `.arrow`, collision padding, outside-interaction callbacks, and legacy fallbacks remain unreserved until they can have a dependable implementation.
- `sinewy`, `sinewy/dropdown`, and `sinewy/theme` are the canonical package entrypoints for the standalone preview.

## References

- [Radix Themes Dropdown Menu](https://www.radix-ui.com/themes/docs/components/dropdown-menu)
- [Radix Dropdown Menu Primitive](https://www.radix-ui.com/primitives/docs/components/dropdown-menu)
- [MDN Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [MDN CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [WAI-ARIA Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [WAI-ARIA Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
