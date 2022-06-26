const less = require('gulp-less')

const { resolve } = require('path')

const { series, parallel, src, dest } = require('gulp')
const cleanCSS = require('gulp-clean-css')

function buildCss(target: 'esm' | 'cjs') {
  let output = ''
  if (target === 'esm') output = 'es'
  if (target === 'cjs') output = 'lib'
  return () => {
    return src(resolve(__dirname, 'src/style/**/*.less'))
      .pipe(less())
      .pipe(cleanCSS())
      .pipe(dest(`${output}/theme`))
  }
}

exports.default = series(parallel(buildCss('esm'), buildCss('cjs')))
