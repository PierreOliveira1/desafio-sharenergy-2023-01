import { Request, Response, Router } from 'express';
import { compare } from 'bcryptjs';
import dayjs from 'dayjs';
import prisma from '@database';
import { generateRefreshToken } from '@utils/generateRefreshToken';
import { generateToken } from '@utils/generateToken';
import { SignIn } from '@dtos/signin';

const Auth = Router();

Auth.post('/signin', async (req: Request, res: Response) => {
	const { username, password, rememberMe } = req.body as SignIn;

	try {
		const userAlreadyExists = await prisma.adm.findFirst({
			where: { username },
		});

		if (!userAlreadyExists) {
			return res
				.status(400)
				.send({ error: true, message: 'User or password incorrect' });
		}

		const passwordMatch = await compare(password, userAlreadyExists.password);

		if (!passwordMatch) {
			return res
				.status(400)
				.send({ error: true, message: 'User or password incorrect' });
		}

		const token = await generateToken(userAlreadyExists.id);

		if (rememberMe) {
			const refreshToken = await generateRefreshToken(userAlreadyExists.id);

			return res.status(200).send({ success: true, token, refreshToken });
		}

		return res.status(200).send({ success: true, token });
	} catch (err) {
		console.log(err);
		return res
			.status(400)
			.send({ error: true, message: 'Error when authenticating' });
	}
});

Auth.post('/refresh_token', async (req: Request, res: Response) => {
	const idRefreshToken = req.body.refreshToken;

	try {
		const refreshToken = await prisma.refreshToken.findFirst({
			where: { id: idRefreshToken },
		});

		if (!refreshToken) {
			return res
				.status(400)
				.send({ error: true, message: 'Refresh token invalid' });
		}

		const refreshTokenExpired = dayjs().isAfter(
			dayjs.unix(refreshToken.expiresIn)
		);

		const token = await generateToken(refreshToken.admId);

		if (refreshTokenExpired) {
			const newRefreshToken = await generateRefreshToken(refreshToken.admId);

			return res
				.status(200)
				.send({ success: true, token, refreshToken: newRefreshToken });
		}

		return res.status(200).send({ success: true, token });
	} catch (error) {
		return res
			.status(500)
			.send({ error: true, message: 'Internal server error' });
	}
});

export default Auth;
