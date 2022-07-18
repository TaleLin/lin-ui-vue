import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import AlertFilledVNode from '../asn/AlertFilled'

const AlertFilled = defineComponent({
  name: 'AlertFilled',
  components: { VueIcon },
  render() {
    return <VueIcon icon={AlertFilledVNode}></VueIcon>
  },
})
export default AlertFilled
