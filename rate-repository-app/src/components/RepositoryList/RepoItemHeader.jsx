import { View, StyleSheet, Image, Dimensions } from 'react-native';

import RepoItemDetails from './RepoItemDetails';
import theme from '../../theme';

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	logo: {
		flexGrow: 0,
		width: theme.layout.icon,
		height: theme.layout.icon,
		margin: theme.layout.buffer * 2,
		marginTop: 0,
		borderRadius: theme.layout.borderRadius,
	},
});

const RepoItemHeader = ({ repo }) => {
	return (
		<View style={styles.header}>
			<Image style={styles.logo} source={{ uri: repo.ownerAvatarUrl }} />
			<RepoItemDetails repo={repo} />
		</View>
	);
};

export default RepoItemHeader;
