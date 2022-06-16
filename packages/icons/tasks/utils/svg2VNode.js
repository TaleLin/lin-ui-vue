const parseXML = require('@rgrove/parse-xml')
const {
  applyTo,
  pipe,
  path: pathGet,
  clone,
  filter,
  where,
  equals,
  map,
  defaultTo,
  gt: greaterThan,
  dissoc: deleteProp,
  unless,
  both,
  length,
  __,
} = require('ramda')

const { createTransformStream } = require('./createTransformStream')

const element2VNode = (svgElement) => {
  // console.log(clone(svgElement))
  const { name: tag, attributes, children } = svgElement
  // const res = applyTo({ tag })
  const res = applyTo({
    tag,
    attrs: clone(attributes),
    children: applyTo(children)(
      pipe(filter(where({ type: equals('element') })), (value) => {
        // console.log(value, 1112)
        return map(element2VNode, value)
      })
    ),
  })(
    unless(
      where({
        children: both(Array.isArray, pipe(length, greaterThan(__, 0))),
      }),
      deleteProp('children')
    )
  )
  // console.log(JSON.stringify(res))
  return res
}

const svg2VNode = function () {
  return createTransformStream((svgContent, chunk) => {
    const res = applyTo(svgContent)(
      pipe(parseXML, pipe(pathGet(['children', 0])), element2VNode)
    )

    return JSON.stringify(res)
  })
}

module.exports = {
  svg2VNode,
}
