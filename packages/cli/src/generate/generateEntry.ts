import fs from 'fs-extra'
import path from 'path'
import { bigCamel } from '../utils/index'
import { isComponentDir } from '../utils/component'

export function generateEntry() {
  const importComponents: string[] = []
  const components: string[] = []
  let dirs = fs.readdirSync(path.resolve(process.cwd(), 'src'))
  dirs = dirs.filter((item) => isComponentDir(item))
  dirs.forEach((dir) => {
    const componentName = bigCamel(dir)
    components.push(componentName)
    importComponents.push(`import ${componentName} from './src/${dir}/index'`)
  })

  const componentsArr = `
// eslint-disable-next-line prettier/prettier
const components = [
  ${components.join(',\n  ')}
]`

  const install = `
function install(app: any) {
  components.forEach((component) => {
    app.use(component)
  })
}`

  const entryContent = `${importComponents.join('\n')}
${componentsArr}
${install}

export default {
  install,
  ${components.join(',\n  ')},
}
`

  fs.writeFileSync(
    path.resolve(process.cwd(), 'index.ts'),
    entryContent,
    'utf-8'
  )
}
