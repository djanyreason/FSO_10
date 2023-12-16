import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
	score: {
		flexGrow: 0,
		width: theme.layout.icon + theme.layout.borderRadius,
		height: theme.layout.icon + theme.layout.borderRadius,
		margin: theme.layout.buffer * 2,
		marginLeft: theme.layout.buffer * 2 - theme.layout.borderRadius,
		marginTop: theme.layout.borderRadius,
		borderWidth: theme.layout.borderRadius,
		borderColor: theme.colors.primary,
		borderRadius: Math.floor(theme.layout.icon + theme.layout.borderRadius) / 2,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Score = ({ rating }) => {
	return (
		<View style={styles.score}>
			<Text fontWeight={'bold'} style={{ color: theme.colors.primary }}>
				{rating}
			</Text>
		</View>
	);
};

export default Score;
