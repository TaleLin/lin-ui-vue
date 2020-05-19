import {LANG_KEY} from '../config/index'
const config = require('../../../config/index')

export function setItem(k: any, v: any) {
  window.localStorage.setItem(k, v)
}

export function getItem(k: any) {
  window.localStorage.getItem(k)
}

export function getCurrentLang() {
  const hash = window.location.hash
  const hashZhLang = hash.indexOf('/zh-') >= 0 ? 'zh-CN' : hash.indexOf('/en-') >= 0 ? 'en-US' : ''
  const lang = hashZhLang || getItem(LANG_KEY) || 'en-US'
  let defaultLang = 'en-US'
  if (lang.indexOf('zh-') >= 0) {
    defaultLang = 'zh-CN'
  }
  setItem(LANG_KEY, defaultLang)
  return defaultLang
}

const baseUrl = process.env.NODE_ENV === 'production' ? '' : `http://${window.location.hostname}:${config.dev.port}/#/`

export {
  baseUrl
}