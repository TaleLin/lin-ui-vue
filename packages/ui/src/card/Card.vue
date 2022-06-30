<template>
  <div>card</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../utils/components'
import { propsDefine } from './props'

const { b, computedClasses } = createNamespace('card')

export default defineComponent({
  name: createComponentName('Card'),
  props: propsDefine,
  setup() {
    return {
      b,
      computedClasses,
    }
  },
})
</script>
