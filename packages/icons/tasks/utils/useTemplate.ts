import template from 'lodash.template'

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { createTransformStream } from './createTransformStream'
import { bigCamel } from './utils'

const iconTemplate = readFileSync(
  resolve(__dirname, '../templates/icon.ts.ejs'),
  'utf8'
)

const compiled = template(iconTemplate)

export const useTemplate = (theme: string) => {
  return createTransformStream((content: any, { stem: name, path }: any) => {
    return compiled({ identifier: bigCamel(`${name}-${theme}`), content })
  })
}
