import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import Routes from './routes';
import prisma from './database';

const app = express();

prisma
	.$connect()
	.then(async () => {
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use('/', Routes);
	})
	.catch(() => {
		app.get('/*', (req: Request, res: Response) => {
			return res
				.status(500)
				.send({ error: true, message: 'Internal server error' });
		});
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

export default app;
