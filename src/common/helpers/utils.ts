
export function camelize (str: any) {
  const camelizeRE = /-(\w)/g
  str = String(str)
  return str.replace(camelizeRE, function (m: any, c: any) {
    return c ? c.toUpperCase() : ''
  })
}

function processComponentName(Component: any, { prefix = '', firstUpperCase = false } = {}) {
  const name = Component.name
  const pureName = name.replace(/^lin-/i, '')
  let camelizeName = `${camelize(`${prefix}${pureName}`)}`
  /* istanbul ignore if */
  if (firstUpperCase) {
    camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1)
  }
  return camelizeName
}

export {
  processComponentName
}