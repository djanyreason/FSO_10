import { Pressable, StyleSheet } from 'react-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
	Button: {
		padding: theme.layout.buffer * 3,
		margin: theme.layout.buffer * 2,
		borderRadius: theme.layout.borderRadius,
		display: 'flex',
		alignItems: 'center',
		flexGrow: 1,
	},
});

const ReviewActionButton = ({ onClick, color, text }) => {
	return (
		<Pressable
			onPress={onClick}
			style={[styles.Button, { backgroundColor: color }]}
		>
			<Text style={{ color: 'white' }} fontWeight={'bold'}>
				{text}
			</Text>
		</Pressable>
	);
};

export default ReviewActionButton;
