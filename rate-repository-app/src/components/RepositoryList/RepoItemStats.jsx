import { View, StyleSheet } from 'react-native';

import RepoItemStat from './RepoItemStat';
import theme from '../../theme';

const styles = StyleSheet.create({
	stats: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingTop: theme.layout.buffer,
	},
});

const RepoItemStats = ({ repo }) => {
	return (
		<View style={styles.stats}>
			<RepoItemStat num={repo.stargazersCount} desc='Stars' />
			<RepoItemStat num={repo.forksCount} desc='Forks' />
			<RepoItemStat num={repo.reviewCount} desc='Reviews' />
			<RepoItemStat num={repo.ratingAverage} desc='Rating' />
		</View>
	);
};

export default RepoItemStats;
