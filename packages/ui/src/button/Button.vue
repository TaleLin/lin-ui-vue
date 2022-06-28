<template>
  <button
    :class="
      computedClasses(
        b(),
        b(`--${size}`),
        b(`--${type}`),
        b(`--${shape}`),
        [disabled, 'is-disabled'],
        [block, 'is-block'],
        [plain && !text, 'is-plain'],
        [text, 'is-text']
      )
    "
  >
    <div :class="b('__content')">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { props } from './props'

const { b, computedClasses } = createNamespace('button')

export default defineComponent({
  name: createComponentName('Button'),
  props,
  setup() {
    return {
      b,
      computedClasses,
    }
  },
})
</script>
