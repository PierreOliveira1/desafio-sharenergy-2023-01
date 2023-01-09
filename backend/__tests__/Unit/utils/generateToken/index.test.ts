import { generateToken } from '@utils/generateToken';
import { verifyToken } from '../../../utils/verifyToken';

describe('Generate token', () => {
	it('should create a token valid', async () => {
		const token = await generateToken('teste');

		const isValid = verifyToken(token);
		expect(isValid).toBeTruthy();
	});
});
