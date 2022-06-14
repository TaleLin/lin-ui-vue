type ClassName = string
type Classes = (ClassName | [boolean, ClassName, ClassName?])[]

export function createNamespace(name: string) {
  const namespace = `lin-${name}`

  const createBEM = (suffix?: string) => {
    if (!suffix) {
      return namespace
    }
    if (suffix.startsWith('--') || suffix.startsWith('__')) {
      return `${namespace}${suffix}`
    }

    return `${namespace}--${suffix}`
  }

  const computedClasses = (...classes: Classes): string[] => {
    const realClasses: string[] = []
    classes.forEach((item) => {
      if (Array.isArray(item)) {
        const [condition, trueCls, falseCls = null] = item
        const res = condition ? trueCls : falseCls
        res && realClasses.push(res)
      } else {
        realClasses.push(item)
      }
    })
    return realClasses
  }

  return {
    b: createBEM,
    computedClasses,
  }
}

export function createComponentName(name: string) {
  const prefix = 'Lin'

  const camelName = name.charAt(0).toUpperCase() + name.slice(1)
  return `${prefix}${camelName}`
}
