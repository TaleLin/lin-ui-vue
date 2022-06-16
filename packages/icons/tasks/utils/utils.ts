export function smallCamel(str: string, separator: '-' | '_' = '-') {
  const reg = new RegExp(`${separator}([a-z])`, 'g')
  return str.replace(reg, (p, m) => m.toUpperCase())
}

export function bigCamel(str: string, separator: '-' | '_' = '-') {
  const s = smallCamel(str, separator)
  return s.replace(s.charAt(0), s.charAt(0).toUpperCase())
}
