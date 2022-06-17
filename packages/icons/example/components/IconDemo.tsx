import { h, defineComponent } from 'vue'
import AccountBookFilled from '../../src/components/account-book-filled/AccountBookFilled.jsx'
import AlertFilled from '../../src/components/alert-filled/AlertFilled.jsx'
import BookFilled from '../../src/components/book-filled/BookFilled.jsx'
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
