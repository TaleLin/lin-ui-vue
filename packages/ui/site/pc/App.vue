<template>
  <div>
    <router-view></router-view>
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
<style lang="css">
html,body {
  margin: 0;
  padding: 0;
}
</style>