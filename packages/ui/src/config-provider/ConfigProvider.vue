<script lang="ts">
import { defineComponent, renderSlot, provide } from 'vue'
import { createComponentName } from '../utils/components'
import { props as propsDefine } from './props'
import { provideGlobalConfig } from './provideGlobalConfig'

export default defineComponent({
  name: createComponentName('ConfigProvider'),
  props: propsDefine,
  setup(props, { slots }) {
    provideGlobalConfig(props)
    return () => {
      return renderSlot(slots, 'default')
    }
  },
})
</script>
