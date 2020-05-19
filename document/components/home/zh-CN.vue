<template>
  <Home>zh-CN</Home>
</template>

<script lang="ts">
  import Home from './home.vue';
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    name: 'APP',
    components: {
      Home
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
