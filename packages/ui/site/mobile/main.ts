import { createApp, render, h } from 'vue'
import router from './routes/index'
import App from './App.vue'
import LinUI from '../../index'

const app = createApp(App)

app
  .use(router)
  .use(LinUI)
  .mount('#app')
