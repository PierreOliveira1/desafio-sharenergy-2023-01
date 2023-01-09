import prisma from '@database';
import dayjs from 'dayjs';

async function generateRefreshToken(admId: string) {
	const expiresIn = dayjs().add(30, 'days').unix();

	const refreshTokenAlreadyExists = await prisma.refreshToken.findFirst({
		where: { admId },
	});

	if (refreshTokenAlreadyExists) {
		await prisma.refreshToken.delete({ where: { admId } });
	}

	const refreshToken = await prisma.refreshToken.create({
		data: {
			admId,
			expiresIn,
		},
	});

	return refreshToken;
}

export { generateRefreshToken };
