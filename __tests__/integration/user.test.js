const request = require('supertest');
const app = require('../../src/app');
const clearTables = require('../utils/clearTables');

describe('UserRoutes', () => {
    beforeAll(async () => {
        await clearTables();
    });
    it('should create a user', async () => {
        const response = await request(app)
            .post('/api/user')
            .send({
                name:'wandy rosa',
                email:'wandy.rosa@test.com',
            });

        expect(response.status).toBe(201);
        expect(typeof response.body.id).toBe("number");
        expect(response.body.name).toBe("wandy rosa");
        expect(response.body.email).toBe("wandy.rosa@test.com");
    });

    it('should fail to create a user because email is missing', async () => {
        const response = await request(app)
            .post('/api/user')
            .send({
                name:'wandy rosa',
                email: null,
            });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe("notNull Violation: User.email cannot be null");
    });
    
});