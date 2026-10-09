import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const cssPrefix = '\0sakura-css:'
const imagePrefix = '\0sakura-image:'

const inlineSkinAssets = {
  name: 'sakura-inline-skin-assets',
  resolveId(source: string, importer?: string) {
    if (importer === undefined) return null
    if (source.endsWith('.css?inline')) {
      return cssPrefix + resolve(dirname(importer), source.slice(0, -'?inline'.length)) + '.mjs'
    }
    if (/\.(webp|png)$/.test(source)) return imagePrefix + resolve(dirname(importer), source) + '.mjs'
    return null
  },
  async load(id: string) {
    if (id.startsWith(cssPrefix)) {
      const file = id.slice(cssPrefix.length, -'.mjs'.length)
      this.addWatchFile(file)
      return `export default ${JSON.stringify(await readFile(file, 'utf8'))};`
    }
    if (id.startsWith(imagePrefix)) {
      const file = id.slice(imagePrefix.length, -'.mjs'.length)
      this.addWatchFile(file)
      const bytes = await readFile(file)
      return `export default ${JSON.stringify(`data:image/${file.endsWith('.png') ? 'png' : 'webp'};base64,${bytes.toString('base64')}`)};`
    }
    return null
  },
}

export default {
  name: 'dsh-sakura-purple/client',
  entry: { client: 'src/client/index.ts' },
  outDir: 'lib',
  format: ['cjs'],
  platform: 'browser',
  target: 'es2022',
  dts: false,
  clean: false,
  sourcemap: false,
  deps: {
    neverBundle: (specifier: string) => specifier === 'react',
    alwaysBundle: (specifier: string) => specifier !== 'react',
  },
  plugins: [inlineSkinAssets],
  outputOptions: {
    entryFileNames: 'client.js',
    banner: 'window.__ModuleLoader__.load({ id: "dsh-sakura-purple", factory: (require) => {',
    footer: 'return module.exports; } });',
    intro: 'var module = { exports: {} }; var exports = module.exports;',
  },
}
