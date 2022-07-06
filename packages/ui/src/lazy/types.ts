import type { Component } from 'vue'

export interface GlobalLazyOptions {
  error?: string | Component
  loading?: string | Component
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
}
