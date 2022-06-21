import fs from 'fs-extra'
import path from 'path'
import { CWD, UI_TYPES_DIR, UI_PACKAGE_JSON } from '../constant/index'
import { bigCamel } from '../utils'

export function generateReference(moduleDir: string) {
  const outputDir = path.resolve(CWD, moduleDir)
  fs.writeFileSync(
    path.resolve(outputDir, 'index.d.ts'),
    `export * from '${path.relative(outputDir, UI_TYPES_DIR)}'\n`
  )
}

export async function generateTypes() {
  const { name } = require(UI_PACKAGE_JSON)
  fs.ensureDirSync(UI_TYPES_DIR)

  const dir = await fs.readdir(UI_TYPES_DIR)
  const ignoreEntryDir = dir.filter(
    (filename) => filename !== 'index.d.ts' && filename !== 'global.d.ts'
  )
  const exports: string[] = []
  const declares: string[] = []

  ignoreEntryDir.forEach((filename) => {
    const componentName = filename.slice(0, filename.indexOf('.d.ts'))

    exports.push(`export * from './${componentName}'`)

    if (!componentName.startsWith('lin')) {
      declares.push(
        `${bigCamel('lin')}${bigCamel(
          componentName
        )}: typeof import('${name}')['_${bigCamel(componentName)}Component']`
      )
    }
  })

  const template = `\
import type { App } from 'vue'

export const install: (app: App) => void

${exports.join('\n')}
`

  const globalTemplate = `\
declare module 'vue' {
  export interface GlobalComponents {
    ${declares.join('\n    ')}
  }
}

export {}
`
  fs.writeFileSync(path.resolve(UI_TYPES_DIR, 'index.d.ts'), template)
  fs.writeFileSync(path.resolve(UI_TYPES_DIR, 'global.d.ts'), globalTemplate)
}
