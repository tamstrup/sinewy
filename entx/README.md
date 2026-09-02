# entx

An accounting application built with a Deno backend and a Sin.js frontend using Sinewy.

The current frontend is an interactive product prototype centered on an immutable ledger, with
editable drafts, live filtered balances, hierarchical accounts, and keyboard-first navigation. Data
is still in memory; storage, authentication, files, account management, and the deployment shape
will be decided later.

## Prototype shortcuts

- `G D` opens Drafts; `G L` opens Ledger.
- Left/Right (or Home/End) on the tablist switches tabs and moves focus.
- `N` creates a draft and opens it in Drafts, clearing filters so it is visible.
- Cmd/Ctrl+Enter reviews the checked drafts in the current view before posting.
- `F` toggles the filter pane.
- `/` opens the filters and focuses text search.
- `J`/`K` or arrow keys move the selected transaction.
- `Enter` collapses or expands the selected transaction.

## Transaction workflow

Transactions has two URL-addressable workspaces: `/transactions/drafts` and `/transactions/ledger`
(Drafts/Ledger; intended Danish labels: Kassekladde/Bogførte). The last-opened tab is remembered
locally. On the first visit, drafts take precedence when present. There is no mixed “All” view.
Filters are retained across tabs and operate inside each tab.

Drafts show Incomplete, Unbalanced, or Ready. Readiness requires a date, description, at least two
complete legs, and a zero balance in each commodity. Posting a single draft, selected drafts, or all
ready drafts in the current filtered view always requires a review. Posting moves snapshots into the
read-only ledger; invalid selections are rejected as a whole. “Create correction” produces an
editable, linked opposing draft while preserving the original transaction.

Live Balance uses the same filtered transaction set in both tabs, independent of their lifecycle.
“Include drafts” is off by default. When enabled, combined amounts affected by drafts are purple;
there is no separate pending amount. Transactions remain expanded by default.

Only the tab preference is persisted. Transaction edits and posting still reset on reload; this is
not yet a durable accounting backend. The static build generates both tab routes for direct
navigation.

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
