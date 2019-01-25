const curry = require('lodash.curry')
const mapSome = require('./map-some')

function mapAll (map, object) {
  return mapSome(Object.keys(object), map, object)
}

module.exports = curry(mapAll)
