```javascript
const request = require('supertest');
const app = require('../../server/index.js');
const User = require('../../server/models/User.js');
const { setupDB } = require('../test-setup');

setupDB('testDatabase');

describe('Auth API endpoints', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testUser',
                password: 'testPassword'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'userRegistered');
    });

    it('should not create a user with the same username', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testUser',
                password: 'testPassword'
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'usernameExists');
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testUser',
                password: 'testPassword'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'loginSuccess');
        expect(res.body).toHaveProperty('token');
    });

    it('should not login a non-existent user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'nonExistentUser',
                password: 'testPassword'
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'invalidCredentials');
    });
});
```