
import type { PropType } from "vue"

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'success', 'warning', 'error'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'warning' | 'error' | 'success'>,
    default: 'default',
    validator: typeValidator
  },
  size: {
    type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
    default: 'normal',
    validator: sizeValidator,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  }
}