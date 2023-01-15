import { create } from 'zustand';

interface Actions {
	session: number;
	setSession: (value: number) => void;
}

const useSession = create<Actions>((set) => ({
	session: 0,
	setSession: (value: number) => set(() => ({ session: value })),
}));

export { useSession };
