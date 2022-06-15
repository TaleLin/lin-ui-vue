import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '../route'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: import('../components/Index.vue'),
    },
    ...routes,
  ],
})

export default router
