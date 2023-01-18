const app = require('./../../loader/index');
const supertest = require('supertest')
const request = supertest('http://localhost:8080');

describe('User Controller', () => {
    describe('/users/login', () => {
        it('should authorize account', async () => {
            await request
                .post('/users/login')
                .send({
                    login: "Famouse",
                    password: "123456789"
                })
                .expect(200);
        })
    })

    describe('/users', () => {
        it('should get all users', async () => {
            await request
                .get('/users')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .expect(200);
        })
    })

    describe('/users', () => {
        it('should get user by id', async () => {
            await request
                .get('/users/1')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .expect(200);
        })
    })
})