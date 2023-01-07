import { config } from 'dotenv';

config();

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const SERVER_PORT = Number(process.env.SERVER_PORT);
