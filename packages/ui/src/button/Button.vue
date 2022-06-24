<template>
  <button
    :class="
      computedClasses(
        b(),
        b(`--${size}`),
        b(`--${type}`),
        [text, b(`--text`)],
        [disabled, b(`--disabled`)]
      )
    "
  >
    <div>
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../../utils/components'
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
