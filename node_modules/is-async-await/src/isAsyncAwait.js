// prettier-ignore
// eslint-disable-next-line
const AsyncFunction = (async function() {}).constructor

module.exports = (fn) => fn instanceof AsyncFunction && AsyncFunction !== Function
