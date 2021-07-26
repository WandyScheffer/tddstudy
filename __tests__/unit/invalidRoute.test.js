const request = require('supertest');
const app = require('../../src/app');

describe('generic routes', () => {
    it('should fail to get a route', async () => {
        const response = await request(app)
            .get('/api/generic/route')

        expect(response.status).toBe(404);
    });
});