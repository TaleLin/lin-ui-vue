<template>
  <nav class="">
    <side-nav :list="navList"></side-nav>
  </nav>
</template>

<script lang="ts">
  interface Props {
    navList: object
  }

  import SideNav from '../sideNav/sideNav.vue'
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    name: 'sideList',
    props: {
      navList: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      SideNav
    },
    setup(props: Props, context: any) {
      console.log(props.navList)
      return {
      }
    }
  })
</script>

<style lang="less">
  .lin-doc-content{
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
