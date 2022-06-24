<template>
  <div>avatar</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../../utils/components'
import { props } from './props'

const { b, computedClasses } = createNamespace('avatar')

export default defineComponent({
  name: createComponentName('Avatar'),
  props,
  setup() {
    return {
      b,
      computedClasses,
    }
  },
})
</script>
