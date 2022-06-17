import { defineComponent } from 'vue'
import VueIcon from '../../../components/Icon'
import AccountBookFilledVNode from './AccountBookFilled'

const AccountBookFilled = defineComponent({
  name: 'AccountBookFilled',
  components: { VueIcon },
  render() {
    return <VueIcon icon={AccountBookFilledVNode}></VueIcon>
  },
})
export default AccountBookFilled
