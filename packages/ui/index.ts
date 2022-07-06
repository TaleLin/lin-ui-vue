import Avatar from './src/avatar/index'
import Button from './src/button/index'
import ConfigProvider from './src/config-provider/index'
import Icon from './src/icon/index'
import Image from './src/image/index'
import Lazy from './src/lazy/index'
import Tag from './src/tag/index'

// eslint-disable-next-line prettier/prettier
const components = [
  Avatar,
  Button,
  ConfigProvider,
  Icon,
  Image,
  Lazy,
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
  ConfigProvider,
  Icon,
  Image,
  Lazy,
  Tag,
}
