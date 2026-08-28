# Sinewy Context Menu Plan

## Goal

Build a Sin-native contextual menu with the useful behavior of Radix Context Menu while sharing Sinewy's existing menu engine and using native popovers plus CSS anchor positioning.

Functional parity means pointer and keyboard invocation, point placement, focus management, navigation, typeahead, selection controls, submenus, dismissal, RTL behavior, and touch long-press. It does not mean copying React-specific structure or exposing controls without dependable platform semantics.

## First Slice

- [x] Directly callable `ContextMenu` root with PascalCase attached components.
- [x] Focusable default `ContextMenu.Trigger` with `as` composition.
- [x] Native `contextmenu` event invocation.
- [x] Pointer-coordinate placement through an ephemeral CSS point anchor.
- [x] Keyboard-origin fallback to the target's lower-start corner.
- [x] Shared content, items, checkbox, radio, indicator, group, label, separator, and submenu behavior.
- [x] Native light dismissal, Escape behavior, focus restoration, and lifecycle callbacks.
- [x] Browser, SSR, and TypeScript coverage.
- [x] Headless example and portable component documentation.

## Next Milestones

1. [x] Add touch long-press with movement, release, scroll, and pointer-cancellation handling.
2. [x] Exercise collision behavior at all viewport edges and repeated invocation while open.
3. [x] Add deep submenu and RTL parity cases specific to point-origin menus.
4. Complete keyboard and assistive-technology verification in supported browsers.
   - [x] Verify the Chromium accessibility tree, menu naming, item roles, focus, navigation, typeahead, and dismissal.
   - [x] Handle Shift+F10 and the Context Menu key without depending on browser event synthesis.
   - [x] Verify Safari 26.6 with VoiceOver manually.
   - [x] Verify Firefox 153 manually.
5. [x] Add the themed facade using the shared menu palette and density contracts.

## Deliberate Omissions

- No `.Portal`: native popovers provide top-layer rendering without moving content.
- No content `forceMount`: native popover content remains mounted while closed.
- No `modal`: the implementation is currently a non-modal native popover.
- No controlled `open`, `defaultOpen`, or `bind`: external opening needs a truthful point or anchor contract first.
- No `.Arrow`: a pointer-origin context menu does not need a visual trigger arrow, and collision-resolved orientation is not dependably observable.
