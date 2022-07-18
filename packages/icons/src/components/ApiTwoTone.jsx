import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import ApiTwoToneVNode from '../asn/ApiTwoTone'

const ApiTwoTone = defineComponent({
  name: 'ApiTwoTone',
  components: { VueIcon },
  render() {
    return <VueIcon icon={ApiTwoToneVNode}></VueIcon>
  },
})
export default ApiTwoTone
