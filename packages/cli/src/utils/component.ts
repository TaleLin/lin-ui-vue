import {
  pathExistsSync,
  ensureDirSync,
  readdirSync,
  writeJSONSync,
  readJSONSync,
} from 'fs-extra'
import { resolve } from 'path'
import { UI_CONFIG_DIR, UI_SRC_DIR } from '../constant'

const componentsPath = resolve(UI_CONFIG_DIR, 'components.json')

export const ensureUIConfig = () => {
  if (!pathExistsSync(UI_CONFIG_DIR)) {
    ensureDirSync(UI_CONFIG_DIR)
  }
  if (!pathExistsSync(componentsPath)) {
    cacheComponentList()
  }
}

export const cacheComponentList = () => {
  const filterDirs = ['theme', 'utils']
  const list = readdirSync(UI_SRC_DIR).filter(
    (item) => !filterDirs.includes(item)
  )
  writeJSONSync(componentsPath, list, { spaces: 2 })
}

export const getComponentList = () => {
  const list = readJSONSync(componentsPath)
  return list
}

export const isComponentDir = (dir: string) => {
  return getComponentList().includes(dir)
}

export const addComponent = (name: string) => {
  ensureUIConfig()
  if (isComponentDir(name)) {
    return
  }
  const list = getComponentList()
  writeJSONSync(componentsPath, [...list, name], { spaces: 2 })
}
