import { createApp, render, h } from 'vue'
import App from './App.vue'
import router from './routes/index'
const app = createApp(App)

app
  .use(router)
  .mount('#app')
