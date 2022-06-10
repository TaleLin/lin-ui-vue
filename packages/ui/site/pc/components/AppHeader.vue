<template>
  <div class="app-header">header</div>
</template>

<script lang="ts">
import { defineComponent  } from "vue"
export default defineComponent({
  name: 'AppHeader',
  setup() {}
})
</script>
<style lang="css">
.app-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  z-index: 10;
  background: #fff;
}
</style>