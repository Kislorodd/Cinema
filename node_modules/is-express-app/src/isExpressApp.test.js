const {expect} = require('chai')

// Module
const isExpressApp = require('./isExpressApp')

// Helpers
const app = require('express')()

describe('isExpressApp', () => {
  it('Should be a function', () => {
    expect(isExpressApp).to.be.a('function')
  })

  it('Should be return a boolean', () => {
    expect(isExpressApp()).to.be.a('boolean')
  })

  it('Should return true', () => {
    expect(isExpressApp(app)).to.be.true
  })

  it('Should return false #1', () => {
    expect(isExpressApp(false)).to.be.false
  })

  it('Should return false #2', () => {
    expect(isExpressApp(true)).to.be.false
  })

  it('Should return false #3', () => {
    expect(isExpressApp(() => {})).to.be.false
  })

  it('Should return false #4', () => {
    expect(isExpressApp(function() {})).to.be.false
  })

  it('Should return false #5', () => {
    expect(isExpressApp([])).to.be.false
  })

  it('Should return false #6', () => {
    expect(isExpressApp({})).to.be.false
  })

  it('Should return false #7', () => {
    expect(isExpressApp(null)).to.be.false
  })

  it('Should return false #8', () => {
    expect(isExpressApp('null')).to.be.false
  })

  it('Should return false #9', () => {
    expect(isExpressApp(0)).to.be.false
  })
})
