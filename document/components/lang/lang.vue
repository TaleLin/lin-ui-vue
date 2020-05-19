<template>
  <span class="langs">
    <a href="javascript:;" @click="toggleLang" >{{ current === 'zh-CN' ? 'English' : '中文' }}</a>
  </span>
</template>

<script lang="ts">
  import { ref,computed, watch, onMounted, reactive, defineComponent } from '@vue/composition-api'
  import { getCurrentLang, setItem } from '../../common/js/utils'
  import { LANG_KEY } from '../../common/config/index'
  
  export default defineComponent({
    name: 'Lang',
    setup(props: {}, context: any) {
      
      const state = reactive({
        current: getCurrentLang()
      })

      const toggleLang = () => {
        state.current = state.current === 'zh-CN' ? 'en-US' : 'zh-CN'
        setItem(LANG_KEY, state.current)
        context.root.$router.replace({
          path: context.root.$router.currentRoute.path.replace(/\/(zh-CN|en-US)(?=\/?)/, `/${state.current}`)
        })
      }

      return {
        ...state,
        toggleLang
      }
    }
  })
</script>

<style lang="less">
  
</style>
