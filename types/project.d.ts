declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module 'fastclick'
declare const __VERSION__: string

interface Window {
  Vue?: typeof Vue,
  detachFastclick?: any
}