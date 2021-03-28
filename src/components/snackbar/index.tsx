import React, { useEffect } from 'react';
import { useSnackbar } from '@/context/snackbar-manager/context';
import { ISnackbar } from '@/components/snackbar/types';
import './snackbar.less';

const SnackBar: React.FC<ISnackbar> = ({ children, id, timeout = 5000 }) => {
    const { removeSnackbar } = useSnackbar();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeSnackbar(id);
            clearTimeout(timer);
        }, timeout);
    });

    return (
        <div className="snackbar" onClick={() => removeSnackbar(id)}>
            <div>{children}</div>
        </div>
    );
};

export default SnackBar;
