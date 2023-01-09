import { Request, Response, Router } from 'express';
import { ensureAuthenticated } from '@middlewares/ensureAuthenticated';
import prisma from '@database';
import { ICustomers } from '@dtos/customers';

const Customers = Router();

Customers.get('/', ensureAuthenticated, async (req: Request, res: Response) => {
	try {
		const customers = await prisma.customer.findMany({
			include: { address: true },
		});

		return res.status(200).send({ success: true, customers });
	} catch (err) {
		return res
			.status(400)
			.send({ error: true, message: 'Error fetching all customers' });
	}
});

Customers.get(
	'/:id',
	ensureAuthenticated,
	async (req: Request, res: Response) => {
		const { id } = req.params;

		try {
			const customer = await prisma.customer.findUnique({
				where: { id },
				include: { address: true },
			});

			if (!customer) {
				return res
					.status(400)
					.send({ error: true, message: 'Error fetching customer' });
			}

			return res.status(200).send({ success: true, customer });
		} catch (err) {
			return res
				.status(400)
				.send({ error: true, message: 'Error fetching customer' });
		}
	}
);

Customers.post(
	'/',
	ensureAuthenticated,
	async (req: Request, res: Response) => {
		const body = req.body as ICustomers;

		try {
			const customer = await prisma.customer.create({
				data: {
					...body,
					address: { create: { ...body.address } },
				},
			});

			return res.status(201).send({
				success: true,
				message: 'User created successfully',
				customer,
			});
		} catch (err) {
			return res
				.status(400)
				.send({ error: true, message: 'Error creating customer' });
		}
	}
);

Customers.patch(
	'/:id',
	ensureAuthenticated,
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const body = req.body as ICustomers;

		try {
			await prisma.customer.update({
				where: { id },
				data: { ...body, address: { update: { ...body.address } } },
			});

			return res
				.status(200)
				.send({ success: true, message: 'Customer updated successfully' });
		} catch (err) {
			return res
				.status(400)
				.send({ error: true, message: 'Error when updating customer' });
		}
	}
);

Customers.delete(
	'/:id',
	ensureAuthenticated,
	async (req: Request, res: Response) => {
		const { id } = req.params;

		try {
			await prisma.address.delete({
				where: { customerId: id },
			});

			await prisma.customer.delete({
				where: { id },
			});

			return res.status(200).send({
				success: true,
				message: 'Customer deleted successfully',
			});
		} catch (err) {
			return res
				.status(400)
				.send({ error: true, message: 'Error deleting customer' });
		}
	}
);

export default Customers;
