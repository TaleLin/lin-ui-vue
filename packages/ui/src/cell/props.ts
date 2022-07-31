import type { PropType } from 'vue'

export const propsDefine = {
  title: {
    type: [Number, String],
    default: '',
  },
  value: {
    type: [Number, String],
    default: '',
  },
  label: {
    type: [Number, String],
    default: '',
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
  },
  to: {
    type: [String, Object],
  },
}
