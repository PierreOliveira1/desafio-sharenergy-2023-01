import { create } from 'zustand';

interface Actions {
	httpCode: number;
	setHttpCode: (value: number) => void;
}

const useHttpCode = create<Actions>((set) => ({
	httpCode: 0,
	setHttpCode: (value: number) => set(() => ({ httpCode: value })),
}));

export { useHttpCode };
