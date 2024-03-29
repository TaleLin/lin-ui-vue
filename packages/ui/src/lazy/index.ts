import type { App, Directive, Plugin } from 'vue'
import LazyDirective from './Lazy'

const Lazy: Directive & Plugin = {
  install(app: App) {
    const lazy = new LazyDirective()

    app.directive('lin-lazy', {
      mounted: lazy.mounted.bind(lazy),
      updated: lazy.update.bind(lazy),
      unmounted: lazy.unmount.bind(lazy),
    })
  },
}

export default Lazy
