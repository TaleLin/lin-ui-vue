const { series, parallel } = require('gulp')
const { clean } = require('./tasks/clean')
const { generateIcons } = require('./tasks/generateIcons')

// const s = function defaultTask(cb) {
//   // place code for your default task here
//   cb()
// }

exports.default = series(
  clean(['src']),
  parallel(
    generateIcons({
      theme: 'filled',
      from: ['svg/filled/*.svg'],
      toDir: 'src/vNode',
    })
  )
)
