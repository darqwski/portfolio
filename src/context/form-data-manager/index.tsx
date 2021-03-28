import React, { useContext, useState } from 'react';
import { FormDataContext } from './context';
import { IFormData, IFormDataManager } from './types';

/**
 * React Architecture
 * This one of my main ways to control data from forms,
 * Usage of this component is shown in application/form-example
 */

const FormDataManager: React.FC<IFormDataManager> = ({ initialData = {}, children }) => {
	const [formData, setFormData] = useState<IFormData>(initialData);
	const [errorMessages, setErrorMessages] = useState<string[]>([]);
	const setField = (name: string) => ({ target: { value } }: { target: { value : string}}) => {
		setFormData(data=>({ ...data, [name]: value }));
	};
	const clearForm = () => setFormData(initialData);

	const addError = (message: string) => setErrorMessages((messages)=>[...messages, message]);
	const clearErrors = () => setErrorMessages([]);

	return (
		<FormDataContext.Provider value={{
			setField,
			formData,
			setFormData,
			addError,
			clearErrors,
			clearForm,
			errorMessages
		}}>
			{children}
		</FormDataContext.Provider>
	);
};

export default FormDataManager;
