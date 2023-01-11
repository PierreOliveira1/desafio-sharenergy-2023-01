export interface OnSuccessLogin {
	success: boolean;
	token: string;
	refreshToken?: {
		admId: string;
		expiresIn: number;
		id: string;
	}
}
