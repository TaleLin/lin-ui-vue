import {
  pipe,
  clone,
  zipWith,
  call,
  assoc,
  prop,
  ap,
  map,
  join,
  toLower,
  toUpper,
  applyTo,
  evolve,
  toPairs,
  compose,
  replace,
  apply,
  flip,
} from 'ramda'

const __PLACEHOLDER__ = 'TWOTONE_ICON_FUNCTION_HOLDER'
const __PRIMARY_COLOR__ = 'primaryColor'
const __SECONDARY_COLOR__ = 'secondaryColor'

const getRegExpFromColors = pipe(
  ap([toUpper, toLower]),
  map((color) => `("${color}")`),
  join('|'),
  (content) => new RegExp(content, 'g')
)

const colorsReplacer: any = applyTo({
  [__PRIMARY_COLOR__]: ['#333', '#333333'],
  [__SECONDARY_COLOR__]: ['#E6E6E6', '#D9D9D9', '#D8D8D8'],
})(
  pipe(
    evolve({
      [__PRIMARY_COLOR__]: getRegExpFromColors,
      [__SECONDARY_COLOR__]: getRegExpFromColors,
    }),
    toPairs,
    map(compose(apply, flip)(replace)),
    apply(pipe)
  )
)

const duplicate = <T>(n: T): [T, T] => [clone(n), clone(n)]

export const twoToneIcon = pipe(
  duplicate,
  zipWith(call as any, [
    pipe(assoc('vNode', __PLACEHOLDER__), JSON.stringify),
    pipe(prop('vNode'), JSON.stringify, colorsReplacer, (content) => {
      return `function render(${__PRIMARY_COLOR__}, ${__SECONDARY_COLOR__}) { return ${content}; }`
    }),
  ]),
  ([hasPlaceholderContent, iconFunctionContent]) =>
    replace(
      `"${__PLACEHOLDER__}"`,
      iconFunctionContent as any,
      hasPlaceholderContent as any
    )
)
