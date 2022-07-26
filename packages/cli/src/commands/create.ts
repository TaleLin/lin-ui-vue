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
} from '../constant'
import { generateEntry } from '../generate/generateEntry'
import logger from '../utils/logger'

function generateComponentVue(name: string, outputPath: string) {
  name = name.replace(name.charAt(0), name.charAt(0).toLowerCase()) // confirm name smallCamel
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

function generateComponentDocs(
  name: string,
  cnName: string,
  outputPath: string
) {
  const res = fs.readFileSync(ComponentDocsEjs)
  const content = ejs.render(res.toString(), { name, cnName })
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

export async function create(name: string, cnName: string) {
  const outputPath = ComponentDir(name)

  if (fs.pathExistsSync(outputPath)) {
    const { cover } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'cover',
        message: '该组件文件目录已存在，是否要覆盖？',
        default: false,
      },
    ])
    if (!cover) {
      process.exit(1)
    }
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: '覆盖组件将重置为初始化组件模板，是否确定要覆盖？',
        default: false,
      },
    ])
    if (!confirm) {
      process.exit(1)
    }

    fs.emptyDirSync(outputPath)
  }

  if (!cnName) {
    const { inputCnName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'inputCnName',
        message: '请输入组件的中文名',
        default: '',
        validate(value) {
          return !!value
        },
      },
    ])
    cnName = inputCnName
  }

  generateLessEntry(name)

  fs.ensureDirSync(outputPath)
  generateComponentVue(name, outputPath)
  generateComponentLess(name, outputPath)
  generateComponentIndex(name, outputPath)
  generateComponentProps(name, outputPath)
  generateComponentDocs(name, cnName, outputPath)
  generateComponentExample(name, outputPath)
  appendComponentList(name)
  generateUIDoc()
  generateEntry()
  generateLessEntry(name)

  logger.success(`组件 ${name} 创建成功！`)
  logger.success(`组件 ${name} 文件目录: src/${name}`)
  logger.success(`|- docs/ # 组件文档`)
  logger.success(`|- demo/ # 组件使用案例`)
  logger.success(`|- ${name}.vue/ # Vue 组件`)
  logger.success(`|- index.ts/ # 组件入口文件`)
}
