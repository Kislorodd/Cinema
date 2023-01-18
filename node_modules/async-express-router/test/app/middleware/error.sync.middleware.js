const {midSync} = require('../../consts')

module.exports = (req, res, next) => {
  throw midSync
  next()
}
