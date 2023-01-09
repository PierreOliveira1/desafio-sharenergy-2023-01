import prisma from '@database';

describe('Database connection', () => {
	it('should be connection database', async () => {
		try {
			await prisma.$connect();

			expect(true).toBeTruthy();
		} catch (err) {
			expect(false).toBeTruthy();
		}
	});
});
