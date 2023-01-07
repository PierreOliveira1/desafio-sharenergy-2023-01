import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@src/config/envs';

async function generateToken(userId: string) {
	const token = jwt.sign({}, JWT_SECRET, {
		subject: userId,
		expiresIn: '20s',
	});

	return token;
}

export { generateToken };
