const app = require('./../../src/loader/index');
const supertest = require('supertest')
const TicketServiceTest = require('../../src/services/TicketService');
const request = supertest('http://localhost:8080');

describe('Ticket Controller', () => {
    describe('/tickets', () => {
        it('should return error - ticket is occupied', async () => {
            await request
                .post('/tickets')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    seanceId: "3",
                    placeId: "4"
                })
                .expect(400);
        })

        it('should return error - validation', async () => {
            await request
                .post('/tickets')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    seanceId: "dasdad",
                    placeId: "dasdasda"
                })
                .expect(400);
        })
    })
})