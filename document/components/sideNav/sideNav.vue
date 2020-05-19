<template>
  <ul class="nav-ul">
    <li 
      class="nav-li" 
      v-for="(item, key) in list" 
      :key="key" 
      :class="{'nav-li-open': item.isOpend, 'nav-li-active': item.isActived}"
    >
      <template v-if="item.name">
        <div class="nav-name" @click="open(item, key)" >
          {{item.name}}
          <span v-if="item.angle" class="arrow" ></span>
        </div>
        <side-nav :list="item.subList"></side-nav>
      </template>
      <router-link
        active-class="nav-active"
        :to="{path: key}"
        v-else
      >
        {{item}}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  interface Props {
    list: any
  }
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    name: 'SideNav',
    props: {
      list: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props: Props, context: any) {
      const open = (item: any, key: string) => {
        let isOpend = item.isOpend
        Object.keys(props.list).forEach(_key => {
            if(key === _key) {
              context.root.$set(props.list[_key], 'isOpend', !isOpend)
            } else {
              context.root.$set(props.list[_key], 'isOpend', false)
            }
        })
      }
      return {
        open
      }
    }
  })
</script>

<style lang="less" scope>
  .nav-ul{
    .nav-li{
      position: relative;
      overflow: hidden;
      .nav-name{
        color: #45526b;
        transition: color .15s ease;
        cursor: pointer;
        font-size: 14px;
        padding: 0 40px;
        margin-top: 0;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 40px;
        line-height: 40px;
        margin-left: 5px;
        position: relative;
        font-weight: 400;
      }
      .arrow{
        width: 6px;
        height: 6px;
        position: absolute;
        border-top: 1px solid #3683d6;
        border-right: 1px solid #3683d6;
        transform: rotate(135deg);
        top: 35%;
        left: 17px;
        transition: all .3s;
      }
      & >.nav-ul {
        display: none;
        .nav-li{
          padding-left: 50px;
          line-height: 30px;
          a{
            color: #45526b;
            font-size: 13px;
          }
        }
      }
    }
    .nav-li-open{
      .nav-name {
        color: #3683d6;
        background: #e4f1ff;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        .arrow{
          color: #3683d6;
          transform:rotate(-45deg) ;
          top: 45%;
          margin-bottom: -2px;
        }
      }
      .nav-ul{
        display: block;
      }
    }
  }
</style>
