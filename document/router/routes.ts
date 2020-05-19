import menus from '../common/config/menu'
const routeMap: any = {}

Object.keys(menus).forEach(lang => {
  const docsChildrenRoute: any[] = []
  const docsRoute = {
    path: 'docs',
    redirect: './docs/introduction',
    component: () => import(`../components/docs/${lang}.vue`),
    children: docsChildrenRoute
  }

  routeMap[lang] = [docsRoute]
  const groups = (menus as any)[lang]

  Object.keys(groups).forEach((name) => {
    getSubList(groups[name]).forEach((key) => {
      docsChildrenRoute.push({
        path: key,
        component: () => import(`../components/docs/${lang}/${key}.md`)
      })
    })
  })
})

function getSubList (group: any) {
  let subList: any[] = []
  Object.keys(group.subList).forEach((key) => {
    const item = group.subList[key]
    if (typeof item === 'string') {
      subList.push(key)
    } else {
      subList = subList.concat(getSubList(item))
    }
  })
  return subList
}

export default routeMap