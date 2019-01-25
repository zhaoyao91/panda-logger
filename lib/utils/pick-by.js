function pickBy (predicate, object) {
  const result = {}
  Object.keys(object).forEach(key => {
    if (predicate(object[key], key)) {
      result[key] = object[key]
    }
  })
  return result
}

module.exports = pickBy
