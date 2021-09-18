const { minify } = require('terser')

module.exports = {
  async jsmin(code, callback) {
    try {
      const minified = await minify(code)
      callback(null, minified.code)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Minify error: ', err)
      callback(null, code)
    }
  },
}
