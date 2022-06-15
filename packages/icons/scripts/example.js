const { createServer } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const path = require('path')

let server
const viteConfig = {
  root: path.resolve(__dirname, '../example'),
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    vueJsx(),
  ],
  server: { force: true, port: 4538 },
}

async function startServer() {
  server && (await server.close())

  server = await createServer(viteConfig)

  await server.listen()
  server.printUrls()
}

async function dev() {
  process.env.NODE_ENV = 'development'
  await startServer()
}

dev()
