import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import BookTwoToneVNode from '../asn/BookTwoTone'

const BookTwoTone = defineComponent({
  name: 'BookTwoTone',
  components: { VueIcon },
  render() {
    return <VueIcon icon={BookTwoToneVNode}></VueIcon>
  },
})
export default BookTwoTone
