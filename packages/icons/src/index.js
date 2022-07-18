import AccountBookFilled from './components/AccountBookFilled'
import AccountBookOutlined from './components/AccountBookOutlined'
import AccountBookTwoTone from './components/AccountBookTwoTone'
import AlertFilled from './components/AlertFilled'
import AlertOutlined from './components/AlertOutlined'
import AlertTwoTone from './components/AlertTwoTone'
import ApiFilled from './components/ApiFilled'
import ApiOutlined from './components/ApiOutlined'
import ApiTwoTone from './components/ApiTwoTone'
import BookFilled from './components/BookFilled'
import BookOutlined from './components/BookOutlined'
import BookTwoTone from './components/BookTwoTone'

// eslint-disable-next-line prettier/prettier
const components = [
  AccountBookFilled,
  AccountBookOutlined,
  AccountBookTwoTone,
  AlertFilled,
  AlertOutlined,
  AlertTwoTone,
  ApiFilled,
  ApiOutlined,
  ApiTwoTone,
  BookFilled,
  BookOutlined,
  BookTwoTone,
]
const install = function (app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default {
  install,
  ...components,
}
