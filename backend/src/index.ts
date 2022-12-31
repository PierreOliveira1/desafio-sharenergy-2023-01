import { createServer } from 'node:http';
import app from './app';

const Server = createServer(app);

Server.listen(3333, () => {
	console.log('Is running!');
});
