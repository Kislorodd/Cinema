/**
 * @description :: Wrapper function for wrapping a function with try catch
 * @param {Function} fn :: Router function to execute
 * @return {Function}
 */
module.exports = (fn) => async (req, res, next, ...args) => {
  try {
    await fn(req, res, next, ...args)
  } catch (error) {
    // eslint-disable-next-line
    next(error)
  }
}
