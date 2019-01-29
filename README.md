# Panda Logger

A js json logger.

## Features

* Prefer FP styles
* Easy and flexible usages
* Designed by zhaoyao91

## Install

```
npm i the-logger
```

## Basic Usage

```
const { logger } = require('the-logger')

logger.info('something')
// {"level": 30, "message": "something"}

logger.warn({foo: 'bar'})
// {"level": 40, "detail": {"foo": "bar"}}

logger.error(new Error('NOOOO!!!'))
// {"level": 50, "error": {"name": "Error","message": "NOOOO!!!", "stack": [...]}}

// you can log <message>, <detail>, <error> in any combinations and orders
logger.fatal(new Error('GOD'), 'oops', [1, 2, 3])
// {"level": 60, "message": "oops", detail: [1, 2, 3], "error": {"name": "Error","message": "GOD", "stack": [...]}}
```

All default levels are:

* verbose (10)
* debug (20)
* info (30)
* warn (40)
* error (50)
* fatal (60)

## Public Modules

See [index.js](./index.js).

## License

MIT
