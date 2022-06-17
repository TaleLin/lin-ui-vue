export default [
  {
    path: '/event',
    // eslint-disable-next-line prettier/prettier
    component: () => import('/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/docs/Event.md'),
    meta: {
      parent: '入门',
    },
  },
  {
    path: '/question',
    // eslint-disable-next-line prettier/prettier
    component: () => import('/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/docs/Question.md'),
    meta: {
      parent: '入门',
    },
  },
  {
    path: '/start',
    // eslint-disable-next-line prettier/prettier
    component: () => import('/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/docs/Start.md'),
    meta: {
      parent: '入门',
    },
  },
  {
    path: '/button',
    // eslint-disable-next-line prettier/prettier
    component: () => import('/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/src/button/docs/README.md'),
    meta: {
      parent: '基础',
    },
  },
  {
    path: '/button',
    // eslint-disable-next-line prettier/prettier
    component: () => import('/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/src/icon/docs/README.md'),
    meta: {
      parent: '基础',
    },
  },
]
