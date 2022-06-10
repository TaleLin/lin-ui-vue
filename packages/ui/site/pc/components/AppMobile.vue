<template>
  <div class="app-mobile">手机模拟</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppMobile'
})
</script>
<style lang="css">
.app-mobile{
    flex: 0 0 325px;
    top: 80px;
    height: calc(100vh - 60px);
    margin-right: 0;
    overflow: hidden;
    border-radius: 2px
}
</style>