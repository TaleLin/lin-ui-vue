
import fs from 'fs-extra'
import path from 'path'
import { bigCamel } from '../utils/index'

export function generateEntry() {
  const importComponents: string[] = []
  const components: string[] = []
  const dirs = fs.readdirSync(path.resolve(process.cwd(), 'src'))
  dirs.forEach(dir => {
    const componentName = bigCamel(dir)
    components.push(componentName)
    importComponents.push(`import ${componentName} from './src/${dir}/index'`)
  })
  
  const componentsArr = `
const components = [
  ${components.join('\n')}
]`

  const install = `
function install(app: any) {
  components.forEach(component => {
    app.use(component);
  })
}`

  const entryContent = `${importComponents.join('\n')}
${componentsArr}
${install}

export default {
  install,
  ${components.join(',\n')}
}`

  fs.writeFileSync(path.resolve(process.cwd(), 'index.ts'), entryContent, 'utf-8')

}