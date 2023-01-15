import { HttpCodeList } from '../dtos/httpCodeList';

const httpCodesStorage: HttpCodeList[] = [
	{
		id: 1,
		session: 'Respostas de informação',
		httpCodes: [100, 101, 102, 103]
	},
	{
		id: 2,
		session: 'Respostas de sucesso',
		httpCodes: [200, 201, 202, 203, 204, 205, 206, 207, 208, 226]
	},
	{
		id: 3,
		session: 'Redirecionamentos',
		httpCodes: [300, 301, 302, 303, 304, 305, 306, 307, 308]
	},
	{
		id: 4,
		session: 'Erros do cliente',
		httpCodes: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451]
	},
	{
		id: 5,
		session: 'Erros do servidor',
		httpCodes: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511]
	}
];

export { httpCodesStorage };
