import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@config/envs';

async function generateToken(userId: string) {
	const token = jwt.sign(
		{
			id: userId,
		},
		JWT_SECRET,
		{
			subject: userId,
			expiresIn: '1d',
		}
	);

	return token;
}

export { generateToken };
