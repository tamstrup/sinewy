// Bundle this one dependency boundary for Sin's development server. AG Grid's generated modules
// contain imports that its lightweight import rewriter cannot reliably resolve. Keep the bundle
// local (no CDN), generated (not committed), and lazy via runtime.js.
export { createGrid, ModuleRegistry, themeQuartz } from 'ag-grid-community'
export { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise'
export { AG_GRID_LOCALE_DK, AG_GRID_LOCALE_EN } from '@ag-grid-community/locale'
