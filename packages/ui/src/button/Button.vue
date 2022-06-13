<template>
  <button class="lin-btn">
    <slot />
  </button>
</template>

<script lang="ts">
import { createComponentName } from '../../utils/components'
import { defineComponent } from "vue";

export default defineComponent({
  name: createComponentName('Button'),
  setup() {}
})
</script>