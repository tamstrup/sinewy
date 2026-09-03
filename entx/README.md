# entx

## Component convention

Use Sinewy first. ENTX-specific controls are appropriate only where Sinewy has no suitable
component. Thin visual adapters in `src/controls.js` preserve ENTX styling while Sinewy owns button,
native select, checkbox, and switch behavior. Account suggestions use Sinewy Combobox; transaction
menus and posting review use Dropdown and AlertDialog. Plain text/date/amount inputs, navigation
tabs, and the accounting layout remain ENTX-specific. See `AGENTS.md`.

An accounting application built with a Deno backend and a Sin.js frontend using Sinewy.

The current frontend is an interactive product prototype centered on an immutable ledger, with
editable drafts, live filtered balances, hierarchical accounts, and keyboard-first navigation. Data
is still in memory; storage, authentication, files, account management, and the deployment shape
will be decided later.

## Prototype shortcuts

- `g d` opens Drafts; `g l` opens Ledger.
- Left/Right (or Home/End) on the tablist switches tabs and moves focus.
- `N` creates a draft and opens it in Drafts, clearing filters so it is visible.
- Cmd/Ctrl+Enter reviews the checked drafts in the current view before posting.
- `F` toggles the filter pane.
- `/` opens the filters and focuses text search.
- `J`/`K` or arrow keys move the selected transaction and scroll it into view with minimal movement,
  keeping clear of the sticky top bar. Oversized transactions reveal their header. Scrolling waits
  for Sin's redraw promise; rapid key repeats use only the latest selection, without moving focus.
- `g g` selects the first transaction in the current filtered view; `G` (Shift+G) selects the last.
  Both scroll the selection into view. The two-key sequences use a 1.2-second window; holding `g`
  does not count as pressing it twice. Shortcuts do not run while typing in an editor or dialog.
- `Enter` collapses or expands the selected transaction.
- `h` collapses the selected transaction; `l` expands it. Repeated presses keep the requested state;
  `g l` still opens the Ledger.

## Transaction workflow

Transactions has two URL-addressable workspaces: `/transactions/drafts` and `/transactions/ledger`
(Drafts/Ledger; Danish labels: Kassekladde/Bogførte). The last-opened tab is remembered locally. On
the first visit, drafts take precedence when present. There is no mixed “All” view. Filters are
retained across tabs and operate inside each tab.

Drafts show Incomplete, Unbalanced, or Ready. Readiness requires a date, description, at least two
complete legs, and a zero balance in each commodity. Posting a single draft, selected drafts, or all
ready drafts in the current filtered view always requires a review. Posting moves snapshots into the
read-only ledger; invalid selections are rejected as a whole. “Create correction” produces an
editable, linked opposing draft while preserving the original transaction.

Live Balance follows the date, text, and typed account filters in both tabs, independent of their
lifecycle. Click an account name to filter transactions by that account (including descendants).
Cmd/Ctrl-click adds or removes accounts; a transaction can match any selected account. Click empty
sidebar space to clear account selections, or remove individual filter chips. Other date/text
filters are retained. Sidebar selections do not narrow the sidebar itself: its period balances and
other account choices remain available. Selection works in both tree and flat views; expansion
controls stay independent. “Include drafts” is off by default. When enabled, combined amounts
affected by drafts are purple; there is no separate pending amount. Transactions remain expanded by
default.

The top-left panel button hides or shows the accounts sidebar on every page. Its visibility is
remembered locally; hiding it preserves balances, tree expansion, draft inclusion, and filter state.
The main area uses the freed space without resetting transaction edits. Drag the Sinewy SplitPanel
divider to resize the sidebar. Its width is retained while navigating and hiding/showing the
sidebar, and remains fixed when the window is resized. Divider arrow keys resize in 1% steps (Shift:
10%); Home/End move to its limits.

The sticky top bar, document background, and `theme-color` metadata share `#fcfcfd`. The opaque
header supports Safari's sticky-header color sampling; metadata also supports browsers that use an
explicit theme color. The application canvas retains its slightly darker background.

User preferences, the tab preference, and named queries are persisted locally. Transaction edits and
posting still reset on reload; this is not yet a durable accounting backend. The static build
generates both tab routes for direct navigation.

## Query prototype

The lazy `/query` page combines CodeMirror SQL editing with AG Grid Enterprise, styled to match
ENTX. It starts with an empty editor and grid. Four sample views (`ledger_entries`, `transactions`,
`accounts`, and `documents`) provide table/column autocomplete, visible schemas, and example SQL.
Cmd+Enter, Ctrl+Enter, or **Run query** show a loading state and return a fixed sample dataset. SQL
completions and examples use lowercase keywords and identifiers; existing SQL is never rewritten. A
Sinewy SplitPanel separates the editor above from the results below. Drag the horizontal divider, or
focus it and use Up/Down, to resize them. The Query page fits the window; the editor, schema list,
and grid scroll internally. Split positions survive route navigation, but reset on reload. Resizing
does not recreate the editor or grid.

