function parseErrorStack (stack) {
  return stack.split('\n').slice(1).map(trim)
}

function trim (string) {
  return string.trim()
}

module.exports = parseErrorStack
