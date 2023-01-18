const {expect} = require('chai')

// Module
const app = require('../app.service')

describe('app', () => {
  it('Should be a function', () => {
    expect(app).to.be.a('function')
  })
})
