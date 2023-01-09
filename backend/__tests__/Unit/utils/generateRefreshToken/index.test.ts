import prisma from '@database';
import { generateRefreshToken } from '@utils/generateRefreshToken';

describe('Generate Refresh Token', () => {
	async function getAdm() {
		const user = await prisma.adm.findUnique({
			where: { username: 'desafiosharenergy' },
		});

		return user;
	}

	it('should be generate refresh token', async () => {
		const adm = await getAdm();

		const refreshToken = await generateRefreshToken(adm?.id as string);

		expect(refreshToken).toHaveProperty('id');
		expect(refreshToken).toHaveProperty('admId');
		expect(refreshToken.admId).toBe(adm?.id as string);
		expect(refreshToken).toHaveProperty('expiresIn');
	});

	afterAll(async () => {
		await prisma.refreshToken.deleteMany();
	});
});
