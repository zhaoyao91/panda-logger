const buildLogger = require('../build-logger')
const defaultLoggerPlan = require('./default-logger-plan')

const defaultLogger = buildLogger(defaultLoggerPlan)

module.exports = defaultLogger

