const {expect} = require('chai')

// Module
const wrapper = require('../wrapper.service')

// Helpers
const isAsyncFunction = require('is-async-await')
const catcher = require('../catcher.service')
const asyncFn = async () => {}
const syncFn = function fn() {}
const string = 'string'

describe('wrapper', () => {
  it('Should be a function', () => {
    expect(wrapper).to.be.a('function')
  })

  it('Should return an array', () => {
    expect(wrapper([])).to.be.an('array')
  })

  it('Should return an async function', () => {
    const outcome = wrapper(asyncFn).every(isAsyncFunction)
    expect(outcome).to.be.true
  })

  it('Should return an object', () => {
    expect(wrapper({})).to.deep.equal([{}])
  })

  it('Should return a string', () => {
    expect(wrapper('')).to.deep.equal([''])
  })

  it('Should return a number', () => {
    expect(wrapper(0)).to.deep.equal([0])
  })

  it('Should return null', () => {
    expect(wrapper(null)).to.deep.equal([null])
  })
})
