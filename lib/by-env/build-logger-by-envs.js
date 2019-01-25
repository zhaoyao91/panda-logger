const loadLoggerPlanEnvs = require('./load-logger-plan-envs')
const mapLoggerPlanEnvsToOptions = require('./map-logger-plan-envs-to-options')
const buildLoggerByOptions = require('../by-options/build-logger-by-options')

function buildLoggerByEnvs (prefix = 'LOG_') {
  const envs = loadLoggerPlanEnvs(prefix)
  const options = mapLoggerPlanEnvsToOptions(envs)
  return buildLoggerByOptions(options)
}

module.exports = buildLoggerByEnvs
