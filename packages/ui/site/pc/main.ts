import { createApp, render, h } from 'vue'
import App from './App.vue'
import router from './routes/index'
import './style/hljs.scss'
import './style/index.scss'
import '../../src/theme/index.less'

const app = createApp(App)

app.use(router).mount('#app')
