import { h, defineComponent } from 'vue'
import AccountBookFilled from '../../src/components/AccountBookFilled.jsx'
import AccountBookOutlined from '../../src/components/AccountBookOutlined.jsx'
import AccountBookTwoTone from '../../src/components/AccountBookTwoTone.jsx'
import AlertFilled from '../../src/components/AlertFilled.jsx'
import AlertOutlined from '../../src/components/AlertOutlined.jsx'
import AlertTwoTone from '../../src/components/AlertTwoTone.jsx'
import ApiFilled from '../../src/components/ApiFilled.jsx'
import ApiOutlined from '../../src/components/ApiOutlined.jsx'
import ApiTwoTone from '../../src/components/ApiTwoTone.jsx'
import BookFilled from '../../src/components/BookFilled.jsx'
import BookOutlined from '../../src/components/BookOutlined.jsx'
import BookTwoTone from '../../src/components/BookTwoTone.jsx'

const IconDemo = defineComponent({
  render() {
    return (
      <div>
        <AccountBookFilled></AccountBookFilled>
        <AccountBookOutlined></AccountBookOutlined>
        <AccountBookTwoTone></AccountBookTwoTone>
        <AlertFilled></AlertFilled>
        <AlertOutlined></AlertOutlined>
        <AlertTwoTone></AlertTwoTone>
        <ApiFilled></ApiFilled>
        <ApiOutlined></ApiOutlined>
        <ApiTwoTone></ApiTwoTone>
        <BookFilled></BookFilled>
        <BookOutlined></BookOutlined>
        <BookTwoTone></BookTwoTone>
      </div>
    )
  },
})
export default IconDemo
