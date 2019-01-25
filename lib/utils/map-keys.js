function mapValues (fn, obj) {
  let result = {}
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    result[fn(value, key)] = value
  })
  return result
}

module.exports = mapValues
