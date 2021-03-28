import React, { useContext, useState } from 'react';
import { ModalContext } from './context';
import { IModalContext, IModalManager } from './types';
import Modal from '@/components/modal';
import { IModal } from '@/components/modal/types';

const generateId = () => `modal-${Math.floor(Math.random() * (1000))}`;

const ModalManager: React.FC<IModalManager> = ({ children }) => {
	const [modals, setModals] = useState<{[id: string]: IModal}>({});
	const addModal = ({ confirmAction, declineAction, ...rest }: IModal) => {
		const id = generateId();
		const removeModal = () => {
			// eslint-disable-next-line no-unused-vars
			const { [id]: toDelete, ...rest } = modals;
			setModals(rest);
		};
		setModals(state=>({
			...state,
			[id]: {
				...rest,
				confirmAction: () => {
					confirmAction && confirmAction();
					removeModal();
				},
				declineAction: () => {
					declineAction && declineAction();
					removeModal();
				}
			}
		}));
	};

	return (
		<ModalContext.Provider value={{ addModal }}>
			{children}
			{
				Object.entries(modals).map(([key, item])=>(
					<Modal {...item} key={key} />
				))
			}
		</ModalContext.Provider>
	);
};

export default ModalManager
