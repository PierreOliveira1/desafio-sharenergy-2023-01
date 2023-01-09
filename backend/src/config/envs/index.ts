import { config } from 'dotenv';

config();

export const JWT_SECRET = `${process.env.JWT_SECRET}`;
export const SERVER_PORT = Number(process.env.SERVER_PORT);
export const CORS_ORIGINS = `${process.env.CORS_ORIGINS}`.split(';');
