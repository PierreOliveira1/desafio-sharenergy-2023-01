import { Router } from 'express';
import fs from 'node:fs';
import path from 'node:path';

const Routes = Router();

const pathControllers = path.join(__dirname, '../controllers');
const dirs = fs.readdirSync(pathControllers);

dirs.forEach(async (dir) => {
	const { default: controller } = await import(`${pathControllers}/${dir}`);
	Routes.use(`/${dir}`, controller);
});

export default Routes;
