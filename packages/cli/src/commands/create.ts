import ejs from 'ejs'
import fs from 'fs-extra'
import { resolve } from 'path'
import { bigCamel } from '../utils'

const componentVuePath = resolve(
  __dirname,
  '../../template/component/component.ejs'
)

export function create(name: string) {
  console.log(name)
  const res = fs.readFileSync(componentVuePath)
  const content = ejs.render(res.toString(), { componentName: name })
  const outputPath = resolve(process.cwd(), 'src', name)
  // 组件已存在 询问是否覆盖
  if (fs.pathExistsSync(outputPath)) {
    console.log('组件已存在')
  } else {
    fs.ensureDirSync(outputPath)
    fs.writeFileSync(resolve(outputPath, `${bigCamel(name)}.vue`), content)
  }
  // console.log(content)
  // 生成 Component.vue component.less index.ts props.ts docs example
}
