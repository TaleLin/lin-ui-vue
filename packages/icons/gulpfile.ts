import { series, parallel } from 'gulp'
import { clean } from './tasks/clean'
import { generateIcons } from './tasks/generateIcons'

export default series(
  clean(['src/asn']),
  parallel(
    generateIcons({
      theme: 'filled',
      from: ['svg/filled/*.svg'],
      toDir: 'src/asn',
    }),
    generateIcons({
      theme: 'outlined',
      from: ['svg/outlined/*.svg'],
      toDir: 'src/asn',
    }),
    generateIcons({
      theme: 'twoTone',
      from: ['svg/twoTone/*.svg'],
      toDir: 'src/asn',
    })
  )
)
