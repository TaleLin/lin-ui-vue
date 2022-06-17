import { series, parallel } from 'gulp'
import { clean } from './tasks/clean'
import { generateIcons } from './tasks/generateIcons'

export default series(
  clean(['src']),
  parallel(
    generateIcons({
      theme: 'filled',
      from: ['svg/filled/*.svg'],
      toDir: 'src/components',
    })
  )
)
