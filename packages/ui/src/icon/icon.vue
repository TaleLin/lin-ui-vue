<script lang="ts">
import { defineComponent, render } from 'vue'
import { createComponentName, createNamespace } from '../../utils/components'
import { props } from './props'

const { b, computedClasses } = createNamespace('icon')

export default defineComponent({
  name: createComponentName('Button'),
  props,
  setup() {
    return {
      b,
      computedClasses,
    }
  },
})
</script>

<style lang="less">
@import 'icon.less';
</style>
