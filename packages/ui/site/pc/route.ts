export default [
  {
    path: '/event',
    component: () =>
      import(
        '/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/docs/Event.md'
      ),
    meta: {
      parent: '入门',
    },
  },
  {
    path: '/question',
    component: () =>
      import(
        '/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/docs/Question.md'
      ),
    meta: {
      parent: '入门',
    },
  },
  {
    path: '/start',
    component: () =>
      import(
        '/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/docs/Start.md'
      ),
    meta: {
      parent: '入门',
    },
  },

  {
    path: '/button',
    component: () =>
      import(
        '/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/src/button/docs/README.md'
      ),
    meta: {
      parent: '基础',
    },
  },
]
