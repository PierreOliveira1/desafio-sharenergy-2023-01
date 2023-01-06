import { Request, Response, Router } from 'express';
import { SignIn } from './dtos/signin';

const Auth = Router();

Auth.post('/signin', (req: Request, res: Response) => {
	const { username, password } = req.body as SignIn;

	try {
		return res
			.status(200)
			.send({ success: true, message: `${username} ${password}` });
	} catch (err) {
		return res.status(401).send({ error: true, message: err });
	}
});

export default Auth;
