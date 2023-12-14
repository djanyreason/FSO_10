import { View, StyleSheet, Dimensions } from 'react-native';

import RepoItemStats from './RepoItemStats';
import RepoItemHeader from './RepoItemHeader';

const styles = StyleSheet.create({
	RepoItem: {
		backgroundColor: 'white',
		padding: 10,
		display: 'flex',
		maxWidth: '100%',
	},
});

const RepositoryItem = ({ repo }) => {
	return (
		<View style={styles.RepoItem}>
			<RepoItemHeader repo={repo} />
			<RepoItemStats repo={repo} />
		</View>
	);
};

export default RepositoryItem;
