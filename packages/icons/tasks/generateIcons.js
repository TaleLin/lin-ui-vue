const { src, dest } = require('gulp')
const rename = require('gulp-rename')
const { svg2VNode } = require('./utils/svg2VNode')
const { useTemplate } = require('./utils/useTemplate')

const generateIcons = ({ from, toDir }) => {
  return function GenerateIcons() {
    return src(from)
      .pipe(svg2VNode())
      .pipe(useTemplate())
      .pipe(
        rename((file) => {
          if (file.basename) {
            file.extname = '.js'
          }
        })
      )
      .pipe(dest(toDir))
  }
}

module.exports = {
  generateIcons,
}
