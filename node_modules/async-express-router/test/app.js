const {expect} = require('chai')
const request = require('supertest')

// Module
const app = require('./app/app')

// Helpers
const {ctrlAsync, ctrlSync, midAsync, midSync} = require('./consts')
const methods = ['get', 'post', 'put', 'patch', 'delete']

describe('whole app test', () => {
  describe('router', () => {
    describe('ok', () => {
      it('Should be ok /router/ok/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/ok/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /router/ok/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/ok/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /router/ok/mid-async/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/ok/mid-async/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /router/ok/mid-async/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/ok/mid-async/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /router/ok/mid-sync/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/ok/mid-sync/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /router/ok/mid-sync/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/ok/mid-sync/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })
    })

    describe('error', () => {
      it('Should be error /router/error/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/error/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /router/error/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/error/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /router/error/mid-async/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/error/mid-async/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /router/error/mid-async/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/error/mid-async/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /router/error/mid-sync/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/error/mid-sync/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /router/error/mid-sync/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/router/error/mid-sync/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midSync)
        expect(outcome).to.deep.equal(compare)
      })
    })
  })

  describe('api', () => {
    describe('ok', () => {
      it('Should be ok /api/ok/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/ok/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /api/ok/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/ok/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /api/ok/mid-async/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/ok/mid-async/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /api/ok/mid-async/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/ok/mid-async/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /api/ok/mid-sync/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/ok/mid-sync/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be ok /api/ok/mid-sync/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/ok/mid-sync/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })
    })

    describe('error', () => {
      it('Should be error /api/error/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/error/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /api/error/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/error/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => ctrlSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /api/error/mid-async/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/error/mid-async/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /api/error/mid-async/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/error/mid-async/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midAsync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /api/error/mid-sync/ctrl-async', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/error/mid-sync/ctrl-async'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midSync)
        expect(outcome).to.deep.equal(compare)
      })

      it('Should be error /api/error/mid-sync/ctrl-sync', async () => {
        const promises = [...methods].map((method) => request(app)[method]('/api/error/mid-sync/ctrl-sync'))
        const results = await Promise.all(promises)
        const outcome = results.map(({body}) => body)
        const compare = [...methods].map((method) => midSync)
        expect(outcome).to.deep.equal(compare)
      })
    })
  })
})
