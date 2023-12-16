import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const OrderPicker = ({ updateVariables }) => {
	const [selected, setSelected] = useState('Latest repositories');
	return (
		<Picker
			selectedValue={selected}
			onValueChange={(itemValue, itemIndex) => {
				setSelected(itemValue);
				updateVariables(itemValue);
			}}
		>
			<Picker.Item label='Latest repositories' value='latest repositories' />
			<Picker.Item
				label='Highest rated repositories'
				value='Highest rated repositories'
			/>
			<Picker.Item
				label='Lowest rated repositories'
				value='Lowest rated repositories'
			/>
		</Picker>
	);
};

export default OrderPicker;
