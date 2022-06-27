import { createServer, ViteDevServer } from 'vite'
import { ensureUIConfig } from '../utils/component'
import { generateUIDoc } from '../generate/generateAppConfig'
import { generateEntry } from '../generate/generateEntry'
import { viteConfig } from '../config/vite.config'

let server: ViteDevServer

async function startServer(cmd: { simple: boolean }) {
  const { simple } = cmd
  server && (await server.close())

  if (!simple) {
    ensureUIConfig()
    await generateUIDoc()
    await generateEntry()
  }

  server = await createServer(viteConfig)

  await server.listen()
  server.printUrls()
}

export async function dev(cmd: { simple: boolean }) {
  process.env.NODE_ENV = 'development'
  await startServer(cmd)
}
