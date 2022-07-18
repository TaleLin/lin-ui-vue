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
  gt as greaterThan,
  dissoc as deleteProp,
  unless,
  both,
  length,
  __,
  objOf,
  assoc,
  call,
  prop,
  evolve,
  toPairs,
  compose,
  ap,
  toUpper,
  join,
  toLower,
  apply,
  flip,
  replace,
  zipWith,
} from 'ramda'

import { createTransformStream } from './createTransformStream'
import { twoToneIcon } from './twoTone'

const element2VNode: any = ({ theme, name }: any) => {
  return (svgElement: any) => {
    const { name: tag, attributes, children } = svgElement

    if (theme === 'twoTone' && tag === 'path') {
      attributes.fill = attributes.fill || '#333'
    }

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
    if (theme === 'twoTone') {
      return twoToneIcon(res)
    }

    return JSON.stringify(res)
  })
}
