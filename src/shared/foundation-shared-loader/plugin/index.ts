import { Plugin } from 'vite'

import { importPlugin } from './importPlugin'

function FoundationSharedAutoImport ({ 
  skipShared = false, 
  skipCore = false, 
  skipAdmin = false, 
  skipExtension = false 
} = {}): Plugin[] {
  const plugins: Plugin[] = []
    plugins.push(importPlugin(skipShared, skipCore, skipAdmin, skipExtension))

  return plugins
}

module.exports = FoundationSharedAutoImport
export default FoundationSharedAutoImport