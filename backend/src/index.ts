import { createServer } from 'node:http';
import app from './app';
import { SERVER_PORT } from './config/envs';

const Server = createServer(app);

Server.listen(SERVER_PORT, () => {
	console.log('Is running!');
});
