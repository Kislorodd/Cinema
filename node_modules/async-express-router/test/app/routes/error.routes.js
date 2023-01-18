const router = require('express').Router()

// Controllers
const errorCtrlAsync = require('../ctrl/error.async.ctrl')
const errorCtrlSync = require('../ctrl/error.sync.ctrl')

// Middlewares
const errorMidAsync = require('../middleware/error.async.middleware')
const errorMidSync = require('../middleware/error.sync.middleware')

router.all('/ctrl-async', errorCtrlAsync)
router
  .route('/ctrl-sync')
  .get(errorCtrlSync)
  .post(errorCtrlSync)
  .put(errorCtrlSync)
  .patch(errorCtrlSync)
  .delete(errorCtrlSync)

router.all('/mid-async/ctrl-async', errorMidAsync, errorCtrlAsync)
router.all('/mid-async/ctrl-sync', errorMidAsync, errorCtrlSync)
router.all('/mid-sync/ctrl-async', errorMidSync, errorCtrlAsync)
router.all('/mid-sync/ctrl-sync', errorMidSync, errorCtrlSync)

module.exports = router
