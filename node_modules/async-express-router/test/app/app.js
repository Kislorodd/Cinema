const express = require('express')
const asyncRouter = require('../../index')

// Controllers
const okCtrlAsync = require('./ctrl/ok.async.ctrl')
const okCtrlSync = require('./ctrl/ok.sync.ctrl')
const errorCtrlAsync = require('./ctrl/error.async.ctrl')
const errorCtrlSync = require('./ctrl/error.sync.ctrl')

// Middlewares
const okMidAsync = require('./middleware/ok.async.middleware')
const okMidSync = require('./middleware/ok.sync.middleware')
const errorMidAsync = require('./middleware/error.async.middleware')
const errorMidSync = require('./middleware/error.sync.middleware')

const app = express()
app.use(asyncRouter(app))

// Routes
const routes = require('./routes/routes')
app.use(routes)

// Api
app.all('/api/ok/ctrl-async', okCtrlAsync)
app
  .route('/api/ok/ctrl-sync')
  .get(okCtrlSync)
  .post(okCtrlSync)
  .put(okCtrlSync)
  .patch(okCtrlSync)
  .delete(okCtrlSync)

app.all('/api/ok/mid-async/ctrl-async', okMidAsync, okCtrlAsync)
app.all('/api/ok/mid-async/ctrl-sync', okMidAsync, okCtrlSync)
app.all('/api/ok/mid-sync/ctrl-async', okMidSync, okCtrlAsync)
app.all('/api/ok/mid-sync/ctrl-sync', okMidSync, okCtrlSync)

app.all('/api/error/ctrl-async', errorCtrlAsync)
app
  .route('/api/error/ctrl-sync')
  .get(errorCtrlSync)
  .post(errorCtrlSync)
  .put(errorCtrlSync)
  .patch(errorCtrlSync)
  .delete(errorCtrlSync)

app.all('/api/error/mid-async/ctrl-async', errorMidAsync, errorCtrlAsync)
app.all('/api/error/mid-async/ctrl-sync', errorMidAsync, errorCtrlSync)
app.all('/api/error/mid-sync/ctrl-async', errorMidSync, errorCtrlAsync)
app.all('/api/error/mid-sync/ctrl-sync', errorMidSync, errorCtrlSync)

app.use((err, req, res, next) => {
  if (err) return res.status(400).json(err)
  res.sendStatus(404)
})

module.exports = app
