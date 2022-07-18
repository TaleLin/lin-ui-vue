import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import AccountBookOutlinedVNode from '../asn/AccountBookOutlined'

const AccountBookOutlined = defineComponent({
  name: 'AccountBookOutlined',
  components: { VueIcon },
  render() {
    return <VueIcon icon={AccountBookOutlinedVNode}></VueIcon>
  },
})
export default AccountBookOutlined
