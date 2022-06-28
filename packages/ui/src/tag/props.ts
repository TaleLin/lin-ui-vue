import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'success', 'warning', 'error'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

function effectValidator(effect: string): boolean {
  return ['dark', 'light', 'plain'].includes(effect)
}

export const props = {
  type: {
    type: String as PropType<
      'default' | 'primary' | 'warning' | 'error' | 'success'
    >,
    default: 'default',
    validator: typeValidator,
  },
  size: {
    type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
    default: 'normal',
    validator: sizeValidator,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  effect: {
    type: String as PropType<'dark' | 'light' | 'plain'>,
    validator: effectValidator,
  },
  round: {
    type: [Boolean, String],
    default: false,
  },
}
