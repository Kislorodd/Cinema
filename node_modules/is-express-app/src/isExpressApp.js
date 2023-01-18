const methods = require('express-api-methods')
const isFunction = require('is-function')
const isDefined = require('if-defined')
const isEmitter = require('is-node-emitter')

/**
 * @description :: Function to check if the passed in argument is an instance of express
 * @param {Any} arg :: Argument to check if it is an instance of express
 * @return {Boolean}
 */
module.exports = (arg) => isDefined(arg) && isEmitter(arg) && isFunction(arg) && arg.name === 'app' && methods.every((method) => isDefined(method))
