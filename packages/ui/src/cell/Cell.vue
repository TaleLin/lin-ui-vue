<template>
  <div>Cell</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { propsDefine } from './props'

const { b, computedClasses } = createNamespace('Cell')

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
