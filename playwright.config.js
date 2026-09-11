import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test/browser',
  workers: 1,
  use: { baseURL: 'http://127.0.0.1:4179', channel: 'chrome' },
  webServer: {
    command: 'node test/browser/server.js',
    url: 'http://127.0.0.1:4179/test/browser/combobox.html'
  }
})
