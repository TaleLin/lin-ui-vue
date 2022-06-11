
const markdown = require('markdown-it')
const hljs = require('highlight.js')

function splitCard(html) {
  const hGroup = html.replace(/<h1/g, '<h1 class="h1-icon"').replace(/<h3/g, '@@lin@@<h3').replace(/<h2/g, '@@lin@@<h2').split('@@lin@@')
  const cardGroup = hGroup
    .reduce(
      (prev, fragment) => {
        return [...prev,...(fragment
                .replaceAll('<p>::: warning', '@@tips@@<div class="warning">')
                .replace('<p>::: error', '@@tips@@<div class="error">')
                .replace('<p>::: info', '@@tips@@<div class="info">')
                .replaceAll(':::</p>','</div>').split('@@tips@@'))]
                
      }, [])
    .map((fragment) => (fragment.includes('<h3') ? `<div class="card">${fragment}</div>` : fragment))
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

function markdownToVue(source, options) {
  // const { source: vueSource, imports, components } = extractComponents(source)
  const md = markdown({
    html: true,
    typographer: true,
    highlight
  })
  let res = md.render(source);

  let templateString = splitCard(res)
  // console.log(templateString)
  // const { source: vueSource, imports, components } = extractComponents(source)
  // const md = markdown({
  //   html: true,
  //   typographer: true,
  // })
  // let templateString = htmlWrapper(md.render(vueSource))
  // templateString = templateString.replace(/process.env/g, '<span>process.env</span>')
  // templateString = injectCodeExample(templateString)

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
        return markdownToVue(source, options)
      } catch (e) {
        this.error(e)
        return ''
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