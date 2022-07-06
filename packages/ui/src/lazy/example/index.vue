<template>
  <div>
    <div style="position: fixed">
      <lin-button type="primary" @click="changeImage">修改图片地址</lin-button>
    </div>
    <img
      v-for="item in list"
      :key="item.id"
      v-lin-lazy="item.url"
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
    <div
      v-lin-lazy:background="
        'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF'
      "
      class="lin-lazy-image"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import type { LazyHTMLElement } from '../imageManger'

export default defineComponent({
  setup() {
    const list = reactive([
      {
        url: 'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF',
        id: 1,
      },
      {
        url: 'https://t7.baidu.com/it/u=2511982910,2454873241&fm=193&f=GIF',
        id: 2,
      },
      {
        url: 'https://t7.baidu.com/it/u=2763645735,2016465681&fm=193&f=GIF',
        id: 3,
      },
      {
        url: 'https://t7.baidu.com/it/u=3908717,2002330211&fm=193&f=GIF',
        id: 4,
      },
    ])

    const changeImage = () => {
      list[3].url = '111'
    }
    // const handleLoad = (e: Event) => {
    //   const el = e.currentTarget as LazyHTMLElement
    //   console.log(el._lazy)
    // }

    return {
      list,
      changeImage,
      // handleLoad,
    }
  },
})
</script>
<style lang="less">
.lin-lazy-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  background-size: cover;
}
</style>
