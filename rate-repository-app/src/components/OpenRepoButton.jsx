import { Pressable, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
	GitHubButton: {
		backgroundColor: theme.colors.primary,
		padding: 10,
		margin: 10,
		borderRadius: 3,
		display: 'flex',
		alignItems: 'center',
	},
});

const OpenRepoButton = ({ url }) => {
	const onClick = () => Linking.openURL(url);

	return (
		<Pressable onPress={onClick} style={styles.GitHubButton}>
			<Text style={{ color: 'white' }}>Open in GitHub</Text>
		</Pressable>
	);
};

export default OpenRepoButton;
