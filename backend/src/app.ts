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
		// await prisma.customer.create({
		// 	data: {
		// 		email: 'b',
		// 		cpf: 'b',
		// 		full_name: 'c',
		// 		phone_number: 'b',
		// 		Address: {
		// 			create: {
		// 				city: 'b',
		// 				complement: 'b',
		// 				country: 'b',
		// 				district: 'b',
		// 				number: 1,
		// 				state: 'b',
		// 				street: 'b',
		// 				zip_code: 'b',
		// 			},
		// 		},
		// 	},
		// });

		// await prisma.customer.update({
		// 	where: { email: 'a' },
		// 	data: {
		// 		Address: {
		// 			create: {
		// 				city: 'c',
		// 				complement: 'c',
		// 				country: 'c',
		// 				district: 'c',
		// 				number: 1,
		// 				state: 'c',
		// 				street: 'c',
		// 				zip_code: 'c',
		// 			},
		// 		},
		// 	},
		// });
		// console.log(
		// 	await prisma.customer.findUnique({
		// 		where: { email: 'a' },
		// 		include: { Address: true },
		// 	})
		// );
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
