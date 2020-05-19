import { Button } from './modules'
import { processComponentName } from './common/helpers/utils'

const components: any[] = [
  // basic
  Button,
]

const install: any = function(Vue: any) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component: any) => {
    Component.install(Vue)
  })
}

const Lin:any = {
  /* eslint-disable no-undef */
  version: '0.0.1',
  install
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Lin[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Lin
console.log(1112)