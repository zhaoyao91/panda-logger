function mapValues (fn, obj) {
  let result = {}
  Object.keys(obj).forEach(key => {
    result[key] = fn(obj[key], key)
  })
  return result
}

module.exports = mapValues
