import React, { FC } from 'react';
import { IAppManager } from './types';
import {AppContext} from './context';

export const AppManager:FC<IAppManager> = ({ children, appData }) => {
    const hasAppData = !!appData;

    return (
        <AppContext.Provider value={{appData, hasAppData}}>
            {children}
        </AppContext.Provider>
    );
};


export default AppManager;
