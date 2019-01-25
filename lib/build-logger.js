const buildLog = require('./build-log')
const mapValues = require('./utils/map-values')
const loggerPlanSymbol = require('./symbols/logger-plan')

function buildLogger (plan) {
  const logger = mapValues(buildLog, plan)
  logger[loggerPlanSymbol] = plan
  return logger
}

module.exports = buildLogger
