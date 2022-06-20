import { createServer, ViteDevServer } from 'vite'
import { generateAppConfig } from '../generate/generateAppConfig'
import { generateEntry } from '../generate/generateEntry'
import { viteConfig } from '../config/vite.config'

let server: ViteDevServer

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
