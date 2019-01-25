const mapAll = require('../../map-object/map-all')
const patchValue = require('../../map-object/patch-value')

function printLevelUpdate ({ printLevel }, plan) {
  if (printLevel === undefined) return plan

  if (!Number.isInteger(printLevel)) {
    throw new TypeError('Option printLevel must be an integer')
  }

  return mapAll(
    patchValue({ printLevel }),
    plan
  )
}

module.exports = printLevelUpdate
