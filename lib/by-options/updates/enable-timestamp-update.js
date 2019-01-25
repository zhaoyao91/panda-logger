const datetimeGenTimestamp = require('../../predefines/gen-timestamp/datetime-gen-timestamp')
const nullGenTimestamp = require('../../predefines/gen-timestamp/null-gen-timestamp')
const mapAll = require('../../map-object/map-all')
const patchValue = require('../../map-object/patch-value')

function enableTimestampUpdate ({ enableTimestamp }, plan) {
  if (enableTimestamp === undefined) return plan

  switch (enableTimestamp) {
    case true:
      return mapAll(
        patchValue({ genTimestamp: datetimeGenTimestamp }),
        plan
      )
    case false:
      return mapAll(
        patchValue({ genTimestamp: nullGenTimestamp }),
        plan
      )
    default:
      throw new TypeError('Option enableTimestamp must be a boolean')
  }
}

module.exports = enableTimestampUpdate
