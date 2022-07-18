import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import ApiOutlinedVNode from '../asn/ApiOutlined'

const ApiOutlined = defineComponent({
  name: 'ApiOutlined',
  components: { VueIcon },
  render() {
    return <VueIcon icon={ApiOutlinedVNode}></VueIcon>
  },
})
export default ApiOutlined
