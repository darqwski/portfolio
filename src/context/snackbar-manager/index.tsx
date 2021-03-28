import React, { useRef, useState } from 'react';
import { SnackBarContext } from './context';
import { ISnackbarItem } from './types';
import SnackBar from '@/components/snackbar';

/**
 * React Architecture
 * This is example of component which should appear sometimes
 */

const generateId = () => `snackbar-${Math.floor(Math.random() * (1000))}`;

const SnackBarManager: React.FC = ({ children }) => {
	const [snackbars, setSnackbars] = useState<ISnackbarItem[]>([]);
	const snackBarRef = useRef(snackbars);
	snackBarRef.current = snackbars;

	const removeSnackbar = (deleteId: string) => {
		if(snackBarRef.current.length === 0) return;
		setSnackbars(snackBarRef.current.filter(({ id })=>id != deleteId));
	};

	const addSnackBar = ({ text, timeout }: { text: string, timeout: number}) => {
		const generatedId = generateId();
		setSnackbars(([...snackBarRef.current, { id: generatedId, text, timeout }]));
	};

	return (
		<SnackBarContext.Provider value={{ addSnackBar, removeSnackbar }}>
			<>
				{children}
				{
					Object.entries(snackbars).map(([, { text, id }])=>(
						<SnackBar key={id} id={id}>
							{text}
						</SnackBar>
					))
				}
			</>
		</SnackBarContext.Provider>
	);
};

export default SnackBarManager;
