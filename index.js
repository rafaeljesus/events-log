import winston from 'winston'
import sendError from 'micro'

export function wrap (fn) {
  return async (req, res) => {
    const logger = log()
    try {
      logger.info(`\u001b[96m]<-- ${req.method.toUpperCase()} ${req.url}`)
      await fn.apply(this, [req, res])
      logger.info(`\u001b[96m]--> ${req.method.toUpperCase()} ${req.url}`)
    } catch (err) {
      logger.error(`\u001b[39mxxx ${req.method.toUpperCase()} ${req.url}`, err)
      sendError(req, res, err)
    }
  }
}

export function log () {
  return new winston.Logger({
    transports: [
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        colorize: true
      })
    ]
  })
}
