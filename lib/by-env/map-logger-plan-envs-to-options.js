function mapLoggerPlanEnvsToOptions (envs) {
  return {
    printLevel: toInteger(envs, 'PRINT_LEVEL'),
    stringify: envs['STRINGIFY'],
    enableTimestamp: toBool(envs, 'ENABLE_TIMESTAMP'),
    objectifyError: envs['OBJECTIFY_ERROR'],
  }
}

function toInteger (envs, key) {
  const value = envs[key]

  if (value === undefined) return undefined

  const int = Number(value)

  if (!Number.isInteger(int)) {
    throw new TypeError(`Env ${key} is not valid integer expression`)
  }

  return int
}

function toBool (envs, key) {
  const value = envs[key]

  if (value === undefined) return undefined

  switch (envs[key]) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      throw new TypeError(`Env ${key} is not valid boolean expression`)
  }
}

module.exports = mapLoggerPlanEnvsToOptions
