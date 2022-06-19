import { resolve } from 'path'
import { cwd } from 'process'

export const CWD = process.cwd()

export const EJS = resolve(__dirname, '../../template')

export const ComponentTemplateEjs = resolve(EJS, 'component/component.ejs')

export const ComponentLessEjs = resolve(EJS, 'component/component.less')

export const ComponentIndexEjs = resolve(EJS, 'component/index.ejs')

export const ComponentPropsEjs = resolve(EJS, 'component/props.ejs')

export const ComponentExampleEjs = resolve(EJS, 'component/example/index.ejs')

export const ComponentDocsEjs = resolve(EJS, 'component/docs/README.ejs')

export const ComponentDir = (componentName: string) =>
  resolve(CWD, `src/${componentName}`)
