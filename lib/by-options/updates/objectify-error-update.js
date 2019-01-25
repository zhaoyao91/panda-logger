const simpleObjectifyError = require('../../predefines/objectify-error/simple-objectify-error')
const extraObjectifyError = require('../../predefines/objectify-error/extra-objectify-error')
const mapAll = require('../../map-object/map-all')
const patchValue = require('../../map-object/patch-value')

function objectifyErrorUpdate ({ objectifyError: objectifyErrorOption }, plan) {
  if (objectifyErrorOption === undefined) return plan

  const objectifyError = {
    'simple': simpleObjectifyError,
    'extra': extraObjectifyError,
  }[objectifyErrorOption]

  if (objectifyError === undefined) {
    throw new RangeError('Option objectifyError is invalid')
  }

  return mapAll(
    patchValue({ objectifyError }),
    plan,
  )
}

module.exports = objectifyErrorUpdate
