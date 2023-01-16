interface Tabs {
	name: string;
	path: string;
}

const tabs: Tabs[] = [
	{
		path: '/',
		name: 'Usuários'
	},
	{
		path: '/http-code',
		name: 'HTTP Code'
	},
	{
		path: '/random-dog',
		name: 'Cachorros'
	},
	{
		path: '/customers',
		name: 'Clientes'
	}
];

export { tabs };
