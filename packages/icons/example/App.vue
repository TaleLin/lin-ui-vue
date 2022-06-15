<template>
  <div class="svg-container"><Icon /></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Icon from './components/Icon'

export default defineComponent({
  components: {
    Icon,
  },
})
</script>
<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
}
.svg-container {
  width: 14px;
  height: 14px;
}
.svg-container svg {
  display: block;
  width: 100%;
}
</style>
