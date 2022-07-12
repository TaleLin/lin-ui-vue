import { ROW_BIND_COL_KEY } from '../row/provider'
import useParent from '../utils/hooks/useParent'

export default function useRow() {
  const { parent, index } = useParent(ROW_BIND_COL_KEY)
  const { spaces } = parent

  return {
    spaces,
    index,
  }
}