The Query page begins with a single-line toolbar containing saved-query selection, an inline
editable name, Run, Save, Edit, and Ask AI. There is no page heading or introductory copy; a compact
Mock data label identifies the prototype results. **Edit** offers SQL focus, rename, new, delete,
and an **Example queries** submenu. Loading an example preserves unsaved SQL unless you confirm
replacement.

**Ask AI** demonstrates a future question-to-SQL workflow in a Sinewy Dialog: enter a question or
choose a suggestion, generate a preview, then explicitly insert it. This is a local, template-based
simulation with a short progress state, not an AI service. English/Danish expense, income, balance,
and document topics are recognized; unsupported topics show a disclosed generic fallback. Nothing is
sent to an external service. Unsaved edits are protected, insertion never runs or saves SQL, and
closing the dialog or changing the prompt cancels pending generation.

**SQL is not executed.** The first recognized `FROM` view selects the fixture; projections,
conditions, joins, ordering, and aggregation in SQL are ignored. Unknown queries fall back to ledger
entries. Samples are independent of edits on the Transactions page. Numeric/date display uses the
regional preferences, and controls support Danish/English.

Grid sorting, filtering, column selection, and grouping are real. Drag column headers to the
grouping bar to group rows; amount/balance columns aggregate with sums. IDs start hidden and can be
enabled in the Columns panel. Do not interpret grouped totals across different commodities as
currency conversions.

Enter a name and **Save** to persist SQL in this browser (`entx.queries.v1`). Select saved queries
with the Sinewy dropdown; change the name and save again to rename. **Delete** asks for confirmation
and retains the SQL as an unsaved draft. Replacing unsaved work also asks for confirmation. Unsaved
SQL, results, and grid layout survive navigation within the app, but not a reload. Browser storage
errors are reported without overwriting malformed stored data. There is no database or cross-device
synchronization.

Save, delete, and AI-insert confirmations use the themed Sinewy Toast without moving the editor or
grid. The latest confirmation replaces the previous one. Toasts can be dismissed and auto-dismiss
after five seconds, pausing while hovered, focused, or the window is inactive. Errors remain inline
until resolved; important failures never depend on a temporary toast. Labels support both languages.

The grid runs in Enterprise evaluation mode. A key found in another project was licensed only for
that application and is not reused. Supply a valid ENTX license as `window.ENTX_AG_GRID_LICENSE_KEY`
before the Query page mounts; keep private license configuration out of source control. Production
use requires an appropriate license.

The npm dev/build/browser-test commands automatically bundle the grid dependency boundary with
esbuild. This works around Sin's development import rewriter not handling all imports in AG Grid's
large generated modules. The generated vendor file is ignored by git; application/editor code
remains normal ES modules, and grid/editor dependencies are loaded only on the Query page.

## Language and regional preferences

Open **Indstillinger / Settings** in the top bar (`/settings`). Its default-exported Sin component
is loaded with a direct dynamic-import route. First visits use Danish text, Danish regional
formatting, and DKK. Language (Danish/English), regional format (Denmark/United Kingdom), and
default commodity (DKK/EUR/USD/GBP) are independent. Preferences save automatically in this browser,
without a database. If browser storage is blocked, the application continues with session-only
preferences.

Translations live in `src/i18n/messages.js`; messages include plural forms, validation, accessible
labels, and notices. `createI18n()` is scoped to each App instance, not a global locale singleton.
Switching preferences updates the document language and interface without resetting drafts, filters,
selection, or navigation. Account segments, descriptions, status codes, ISO dates, and amounts
remain locale-independent data. Duplication and corrections preserve the source description.

Cached `Intl` formatters handle numbers and dates. Calendar dates are explicitly formatted in UTC so
they cannot shift a day with the user's timezone. Native date input presentation follows the browser
or OS and cannot be forced to follow the interface language reliably.

Amount fields accept the selected regional format, including correctly grouped pasted values:
`1.234,56` in Denmark or `1,234.56` in the UK. Wrong grouping, scientific notation, and more than
two decimal places are rejected instead of guessed or silently rounded. Partial input such as `-` or
`123,` remains editable and prevents posting. An unfinished edit retains its original input locale
when settings change; after a valid edit loses focus, it adopts the new display format.

The existing prototype arithmetic is still JavaScript numbers rounded to two decimal places, not a
production exact-decimal ledger. Arbitrary commodity precision, durable storage, and exact backend
arithmetic remain future work. Changing the default commodity never converts existing entries.

## Run locally

Install the frontend dependencies once:

```sh
npm install
```

Run the frontend:

```sh
npm run dev
```

In another terminal, run the backend:

```sh
deno task dev
```

The backend currently exposes `GET /api/health` on port 8000.

## Verify

```sh
npm run build
deno task test
deno fmt --check
deno lint
npm run test:ssr
npm run test:browser
```
