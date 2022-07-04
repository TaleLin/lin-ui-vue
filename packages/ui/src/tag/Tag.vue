<template>
  <span
    :class="
      computedClasses(
        b(),
        b(`--${size}`),
        b(`--${type}`),
        [!!effect, b(`--${effect}`)],
        [!!round, 'is-round']
      )
    "
    :style="radiusStyle"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { props as propsDefine } from './props'
import { isPixel } from '../utils'

const { b, computedClasses } = createNamespace('tag')

export default defineComponent({
  name: createComponentName('Tag'),
  props: propsDefine,
  setup(props) {
    const radiusStyle = computed(() => {
      return isPixel(props.round)
        ? { 'border-radius': props.round as string }
        : {}
    })
    return {
      radiusStyle,
      b,
      computedClasses,
    }
  },
})
</script>
