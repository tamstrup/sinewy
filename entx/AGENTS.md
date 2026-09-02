# ENTX conventions

- Prefer Sinewy components wherever a suitable component exists. Use themed components with
  ENTX-specific styling, or Sinewy primitives when appropriate; do not recreate their interaction or
  accessibility behavior locally.
- Create an ENTX-specific component only when Sinewy has no suitable component. Suggest obvious
  reusable additions to Sinewy as they emerge; do not expand the library speculatively.
- Preserve the minimalist layout, keyboard and mouse support, Danish and English translations, and
  locale-aware number/date formatting.
- Commit and push verified, cohesive slices. Keep private license/configuration files out of
  commits.
- Lazy routes may directly return `import('./page.js')` when the module default-exports a Sin
  component. Own third-party DOM integrations through `dom` hooks and destroy them on removal.
- Prototype query execution is mocked, not a SQL engine or a connection to live accounting data.
  Keep this visible to the user.
