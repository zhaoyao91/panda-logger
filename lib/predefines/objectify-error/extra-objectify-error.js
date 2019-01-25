const parseErrorStack = require('./lib/parse-error-stack')

function extraObjectifyError (error) {
  const { name, message, stack, ...others } = error
  return {
    name,
    message,
    stack: parseErrorStack(stack),
    ...others
  }
}

module.exports = extraObjectifyError
