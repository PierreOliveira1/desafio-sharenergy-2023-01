import { JWT_SECRET } from '@config/envs';
import { DecodedToken } from '@dtos/decodedToken';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

async function ensureAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).send({ error: true, message: 'Token is missing' });
	}

	const [bearer, token] = authToken.split(' ');

	if (!/Bearer/g.test(bearer)) {
		return res
			.status(401)
			.send({ error: true, message: 'Badly formatted token' });
	}

	try {
		const decoded = verify(token, JWT_SECRET) as DecodedToken;

		res.locals.id = decoded.id;

		return next();
	} catch (error) {
		res.status(401).send({ error: true, message: 'Token invalid' });
	}
}

export { ensureAuthenticated };
