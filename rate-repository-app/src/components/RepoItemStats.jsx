import { View, StyleSheet } from 'react-native';

import RepoItemStat from './RepoItemStat';

const styles = StyleSheet.create({
	stats: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingTop: 5,
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
