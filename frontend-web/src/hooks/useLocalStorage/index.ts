import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string) {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}
		try {
			const item = window.localStorage.getItem(key);

			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	const setValue = (value: string | ((value: string) => void)) => {
		try {
			const valueToStore =
        value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);

			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			throw new Error('Error with local storage');
		}
	};

	return [storedValue, setValue];
}

export { useLocalStorage };
