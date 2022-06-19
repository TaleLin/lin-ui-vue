import ejs from 'ejs'
import fs from 'fs-extra'
import { resolve } from 'path'

const componentVuePath = resolve(
  __dirname,
  '../../template/component/component.ejs'
)

export function create() {
  const res = fs.readFileSync(componentVuePath)
  const content = ejs.render(res.toString(), { componentName: 'menu' })
  console.log(content)
  // 生成 Component.vue component.less index.ts props.ts docs example
}
