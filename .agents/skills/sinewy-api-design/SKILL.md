---
name: sinewy-api-design
description: Design or review public APIs for Sinewy components, especially when comparing them with Radix, React, or another component library. Use for component parts, attributes, callbacks, composition contracts, and API freezes; reject compatibility-only or no-op surface.
---

# Sinewy API design

Use other component libraries as behavioral research, not as API checklists. Preserve useful interaction, accessibility, state, and composition behavior while expressing it through Sin and current web-platform primitives.

For every proposed public part or attribute, establish all of the following before adding it:

- It solves a concrete consumer need in Sin.
- It has observable semantics in the implementation rather than being accepted and ignored.
- Its behavior can be documented and tested truthfully.
- It is not merely compensating for React lifecycle, portals, `asChild`, synthetic events, or another library's internal architecture.

If any condition fails, omit the API and document the intentional difference. Do not reserve names speculatively. Prefer a later additive API over an early compatibility no-op.

Favor Sin-native and platform-native contracts: directly callable roots, attached components, lower-case callback names, `bind: s.Live<T>` where two-way state is useful, `as: Component` composition, native DOM events, Popover API behavior, and CSS Anchor Positioning. Keep familiar cross-framework names only when they accurately describe the same consumer-facing behavior.

Distinguish identical names by semantics. For example, dropdown content is inherently present in the DOM while a native popover is closed, so content-level `forceMount` has no purpose and must not be exposed. An indicator is conditionally rendered, so indicator-level `forceMount` is meaningful and may remain.

Before freezing an API, audit implementation, declarations, tests, plans, examples, and published documentation together. Remove contradictions and add type or behavior coverage for deliberate exclusions when practical. Record unresolved platform capabilities as unreserved rather than copying an API that cannot yet be implemented dependably.
