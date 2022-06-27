import { resolve } from 'path'

export const UI_NAME = 'lin-ui-vue'

export const CWD = process.cwd()

export const UI_CONFIG_DIR = resolve(CWD, `.${UI_NAME}`)

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

export const UI_SRC_DIR = resolve(CWD, 'src')
export const UI_LIB_DIR = resolve(CWD, 'lib')
export const UI_ES_DIR = resolve(CWD, 'es')
export const UI_EXAMPLE_DIR = 'example'
export const UI_DOCS_DIR = 'docs'

export const UI_BASE_DOC_DIR = resolve(CWD, 'site/docs')
export const UI_COMPONENTS_DIR = resolve(CWD, 'src')
