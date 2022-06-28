import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'success', 'warning', 'error'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

function shapeValidator(shape: string): boolean {
  return ['square', 'circle', 'semicircle', 'round'].includes(shape)
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
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String as PropType<'square' | 'circle' | 'semicircle' | 'round'>,
    default: 'square',
    validator: shapeValidator,
  },
  block: {
    type: Boolean,
    default: false,
  },
}
