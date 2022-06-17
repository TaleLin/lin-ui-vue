import { resolve } from 'path'
import matter from 'gray-matter'
import fs from 'fs-extra'
import globSync from '../utils/glob'

const baseDoc = resolve(process.cwd(), 'site/docs')
const componentsDoc = resolve(process.cwd(), 'src')

export async function getBaseDoc() {
  const files = await globSync(`${baseDoc}/*.md`)

  return files
}

export async function getComponentsDoc() {
  const files = await globSync(`${componentsDoc}/**/*.md`)

  return files
}

function getRouteConfig(docPath: string) {
  const docContent = fs.readFileSync(docPath).toString()
  const { data } = matter(docContent)
  let { routePath } = data
  if (!routePath) {
    const [, _] = docPath.match(/\/docs\/([-\w]+)\.md/) || []
    routePath = `/${_}`
  }

  return {
    path: `${routePath.toLowerCase()}`,
    meta: {
      parent: data.parent,
    },
  }
}

function getMenuConfig(docPath: string) {
  const docContent = fs.readFileSync(docPath).toString()
  const { data } = matter(docContent)
  return data
}

function generateAppRoutes(base: string[], components: string[]) {
  const baseDocsRoutes = base.map((docPath) => {
    const { path, meta } = getRouteConfig(docPath)
    return `
  {
    path: '${path}',
    // eslint-disable-next-line prettier/prettier
    component: () => import('${docPath}'),
    meta: {
      parent: '${meta.parent}',
    },
  }`
  })

  const componentDocsRoutes = components.map((docPath) => {
    const { path, meta } = getRouteConfig(docPath)
    return `
  {
    path: '${path}',
    // eslint-disable-next-line prettier/prettier
    component: () => import('${docPath}'),
    meta: {
      parent: '${meta.parent}',
    },
  }`
  })

  const source = `export default [${baseDocsRoutes},${componentDocsRoutes},
]
`
  const configPath = resolve(process.cwd(), 'site/pc/route.ts')
  fs.outputFileSync(configPath, source)
}

function generateMobileRoutes() {
  const dirs = fs.readdirSync(resolve(process.cwd(), 'src'))

  const componentDocsRoutes = dirs.map((dir) => {
    const path = resolve(process.cwd(), `src/${dir}/example/index.vue`)
    return `{
    path: '/${dir}',
    // eslint-disable-next-line prettier/prettier
    component: () => import('${path}')
  }`
  })

  const source = `export default [
  ${componentDocsRoutes.join(',\n  ')},
]
`
  const configPath = resolve(process.cwd(), 'site/mobile/route.ts')
  fs.outputFileSync(configPath, source)
}

function formatMenuGroup(list: any[]) {
  const menuGroup: Record<string, any[]> = {}
  for (let i = 0; i < list.length; i++) {
    const { parent } = list[i]
    if (parent) {
      if (!menuGroup[parent]) {
        menuGroup[parent] = []
      }
      menuGroup[parent].push(list[i])
    }
  }
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in menuGroup) {
    menuGroup[key] = menuGroup[key].sort((a, b) => a.order - b.order)
  }
  return menuGroup
}

function generateAppMenu(docs: string[]) {
  const menuList = docs.map((item) => {
    const { title, order, routePath, parent } = getMenuConfig(item)
    return {
      title,
      order,
      routePath,
      parent,
    }
  })
  const configPath = resolve(process.cwd(), 'site/pc/menu.json')
  fs.writeJSONSync(configPath, formatMenuGroup(menuList), { spaces: 2 })
}

export async function generateAppConfig() {
  const baseDocFile = await getBaseDoc()
  const componentsDocFile = await getComponentsDoc()

  generateAppRoutes(baseDocFile, componentsDocFile)
  generateAppMenu([...baseDocFile, ...componentsDocFile])
  generateMobileRoutes()
}
