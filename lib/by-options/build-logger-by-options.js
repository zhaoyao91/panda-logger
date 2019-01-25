const updateLoggerPlanByOptions = require('./update-logger-plan-by-options')
const defaultLoggerPlan = require('../predefines/default-logger-plan')
const buildLogger = require('../build-logger')

function buildLoggerByOptions (options = {}) {
  return buildLogger(
    updateLoggerPlanByOptions(options, defaultLoggerPlan)
  )
}

module.exports = buildLoggerByOptions
