const printLevelUpdate = require('./updates/print-level-update')
const stringifyUpdate = require('./updates/stringify-update')
const enableTimestampUpdate = require('./updates/enable-timestamp-update')
const objectifyErrorUpdate = require('./updates/objectify-error-update')

function updateLoggerPlanByOptions (options, plan) {
  plan = printLevelUpdate(options, plan)
  plan = stringifyUpdate(options, plan)
  plan = enableTimestampUpdate(options, plan)
  plan = objectifyErrorUpdate(options, plan)

  return plan
}

module.exports = updateLoggerPlanByOptions
