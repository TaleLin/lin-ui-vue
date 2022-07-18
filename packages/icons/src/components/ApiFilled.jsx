import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import ApiFilledVNode from '../asn/ApiFilled'

const ApiFilled = defineComponent({
  name: 'ApiFilled',
  components: { VueIcon },
  render() {
    return <VueIcon icon={ApiFilledVNode}></VueIcon>
  },
})
export default ApiFilled
