import { createServer, ViteDevServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import md from '@lin-ui-vue/markdown-to-vue'
import { generateAppConfig } from '../generate/generateAppConfig'
import { generateEntry } from '../generate/generateEntry'

let server: ViteDevServer

const viteConfig = {
  root: path.resolve(__dirname, '../../../ui/site'),
  // configFile: false,
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md(),
  ],
  server: { force: true, port: 9527 },
}

async function startServer() {
  server && (await server.close())

  await generateAppConfig()
  await generateEntry()

  server = await createServer(viteConfig)

  await server.listen()
  server.printUrls()
}

export async function dev() {
  process.env.NODE_ENV = 'development'
  await startServer()
}
