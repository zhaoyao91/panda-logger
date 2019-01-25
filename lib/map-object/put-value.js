function putValue (value) {
  return function () {
    return value
  }
}

module.exports = putValue
