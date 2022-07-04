<template>
  <div :class="b()" :style="wrapStyle">
    <img :src="src" :class="b(`__img`)" :alt="alt" :style="imgStyle" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { propsDefine } from './props'
import { formatPixel } from '../utils/index'

const { b, computedClasses } = createNamespace('image')

export default defineComponent({
  name: createComponentName('Image'),
  props: propsDefine,
  setup(props) {
    const wrapStyle = computed(() => {
      return {
        width: formatPixel(props.width),
        height: formatPixel(props.height),
        borderRadius: props.round ? '50%' : formatPixel(props.radius),
      }
    })
    const imgStyle = computed(() => {
      return {
        objectFit: props.fit,
        objectPosition: props.position,
      }
    })
    return {
      b,
      computedClasses,
      wrapStyle,
      imgStyle,
    }
  },
})
</script>
