const markdown = require('markdown-it')
const markdownContainer = require('markdown-it-container')
const hljs = require('highlight.js')
const matter = require('gray-matter')

function splitCard(html) {
  const hGroup = html
    .replace(/<h1/g, '<h1 class="h1-icon"')
    .replace(/<h3/g, '@@lin@@<h3')
    .replace(/<h2/g, '@@lin@@<h2')
    .split('@@lin@@')
  const cardGroup = hGroup
    .map((fragment) =>
      fragment.includes('<h3')
        ? `<div class="lin-doc-card">${fragment}</div>`
        : fragment
    )
    .join('')

  return cardGroup.replace(/<code>/g, '<code v-pre>')
}

function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return `<pre class="hljs"><code>${
      hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    }</code></pre>`
  }
  return ''
}

function markdownToVue(source, id, options) {
  const { data, content: contentSource } = matter(source)
  const md = markdown({
    html: true,
    typographer: true,
    highlight,
  })
  const customBlock = ['info', 'error', 'warning', 'tips']
  const defaultCustomBlockTitle = {
    info: '消息',
    error: '错误',
    warning: '警告',
    tips: '提示',
  }
  customBlock.forEach((item) => {
    md.use(markdownContainer, item, {
      render(tokens, idx) {
        const reg = new RegExp(`^${item}\\s+(.*)$`)
        const m = tokens[idx].info.trim().match(reg) || [
          null,
          defaultCustomBlockTitle[item],
        ]

        if (tokens[idx].nesting === 1) {
          return (
            `<div class="custom-block ${item}">` +
            `<div class="custom-block-title">${md.utils.escapeHtml(
              m[1]
            )}</div><div class="custom-block-content">\n`
          )
        }
        return '</div></div>\n'
      },
    })
  })

  const res = md.render(contentSource)

  const templateString = splitCard(res)

  return `
<template><div class="lin-ui-doc">${templateString}</div></template>

<script>

export default {
  
}
</script>
  `
}

function MarkdownVitePlugin(options) {
  return {
    name: 'lin-markdown-to-vue-vite-plugin',
    enforce: 'pre',
    transform(source, id) {
      if (!/\.md$/.test(id)) {
        return undefined
      }
      try {
        return markdownToVue(source, id, options)
      } catch (e) {
        this.error(e)
        return undefined
      }
    },
    async handleHotUpdate(ctx) {
      if (!/\.md$/.test(ctx.file)) return

      const readSource = ctx.read
      ctx.read = async function () {
        return markdownToVue(await readSource(), options)
      }
    },
  }
}

module.exports = MarkdownVitePlugin
