import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { StyleSheet } from 'react-native';

import TextInput from '../Text/TextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
	TextInput: {
		margin: theme.layout.buffer * 2,
		marginBottom: 0,
		padding: theme.layout.buffer,
		borderRadius: theme.layout.borderRadius,
		backgroundColor: 'white',
	},
});

const RepoItemSearchBox = ({ updateFilter }) => {
	const [filter, setFilter] = useState('');
	const [debouncedFilter] = useDebounce(filter, 500);

	useEffect(() => {
		updateFilter(debouncedFilter);
	}, [debouncedFilter]);

	return (
		<TextInput
			value={filter}
			onChangeText={setFilter}
			style={styles.TextInput}
		/>
	);
};

export default RepoItemSearchBox;
