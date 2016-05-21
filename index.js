import winston from 'winston'
import sendError from 'micro'

export const log = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      colorize: true
    })
  ]
})

export function wrap (fn) {
  return async (req, res) => {
    try {
      log.info(`<-- \u001b[96m${req.method.toUpperCase()}\u001b[39m ${req.url}`)
      await fn.apply(this, [req, res])
      log.info(`--> \u001b[96m${req.method.toUpperCase()}\u001b[39m ${req.url}`)
    } catch (err) {
      log.error(`xxx \u001b[96]m${req.method.toUpperCase()}\u001b[39m ${req.url}`, err)
      sendError(req, res, err)
    }
  }
}
