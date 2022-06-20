import ejs from 'ejs'
import fs from 'fs-extra'
import { resolve } from 'path'
import { bigCamel } from '../utils'
import {
  ComponentTemplateEjs,
  ComponentLessEjs,
  ComponentIndexEjs,
  ComponentPropsEjs,
  ComponentDocsEjs,
  ComponentExampleEjs,
  ComponentDir,
} from '../constant'

// const componentVuePath = resolve(
//   __dirname,
//   '../../template/component/component.vue.ejs'
// )

function generateComponentVue(name: string, outputPath: string) {
  const res = fs.readFileSync(ComponentTemplateEjs)
  const content = ejs.render(res.toString(), {
    name,
    bigCamelName: bigCamel(name),
  })
  fs.writeFileSync(resolve(outputPath, `${bigCamel(name)}.vue`), content)
}

function generateComponentLess(name: string, outputPath: string) {
  const res = fs.readFileSync(ComponentLessEjs)
  const content = ejs.render(res.toString(), { name })
  fs.writeFileSync(resolve(outputPath, `${name}.less`), content)
}

function generateComponentIndex(name: string, outputPath: string) {
  const res = fs.readFileSync(ComponentIndexEjs)
  const content = ejs.render(res.toString(), {
    name,
    bigCamelName: bigCamel(name),
  })
  fs.writeFileSync(resolve(outputPath, `index.ts`), content)
}

function generateComponentProps(name: string, outputPath: string) {
  const res = fs.readFileSync(ComponentPropsEjs)
  const content = ejs.render(res.toString())
  fs.writeFileSync(resolve(outputPath, `props.ts`), content)
}

function generateComponentDocs(name: string, outputPath: string) {
  const res = fs.readFileSync(ComponentDocsEjs)
  const content = ejs.render(res.toString(), { name })
  fs.ensureDirSync(resolve(outputPath, 'docs'))
  fs.writeFileSync(resolve(outputPath, `docs/README.md`), content)
}

function generateComponentExample(name: string, outputPath: string) {
  const res = fs.readFileSync(ComponentExampleEjs)
  const content = ejs.render(res.toString(), { name })
  fs.ensureDirSync(resolve(outputPath, 'example'))
  fs.writeFileSync(resolve(outputPath, `example/index.vue`), content)
}

export function create(name: string) {
  const outputPath = ComponentDir(name)

  if (fs.pathExistsSync(outputPath)) {
    //
  } else {
    fs.ensureDirSync(outputPath)
    generateComponentVue(name, outputPath)
    generateComponentLess(name, outputPath)
    generateComponentIndex(name, outputPath)
    generateComponentProps(name, outputPath)
    generateComponentDocs(name, outputPath)
    generateComponentExample(name, outputPath)
  }
  // const res = fs.readFileSync(ComponentTemplateEjs)
  // const content = ejs.render(res.toString(), { componentName: name })
  // const outputPath = ComponentDir(name)
  // // 组件已存在 询问是否覆盖
  // if (fs.pathExistsSync(outputPath)) {
  //   console.log('组件已存在')
  // } else {
  //   fs.ensureDirSync(outputPath)
  //   fs.writeFileSync(resolve(outputPath, `${bigCamel(name)}.vue`), content)
  // }
  // console.log(content)
  // 生成 Component.vue component.less index.ts props.ts docs example
}
