import { create } from 'zustand';

interface Actions {
	page: number;
	setPage: (value: number) => void;
	seed: string;
	setSeed: (value: string) => void;
	search: string;
	setSearch: (value: string) => void;
}

const useInfoQuery = create<Actions>((set) => ({
	page: 1,
	setPage: (value: number) => set(() => ({ page: value })),
	seed: '',
	setSeed: (value: string) => set(() => ({ seed: value })),
	search: '',
	setSearch: (value: string) => set(() => ({ search: value })),
}));

export { useInfoQuery };
