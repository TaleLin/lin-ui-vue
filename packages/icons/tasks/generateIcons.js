const { src, dest } = require('gulp')

const generateIcons = ({ from, toDir }) => {
  return function GenerateIcons() {
    return src(from).pipe(dest(toDir))
  }
}

module.exports = {
  generateIcons,
}
