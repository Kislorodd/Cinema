const isExpressApp = require('is-express-app')

const app = require('./services/app.service')
const router = require('./services/router.service')

module.exports = (expressApp = null) => {
  if (!isExpressApp(expressApp)) throw new Error('Argument passed into async-express-router is not an instance of express')
  app(expressApp)
  router()
  return (req, res, next) => next()
}
