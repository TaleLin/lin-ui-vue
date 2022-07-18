import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import AlertTwoToneVNode from '../asn/AlertTwoTone'

const AlertTwoTone = defineComponent({
  name: 'AlertTwoTone',
  components: { VueIcon },
  render() {
    return <VueIcon icon={AlertTwoToneVNode}></VueIcon>
  },
})
export default AlertTwoTone
