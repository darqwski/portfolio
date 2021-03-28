import { createContext, useContext } from 'react';
import { IModalContext } from './types';

export const ModalContext = createContext<IModalContext>({
    addModal: () => {}
});
export const useModal = () => useContext(ModalContext);
