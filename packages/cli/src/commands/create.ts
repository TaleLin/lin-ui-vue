import ejs from 'ejs'
import fs from 'fs-extra'
import { resolve } from 'path'
import inquirer from 'inquirer'
import { UI_COMPONENTS_DIR } from '../constant/index'
import { addComponent } from '../utils/component'
import { bigCamel } from '../utils'
import { generateUIDoc } from '../generate/generateAppConfig'
import {
  ComponentTemplateEjs,
  ComponentLessEjs,
  ComponentIndexEjs,
  ComponentPropsEjs,
  ComponentDocsEjs,
  ComponentExampleEjs,
  ComponentDir,
  CWD,
} from '../constant'
import { generateEntry } from '../generate/generateEntry'

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
  fs.writeFileSync(resolve(UI_COMPONENTS_DIR, `theme/${name}.less`), content)
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

function appendComponentList(name: string) {
  addComponent(name)
}

function generateLessEntry(name: string) {
  const less = fs
    .readFileSync(resolve(UI_COMPONENTS_DIR, 'theme/index.less'))
    .toString()
  const appendLess = `@import './${name}.less';`
  if (less.includes(appendLess)) {
    return
  }
  fs.writeFileSync(
    resolve(UI_COMPONENTS_DIR, 'theme/index.less'),
    `${less.toString()}\n${appendLess}`
  )
}

export async function create(name: string) {
  const outputPath = ComponentDir(name)

  generateLessEntry(name)

  if (fs.pathExistsSync(outputPath)) {
    const { cover } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'cover',
        message: '该组件文件夹已存在，是否要覆盖？',
        default: false,
      },
    ])
    if (!cover) {
      process.exit(1)
    }
    fs.emptyDirSync(outputPath)
  }

  fs.ensureDirSync(outputPath)
  generateComponentVue(name, outputPath)
  generateComponentLess(name, outputPath)
  generateComponentIndex(name, outputPath)
  generateComponentProps(name, outputPath)
  generateComponentDocs(name, outputPath)
  generateComponentExample(name, outputPath)
  appendComponentList(name)
  generateUIDoc()
  generateEntry()
  generateLessEntry(name)
}
