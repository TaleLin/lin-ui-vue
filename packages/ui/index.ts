import Avatar from './src/avatar/index'
import Button from './src/button/index'
import Icon from './src/icon/index'

// eslint-disable-next-line prettier/prettier
const components = [
  Avatar,
  Button,
  Icon
]

function install(app: any) {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install,
  Avatar,
  Button,
  Icon,
}
