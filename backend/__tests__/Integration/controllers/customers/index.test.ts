import app from '@app';
import prisma from '@database';
import { ICustomers } from '@dtos/customers';
import supertest from 'supertest';
import { customer } from '../../../utils/customer';

describe('Customers', () => {
	async function getToken() {
		const response = await supertest(app).post('/auth/signin').send({
			username: 'desafiosharenergy',
			password: 'sh@r3n3rgy',
		});

		return response.body.token;
	}

	beforeAll(async () => {
		await prisma.customer.deleteMany();
		await prisma.address.deleteMany();
	});

	it('should be get none customer', async () => {
		const response = await supertest(app)
			.get('/customers')
			.set('authorization', `Bearer ${await getToken()}`)
			.send(customer);

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('customers');

		const isCustomers = !!response.body.customers.length;
		expect(isCustomers).toBeFalsy();
	});

	it('should be create a new customer', async () => {
		const response = await supertest(app)
			.post('/customers')
			.set('authorization', `Bearer ${await getToken()}`)
			.send(customer);

		expect(response.statusCode).toBe(201);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('User created successfully');
	});

	it('should be error to creating new customer', async () => {
		const response = await supertest(app)
			.post('/customers')
			.set('authorization', `Bearer ${await getToken()}`)
			.send(customer);

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Error creating customer');
	});

	it('should be fetching customer', async () => {
		const getCustomer = await prisma.customer.findFirst({
			where: { email: customer.email },
		});
		const response = await supertest(app)
			.get(`/customers/${getCustomer?.id}`)
			.set('authorization', `Bearer ${await getToken()}`);

		const bodyCustomer = response.body.customer as ICustomers;

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('customer');
		expect(bodyCustomer).toHaveProperty('fullName');
		expect(bodyCustomer.fullName).toBe(customer.fullName);
		expect(bodyCustomer).toHaveProperty('email');
		expect(bodyCustomer.email).toBe(customer.email);
		expect(bodyCustomer).toHaveProperty('phoneNumber');
		expect(bodyCustomer.phoneNumber).toBe(customer.phoneNumber);
		expect(bodyCustomer).toHaveProperty('cpf');
		expect(bodyCustomer.cpf).toBe(customer.cpf);
		expect(bodyCustomer).toHaveProperty('address');
		expect(bodyCustomer.address).toHaveProperty('street');
		expect(bodyCustomer.address.street).toBe(customer.address.street);
		expect(bodyCustomer.address).toHaveProperty('number');
		expect(bodyCustomer.address.number).toBe(customer.address.number);
		expect(bodyCustomer.address).toHaveProperty('district');
		expect(bodyCustomer.address.district).toBe(customer.address.district);
		expect(bodyCustomer.address).toHaveProperty('city');
		expect(bodyCustomer.address.city).toBe(customer.address.city);
		expect(bodyCustomer.address).toHaveProperty('state');
		expect(bodyCustomer.address.state).toBe(customer.address.state);
		expect(bodyCustomer.address).toHaveProperty('country');
		expect(bodyCustomer.address.country).toBe(customer.address.country);
		expect(bodyCustomer.address).toHaveProperty('zipCode');
		expect(bodyCustomer.address.zipCode).toBe(customer.address.zipCode);
		expect(bodyCustomer.address).toHaveProperty('complement');
		expect(bodyCustomer.address.complement).toBe(customer.address.complement);
	});

	it('should be error fetching customer', async () => {
		const response = await supertest(app)
			.get('/customers/teste')
			.set('authorization', `Bearer ${await getToken()}`);

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Error fetching customer');
	});

	it('should be get all customers', async () => {
		const response = await supertest(app)
			.get('/customers')
			.set('authorization', `Bearer ${await getToken()}`)
			.send(customer);

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('customers');

		const isCustomers = !!response.body.customers.length;
		expect(isCustomers).toBeTruthy();
	});

	it('should be update customer', async () => {
		const updateCustomer = await prisma.customer.findFirst({
			where: { email: customer.email },
		});

		const response = await supertest(app)
			.patch(`/customers/${updateCustomer?.id}`)
			.set('authorization', `Bearer ${await getToken()}`)
			.send({ fullName: 'Roberto Oliveira' });

		const updatedCustomer = await prisma.customer.findFirst({
			where: { email: customer.email },
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Customer updated successfully');
		expect(updatedCustomer).toHaveProperty('fullName');
		expect(updatedCustomer?.fullName).toBe('Roberto Oliveira');
	});

	it('should be error update customer', async () => {
		const response = await supertest(app)
			.patch('/customers/teste')
			.set('authorization', `Bearer ${await getToken()}`)
			.send({ fullName: 'Roberto Oliveira' });

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Error when updating customer');
	});

	it('should be delete customer', async () => {
		const deleteCustomer = await prisma.customer.findFirst({
			where: { email: customer.email },
		});
		const response = await supertest(app)
			.delete(`/customers/${deleteCustomer?.id}`)
			.set('authorization', `Bearer ${await getToken()}`);

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('success');
		expect(response.body.success).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Customer deleted successfully');
	});

	it('should be error delete customer', async () => {
		const deleteCustomer = await prisma.customer.findFirst({
			where: { email: customer.email },
		});
		const response = await supertest(app)
			.delete(`/customers/${deleteCustomer?.id}`)
			.set('authorization', `Bearer ${await getToken()}`);

		expect(response.statusCode).toBe(400);
		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBeTruthy();
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Error deleting customer');
	});

	afterAll(async () => {
		await prisma.customer.deleteMany();
		await prisma.address.deleteMany();
	});
});
