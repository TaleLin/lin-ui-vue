// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import './common/styles/index.less'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
