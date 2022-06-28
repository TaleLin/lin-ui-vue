<template>
  <div class="wrap">
    <div>
      <lin-tag>标签</lin-tag>
      <lin-tag type="primary">标签</lin-tag>
      <lin-tag type="success">标签</lin-tag>
      <lin-tag type="error">标签</lin-tag>
      <lin-tag type="warning">标签</lin-tag>
    </div>
    <div>
      <lin-tag size="large">标签</lin-tag>
      <lin-tag>标签</lin-tag>
      <lin-tag size="small">标签</lin-tag>
      <lin-tag size="mini">标签</lin-tag>
    </div>

    <div>
      <div>dark</div>
      <lin-tag type="primary" effect="dark">标签</lin-tag>
      <lin-tag type="success" effect="dark">标签</lin-tag>
      <lin-tag type="error" effect="dark">标签</lin-tag>
      <lin-tag type="warning" effect="dark">标签</lin-tag>
    </div>

    <div>
      <div>light</div>
      <lin-tag type="primary" effect="light">标签</lin-tag>
      <lin-tag type="success" effect="light">标签</lin-tag>
      <lin-tag type="error" effect="light">标签</lin-tag>
      <lin-tag type="warning" effect="light">标签</lin-tag>
    </div>

    <div>
      <div>plain</div>
      <lin-tag type="primary" effect="plain">标签</lin-tag>
      <lin-tag type="success" effect="plain">标签</lin-tag>
      <lin-tag type="error" effect="plain">标签</lin-tag>
      <lin-tag type="warning" effect="plain">标签</lin-tag>
    </div>

    <div>
      <lin-tag type="primary" effect="plain" size="large" round>round</lin-tag>
      <lin-tag type="success" effect="plain" round>标签</lin-tag>
      <lin-tag type="error" effect="plain" size="small" round>标签</lin-tag>
      <lin-tag type="warning" effect="plain" size="mini" round>标签</lin-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<style lang="less" scoped>
.wrap > div > span {
  margin: 5px;
}
</style>
