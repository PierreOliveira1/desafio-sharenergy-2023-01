import { Request, Response, Router } from 'express';
import { compare } from 'bcryptjs';
import { SignIn } from './dtos/signin';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@src/config/envs';
import prisma from '@database';

const Auth = Router();

Auth.post('/signin', async (req: Request, res: Response) => {
	const { username, password } = req.body as SignIn;

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

		const token = jwt.sign({}, JWT_SECRET, {
			subject: userAlreadyExists.id,
			expiresIn: '20s',
		});

		return res.status(200).send({ success: true, token });
	} catch (err) {
		return res.status(401).send({ error: true, message: err });
	}
});

export default Auth;
