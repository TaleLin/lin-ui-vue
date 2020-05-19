<template>
  <ComponentPage title="Button">
    <div slot="content">
      <div class="demo-type-wrapper">
        <div>按钮类型</div>
        <lin-button type="default">默认按钮</lin-button>
        <lin-button type="primary">主要按钮</lin-button>
        <lin-button type="success">成功按钮</lin-button>
        <lin-button type="info">信息按钮</lin-button>
        <lin-button type="warning">警告按钮</lin-button>
        <lin-button type="danger">危险按钮</lin-button>
      </div>
      <div class="demo-type-wrapper">
        <div>朴素按钮</div>
        <lin-button type="default" plain>默认按钮</lin-button>
        <lin-button type="primary" plain>主要按钮</lin-button>
        <lin-button type="success" plain>成功按钮</lin-button>
        <lin-button type="info" plain>信息按钮</lin-button>
        <lin-button type="warning" plain>警告按钮</lin-button>
        <lin-button type="danger" plain>危险按钮</lin-button>
      </div>

      <div class="demo-type-wrapper">
        <div>禁用按钮</div>
        <lin-button type="default" disabled>默认按钮</lin-button>
        <lin-button type="primary" plain disabled>主要按钮</lin-button>
        <lin-button type="success" disabled>成功按钮</lin-button>
        <lin-button type="info" disabled>信息按钮</lin-button>
        <lin-button type="warning" disabled>警告按钮</lin-button>
        <lin-button type="danger" disabled>危险按钮</lin-button>
      </div>

      <div class="demo-type-wrapper">
        <div>按钮大小</div>
        <lin-button type="primary" size="mini">mini</lin-button>
        <lin-button type="primary" size="medium">medium</lin-button>
        <lin-button type="primary" size="large">large</lin-button>
        <lin-button type="primary" size="long">long</lin-button>
      </div>

    </div>
  </ComponentPage>
</template>

<script>
import ComponentPage from '../../components/component-page'
export default {
  name: '',
  components: {
    ComponentPage
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .demo-type-wrapper{
    button{
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
</style>
