import AccountBookFilled from './components/account-book-filled'
import AlertFilled from './components/alert-filled'
import BookFilled from './components/book-filled'

// eslint-disable-next-line prettier/prettier
const components = [
  AccountBookFilled,
  AlertFilled,
  BookFilled
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
