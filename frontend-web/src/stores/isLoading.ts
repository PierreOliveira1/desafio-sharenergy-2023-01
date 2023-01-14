import { create } from 'zustand';

interface State {
	isLoading: boolean;
	setIsLoading: (state: boolean) => void;
}

const useLoading = create<State>((set) => ({
	isLoading: false,
	setIsLoading: (value) => set(() => ({ isLoading: value }))
}));

export { useLoading };
