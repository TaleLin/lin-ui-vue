import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '../route'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: import('../components/AppLayout.vue'),
      children: [
        ...routes,
      ]
    }
  ],
})

export default router