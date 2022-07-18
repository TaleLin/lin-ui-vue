import { defineComponent } from 'vue'
import VueIcon from '../../components/Icon'
import BookOutlinedVNode from '../asn/BookOutlined'

const BookOutlined = defineComponent({
  name: 'BookOutlined',
  components: { VueIcon },
  render() {
    return <VueIcon icon={BookOutlinedVNode}></VueIcon>
  },
})
export default BookOutlined
