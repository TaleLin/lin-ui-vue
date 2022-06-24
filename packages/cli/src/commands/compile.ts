import { rollup } from 'rollup'
import { resolve } from 'path'
import vuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { readdirSync } from 'fs-extra'
import { isTS, isSFC, isDir, replaceExt } from '../utils/index'
import {
  UI_DOCS_DIR,
  UI_LIB_DIR,
  UI_SRC_DIR,
  UI_EXAMPLE_DIR,
} from '../constant/index'

function getInputOption() {
  const moduleDirs = readdirSync(UI_SRC_DIR)

  const res = moduleDirs.map((fileName: string) => {
    const file = resolve(UI_SRC_DIR, fileName)
    return isDir(file) ? compileDir(file) : null
  })
  console.log(moduleDirs)
  const input = res
    .flat(Infinity)
    .map((item) => item.replace(`${UI_SRC_DIR}/`, ''))

  const options = {
    input: input.reduce((prev, current) => {
      prev[replaceExt(current, '')] = resolve(UI_SRC_DIR, current)
      return prev
    }, {}),
  }
  return options
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

async function build() {
  const inputOptions = getInputOption()

  const bundle = await rollup({
    input: inputOptions.input,
    plugins: [vuePlugin(), typescript()],
    external: ['vue'],
  })
  await bundle.write({
    dir: 'lib',
    // file: resolve(process.cwd(), 'dist'),
    format: 'esm',
    exports: 'auto',
  })
}

export async function compile() {
  await build()
}
