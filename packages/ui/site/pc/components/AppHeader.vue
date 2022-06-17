<template>
  <div class="app-header">
    <a href="/" class="app-icon">
      <img src="../assets/images/left-logo.png" />
    </a>
    <div class="header-link">
      <a>更新日志</a>
      <a>Github</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  setup() {},
})
</script>
<style lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  z-index: 10;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .app-icon {
    width: 200px;
    img {
      display: block;
      width: 100%;
    }
  }
  .header-link {
    display: flex;
    a {
      margin: 0 10px;
      cursor: pointer;
      &:hover {
        color: #3683d6;
      }
    }
  }
}
</style>
