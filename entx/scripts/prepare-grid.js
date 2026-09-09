import { copyFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const license = new URL('../src/query/license.generated.js', import.meta.url)
try {
  await copyFile(new URL('../license.js', import.meta.url), license)
} catch (error) {
  if (error.code !== 'ENOENT') throw error
  await writeFile(license, "export default ''\n")
}

await build({
  absWorkingDir: fileURLToPath(new URL('..', import.meta.url)),
  entryPoints: ['src/query/grid-vendor.js'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  outfile: 'src/query/grid-vendor.generated.js',
})
