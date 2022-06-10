<template>
  <div class="app-sidebar">sidebar</div>
</template>

<script lang="ts">
import { defineComponent  } from "vue"
export default defineComponent({
  name: 'AppSidebar',
  setup() {}
})
</script>
<style lang="css">
.app-sidebar{
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 240px;
  border-right: 1px solid #eaecef;
  z-index: 10;
  background: #fff;
}
</style>