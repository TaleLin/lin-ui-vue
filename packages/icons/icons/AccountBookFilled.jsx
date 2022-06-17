import { defineComponent } from 'vue'
import VueIcon from '../components/Icon'
import AccountBookFilledVNode from '../src/vNode/AccountBookFilled'

const AccountBookFilled = defineComponent({
  components: { VueIcon },
  render() {
    return <VueIcon icon={AccountBookFilledVNode}></VueIcon>
  },
})
export default AccountBookFilled
