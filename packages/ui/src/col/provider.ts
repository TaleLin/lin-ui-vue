import { ROW_BIND_COL_KEY, ProvideValue } from '../row/provider'
import useParent from '../utils/hooks/useParent'

export default function useRow() {
  const { parent, index } = useParent<ProvideValue>(ROW_BIND_COL_KEY)
  const spaces = parent?.spaces

  return {
    spaces,
    index,
  }
}
