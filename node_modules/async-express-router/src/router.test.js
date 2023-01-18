const {expect} = require('chai')

// Module
const router = require('./router')

// Helpers
const app = require('express')()

describe('router', () => {
  it('Should be a function', () => {
    expect(router).to.be.a('function')
  })

  it('Should not throw an error', () => {
    expect(() => router(app)).to.not.throw
  })

  it('Should throw an error #1', () => {
    expect(() => router()).to.throw
  })

  it('Should throw an error #2', () => {
    expect(() => router(function() {})).to.throw
  })

  it('Should throw an error #3', () => {
    expect(() => router(() => {})).to.throw
  })

  it('Should throw an error #4', () => {
    expect(() => router({})).to.throw
  })

  it('Should throw an error #5', () => {
    expect(() => router([])).to.throw
  })

  it('Should throw an error #6', () => {
    expect(() => router(0)).to.throw
  })

  it('Should throw an error #7', () => {
    expect(() => router(null)).to.throw
  })

  it('Should throw an error #8', () => {
    expect(() => router('')).to.throw
  })

  it('Should throw an error #9', () => {
    expect(() => router(true)).to.throw
  })

  it('Should throw an error #10', () => {
    expect(() => router(false)).to.throw
  })
})
