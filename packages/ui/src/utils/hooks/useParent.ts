import { getCurrentInstance, inject, onUnmounted, computed, ref } from 'vue'

export default function useParent(key: symbol) {
  const parent: any = inject(key, null)
  if (parent) {
    const instance = getCurrentInstance()
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
