import { CORS_ORIGINS } from '@config/envs';
import { CorsOptions } from 'cors';

const corsConfig: CorsOptions = {
	origin: CORS_ORIGINS,
};

export { corsConfig };
