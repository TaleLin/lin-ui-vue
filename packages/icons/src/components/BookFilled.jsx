import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import BookFilledVNode from '../asn/BookFilled'

const BookFilled = defineComponent({
  name: 'BookFilled',
  components: { VueIcon },
  render() {
    return <VueIcon icon={BookFilledVNode}></VueIcon>
  },
})
export default BookFilled
