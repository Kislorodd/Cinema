const app = require('./../../src/loader/index');
const supertest = require('supertest')
const request = supertest('http://localhost:8080');

describe('Place Controller', () => {
    describe('/places', () => {
        it('should return error - place is occupied', async () => {
            await request
                .post('/places')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    "hallId": 2,
                    "floor": 1,
                    "seat": 1,
                    "row": 1,
                    "isVip": false
                })
                .expect(400);
        })
    })
})