import { createServer } from 'node:http';
import { SERVER_PORT } from '@config/envs';
import app from '@app';

const Server = createServer(app);

Server.listen(SERVER_PORT, () => {
	console.log('Is running!');
});
