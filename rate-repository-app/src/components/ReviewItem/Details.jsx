import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
	details: {
		display: 'flex',
		alignItems: 'flex-start',
		flexGrow: 1,
		flex: 1,
	},
	textSpacing: {
		marginBottom: theme.layout.textMargin,
	},
});

const Details = ({ username, date, review }) => {
	const formattedDate = format(new Date(date), 'MM.dd.yyyy');
	return (
		<View style={styles.details}>
			<Text fontWeight={'bold'}>{username}</Text>
			<Text style={styles.textSpacing}>{formattedDate}</Text>
			<Text>{review}</Text>
		</View>
	);
};

export default Details;
