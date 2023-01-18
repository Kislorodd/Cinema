const isArray = require('isarray')
const isAsyncFunction = require('is-async-await')

// Cather
const catcher = require('./catcher.service')

/**
 * @description :: Checking if the argument is an async function and if it is wrap it with an error cather
 * @param {Any} arg :: argument to check
 * @return {Any}
 */
const wrapper = (arg) => {
  if (isArray(arg)) return arg.map(wrapper)
  if (isAsyncFunction(arg)) return catcher(arg)
  return arg
}

module.exports = (...args) => args.map(wrapper)
