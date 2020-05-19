<template>
  <div class="lin-page" :class="type">
    <header class="header">
      <h1>{{title}}</h1>
      <svg @click="back" viewBox="0 0 1000 1000" class="page-back"><path fill="#969799" fill-rule="evenodd" d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"></path></svg>
    </header>
    <div class="wrapper">
      <main class="content" >
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="less">
  .lin-page{
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    .header{
      position: relative;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background-color: #edf0f4;
      box-shadow: 0 1px 6px #ccc;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      z-index: 5;
      h1{
        font-size: 16px;
        font-weight: 700;
      }
      .page-back{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    .wrapper{
      height: calc(100% - 44px);
      overflow-x: hidden;
      overflow-y: auto;
      .content{
        padding: 10px;
      }
    }
  }
</style>