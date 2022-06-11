import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: import('../components/AppLayout.vue'),
      children: [
        {
          path: '/button',
          component: import('../../../src/button/docs/README.md'),
          children: []
        }
      ]
    }
  ],
})

export default router