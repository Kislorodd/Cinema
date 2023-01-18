const {midAsync} = require('../../consts')

module.exports = async (req, res, next) => {
  throw midAsync
  next()
}
