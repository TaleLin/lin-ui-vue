<template>
  <div
    :class="
      computedClasses(b(), b(`--span-${span}`), [
        !!offset,
        b(`--offset-${offset}`),
      ])
    "
    :style="paddingStyle"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { propsDefine } from './props'
import useRow from './provider'
import { warn } from '../utils/index'

const { b, computedClasses } = createNamespace('col')

export default defineComponent({
  name: createComponentName('Col'),
  props: propsDefine,
  setup(props) {
    const { spaces, index } = useRow()
    const spanPlusOffset = computed(
      () => Number(props.offset) + Number(props.span)
    )
    const paddingStyle = computed(() => {
      const { left, right } = spaces.value[index.value]
      return {
        paddingLeft: left && `${left}px`,
        paddingRight: right && `${right}px`,
      }
    })
    if (spanPlusOffset.value > 24) {
      warn(
        'col',
        `offset: ${props.offset} + span: ${props.span} 超出栅格列数: 24`
      )
    }
    return {
      paddingStyle,
      b,
      computedClasses,
    }
  },
})
</script>
