const template = require('lodash.template')
const { readFileSync } = require('fs')
const { resolve } = require('path')
// import { createTrasformStream } from '../creator'
const { createTransformStream } = require('./createTransformStream')

const iconTemplate = readFileSync(
  resolve(__dirname, '../templates/exportIcon.ts.ejs'),
  'utf8'
)

const compiled = template(iconTemplate)

const useTemplate = () => {
  return createTransformStream((content, { stem: name, path }) => {
    return compiled({ identifier: content })
  })
}

module.exports = {
  useTemplate,
}
