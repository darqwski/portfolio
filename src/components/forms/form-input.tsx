import React from 'react';
import WithLabel from './with-label';
import { useFormDataContext } from '@/context/form-data-manager/context';
import { IFormInput } from '@/components/forms/types';

const FormInput: React.FC<IFormInput> = ({ label, name, white, ...rest }) => {
	const { setField, formData: { [name]: value = '' } } = useFormDataContext();

	return (
		<WithLabel label={label} white={white}>
			<input name={name} onChange={setField(name)} value={value} {...rest} />
		</WithLabel>
	);
};

export default FormInput;
