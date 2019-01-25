const defaultLogger = require('./lib/predefines/default-logger')

const buildLogger = require('./lib/build-logger')
const defaultLoggerPlan = require('./lib/predefines/default-logger-plan')

const mapAll = require('./lib/map-object/map-all')
const mapSome = require('./lib/map-object/map-some')
const putValue = require('./lib/map-object/put-value')
const patchValue = require('./lib/map-object/patch-value')

const nullGenTimestamp = require('./lib/predefines/gen-timestamp/null-gen-timestamp')
const datetimeGenTimestamp = require('./lib/predefines/gen-timestamp/datetime-gen-timestamp')

const simpleObjectifyError = require('./lib/predefines/objectify-error/simple-objectify-error')
const extraObjectifyError = require('./lib/predefines/objectify-error/extra-objectify-error')

const jsonInlineStringify = require('./lib/predefines/stringify/json-inline-stringify')
const jsonPrettyStringify = require('./lib/predefines/stringify/json-pretty-stringify')
const safeJsonInlineStringify = require('./lib/predefines/stringify/safe-json-inline-stringify')
const safeJsonPrettyStringify = require('./lib/predefines/stringify/safe-json-pretty-stringify')

const stderrPrint = require('./lib/predefines/print/stderr-print')
const stdoutPrint = require('./lib/predefines/print/stdout-print')

const deriveLogger = require('./lib/derive-logger')

const buildLoggerByOptions = require('./lib/by-options/build-logger-by-options')

const buildLoggerByEnvs = require('./lib/by-env/build-logger-by-envs')

module.exports = {
  /**
   * default logger instance
   * built by `defaultLoggerPlan`
   */
  logger: defaultLogger,

  /**
   * if you are not satisfied with the default logger,
   * you can build a logger with fully customized plan,
   * check the `defaultLoggerPlan` to learn the plan structure
   */
  buildLogger,
  defaultLoggerPlan,

  /**
   * building a plan by hand could be tedious
   * here are some helpers which make it easy to build new plan
   * based on existed plan, e.g. the `defaultLoggerPlan`
   */
  mapAll,
  mapSome,
  putValue,
  patchValue,

  /**
   * the predefined timestamp generators
   */
  nullGenTimestamp,
  datetimeGenTimestamp,

  /**
   * the predefined functions which transform error into object
   */
  simpleObjectifyError,
  extraObjectifyError,

  /**
   * the predefined functions which stringify js object into json string
   */
  jsonInlineStringify,
  jsonPrettyStringify,
  safeJsonInlineStringify,
  safeJsonPrettyStringify,

  /**
   * the predefined print functions
   */
  stderrPrint,
  stdoutPrint,

  /**
   * derive a new logger from a existed logger
   */
  deriveLogger,

  /**
   * building logger by plan is of low level
   * these functions help you build logger by high level options
   * which are all primitives
   */
  buildLoggerByOptions,

  /**
   * these functions help you build logger by environment variables
   */
  buildLoggerByEnvs,
}
