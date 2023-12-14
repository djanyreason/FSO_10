import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
	stat: {
		display: 'flex',
		alignItems: 'center',
	},
});

const RepoItemStat = ({ num, desc }) => {
	const displayNum =
		num >= 1000
			? Math.floor(num / 1000) + Math.round((num % 1000) / 100) / 10 + 'k'
			: num;
	return (
		<View style={styles.stat}>
			<Text fontWeight={'bold'}>{displayNum}</Text>
			<Text>{desc}</Text>
		</View>
	);
};

export default RepoItemStat;
