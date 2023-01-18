// Router
const router = require('express').Router()

// Routes
const ok = require('./ok.routes')
const error = require('./error.routes')

router.use('/router/ok', ok)
router.use('/router/error', error)

module.exports = router
