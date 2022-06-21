import { resolve } from 'path'

export const CWD = process.cwd()

export const EJS = resolve(__dirname, '../../template')

export const ComponentTemplateEjs = resolve(EJS, 'component/component.vue.ejs')

export const ComponentLessEjs = resolve(EJS, 'component/component.less.ejs')

export const ComponentIndexEjs = resolve(EJS, 'component/index.ejs')

export const ComponentPropsEjs = resolve(EJS, 'component/props.ejs')

export const ComponentExampleEjs = resolve(EJS, 'component/example/index.ejs')

export const ComponentDocsEjs = resolve(EJS, 'component/docs/README.ejs')

export const ComponentDir = (componentName: string) =>
  resolve(CWD, `src/${componentName}`)

export const UI_TYPES_DIR = resolve(CWD, 'types')
export const UI_PACKAGE_JSON = resolve(CWD, 'package.json')
