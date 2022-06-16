import parseXML from '@rgrove/parse-xml'
import {
  applyTo,
  pipe,
  path as pathGet,
  clone,
  filter,
  where,
  equals,
  map,
  defaultTo,
  gt as greaterThan,
  dissoc as deleteProp,
  unless,
  both,
  length,
  __,
  objOf,
  assoc,
} from 'ramda'

import { createTransformStream } from './createTransformStream'

const element2VNode: any = ({ theme, name }: any) => {
  return (svgElement: any) => {
    const { name: tag, attributes, children } = svgElement
    const res = applyTo({
      tag,
      attrs: clone(attributes),
      children: applyTo(children)(
        pipe(filter(where({ type: equals('element') })), (value) => {
          return map(element2VNode({ theme, name }), value)
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
    return res
  }
}

export const svg2VNode = function ({ theme }: any) {
  return createTransformStream((svgContent: any, { stem: name }: any) => {
    const res = applyTo(svgContent)(
      pipe(
        parseXML,
        pipe(pathGet(['children', 0])),
        element2VNode({ theme, name }),
        pipe(objOf('vNode'), assoc('name', name), assoc('theme', theme))
      )
    )

    return JSON.stringify(res)
  })
}
