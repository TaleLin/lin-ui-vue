import { src, dest } from 'gulp'

import rename from 'gulp-rename'

import { svg2VNode } from './utils/svg2VNode'

import { useTemplate } from './utils/useTemplate'
import { bigCamel } from './utils/utils'
// import { createTransformStream } from './utils/createTransformStream'

export const generateIcons = ({ theme, from, toDir }: any) => {
  return function GenerateIcons() {
    return (
      src(from)
        .pipe(svg2VNode({ theme }))
        .pipe(useTemplate(theme))
        .pipe(
          rename((file) => {
            console.log(file, 111)
            if (file.basename) {
              const name = `${file.basename}-${theme}`
              file.basename = `${name}/${bigCamel(name)}`
              file.extname = '.ts'
            }
          })
        )
        // .pipe(
        //   createTransformStream((chunk: any, file: any) => {
        //     console.log(file.name)
        //     return chunk
        //   })
        // )
        .pipe(dest(toDir))
    )
  }
}
