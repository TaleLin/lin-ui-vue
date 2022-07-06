import { render, h } from 'vue'
import type { Component } from 'vue'
import { State, ImageManagerOptions } from './types'

export type LazyHTMLElement = HTMLElement & { _lazy: { state: State } }

export function loadImage(src: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image()
    image.src = src

    image.onload = () => {
      resolve()
    }
    image.onerror = (e) => {
      reject(e)
    }
  })
}

export default class ImageManger {
  el: LazyHTMLElement

  src: string

  error: string | Component

  loading: string | Component

  state: State

  constructor(options: ImageManagerOptions) {
    const el = options.el as LazyHTMLElement
    el._lazy = { state: State.LOADING }
    this.el = el
    this.src = options.src
    this.error = options.error
    this.loading = options.loading
    this.state = State.LOADING

    this.render(this.loading)
  }

  load() {
    if (this.state === State.LOADING) {
      this.loadImage()
    }
  }

  render(src: string | Component) {
    if (typeof src === 'string') {
      this.el.setAttribute('src', src)
    }
  }

  renderError() {
    if (typeof this.error === 'string') {
      this.render(this.error)
    } else {
      // render(h('div', 'sss'), this.el.parentElement as HTMLElement)
      // this.el.style.display = 'none'
    }
  }

  async loadImage() {
    try {
      await loadImage(this.src)
      this.render(this.src)
      this.state = State.LOADED
      this.el._lazy.state = State.LOADED
    } catch (error) {
      this.state = State.ERROR
      this.el._lazy.state = State.ERROR
      this.renderError()
    }
  }
}
