export function createNamespace(name: string) {

}

export function createComponentName(name: string) {
  const prefix = 'Lin'

  name  = name.charAt(0).toUpperCase() + name.slice(1)
  return `${prefix}${name}`
}