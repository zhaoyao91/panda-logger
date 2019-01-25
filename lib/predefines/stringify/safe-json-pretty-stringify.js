const _stringify = require('fast-safe-stringify')

function stringify (object) {
  return _stringify(object, null, 2)
}

module.exports = stringify
