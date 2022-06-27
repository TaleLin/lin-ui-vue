<template>
  <div>tag</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createComponentName, createNamespace } from '../../utils/components'
import { props } from './props'

const { b, computedClasses } = createNamespace('tag')

export default defineComponent({
  name: createComponentName('Tag'),
  props,
  setup() {
    return {
      b,
      computedClasses,
    }
  },
})
</script>

<style lang="less">
@import './tag.less';
</style>
