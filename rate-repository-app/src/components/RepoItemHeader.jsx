import { View, StyleSheet, Image, Dimensions } from 'react-native';

import RepoItemDetails from './RepoItemDetails';

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	logo: {
		flexGrow: 0,
		width: 50,
		height: 50,
		margin: 10,
		marginTop: 0,
		borderRadius: 5,
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
