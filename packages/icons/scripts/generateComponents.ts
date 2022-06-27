import glob from 'glob'
import path from 'path'
import fs from 'fs-extra'
import { bigCamel } from '../tasks/utils/utils'

const globSync = function (pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(pattern, (error, files) => {
      if (error) {
        reject(error)
      } else {
        resolve(files)
      }
    })
  })
}

const vNodePath = path.resolve(__dirname, '../src/components')

const generateIconDemo = (file: string[]) => {
  const iconList: string[] = []
  const importList: string[] = []

  file.forEach((item) => {
    const [, dirName, fileName] =
      item.match(/\/components\/([-\w]+)\/([-\w]+)\.ts/) || []
    iconList.push(`<${fileName}></${fileName}>`)
    importList.push(
      `import ${fileName} from '../../src/components/${dirName}/${fileName}.jsx'`
    )
  })

  const template = `import { h, defineComponent } from 'vue'
${importList.join('\n')}
const IconDemo = defineComponent({
  render() {
    return <div>
      ${iconList.join('\n      ')}
    </div>
  },
})
export default IconDemo
`
  const demoPath = path.resolve(__dirname, '../example/components')
  fs.emptyDirSync(demoPath)
  fs.outputFileSync(path.resolve(demoPath, 'IconDemo.tsx'), template)
}

const generateEntry = (components: string[]) => {
  const importList: string[] = []
  const componentList: string[] = []
  components.forEach((item) => {
    const name = bigCamel(item)
    importList.push(`import ${name} from './components/${item}'`)
    componentList.push(name)
  })
  const template = `${importList.join('\n')}

// eslint-disable-next-line prettier/prettier
const components = [\n  ${componentList.join(',\n  ')}\n]
const install = function (app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default {
  install,
  ...components,
}
`
  fs.outputFileSync(path.resolve(__dirname, `../src/index.js`), template)
}

const generateComponents = async () => {
  const file = await globSync(`${vNodePath}/**/*.ts`)
  const svgComponents: string[] = []

  file.forEach((item) => {
    const [, dirName, fileName] =
      item.match(/\/components\/([-\w]+)\/([-\w]+)\.ts/) || []

    svgComponents.push(dirName)

    const template = `import { defineComponent } from 'vue'
import VueIcon from '../../../components/Icon'
import ${fileName}VNode from './${fileName}'

const ${fileName} = defineComponent({
  name: '${fileName}',
  components: { VueIcon },
  render() {
    return <VueIcon icon={${fileName}VNode}></VueIcon>
  },
})
export default ${fileName}
`
    const indexTemplate = `import ${fileName} from './${fileName}.jsx'

${fileName}.install = function (app) {
  app.component(${fileName}.name, ${fileName})
}
export default ${fileName}
`

    fs.outputFileSync(
      path.resolve(vNodePath, `${dirName}/${fileName}.jsx`),
      template
    )

    fs.outputFileSync(
      path.resolve(vNodePath, `${dirName}/index.jsx`),
      indexTemplate
    )
  })

  generateIconDemo(file)

  generateEntry(svgComponents)
}

generateComponents()
