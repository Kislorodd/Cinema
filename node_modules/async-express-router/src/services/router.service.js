const methods = require('express-router-methods')
const express = require('express')

// Wrapper
const wrapper = require('./wrapper.service')

// Original router
const expressRouter = express.Router

module.exports = () => {
  express.Router = () => {
    const router = expressRouter()
    methods.forEach((method) => {
      if (!router[method]) throw new Error(`Express router method ${method} does not exist`)
      const fn = router[method].bind(router)
      router[method] = (...args) => {
        fn(...wrapper(...args))
      }
    })
    return router
  }
}
