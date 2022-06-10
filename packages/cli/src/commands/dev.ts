
import { createServer, ViteDevServer }from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

let server:ViteDevServer;

const viteConfig = {
  root: path.resolve(__dirname, '../../site'),
  // configFile: false,
  plugins: [vue()],
  server: { force: true, port: 9527 },
};

async function startServer() {
  server && (await server.close());

  server = await createServer(viteConfig);

  await server.listen();
  server.printUrls();
}


export async function dev() {
  process.env.NODE_ENV = 'development'
  await startServer();
}