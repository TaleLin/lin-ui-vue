<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  export default defineComponent({
    name: 'APP',
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
