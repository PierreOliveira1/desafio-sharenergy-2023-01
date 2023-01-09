import supertest from 'supertest';
import app from '@app';
import { verifyToken } from '../../../utils/verifyToken';
import prisma from '@database';
import { generateRefreshToken } from '@utils/generateRefreshToken';

describe('Authenticated', () => {
	it('should be successfully authenticate', async () => {
		const response = await supertest(app).post('/auth/signin').send({
			username: 'desafiosharenergy',
			password: 'sh@r3n3rgy',
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body).toHaveProperty('token');
		expect(response.body).toHaveProperty('refreshToken');
		expect(response.body.success).toBeTruthy();
		expect(verifyToken(response.body.token)).toBeTruthy();
		expect(response.body.refreshToken).toHaveProperty('id');
		expect(response.body.refreshToken).toHaveProperty('expiresIn');
		expect(response.body.refreshToken).toHaveProperty('admId');
	});

	it('should be error username to authenticate', async () => {
		const response = await supertest(app).post('/auth/signin').send({
			username: 'teste',
			password: 'sh@r3n3rgy',
		});

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('User or password incorrect');
	});

	it('should be error password to authenticate', async () => {
		const response = await supertest(app).post('/auth/signin').send({
			username: 'desafiosharenergy',
			password: 'teste',
		});

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('User or password incorrect');
	});

	async function getIdRefreshToken() {
		const adm = await prisma.adm.findFirst({
			where: { username: 'desafiosharenergy' },
		});

		const refreshToken = await generateRefreshToken(adm?.id as string);

		return refreshToken.id as string;
	}

	it('should be refresh token', async () => {
		const response = await supertest(app)
			.post('/auth/refresh_token')
			.send({ refreshToken: await getIdRefreshToken() });

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('token');
		expect(verifyToken(response.body.token)).toBeTruthy();
	});

	it('should be error refresh token', async () => {
		const response = await supertest(app)
			.post('/auth/refresh_token')
			.send({ refreshToken: 'aaaa' });

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Refresh token invalid');
	});
});
