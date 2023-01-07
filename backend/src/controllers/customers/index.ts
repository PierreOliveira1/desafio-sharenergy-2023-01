import { Request, Response, Router } from 'express';
import { ensureAuthenticated } from '@middlewares/ensureAuthenticated';
import prisma from '@database';

const Customers = Router();

Customers.get('/', ensureAuthenticated, async (req: Request, res: Response) => {
	try {
		const allCustomers = await prisma.customer.findMany();

		return res.status(200).send({ success: true, customers: allCustomers });
	} catch (err) {
		return res
			.status(500)
			.send({ error: true, message: 'Internal server error' });
	}
});

export default Customers;
