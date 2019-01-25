const loggerPlanSymbol = require('./symbols/logger-plan')
const buildLogger = require('./build-logger')

function deriveLogger (mapPlan, logger) {
  const oldPlan = logger[loggerPlanSymbol]
  const newPlan = mapPlan(oldPlan)
  return buildLogger(newPlan)
}

module.exports = deriveLogger
