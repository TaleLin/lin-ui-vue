import type { App } from 'vue'
import Avatar from './Avatar.vue'

Avatar.install = function (app: App) {
  app.component(Avatar.name, Avatar)
}

export default Avatar
