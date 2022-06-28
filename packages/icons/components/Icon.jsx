import { h, defineComponent } from 'vue'
import './icon.less'

const generateVNode = (node, key) => {
  return h(
    node.tag,
    { key, ...node.attrs },
    (node.children || []).map((child, index) =>
      generateVNode(child, `${key}-${child.tag}- ${index}`)
    )
  )
}

const Icon = defineComponent({
  props: {
    icon: {
      type: Object,
      default: () => null,
    },
  },
  render({ icon }) {
    const { attrs } = icon.vNode
    const vNode = {
      ...icon.vNode,
      attrs: { ...attrs, fill: 'currentColor', width: '1em', height: '1em' },
    }
    return (
      <span class="lin-icon">{icon && generateVNode(vNode, icon.name)}</span>
    )
  },
})

export default Icon
