<template>
  <div :class="computedClasses(b())">Cell</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { propsDefine } from './props'

const { b, computedClasses } = createNamespace('cell')

export default defineComponent({
  name: createComponentName('Cell'),
  props: propsDefine,
  setup() {
    return {
      b,
      computedClasses,
    }
  },
})
</script>
