import type { PropType } from 'vue'

export const propsDefine = {
  gutter: {
    type: [String, Number],
    default: 0,
  },
  justify: {
    type: String as PropType<
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'end'
      | 'start'
      | 'space-between'
      | 'space-around'
    >,
    default: 'start',
  },
  align: {
    type: String as PropType<'flex-start' | 'flex-end' | 'center'>,
    default: 'flex-start',
  },
}
