import glob from 'glob'
import path from 'path'
import fs from 'fs-extra'

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

const vNodePath = path.resolve(__dirname, '../src/vNode')

const iconPath = path.resolve(__dirname, '../icons')

// import { h, defineComponent } from 'vue'
// import Alert from '../../icons/AlertFilled'

// const Icon = defineComponent({
//   render() {
//     return <Alert></Alert>
//   },
// })

// export default Icon

const generateIconDemo = (file: string[]) => {
  const iconList: string[] = []
  const importList: string[] = []

  file.forEach((item) => {
    const [, _] = item.match(/\/vNode\/([-\w]+)\.ts/) || []
    iconList.push(`<${_}></${_}>`)
    importList.push(`import ${_} from '../../icons/${_}'`)
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

const generateComponents = async () => {
  const file = await globSync(`${vNodePath}/*.ts`)
  fs.ensureDirSync(iconPath)
  fs.emptyDirSync(iconPath)
  file.forEach((item) => {
    const [, _] = item.match(/\/vNode\/([-\w]+)\.ts/) || []
    const template = `import { defineComponent } from 'vue'
import VueIcon from '../components/Icon'
import ${_}VNode from '../src/vNode/${_}'

const ${_} = defineComponent({
  components: { VueIcon },
  render() {
    return <VueIcon icon={${_}VNode}></VueIcon>
  },
})
export default ${_}
`
    fs.outputFileSync(path.resolve(iconPath, `${_}.jsx`), template)
  })

  generateIconDemo(file)
}

generateComponents()
