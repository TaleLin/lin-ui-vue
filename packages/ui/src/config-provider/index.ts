import type { App } from 'vue'
import ConfigProvider from './ConfigProvider.vue'

ConfigProvider.install = function (app: App) {
  app.component(ConfigProvider.name, ConfigProvider)
}

export default ConfigProvider
