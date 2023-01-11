import { API_URL, TOKEN_KEY } from '../../config/envs';

class ApiError extends Error {
	code: number;
	constructor(
		code: number,
		message?: string | undefined,
		options?: ErrorOptions | undefined,
	) {
		super(message, options);
		this.code = code;
	}
}

async function fetchApi(url: string, init?: RequestInit | undefined): Promise<Response> {
	const token = localStorage.getItem(TOKEN_KEY);

	const response = await fetch(API_URL + url, {
		...init,
		headers: {
			Authorization: token ? `Bearer ${token}` : '',
			...init?.headers,
		}
	});

	if(response.status >= 200 && response.status < 300) {
		return response;
	} else {
		const { message } = (await response.json()) as { message: string };

		throw new ApiError(response.status, `${message}`);
	}
}

export { fetchApi };
