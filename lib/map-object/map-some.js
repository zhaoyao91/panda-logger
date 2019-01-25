const curry = require('lodash.curry')

function mapSome (keys, map, object) {
  let result = {...object}
  keys.forEach(key => {
    result[key] = map(object[key], key, object)
  })
  return result
}

module.exports = curry(mapSome)
