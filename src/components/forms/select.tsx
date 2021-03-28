import React from 'react';
import { ISelect } from '@/components/forms/types';

const Select: React.FC<ISelect> = ({
	data = [],
	name,
	dataName = '',
	selected,
	onChange
}) => {

	return (
		<select name={name} onChange={onChange}>
			<option>Select {dataName}</option>
			{data.map(({ value, text }, index)=>(
				<option
					key={`select-${name || dataName || Math.random()}-item-${index}`}
					value={value}
					selected={selected === value ? true : undefined}
				>
					{text}
				</option>
			))}
		</select>
	);
};

export default Select;
