const {expect} = require('chai')

// Module
const isAsync = require('./isAsyncAwait')

describe('is-async-await', () => {
  it('Should be a function', () => {
    expect(isAsync).to.be.a('function')
  })

  it('Should return true #1', () => {
    expect(isAsync(async function test() {})).to.be.true
  })

  it('Should return true #2', () => {
    expect(isAsync(async () => {})).to.be.true
  })

  it('Should return false #1', () => {
    expect(isAsync(function test() {})).to.be.false
  })

  it('Should return false #2', () => {
    expect(isAsync(() => {})).to.be.false
  })

  it('Should return false #3', () => {
    expect(isAsync({})).to.be.false
  })

  it('Should return false #4', () => {
    expect(isAsync([])).to.be.false
  })

  it('Should return false #5', () => {
    expect(isAsync('')).to.be.false
  })

  it('Should return false #6', () => {
    expect(isAsync(0)).to.be.false
  })

  it('Should return false #7', () => {
    expect(isAsync(Function)).to.be.false
  })

  it('Should return false #8', () => {
    expect(isAsync(Object)).to.be.false
  })

  it('Should return false #9', () => {
    expect(isAsync(String)).to.be.false
  })

  it('Should return false #10', () => {
    expect(isAsync(Number)).to.be.false
  })
})
