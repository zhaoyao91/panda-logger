const pickBy = require('../utils/pick-by')
const mapKeys = require('../utils/map-keys')

function loadLoggerPlanEnvs (prefix) {
  return mapKeys(
    (v, k) => removePrefix(prefix.length, k),
    pickByPrefix(prefix, process.env)
  )
}

function removePrefix (length, string) {
  return string.slice(length)
}

function pickByPrefix (prefix, object) {
  return pickBy((v, k) => k.startsWith(prefix), object)
}

module.exports = loadLoggerPlanEnvs
