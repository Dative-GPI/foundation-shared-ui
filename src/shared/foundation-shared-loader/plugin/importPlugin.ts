import { extname } from 'path'
import type { Plugin } from 'vite'
import { generateImports } from './generateImports'
import { parse as parseUrl, URLSearchParams } from 'url'

function parseId(id: string) {
  const { query, pathname } = parseUrl(id)

  return {
    query: query ? Object.fromEntries(new URLSearchParams(query)) : null,
    path: pathname ?? id
  }
}

export function importPlugin(skipShared: boolean, skipCore: boolean, skipAdmin: boolean): Plugin {
  return {
    name: 'foundation:import',
    configResolved(config) {
      if (config.plugins.findIndex(plugin => plugin.name === 'foundation:import') < config.plugins.findIndex(plugin => plugin.name === 'vite:vue')) {
        throw new Error('Foundation plugin must be loaded after the vue plugin')
      }
    },
    async transform(code, id) {
      const { query, path } = parseId(id)

      if (
        ((!query || !('vue' in query)) && extname(path) === '.vue' && !/^import { render as _sfc_render } from ".*"$/m.test(code)) ||
        (query && 'vue' in query && (query.type === 'template' || (query.type === 'script' && query.setup === 'true')))
      ) {
        const { code: imports, source } = generateImports(code, skipShared, skipCore, skipAdmin)
        return {
          code: source + imports,
          map: null,
        }
      }
      return null
    }

  }
}