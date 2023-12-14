import { View, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	details: {
		display: 'flex',
		alignItems: 'flex-start',
		flexGrow: 1,
		flex: 1,
	},
	language: {
		backgroundColor: theme.colors.primary,
		color: 'white',
		padding: 5,
		paddingTop: 3,
		paddingBottom: 4,
		borderRadius: 5,
		marginTop: 3,
	},
	textSpacing: {
		marginBottom: 3,
	},
});

const RepoItemDetails = ({ repo }) => {
	return (
		<View style={styles.details}>
			<Text
				fontWeight={'bold'}
				fontSize={'subheading'}
				style={styles.textSpacing}
			>
				{repo.fullName}
			</Text>
			<Text style={styles.textSpacing}>{repo.description}</Text>
			<Text style={[styles.language, styles.textSpacing]}>{repo.language}</Text>
		</View>
	);
};

export default RepoItemDetails;
