import supertest from 'supertest';
import app from '../../../../src/app';

describe('Controller test', () => {
	it('should return success', async () => {
		const response = await supertest(app).get('/test');

		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
	});
});
