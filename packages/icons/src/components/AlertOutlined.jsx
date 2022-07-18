import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import AlertOutlinedVNode from '../asn/AlertOutlined'

const AlertOutlined = defineComponent({
  name: 'AlertOutlined',
  components: { VueIcon },
  render() {
    return <VueIcon icon={AlertOutlinedVNode}></VueIcon>
  },
})
export default AlertOutlined
