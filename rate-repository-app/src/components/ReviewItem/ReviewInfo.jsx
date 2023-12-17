import { View, StyleSheet } from 'react-native';

import Score from './Score';
import Details from './Details';
import theme from '../../theme';

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
	},
});

const ReviewInfo = ({ item, byUser }) => {
	return (
		<View style={styles.item}>
			<Score rating={item.rating} />
			<Details
				username={byUser ? item.repository.fullName : item.user.username}
				date={item.createdAt}
				review={item.text}
			/>
		</View>
	);
};

export default ReviewInfo;
