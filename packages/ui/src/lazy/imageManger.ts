import { render, h } from 'vue'
import type { Component, DefineComponent } from 'vue'
import { State, ImageManagerOptions, LazyOptions } from './types'

export type LazyHTMLElement = HTMLElement & { _lazy: ImageManger }

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

  arg: 'background' | 'image'

  error: string | Component

  loading: string | Component

  state: State

  constructor(options: ImageManagerOptions) {
    const el = options.el as LazyHTMLElement
    el._lazy = this
    this.el = el
    this.src = options.src
    this.error = options.error
    this.loading = options.loading
    this.state = State.LOADING
    this.arg = options.arg || 'image'

    this.render(this.loading)
  }

  load() {
    if (this.state === State.LOADING) {
      this.loadImage()
    }
  }

  reload() {
    this.state = State.LOADING
    this.load()
  }

  update({ error, loading, src }: Required<LazyOptions>) {
    this.error = error
    this.loading = loading
    if (src === this.src) {
      this.state === State.ERROR && this.render(error)
      this.state === State.LOADING && this.render(loading)
    } else {
      this.src = src
      this.state = State.LOADING
      this.load()
    }
  }

  render(src: string | Component) {
    if (typeof src === 'string') {
      this.arg === 'image' && this.el.setAttribute('src', src)
      if (this.arg === 'background') {
        this.el.style.backgroundImage = `url(${src})`
      }
    }
  }

  renderError() {
    if (typeof this.error === 'string') {
      this.render(this.error)
    } else {
      // console.log(this.error.render())
      render(h(this.error), this.el.parentElement as HTMLElement)
      // render(h('div', 'sss'), this.el.parentElement as HTMLElement)
      this.el.style.display = 'none'
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
