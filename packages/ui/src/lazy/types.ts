import type { DefineComponent } from 'vue'

export type StateOptions =
  | string
  | {
      component: DefineComponent
      props: Record<string, any>
    }

export interface GlobalLazyOptions {
  error?: StateOptions
  loading?: StateOptions
}

export interface LazyOptions extends GlobalLazyOptions {
  src: string
}

export enum State {
  LOADING,
  LOADED,
  ERROR,
}

export interface ImageManagerOptions extends Required<LazyOptions> {
  el: HTMLElement
  arg?: 'background' | 'image'
}
