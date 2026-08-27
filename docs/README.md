# Sinewy documentation site

This directory contains Sinewy's Sin-native documentation application: a progress overview, the shared documentation shell, and live component pages.

Run it from the repository root:

```sh
npm run docs
```

Portable component reference content lives in `docs/components/*.md`. The
documentation build compiles those files into `docs/content.generated.js`,
which lets the same content render during SSR and in the browser without
shipping the Markdown parser.

The generated HTML is passed to `s.trust`; component documents are therefore
trusted repository source and must not contain unreviewed user-authored HTML.

Run the static route generator with:

```sh
npm run generate
```

`sin generate` follows the component links exposed by the generated document
manifest and writes one static HTML page per route.
