import {
  getCurrentInstance,
  inject,
  onUnmounted,
  computed,
  ref,
  ComponentInternalInstance,
  InjectionKey,
} from 'vue'
import { ParentProvide } from './useChildren'

// type ParentProvide<T> = T & {
//   link(child: ComponentInternalInstance): void
//   unlink(child: ComponentInternalInstance): void
//   children: ComponentInternalInstance[]
// }

export default function useParent<T>(key: InjectionKey<ParentProvide<T>>) {
  const parent = inject(key, null)
  if (parent) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const { link, unlink, children } = parent

    const index = computed(() => children.indexOf(instance))

    link(instance)

    onUnmounted(() => unlink(instance))

    return {
      parent,
      index,
    }
  }
  return {
    parent,
    index: ref(-1),
  }
}
