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
  publicDir: 'false',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    md(),
  ],
  build: {
    // base: './',
    outDir: path.resolve(__dirname, '../../../ui/dist'),
    // brotliSize: false,
    emptyOutDir: true,
    cssTarget: 'chrome61',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: path.resolve(process.cwd(), 'index.ts'),
      name: '@lin-ui-vue/ui', // umd的变量名
      fileName: (format: string) => `index.${format}.js`, // 输出文件名
    },
  },
}
