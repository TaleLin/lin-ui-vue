const path = require('path')
const webpack = require('webpack')
const { version } = require('../package.json')
const config = require('../config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const utils = require('./utils')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const allSource = [resolve('src'), resolve('example'), resolve('document')]

module.exports = {
  output: {
    path: resolve(config.build.assetsRoot),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: allSource
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: allSource,
        options: {
          esModule:false,
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        include: allSource,
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          '@vant/markdown-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    })
  ]
}