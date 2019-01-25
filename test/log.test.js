const log = require('../lib/log')

const stringify = JSON.stringify

describe('log', function () {
  test('simple case with message and detail', function () {
    const mockPrint = jest.fn(() => {})

    const testLevel = 30
    const testMessage = 'hello world'
    const testDetail = { name: 'Bob', age: 18 }

    log({
      args: [testMessage, testDetail],
      level: testLevel,
      genTimestamp: empty,
      stringify: stringify,
      print: mockPrint,
      printLevel: 0,
    })

    expect(mockPrint.mock.calls.length).toBe(1)
    expect(mockPrint.mock.calls[0][0]).toBe(stringify({
      level: testLevel,
      message: testMessage,
      detail: testDetail
    }))
  })

  test('at most 3 args are allowed', function () {
    const action = () => {
      log({ args: [1, 2, 3, 4] })
    }

    expect(action).toThrow(new RangeError('At most 3 args are allowed'))
  })
})

function empty () {}
