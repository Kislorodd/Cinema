const {expect} = require('chai')

// Module
const catcher = require('../catcher.service')

// Helpers
const isAsyncFunction = require('is-async-await')
const request = {}
const response = (cb) => ({
  send: () => cb(true),
  status: (number) => ({json: () => cb(false)}),
})
const next = (cb) => () => cb(false)

const asyncOk = () => new Promise((resolve, reject) => resolve())

const okFn = async (req, res) => {
  await asyncOk()
  res.send()
}

const errorFn = async (req, res) => {
  throw new Error('error')
}

// Test cases
describe('catcher', () => {
  it('Should be a function', () => {
    expect(catcher).to.be.a('function')
  })

  it('Should return an async function', () => {
    expect(isAsyncFunction(catcher())).to.be.true
  })

  it('Should return true async', async () => {
    await catcher(okFn)(
      request,
      response((data) => {
        expect(data).to.be.true
      })
    )
  })

  it('Should return false async', async () => {
    await catcher(errorFn)(
      request,
      response,
      next((data) => {
        expect(data).to.be.false
      })
    )
  })
})
