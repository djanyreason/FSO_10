import { StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepoItemStats from './RepoItemStats';
import RepoItemHeader from './RepoItemHeader';
import OpenRepoButton from './OpenRepoButton';
import theme from '../../theme';

const styles = StyleSheet.create({
	RepoItem: {
		backgroundColor: 'white',
		padding: theme.layout.buffer * 2,
		display: 'flex',
		maxWidth: '100%',
	},
});

const RepositoryItem = ({ repo, solo }) => {
	const navigate = useNavigate();

	const onPress = () => {
		navigate(`/repo/${repo.id}`);
	};

	return (
		<Pressable
			testID='repositoryItem'
			style={styles.RepoItem}
			onPress={onPress}
		>
			<RepoItemHeader repo={repo} />
			<RepoItemStats repo={repo} />
			{solo ? <OpenRepoButton url={repo.url} /> : null}
		</Pressable>
	);
};

export default RepositoryItem;
