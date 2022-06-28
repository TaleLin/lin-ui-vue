<template>
  <div class="wrap">
    <lin-button>按钮</lin-button>
    <lin-button type="primary">按钮</lin-button>
    <lin-button type="success">按钮</lin-button>
    <lin-button type="error">按钮</lin-button>
    <lin-button type="warning">按钮</lin-button>

    <div>
      <lin-button plain>按钮</lin-button>
      <lin-button type="primary" plain>按钮</lin-button>
      <lin-button type="success" plain>按钮</lin-button>
      <lin-button type="error" plain>按钮</lin-button>
      <lin-button type="warning" plain>按钮</lin-button>
    </div>

    <div>
      <lin-button text>按钮</lin-button>
      <lin-button type="primary" text>按钮</lin-button>
      <lin-button type="success" text>按钮</lin-button>
      <lin-button type="error" text>按钮</lin-button>
      <lin-button type="warning" text>按钮</lin-button>
    </div>

    <div>
      <lin-button text disabled>按钮</lin-button>
      <lin-button type="primary" text disabled>按钮</lin-button>
      <lin-button type="success" text disabled>按钮</lin-button>
      <lin-button type="error" text disabled>按钮</lin-button>
      <lin-button type="warning" text disabled>按钮</lin-button>
    </div>

    <div>
      <lin-button plain disabled>按钮</lin-button>
      <lin-button type="primary" plain disabled>按钮</lin-button>
      <lin-button type="success" plain disabled>按钮</lin-button>
      <lin-button type="error" plain disabled>按钮</lin-button>
      <lin-button type="warning" plain disabled>按钮</lin-button>
    </div>

    <div>
      <lin-button disabled>按钮</lin-button>
      <lin-button type="primary" disabled>按钮</lin-button>
      <lin-button type="success" disabled>按钮</lin-button>
      <lin-button type="error" disabled>按钮</lin-button>
      <lin-button type="warning" disabled>按钮</lin-button>
    </div>

    <lin-button size="mini">按钮</lin-button>
    <lin-button size="small">按钮</lin-button>
    <lin-button size="large">按钮</lin-button>

    <div>
      <lin-button size="mini" shape="circle">
        <AlertFilled />
      </lin-button>
      <lin-button size="small" shape="circle">
        <AlertFilled />
      </lin-button>
      <lin-button shape="circle">
        <AlertFilled />
      </lin-button>
      <lin-button size="large" shape="circle" type="primary">
        <AlertFilled />
      </lin-button>
    </div>

    <div>
      <lin-button size="mini" shape="round"> 按钮 </lin-button>
      <lin-button size="small" shape="round"> 按钮 </lin-button>
      <lin-button shape="round"> 按钮 </lin-button>
      <lin-button size="large" shape="round" type="primary"> 按钮 </lin-button>
    </div>

    <div>
      <lin-button size="mini" shape="semicircle"> 按钮 </lin-button>
      <lin-button size="small" shape="semicircle"> 按钮 </lin-button>
      <lin-button shape="semicircle"> 按钮 </lin-button>
      <lin-button size="large" shape="semicircle" type="primary">
        按钮
      </lin-button>
    </div>

    <div>
      <lin-button block size="large" shape="semicircle">按钮</lin-button>
      <lin-button block size="large" shape="round" type="primary" disabled>
        按钮
      </lin-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<style lang="less" scoped>
.wrap {
  button {
    margin: 10px;
  }
}
</style>
