import { ICustomers } from '@dtos/customers';

const customer: ICustomers = {
	fullName: 'Pierre Oliveira',
	email: 'pierre@gmail.com',
	phoneNumber: '5577999999999',
	cpf: '00000000000',
	address: {
		street: 'Rua do Desafio',
		number: 174,
		district: 'Serra do Desafio',
		city: 'Barreiras',
		state: 'Bahia',
		country: 'Brasil',
		zipCode: '4353453453',
		complement: 'Perto da vitória no desafio',
	},
};

export { customer };
