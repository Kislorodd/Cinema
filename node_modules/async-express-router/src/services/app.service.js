const methods = require('express-api-methods')

// Wrapper
const wrapper = require('./wrapper.service')

module.exports = (app) => {
  methods.forEach((method) => {
    if (!app[method]) throw new Error(`Express api method ${method} does not exist`)
    const fn = app[method].bind(app)
    app[method] = (...args) => {
      fn(...wrapper(...args))
    }
  })
}
