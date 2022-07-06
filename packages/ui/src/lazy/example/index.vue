<template>
  <div>
    <img
      v-lin-lazy="'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF'"
      class="lin-lazy-image"
    />
    <img
      v-lin-lazy="'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF'"
      class="lin-lazy-image"
    />
    <img
      v-lin-lazy="'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF'"
      class="lin-lazy-image"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import type { LazyHTMLElement } from '../imageManger'

export default defineComponent({
  setup() {
    // const handleLoad = (e: Event) => {
    //   const el = e.currentTarget as LazyHTMLElement
    //   console.log(el._lazy)
    // }

    return {
      // handleLoad,
    }
  },
})
</script>
<style lang="less">
.lin-lazy-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
