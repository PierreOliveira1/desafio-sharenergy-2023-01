import { JWT_SECRET } from '../../src/config/envs';
import jwt from 'jsonwebtoken';

function verifyToken(token: string) {
	return jwt.verify(token, JWT_SECRET);
}

export { verifyToken };
