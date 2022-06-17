import { createApp } from 'vue'
import LinIcon from '@lin-ui-vue/icons'
import router from './routes/index'
import App from './App.vue'
import LinUI from '../../index'
import '../../src/style/index.less'

const app = createApp(App)

app.use(router).use(LinUI).use(LinIcon).mount('#app')
