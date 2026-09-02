# entx

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

Live Balance uses the same filtered transaction set in both tabs, independent of their lifecycle.
“Include drafts” is off by default. When enabled, combined amounts affected by drafts are purple;
there is no separate pending amount. Transactions remain expanded by default.

Only user preferences and the tab preference are persisted. Transaction edits and posting still
reset on reload; this is not yet a durable accounting backend. The static build generates both tab
routes for direct navigation.

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
npm run test:browser
```
