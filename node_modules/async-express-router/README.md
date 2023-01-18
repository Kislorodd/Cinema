<img src="https://user-images.githubusercontent.com/11332183/34919269-378af586-f961-11e7-9c93-97ab2a667135.png" height="60px" style="margin-bottom: 40px;" />

# Async Express Router

An express middleware for wrapping router methods (app.METHOD and express.Router()) with a try / catch block. It wrapps every app.METHOD (expect app.use) and express.Router().METHOD that are specified in the express 4.x documentation.

## Install

`npm install --save async-express-router`

or with yarn:

`yarn add async-express-router`

## Usage

```
const app = require('express')()
const asyncRouter = require('async-express-router')

// Pass in an express app instance
// This has to come before importing any routes
asyncRouter(app)

// Importing routes after asyncRouter(app)
const routes = require('./path/to/routes.js')
app.use(routes)

// All set. Optionally a custom error handler can be set
app.use((err, req, res) => {
  // Do something with it
  res.status(500).send(error.message)
})

app.listen(3000)
```

Now everything is prepared and all API methods will be wrapped in a try / catch block. This is most useful when working with async / await functions.

#### Example with express.Router().method

```
const router = require('express').Router()

router.get('/path', async (req, res) => {
  const results = await someAsyncFunctionThatThrowsAnError()

  // This won't execute
  res.send(results)
})

module.exports = router
```

#### Example with app.METHOD

```
app.get('/path', async (req, res) => {
  const results = await someAsyncFunctionThatThrowsAnError()

  // This won't execute
  res.send(results)
})
```

#### Important notice

Even if middlewares are passed in in an array they will be wrapped with the try / catch block if they're holding an async function.

Example

```
// The bad middleware will fail but it is wrapped with try catch
app.get('/path', [good, good, good, bad, good], (req, res) => {
  res.sendStatus(200)
})
```
