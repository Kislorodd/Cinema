const {expect} = require('chai')

// Module
const router = require('../router.service')

describe('router', () => {
  it('Should be a function', () => {
    expect(router).to.be.a('function')
  })
})
