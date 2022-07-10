<template>
  <div>
    <div style="position: fixed">
      <lin-button type="primary" @click="changeImage">修改图片地址</lin-button>
    </div>
    <div v-for="(item, index) in list" :key="item.id">
      <img
        :ref="imgRefs[index]"
        v-lin-lazy="{
          src: item.url,
          error: {
            component: ImageError,
            props: {
              onReload: () => {
                onReload(index)
              },
            },
          },
        }"
        class="lin-lazy-image"
      />
    </div>
    <div>
      <img
        ref="imgRef"
        v-lin-lazy="{
          src: 'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF',
          error: {
            component: ImageError,
            props: {
              onReload: () => {
                onReload(12)
              },
            },
          },
        }"
        class="lin-lazy-image"
      />
    </div>
    <!-- <img
      v-lin-lazy="'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF'"
      class="lin-lazy-image"
    />
    <div
      v-lin-lazy:background="
        'https://t7.baidu.com/it/u=1318833646,598769731&fm=193&f=GIF'
      "
      class="lin-lazy-image"
    ></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ImageError from './imageError.vue'
// import type { LazyHTMLElement } from '../imageManger'

export default defineComponent({
  // components: {
  //   ImageError,
  // },
  setup() {
    const imgRef = ref()
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
    const imgRefs = ref(list.map((item: any) => ref()))

    const changeImage = () => {
      list[3].url = '111'
      console.log(imgRef.value._lazy)
    }
    // const handleLoad = (e: Event) => {
    //   const el = e.currentTarget as LazyHTMLElement
    //   console.log(el._lazy)
    // }

    const onReload = (index: number) => {
      // console.log(imgRef.value._lazy.removeError())
      imgRef.value._lazy.loadImage()
      // console.log(imgRefs.value[index].value[0]._lazy)
      // console.log(imgRefs[index].value[0]._lazy)
    }

    return {
      list,
      changeImage,
      ImageError,
      imgRef,
      onReload,
      imgRefs,
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
