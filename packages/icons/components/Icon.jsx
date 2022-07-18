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
    primaryColor: {
      type: String,
      default: '#4D82FF',
    },
    secondColor: {
      type: String,
      default: '#e6f7ff',
    },
  },
  render({ icon, primaryColor, secondColor }) {
    let { vNode } = icon

    if (typeof vNode === 'function') {
      vNode = vNode(primaryColor, secondColor)
    }

    const { attrs } = vNode
    const renderVNode = {
      ...vNode,
      attrs: { ...attrs, fill: 'currentColor', width: '1em', height: '1em' },
    }
    return (
      <span class="lin-icon">
        {icon && generateVNode(renderVNode, icon.name)}
      </span>
    )
  },
})

export default Icon
