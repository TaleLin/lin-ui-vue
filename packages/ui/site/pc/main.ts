import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import './style/hljs.scss'
import './style/index.scss'

const app = createApp(App)

app.use(router).mount('#app')
