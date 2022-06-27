import type { App } from 'vue'
import Tag from './Tag.vue'

Tag.install = function (app: App) {
  app.component(Tag.name, Tag)
}

export default Tag
