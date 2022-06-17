import { defineComponent } from 'vue'
import VueIcon from '../components/Icon'
import AlertFilledVNode from '../src/vNode/AlertFilled'

const AlertFilled = defineComponent({
  components: { VueIcon },
  render() {
    return <VueIcon icon={AlertFilledVNode}></VueIcon>
  },
})
export default AlertFilled
