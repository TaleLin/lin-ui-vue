import { lstatSync, pathExistsSync } from 'fs-extra'
import { extname } from 'path'

export const replaceExt = (file: string, ext: string): string =>
  file.replace(extname(file), ext)

export function smallCamel(str: string, separator: '-' | '_' = '-') {
  const reg = new RegExp(`${separator}([a-z])`, 'g')
  return str.replace(reg, (p, m) => m.toUpperCase())
}

export function bigCamel(str: string, separator: '-' | '_' = '-') {
  const s = smallCamel(str, separator)
  return s.replace(s.charAt(0), s.charAt(0).toUpperCase())
}

export const isDir = (file: string): boolean =>
  pathExistsSync(file) && lstatSync(file).isDirectory()

export const isSFC = (file: string): boolean =>
  pathExistsSync(file) && extname(file) === '.vue'

export const isTS = (file: string): boolean =>
  pathExistsSync(file) && extname(file) === '.ts'
