const parseErrorStack = require('./lib/parse-error-stack')

function simpleObjectifyError (error) {
  return {
    name: error.name,
    message: error.message,
    stack: parseErrorStack(error.stack)
  }
}

module.exports = simpleObjectifyError
