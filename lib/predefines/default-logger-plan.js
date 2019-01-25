const stdoutPrint = require('./print/stdout-print')
const stderrPrint = require('./print/stderr-print')
const extraObjectifyError = require('./objectify-error/extra-objectify-error')
const safeJsonInlineStringify = require('./stringify/safe-json-inline-stringify')
const nullGenTimestamp = require('./gen-timestamp/null-gen-timestamp')
const syncNotPrint = require('./not-print/sync-not-print')

const defaultLoggerPlan = {
  verbose: {
    level: 10,
    genTimestamp: nullGenTimestamp,
    objectifyError: extraObjectifyError,
    stringify: safeJsonInlineStringify,
    print: stdoutPrint,
    notPrint: syncNotPrint,
    printLevel: 30,
  },
  debug: {
    level: 20,
    genTimestamp: nullGenTimestamp,
    objectifyError: extraObjectifyError,
    stringify: safeJsonInlineStringify,
    print: stdoutPrint,
    notPrint: syncNotPrint,
    printLevel: 30,
  },
  info: {
    level: 30,
    genTimestamp: nullGenTimestamp,
    objectifyError: extraObjectifyError,
    stringify: safeJsonInlineStringify,
    print: stdoutPrint,
    notPrint: syncNotPrint,
    printLevel: 30,
  },
  warn: {
    level: 40,
    genTimestamp: nullGenTimestamp,
    objectifyError: extraObjectifyError,
    stringify: safeJsonInlineStringify,
    print: stderrPrint,
    notPrint: syncNotPrint,
    printLevel: 30,
  },
  error: {
    level: 50,
    genTimestamp: nullGenTimestamp,
    objectifyError: extraObjectifyError,
    stringify: safeJsonInlineStringify,
    print: stderrPrint,
    notPrint: syncNotPrint,
    printLevel: 30,
  },
  fatal: {
    level: 60,
    genTimestamp: nullGenTimestamp,
    objectifyError: extraObjectifyError,
    stringify: safeJsonInlineStringify,
    print: stderrPrint,
    notPrint: syncNotPrint,
    printLevel: 30,
  },
}

module.exports = defaultLoggerPlan
