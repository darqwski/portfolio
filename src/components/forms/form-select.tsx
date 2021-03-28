import React, { FC } from 'react';
import Select from './Select';
import WithLabel from './with-label';
import { useFormDataContext } from '@/context/form-data-manager/context';
import { IFormSelect } from '@/components/forms/types';

const FormSelect:FC<IFormSelect> = ({ data, label, name }) => {
	const { setField, formData: { [name]: value } } = useFormDataContext();

	return (
		<WithLabel label={`Select ${label}`}>
			<Select
				selected={value}
				data={data}
				dataName={label}
				onChange={setField(name)}
				name={name}
			/>
		</WithLabel>
	);
};

export default FormSelect;
