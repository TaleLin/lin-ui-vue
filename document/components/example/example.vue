<template>
  <div class="page-example">
    <div class="example-wrapper">
      <section class="mofang-demo">
        <iframe :src="ifrSrc" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  import { baseUrl } from '../../common/js/utils'
  import Lang from '../lang/lang.vue'
  export default defineComponent({
    name: 'APP',
    components: {
      Lang
    },
    setup(props: {}, context: any) {
      const ifrSrc = computed(() => {
        return `${baseUrl}`
      })

      return {
        ifrSrc
      }
    }
  })
</script>

<style lang="less">
  .page-example{
    .example-wrapper{
      position: relative;
      width: 375px;
      height: 730px;
      margin: 0 56px 0 26px;
      background: url(/document/components/example/iphoneX.png);
      background-size: 100%;
      .mofang-demo{
        position: absolute;
        top: 64px;
        left: 21px;
        right: 23px;
        bottom: 22px;
        overflow: hidden;
        border-radius: 0 0 35px 35px;
        border: 1px solid #edf0f4;
        border-top: none;
        background-color: #edf0f4
      }
    }
  }
</style>
