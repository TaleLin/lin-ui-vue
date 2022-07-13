<template>
  <div
    :class="computedClasses(b())"
    :style="{ 'align-items': align, 'justify-content': justify }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { propsDefine } from './props'
import { useCols } from './provider'

const { b, computedClasses } = createNamespace('row')

export default defineComponent({
  name: createComponentName('Row'),
  props: propsDefine,
  setup(props) {
    const { bindCols, cols } = useCols()

    const groups = computed(() => {
      const groups: number[][] = [[]]
      let totalSpan = 0
      cols.forEach((item, index: number) => {
        const { span } = item.props
        totalSpan += Number(span)
        if (totalSpan > 24) {
          groups.push([index])
          totalSpan = Number(span)
        } else {
          groups[groups.length - 1].push(index)
        }
      })
      return groups
    })

    const spaces = computed(() => {
      const spaces: { left?: number; right: number }[] = []
      const gutter = Number(props.gutter)

      groups.value.forEach((group) => {
        const averageColPadding = (gutter * (group.length - 1)) / group.length
        group.forEach((col, index) => {
          if (index === 0) {
            spaces.push({
              right: averageColPadding,
            })
          } else {
            const left = gutter - spaces[index - 1].right
            const right = averageColPadding - left
            spaces.push({
              left,
              right,
            })
          }
        })
      })
      return spaces
    })

    bindCols({ spaces })

    return {
      b,
      computedClasses,
    }
  },
})
</script>
