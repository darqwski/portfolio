import React from 'react';
import { Button } from 'react-materialize';
import { IModal } from '@/components/modal/types';
import './modal.css';

const Modal: React.FC<IModal> = ({
	children,
	title = 'Confirm Action',
	message,
	confirmText = 'Confirm',
	declineText = 'Cancel',
	declineAction= ()=>{},
	confirmAction= ()=>{}
}) => {
	return (
		<div className="modal-background">
			<div className="modal" >
				<div className="modal-content">
					{title && <h4>{title}</h4>}
					{message && <p>{message}</p>}
					{children}
				</div>
				<div className="modal-footer">
					<Button flat className="waves-effect waves-green" onClick={confirmAction}>{confirmText}</Button>
					<Button flat className="waves-effect waves-green" onClick={declineAction}>{declineText}</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
