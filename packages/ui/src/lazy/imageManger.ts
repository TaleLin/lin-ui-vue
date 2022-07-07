import { render, h } from 'vue'
import { State, ImageManagerOptions, LazyOptions, StateOptions } from './types'

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

  error: StateOptions

  loading: StateOptions

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

    this.renderLoading()
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
      this.state === State.ERROR && this.removeError()
      this.state === State.LOADING && this.removeLoading()
    } else {
      this.src = src
      this.state = State.LOADING
      this.load()
    }
  }

  render(src: StateOptions) {
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
      const { component: errorComponent, props } = this.error
      render(
        h('div', { class: 'lin-lazy-error' }, h(errorComponent, props)),
        this.el.parentElement as HTMLElement
      )
      this.el.style.display = 'none'
    }
  }

  renderLoading() {
    if (typeof this.loading === 'string') {
      this.render(this.loading)
    } else {
      const { component: errorComponent, props } = this.loading
      render(
        h('div', { class: 'lin-lazy-loading' }, h(errorComponent, props)),
        this.el.parentElement as HTMLElement
      )
      this.el.style.display = 'none'
    }
  }

  removeLoading() {
    const children = this.el.parentElement?.children
    if (!children) return
    let loadingEl = null
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === 'lin-lazy-loading') {
        loadingEl = children[i]
      }
    }
    loadingEl && loadingEl.remove()
  }

  removeError() {
    const children = this.el.parentElement?.children
    if (!children) return
    let errorEl = null
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === 'lin-lazy-error') {
        errorEl = children[i]
      }
    }
    errorEl && errorEl.remove()
  }

  async loadImage() {
    try {
      await loadImage(this.src)
      this.render(this.src)
      this.state = State.LOADED
      this.el._lazy.state = State.LOADED
      this.removeError()
      this.el.style.display = 'block'
      // this.removeLoading()
    } catch (error) {
      this.state = State.ERROR
      this.el._lazy.state = State.ERROR
      this.renderError()
    }
  }
}
