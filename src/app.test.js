const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
    test('GET / endpoint should return greeting message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Merhaba CI/CD!');
    });

    test('GET /health endpoint should return healthy status', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('status', 'healthy');
    });
}); 