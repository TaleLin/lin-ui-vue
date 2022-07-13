import { reactive, provide, ComponentInternalInstance, InjectionKey } from 'vue'

export type ParentProvide<T> = T & {
  link(child: ComponentInternalInstance): void
  unlink(child: ComponentInternalInstance): void
  children: ComponentInternalInstance[]
}

export default function useChildren<ProvideValue = never>(
  key: InjectionKey<ParentProvide<ProvideValue>>
) {
  const children: ComponentInternalInstance[] = reactive([])

  const linkChildren = (value?: ProvideValue) => {
    const link = (child: ComponentInternalInstance) => {
      children.push(child)
    }
    const unlink = (child: ComponentInternalInstance) => {
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
