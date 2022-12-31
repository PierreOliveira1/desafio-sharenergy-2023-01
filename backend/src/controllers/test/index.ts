import { Router } from 'express';

const Test = Router();

Test.get('/', (req, res) => {
	res.status(200).send({ success: true });
});

export default Test;
