<template>
  <div class="app-container">
    <app-header />
    <div class="content">
      <app-sidebar />
      <app-main />
      <app-mobile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppMain from './AppMain.vue'
import AppMobile from './AppMobile.vue'

export default defineComponent({
  name: 'AppLayout',
  components: {
    AppHeader,
    AppSidebar,
    AppMain,
    AppMobile,
  },
  setup() {},
})
</script>
<style lang="css">
.app-container {
  padding-top: 60px;
}
.content {
  margin-left: 240px;
  min-height: calc(100vh - 60px);
  display: flex;
}
</style>
