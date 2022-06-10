import { createApp, render, h } from 'vue'
import App from './App.vue'

const app = createApp(App)

console.log(app)

// debugger

app.mount('#app')

// render(h('span', null, h('App', 111)), document.getElementById('app') as HTMLElement)
