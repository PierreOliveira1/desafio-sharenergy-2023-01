import { CORS_ORIGINS } from '@config/envs';
import { CorsOptions } from 'cors';

const corsConfig: CorsOptions = {
	origin: CORS_ORIGINS,
	methods: ['GET', 'POST', 'PATCH', 'DELETE'],
};

export { corsConfig };
