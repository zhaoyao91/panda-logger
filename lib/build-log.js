const _log = require('./log')

function buildLog (options) {
  return function log (...args) {
    return _log({
      args: args,
      ...options
    })
  }
}

module.exports = buildLog
