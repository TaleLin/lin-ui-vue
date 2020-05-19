<template>
  <Content lang="zh-CN">zh-CN</Content>
</template>

<script lang="ts">
  import Content from '../content/content.vue';
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    components: {
      Content
    },
    setup(props: {}, context: any) {
      const btnClass = computed(() => ({
        
      }))

      return {
        btnClass
      }
    }
  })
</script>

<style lang="less">
  
</style>
