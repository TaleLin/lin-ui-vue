<template>
  <div class="demo-component-list">
    <div class="demo-component-list-title">{{data.name}}</div>
    <div class="demo-component-list-group">
      <router-link class="demo-component-list-group-item" v-for="(item, index) in data.items" :key="index" :to="item.path">
        {{item.text}}
        <svg viewBox="0 0 1024 1024" class="demo-component-list-icon"><path fill="#B6C3D2" d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path><path fill="#B6C3D2" d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path></svg>
      </router-link>
      <!-- <a class="demo-component-list-group-item" v-for="(item, index) in data.items" :key="index">
        {{item.text}}
        <svg viewBox="0 0 1024 1024" class="demo-component-list-icon"><path fill="#B6C3D2" d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path><path fill="#B6C3D2" d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path></svg>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    data: {
      type: Object,
      default: () => {return {}}
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.demo-component-list{
  .demo-component-list-title{
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  .demo-component-list-group{
    .demo-component-list-group-item{
      cursor: pointer;
      position: relative;
      display: flex;
      margin: 0 0 12px;
      padding-left: 20px;
      color: #323233;
      font-weight: 500;
      font-size: 14px;
      line-height: 40px;
      background: #f7f8fa;
      border-radius: 99px;
      transition: background 0.3s;
      text-decoration: none;
      &:hover {
        background: darken(#f7f8fa, 3%);
      }
      &:active {
        background: darken(#f7f8fa, 6%);
      }
      .demo-component-list-icon{
        position: absolute;
        top: 50%;
        right: 16px;
        width: 16px;
        height: 16px;
        margin-top: -8px;
      }
    }
  }
}
</style>
