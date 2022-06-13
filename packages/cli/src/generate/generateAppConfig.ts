import globSync from '../utils/glob'
import {resolve} from 'path'
import matter from 'gray-matter';
import fs from 'fs-extra'

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
  let routePath = data.routePath
  if(!routePath) {
    const [, _] = docPath.match(/\/docs\/([-\w]+)\.md/) || []
    routePath = `/${_}`
  }
  
  return {
    path: `${routePath.toLowerCase()}`,
    meta: {
      parent: data.parent
    }
  }
}

function getMenuConfig(docPath: string) {
  const docContent = fs.readFileSync(docPath).toString()
  const { data } = matter(docContent)
  return data
}

function generateAppRoutes(baseDoc: string[], componentsDoc: string[]) {
  const baseDocsRoutes = baseDoc.map(
    (docPath) => {
      const {path, meta} = getRouteConfig(docPath)
      return `
  {
    path: '${path}',
    component: () => import('${docPath}'),
    meta: {
      parent: '${meta.parent}'
    }
  }`
    }
  )

  const componentDocsRoutes = componentsDoc.map(
    (docPath) => {
      const {path, meta} = getRouteConfig(docPath)
      return `
  {
    path: '${path}',
    component: () => import('${docPath}'),
    meta: {
      parent: '${meta.parent}'
    }
  }`
    }
  )

  const source = `export default [\
    ${baseDocsRoutes},
    ${componentDocsRoutes}
]`
  const configPath = resolve(process.cwd(), 'site/pc/route.ts')
  fs.outputFileSync(configPath, source)
}

function formatMenuGroup(list: any[]) {
  const menuGroup: Record<string, any[]> = {}
  for(let i = 0; i < list.length; i++) {
    const parent = list[i].parent
    const order = list[i].order
    if(!parent) {
      continue
    }
    if(!menuGroup[parent]) {
      menuGroup[parent] = []
    }
    menuGroup[parent].push(list[i])
  }
  for(let key in menuGroup) {
    menuGroup[key] = menuGroup[key].sort((a, b) => a.order-b.order)
  }
  return menuGroup
}

function generateAppMenu(docs: string[]) {
  const menuList = docs.map(item => {
    const {title, order, routePath, parent} = getMenuConfig(item)
    return {
      title,order,routePath, parent
    }
  })
  const configPath = resolve(process.cwd(), 'site/pc/menu.json')
  fs.writeJSONSync(configPath, formatMenuGroup(menuList), {spaces: 2})
  
}

export async function generateAppConfig() {
  const baseDoc = await getBaseDoc()
  const componentsDoc = await getComponentsDoc()

  generateAppRoutes(baseDoc, componentsDoc)
  generateAppMenu([...baseDoc, ...componentsDoc])

}



let str = '/Users/daipengpeng/works/Lin/lin-ui-vue/packages/ui/site/:::warning/Question:::'

let a = str.match(/\/:::warning\/([-\w]+)\:::/)
console.log(a)