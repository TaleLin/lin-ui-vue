import Avatar from './src/avatar/index'
import Button from './src/button/index'
import Icon from './src/icon/index'
import Tag from './src/tag/index'

// eslint-disable-next-line prettier/prettier
const components = [
  Avatar,
  Button,
  Icon,
  Tag
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
  Tag,
}
