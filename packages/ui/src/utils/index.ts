export const isPixel = (value: any) => {
  if (typeof value !== 'string') return false
  const reg = /(\d+(\.\d*)?)+(px|rem|vh|vw|em|%)/gi
  return reg.test(value)
}

export const pixelPropValidator = (key: string, canNumber = true) => {
  return function (value: any) {
    if (canNumber && typeof value === 'number') return true
    const isValidate = isPixel(value)
    !isValidate &&
      console.warn(
        `prop ${key} 传入值：${value} 不合法; prop ${key} 需要传入像素单位: [em、rem、px、vh、vw、%${
          canNumber ? '、number' : ''
        }]`
      )
    return isValidate
  }
}

export const formatPixel = (value: any) => {
  if (typeof value === 'number') return `${value}px`
  return value
}
