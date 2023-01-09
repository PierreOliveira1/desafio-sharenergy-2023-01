export interface ICustomers {
	fullName: string;
	email: string;
	phoneNumber: string;
	cpf: string;
	address: IAddress;
}

export interface IAddress {
	street: string;
	number: number;
	district: string;
	city: string;
	state: string;
	country: string;
	zipCode: string;
	complement: string;
}
