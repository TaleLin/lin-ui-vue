declare module 'vue' {
  export interface GlobalComponents {
    LinButton: typeof import('@lin-ui-vue/ui')['_ButtonComponent']
  }
}

export {}
