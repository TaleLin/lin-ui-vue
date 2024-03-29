import { src, dest } from 'gulp'

import rename from 'gulp-rename'

import { svg2VNode } from './utils/svg2VNode'

import { useTemplate } from './utils/useTemplate'
import { bigCamel } from './utils/utils'

export const generateIcons = ({ theme, from, toDir }: any) => {
  return function GenerateIcons() {
    return src(from)
      .pipe(svg2VNode({ theme }))
      .pipe(useTemplate(theme))
      .pipe(
        rename((file) => {
          if (file.basename) {
            const name = `${file.basename}-${theme}`
            file.basename = `${bigCamel(name)}`
            file.extname = '.ts'
          }
        })
      )
      .pipe(dest(toDir))
  }
}
