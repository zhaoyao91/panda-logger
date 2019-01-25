function patchValue(updates) {
  return function (object) {
    return {
      ...object,
      ...updates,
    }
  }
}

module.exports = patchValue
