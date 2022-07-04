import type { PropType } from 'vue'
import { pixelPropValidator } from '../utils'

const fitValidator = (fit: string): boolean => {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit)
}

export const propsDefine = {
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
  },
  fit: {
    type: String as PropType<
      'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    >,
    default: 'fill',
    validator: fitValidator,
  },
  position: {
    type: String as PropType<
      'left' | 'right' | 'center' | 'top' | 'bottom' | string
    >,
  },
  width: {
    type: [Number, String],
    validator: pixelPropValidator('width'),
  },
  height: {
    type: [Number, String],
    validator: pixelPropValidator('height'),
  },
  radius: {
    type: [Number, String],
    default: 0,
    validator: pixelPropValidator('radius'),
  },
  round: {
    type: Boolean,
    default: false,
  },
}
