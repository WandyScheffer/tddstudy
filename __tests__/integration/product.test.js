const request = require('supertest');
const app = require('../../src/app');
const clearTables = require('../utils/clearTables');

describe('ProductRoutes', () => {
    beforeAll(async () => {
        await clearTables();
    });
    let id;
    
    it('should create a product', async () => {
        const response = await request(app)
            .post('/api/product')
            .send({
                name:'livro',
                price: 50.6,
            });

        id = response.body.id;

        expect(response.status).toBe(201);
        expect(typeof response.body.id).toBe("number");
        expect(response.body.name).toBe("livro");
        expect(response.body.price).toBe(50.6);
    });

    it('should find a product', async () => {
        const response = await request(app)
            .get(`/api/product/${id}`);

        expect(response.status).toBe(200);
        expect(typeof response.body.id).toBe("number");
        expect(response.body.name).toBe("livro");
        expect(response.body.price).toBe(50.6);
    });

    it('should find a product with sells', async () => {
        const response = await request(app)
            .get(`/api/product/${id}/sells`);

        console.log(response.body);

        expect(response.status).toBe(200);
        expect(typeof response.body.id).toBe("number");
        expect(response.body.name).toBe("livro");
        expect(response.body.price).toBe(50.6);
        expect(Array.isArray(response.body.sells)).toBeTruthy();
    });
    
});