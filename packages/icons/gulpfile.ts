import { series, parallel } from 'gulp'
import { clean } from './tasks/clean'
import { generateIcons } from './tasks/generateIcons'

// const s = function defaultTask(cb) {
//   // place code for your default task here
//   cb()
// }

export default series(
  clean(['src']),
  parallel(
    generateIcons({
      theme: 'filled',
      from: ['svg/filled/*.svg'],
      toDir: 'src/vNode',
    })
  )
)
