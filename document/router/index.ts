import Vue from 'vue'
import Router from 'vue-router'
import { getCurrentLang } from '../common/js/utils'
import routes from './routes'
import EnUSHome from '../components/home/en-US.vue'
import ZhCNHome from '../components/home/zh-CN.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: function () {
        const defaultLang = getCurrentLang()
        return `/${defaultLang}`
      }
    },
    {
      path: '/en-US',
      component: EnUSHome,
      children: (routes as any)['en-US']
    },
    {
      path: '/zh-CN',
      component: ZhCNHome,
      children: (routes as any)['zh-CN']
    }
  ]
})
