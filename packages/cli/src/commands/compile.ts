import { rollup } from 'rollup'
import { resolve } from 'path'
import vuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { readdirSync, copySync, ensureDirSync, ensureFileSync } from 'fs-extra'
import {
  isLess,
  isTS,
  isSFC,
  isDir,
  replaceExt,
  smartAppendFileSync,
} from '../utils/index'
import {
  CWD,
  UI_DOCS_DIR,
  UI_LIB_DIR,
  UI_SRC_DIR,
  UI_EXAMPLE_DIR,
} from '../constant/index'

function getComponentEntry() {
  const moduleDirs = readdirSync(UI_SRC_DIR)

  const res = moduleDirs.map((fileName: string) => {
    const file = resolve(UI_SRC_DIR, fileName)
    return isDir(file) ? compileDir(file) : null
  })

  const input = res
    .flat(Infinity)
    .map((item) => item.replace(`${UI_SRC_DIR}/`, ''))

  return input.reduce((prev, current) => {
    prev[replaceExt(current, '')] = resolve(UI_SRC_DIR, current)
    return prev
  }, {})
}
function compileDir(dir: string): any {
  const dirs = readdirSync(dir).filter(
    (item) => ![UI_DOCS_DIR, UI_EXAMPLE_DIR].includes(item)
  )
  return dirs
    .map((fileName: string) => {
      const file = resolve(dir, fileName)
      return compileFile(file)
    })
    .filter((_) => _)
}

export function compileFile(file: string): any {
  if (isSFC(file)) return file
  if (isTS(file)) return file
  if (isDir(file)) return compileDir(file)

  return null
}

// export function compileLess(file: string) {
//   const lessPath = file.replace(`${UI_SRC_DIR}/`, '')
//   ensureDirSync(resolve(CWD, 'es/theme'))
//   ensureDirSync(resolve(CWD, 'lib/theme'))
//   copySync(file, resolve(CWD, 'es/theme', lessPath))
//   copySync(file, resolve(CWD, 'lib/theme', lessPath))
//   ensureFileSync(resolve(CWD, 'es/theme'))
// }

async function build() {
  const componentEntry = getComponentEntry()

  const bundle = await rollup({
    input: {
      index: resolve(CWD, 'index.ts'),
      ...componentEntry,
    },
    plugins: [vuePlugin(), typescript()],
    external: ['vue'],
  })
  await bundle.write({
    dir: 'lib',
    format: 'cjs',
    exports: 'named',
  })
  await bundle.write({
    dir: 'es',
    format: 'esm',
    exports: 'named',
  })
}

export async function compile() {
  await build()
}
