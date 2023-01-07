import { JWT_SECRET } from '@src/config/envs';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).send({ error: true, message: 'Token is missing' });
	}

	const [, token] = authToken.split(' ');

	try {
		verify(token, JWT_SECRET);

		return next();
	} catch (error) {
		res.status(401).send({ error: true, message: 'Token invalid' });
	}
}

export { ensureAuthenticated };
