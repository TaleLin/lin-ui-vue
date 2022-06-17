import { defineComponent } from 'vue'
import VueIcon from '../components/Icon'
import BookFilledVNode from '../src/vNode/BookFilled'

const BookFilled = defineComponent({
  components: { VueIcon },
  render() {
    return <VueIcon icon={BookFilledVNode}></VueIcon>
  },
})
export default BookFilled
