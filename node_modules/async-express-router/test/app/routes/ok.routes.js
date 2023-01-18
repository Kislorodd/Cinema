const router = require('express').Router()

// Controllers
const okCtrlAsync = require('../ctrl/ok.async.ctrl')
const okCtrlSync = require('../ctrl/ok.sync.ctrl')

// Middlewares
const okMidAsync = require('../middleware/ok.async.middleware')
const okMidSync = require('../middleware/ok.sync.middleware')

router.all('/ctrl-async', okCtrlAsync)
router
  .route('/ctrl-sync')
  .get(okCtrlSync)
  .post(okCtrlSync)
  .put(okCtrlSync)
  .patch(okCtrlSync)
  .delete(okCtrlSync)

router.all('/mid-async/ctrl-async', okMidAsync, okCtrlAsync)
router.all('/mid-async/ctrl-sync', okMidAsync, okCtrlSync)
router.all('/mid-sync/ctrl-async', okMidSync, okCtrlAsync)
router.all('/mid-sync/ctrl-sync', okMidSync, okCtrlSync)

module.exports = router
