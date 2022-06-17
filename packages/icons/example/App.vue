<template>
  <div class="svg-container"><IconDemo /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconDemo from './components/IconDemo'

export default defineComponent({
  components: {
    IconDemo,
  },
})
</script>
<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
