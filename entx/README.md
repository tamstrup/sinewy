# entx

An accounting application built with a Deno backend and a Sin.js frontend using Sinewy.

The current frontend is an interactive product prototype centered on an immutable ledger, with
editable staged transactions, live filtered balances, hierarchical accounts, and keyboard-first
navigation. Data is still in memory; storage, authentication, files, account management, and the
deployment shape will be decided later.

## Prototype shortcuts

- `N` creates a staged transaction.
- `F` toggles the filter pane.
- `/` opens the filters and focuses text search.
- `J`/`K` or arrow keys move the selected transaction.
- `Enter` collapses or expands the selected transaction.

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
```
