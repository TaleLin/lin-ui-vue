const del = require('del')

const clean = (dirs) => {
  return function CleanDirectories() {
    return del(dirs)
  }
}

module.exports = {
  clean,
}
