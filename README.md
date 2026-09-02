# Sinewy

Strong, flexible UI components for Sin.js.

Sinewy is an independent component library built with Sin and modern browser
primitives. It is maintained separately from Sin.js and is not an official
Sin.js project.

The current preview includes a consistently themed, non-searchable CustomSelect,
as well as themed native Button, Toggle, Switch, Select (also NativeSelect),
Checkbox, Radio, Dialog, and Alert Dialog controls plus headless combobox,
dropdown, context-menu, and resizable SplitPanel components with optional themed facades. Menus target
browsers with the Popover API and named CSS Anchor Positioning; there is
currently no JavaScript positioning fallback.

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

Generate the static documentation routes with:

```sh
npm run generate
```

## Dropdown demo

```sh
npm run demo
```

## Context menu demo

```sh
npm run context-menu-demo
```

## Button demo

```sh
npm run button-demo
```

## Tests

```sh
npm test
```

## Imports

```js
import {
  AlertDialog,
  Button,
  Combobox,
  CustomSelect,
  ContextMenu,
  Checkbox,
  Dialog,
  Dropdown,
  Radio,
  Select,
  NativeSelect,
  Switch,
  Toggle
} from 'sinewy'

import ThemedDropdown, {
  AlertDialog as ThemedAlertDialog,
  Combobox as ThemedCombobox,
  ContextMenu as ThemedContextMenu,
  Checkbox as ThemedCheckbox,
  Dialog as ThemedDialog,
  Radio as ThemedRadio,
  Select as ThemedSelect,
  Switch as ThemedSwitch,
  Toggle as ThemedToggle
} from 'sinewy/theme'
```

The public contracts and their current platform limits are documented in
[`docs/components/button.md`](docs/components/button.md),
[`docs/components/toggle.md`](docs/components/toggle.md),
[`docs/components/switch.md`](docs/components/switch.md),
[`docs/components/select.md`](docs/components/select.md),
[`docs/components/checkbox.md`](docs/components/checkbox.md),
[`docs/components/radio.md`](docs/components/radio.md),
[`docs/components/dialog.md`](docs/components/dialog.md),
[`docs/components/alert-dialog.md`](docs/components/alert-dialog.md),
[`docs/components/combobox.md`](docs/components/combobox.md),
[`docs/components/dropdown.md`](docs/components/dropdown.md), and
[`docs/components/context-menu.md`](docs/components/context-menu.md).

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
