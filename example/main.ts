import Vue from 'vue'
import Lin from '../src/index'
import App from './App.vue'
import router from './router/index'

Vue.use(Lin)

new Vue({
  render(createElement) {
    return createElement(App)
  },
  router
}).$mount('#app')
