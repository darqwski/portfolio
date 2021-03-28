import { createContext, useContext } from 'react';

export const AppContext = createContext<unknown>({});

export const useAppContext = () => useContext(AppContext);
