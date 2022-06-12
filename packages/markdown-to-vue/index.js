
const markdown = require('markdown-it')
const hljs = require('highlight.js')
const matter = require('gray-matter');

function splitCard(html) {
  const hGroup = html.replace(/<h1/g, '<h1 class="h1-icon"').replace(/<h3/g, '@@lin@@<h3').replace(/<h2/g, '@@lin@@<h2').split('@@lin@@')
  const cardGroup = hGroup
    .reduce(
      (prev, fragment) => {
        return [...prev,...(fragment
                .replaceAll('<p>::: warning', '@@tips@@<div class="custom-block warning"><div class="custom-block-title">警告</div><div class="custom-block-content">')
                .replaceAll('<p>::: error', '@@tips@@<div class="custom-block error"><div class="custom-block-title">错误</div><div class="custom-block-content">')
                .replaceAll('<p>::: info', '@@tips@@<div class="custom-block info"><div class="custom-block-title">提示</div><div class="custom-block-content">')
                .replaceAll(':::</p>','</div></div>').split('@@tips@@'))]
                
      }, [])
    .map((fragment) => (fragment.includes('<h3') ? `<div class="lin-doc-card">${fragment}</div>` : fragment))
    .join('')

  return cardGroup
          .replace(/<code>/g, '<code v-pre>')
}

function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return (
      '<pre class="hljs"><code>' +
      hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
      '</code></pre>'
    )
  }
  return ''
}

function markdownToVue(source, id, options) {
  const {data, content: contentSource} = matter(source)
  const md = markdown({
    html: true,
    typographer: true,
    highlight
  })
  let res = md.render(contentSource);

  let templateString = splitCard(res)

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
      if(!/\.md$/.test(id)) {
        return
      }
      try {
        return markdownToVue(source, id, options)
      } catch (e) {
        this.error(e)
        return ''
      }
    },
    async handleHotUpdate(ctx) {
      if (!/\.md$/.test(ctx.file)) return

      const readSource = ctx.read
      ctx.read = async function () {
        return markdownToVue(await readSource(), id, options)
      }
    },
  }
}

module.exports = MarkdownVitePlugin