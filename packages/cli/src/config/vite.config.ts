import vue from '@vitejs/plugin-vue'
import path from 'path'
import md from '@lin-ui-vue/markdown-to-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const viteConfig = {
  root: path.resolve(__dirname, '../../../ui/site'),
  // configFile: false,
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    md(),
  ],
  server: { force: true, port: 9527 },
}

export const viteBuildConfig = {
  root: path.resolve(__dirname, '../../../ui/site'),
  // configFile: false,
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    md(),
  ],
  server: { force: true, port: 9527 },
  build: {
    base: './',
    outDir: path.resolve(__dirname, '../../../ui/dist'),
    brotliSize: false,
    emptyOutDir: true,
    cssTarget: 'chrome61',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, '../../../ui/site/index.html'),
        mobile: path.resolve(__dirname, '../../../ui/site/mobile.html'),
      },
    },
  },
}
