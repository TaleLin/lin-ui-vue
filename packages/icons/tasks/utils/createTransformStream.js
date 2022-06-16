const through = require('through2')

const createTransformStream = function (fn) {
  return through.obj((chunk, enc, done) => {
    if (chunk.isBuffer() && typeof fn === 'function') {
      const original = chunk.contents.toString(enc)

      try {
        const result = fn(original, chunk)
        chunk.contents = Buffer.from(result)
        done(null, chunk)
      } catch (error) {
        done(error, null)
      }
    } else {
      done(null, chunk)
    }
  })
}

module.exports = {
  createTransformStream,
}
