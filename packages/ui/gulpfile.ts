const less = require('gulp-less')

const { resolve } = require('path')

const { series, parallel, src, dest } = require('gulp')

function buildESLess() {
  return src(resolve(__dirname, 'src/style/**/*.less'))
    .pipe(less())
    .pipe(dest('./es/theme'))
}

function buildLibLess() {
  return src(resolve(__dirname, 'src/style/**/*.less'))
    .pipe(less())
    .pipe(dest('./lib/theme'))
}

exports.default = series(parallel(buildESLess, buildLibLess))
