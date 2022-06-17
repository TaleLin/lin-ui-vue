import { h, defineComponent } from 'vue'
import AccountBookFilled from '../../icons/AccountBookFilled'
import AlertFilled from '../../icons/AlertFilled'
import BookFilled from '../../icons/BookFilled'
const IconDemo = defineComponent({
  render() {
    return <div>
      <AccountBookFilled></AccountBookFilled>
      <AlertFilled></AlertFilled>
      <BookFilled></BookFilled>
    </div>
  },
})
export default IconDemo
