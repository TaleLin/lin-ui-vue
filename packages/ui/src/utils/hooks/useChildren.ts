import { reactive, provide } from 'vue'

export default function useChildren(key: symbol) {
  const children: any = reactive([])

  const linkChildren = (value: Record<string, any> = {}) => {
    const link = (child: any) => {
      children.push(child)
    }
    const unlink = (child: any) => {
      const index: number = children.indexOf(child)
      if (index > -1) {
        children.splice(index, 1)
      }
    }

    provide(key, {
      link,
      unlink,
      children,
      ...value,
    })
  }

  return {
    linkChildren,
    children,
  }
}
