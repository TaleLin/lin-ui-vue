// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsSubDirectory: '',
    assetsPublicPath: './',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    entry: {
      example: './example/main.ts'
    },
    autoOpenBrowser: true,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  },
  docBuild: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    productionSourceMap: false
  },
  docDev: {
    env: require('./dev.env'),
    entry: {
      document: './document/main.ts'
    },
    template: './document/index.html',
    port: 8089,
  },
  demoBuild: {
    entry: {
      app: './example/main.ts'
    },
    assetsRoot: path.resolve(__dirname, '../docs/example'),
    assetsSubDirectory: ''
  }
}
