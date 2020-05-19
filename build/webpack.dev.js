const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base')
const config = require('../config')
const utils = require('./utils')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    main: './example/main.ts'
  },
  module: {
    rules: [
      ...utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html'
    }),
    
  ],
})
