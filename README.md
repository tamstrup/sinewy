# Sinewy

Strong, flexible UI components for Sin.js.

Sinewy is an independent component library built with Sin and modern browser
primitives. It is maintained separately from Sin.js and is not an official
Sin.js project.

The current preview contains a headless dropdown and an optional themed facade.
It targets current evergreen browsers with the Popover API and CSS Anchor
Positioning.

## Local setup

Sin.js has not been published yet. During development, `package.json` links the
private sibling checkout at `../sin`:

```sh
npm install
```

The expected local layout is:

```text
personal/
├── sin/
└── sinewy/
```

## Documentation

```sh
npm run docs
```

## Dropdown demo

```sh
npm run demo
```

## Tests

```sh
npm test
```

## Imports

```js
import { Dropdown } from 'sinewy'
import ThemedDropdown from 'sinewy/theme'
```

The public dropdown contract and its current platform limits are documented in
[`docs/components/dropdown.md`](docs/components/dropdown.md).

## Component conventions

Public component identifiers use PascalCase, including directly callable roots
and attached parts such as `Dropdown`, `Dropdown.Trigger`, and
`Dropdown.RadioGroup`. DOM attributes and callbacks retain their native
lower-case names.

Sin component functions use empty destructuring for unused signature positions:

```js
const Component = s(({}, [], { route }) =>
  s`a`({ href: '/home', active: route.has('/home') }, 'Home'),
)
```
