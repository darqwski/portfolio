import { createContext, useContext } from 'react';
import { ISnackbarContext } from '@/context/snackbar-manager/types';

export const SnackBarContext = createContext<ISnackbarContext>({});

export const useSnackbar = (): ISnackbarContext => useContext(SnackBarContext);
