import type { DirectiveBinding, Component } from 'vue'
import { LazyOptions, State, GlobalLazyOptions } from './types'
import ImageManager, { loadImage } from './imageManger'
import { DEFAULT_LOADING, DEFAULT_ERROR } from './constant'

class Lazy {
  loading: NonNullable<GlobalLazyOptions['loading']> = ''

  error: NonNullable<GlobalLazyOptions['error']> = ''

  cache: Set<string> = new Set([])

  managerQueue: ImageManager[] = []

  observer?: IntersectionObserver

  constructor(options?: GlobalLazyOptions) {
    Promise.all([
      this.initGlobalLoading(options?.loading || DEFAULT_LOADING),
      this.initGlobalError(options?.error || DEFAULT_ERROR),
    ]).then(() => {
      this.managerQueue = []
      this.cache = new Set([])
      this.init()
    })
  }

  async initGlobalLoading(loading: string | Component) {
    if (typeof loading === 'string') {
      this.loading = (await this.checkImage(loading)) || DEFAULT_LOADING
    } else {
      this.loading = loading
    }
  }

  async initGlobalError(error: string | Component) {
    if (typeof error === 'string') {
      this.error = (await this.checkImage(error)) || DEFAULT_ERROR
    } else {
      this.error = error
    }
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const manager = this.managerQueue.find(
              (manager) => manager.el === entry.target
            )
            if (manager) {
              if (manager.state === State.LOADED) {
                this.removeManager(manager)
                return
              }
              manager.load()
            }
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: 0,
      }
    )
  }

  async mounted(
    el: HTMLElement,
    binding: DirectiveBinding<string | LazyOptions>
  ) {
    const arg = binding.arg === undefined ? 'image' : 'background'
    const { src, error, loading } = await this.formatValue(binding.value)
    const manager = new ImageManager({
      el,
      src,
      arg,
      error,
      loading,
    })
    this.managerQueue.push(manager)
    this.observer?.observe(el)
  }

  async update(
    el: HTMLElement,
    binding: DirectiveBinding<string | LazyOptions>
  ) {
    const { src, error, loading } = await this.formatValue(binding.value)
    const manager = this.managerQueue.find((manager) => {
      return manager.el === el
    })
    if (manager) {
      manager.update({
        src,
        error,
        loading,
      })
    }
  }

  unmount(el: HTMLElement): void {
    const manager = this.managerQueue.find((manager) => {
      return manager.el === el
    })
    if (manager) {
      this.removeManager(manager)
    }
  }

  removeManager(manger: ImageManager) {
    const index = this.managerQueue.indexOf(manger)
    if (index > -1) {
      this.managerQueue.slice(index, 1)
    }
    this.observer?.unobserve(manger.el)
  }

  async formatValue(value: string | LazyOptions) {
    if (typeof value === 'string') {
      value = {
        src: value,
        error: this.error,
        loading: this.loading,
      }
    }

    let { error = this.error, loading = this.loading } = value
    if (typeof error === 'string') {
      error = (await this.checkImage(error)) || this.error
    }

    if (typeof loading === 'string') {
      loading = (await this.checkImage(loading)) || this.loading
    }

    return {
      src: value.src,
      loading,
      error,
    }
  }

  async checkImage(src: string) {
    if (this.cache.has(src)) {
      return src
    }
    try {
      await loadImage(src)
      this.cache.add(src)
      return src
    } catch (error) {
      return null
    }
  }
}

export default Lazy
