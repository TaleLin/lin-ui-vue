import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import AccountBookTwoToneVNode from '../asn/AccountBookTwoTone'

const AccountBookTwoTone = defineComponent({
  name: 'AccountBookTwoTone',
  components: { VueIcon },
  render() {
    return <VueIcon icon={AccountBookTwoToneVNode}></VueIcon>
  },
})
export default AccountBookTwoTone
