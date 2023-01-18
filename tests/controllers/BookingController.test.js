const app = require('./../../src/loader/index');
const supertest = require('supertest')
const request = supertest('http://localhost:8080');

describe('Booking Controller', () => {
    describe('/booking', () => {
        it('should return error - unknown ticketId', async () => {
            await request
                .post('/booking')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    "userId": 1,
                    "ticketId": 9999
                })
                .expect(400);
        })
    })
})