<template>
  <div class="app-main">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppMain'
})
</script>
<style lang="css">
.app-main {
  min-width: 600px;
  flex: 1;
  padding: 0 40px;
}
</style>