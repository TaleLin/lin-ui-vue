import useChildren from '../utils/hooks/useChildren'

export const ROW_BIND_COL_KEY = Symbol('ROW_BIND_COL_KEY')
export const ROW_COUNT_COL_KEY = Symbol('ROW_COUNT_COL_KEY')

export function useCols() {
  const { linkChildren, children } = useChildren(ROW_BIND_COL_KEY)

  return {
    cols: children,
    bindCols: linkChildren,
  }
}
