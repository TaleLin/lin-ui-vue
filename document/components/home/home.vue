<template>
  <div class="lin-doc">
    <div class="lin-doc-header">
      <div class="lin-doc-header-logo">
        <img src="./left-logo.png">
      </div>
      <div class="lin-doc-header-nav">
        <ul>
          <li>
            Github<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
          </li>
          <li><lang /></li>
        </ul>
      </div>
    </div>
    <div class="lin-router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  import Lang from '../lang/lang.vue'
  export default defineComponent({
    name: 'APP',
    components: {
      Lang
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
  .lin-doc{
    height: 100%;
    box-sizing: border-box;
    padding-top: 72px;
    transition: all 250ms ease;
    .lin-doc-header{
      z-index: 5;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 72px;
      // line-height: 60px;
      box-sizing: border-box;
      padding: 0 100px;
      margin-top: 0;
      background-color: #fff;
      border-bottom: 1px solid #eaecef;
      box-shadow: 0 0 5px #eaecef;
      display: flex;
      align-items: center;
      .lin-doc-header-logo{
        img{
          height: 38px;
        }
      }
      .lin-doc-header-nav{
        flex: 1;
        flex-direction: row-reverse;
        display: flex;
        &>ul{
          list-style: none;
          display: flex;
          li{
            margin-right: 10px;
            cursor: pointer;
            .outbound{
              color: #3683d6;
              display: inline-block;
            }
          }
        }
      }
    }
    .lin-router-content{
      height: 100%;
    }
  }
</style>
