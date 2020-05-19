module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: require('./package.json').browserslist
    })
  ]
}