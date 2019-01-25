const jsonInlineStringify = require('../../predefines/stringify/json-inline-stringify')
const jsonPrettyStringify = require('../../predefines/stringify/json-pretty-stringify')
const safeJsonInlineStringify = require('../../predefines/stringify/safe-json-inline-stringify')
const safeJsonPrettyStringify = require('../../predefines/stringify/safe-json-pretty-stringify')
const mapAll = require('../../map-object/map-all')
const patchValue = require('../../map-object/patch-value')

function stringifyUpdate ({ stringify: stringifyOption }, plan) {
  if (stringifyOption === undefined) return plan

  const stringify = {
    'inline': jsonInlineStringify,
    'pretty': jsonPrettyStringify,
    'safe-inline': safeJsonInlineStringify,
    'safe-pretty': safeJsonPrettyStringify,
  }[stringifyOption]

  if (stringify === undefined) {
    throw new RangeError('Option stringify is invalid')
  }

  return mapAll(
    patchValue({ stringify }),
    plan,
  )
}

module.exports = stringifyUpdate
