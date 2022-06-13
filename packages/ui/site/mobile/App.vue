<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
  setup() {
    const value = ref(0)
    const onClick = () => {
      value.value++
    }

    return {
      onClick,
      ref
    }
  }
})
</script>