function log (options) {
  const {
    args,
    level,
    meta,
    genTimestamp,
    objectifyError,
    stringify,
    print,
    notPrint,
    printLevel,
  } = options

  if (level < printLevel) return notPrint()

  checkArgsLength(args.length)

  const sortedArgs = sortArgs(args)

  const outputObject = buildOutputObject(sortedArgs, { level, meta, genTimestamp, objectifyError })

  const outputString = stringify(outputObject)

  return print(outputString)
}

function sortArgs (args) {
  return {
    message: args.find(isMessage),
    detail: args.find(isDetail),
    error: args.find(isError),
  }
}

function isMessage (x) {
  return typeof x === 'string' || typeof x === 'number'
}

function isDetail (x) {
  return (
    typeof x === 'object' &&
    x !== null &&
    !isError(x)
  )
}

function isError (x) {
  return x instanceof Error
}

function buildOutputObject ({ message, detail, error }, { level, meta, genTimestamp, objectifyError }) {
  return {
    level,
    timestamp: genTimestamp(),
    meta,
    message,
    detail,
    error: error && objectifyError(error),
  }
}

function checkArgsLength (length) {
  if (length > 3) {
    throw new RangeError('At most 3 args are allowed')
  }
}

module.exports = log
