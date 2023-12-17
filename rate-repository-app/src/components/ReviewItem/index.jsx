import { View, StyleSheet } from 'react-native';

import FooterButtons from './FooterButtons';
import ReviewInfo from './ReviewInfo';
import theme from '../../theme';

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		padding: theme.layout.buffer * 2,
		backgroundColor: 'white',
		alignItems: 'stretch',
	},
});

const ReviewItem = ({ item, byUser, refetch }) => {
	return (
		<View style={styles.item}>
			<ReviewInfo item={item} byUser={byUser} />
			{byUser ? (
				<FooterButtons
					url={item.repository.url}
					id={item.id}
					refetch={refetch}
				/>
			) : null}
		</View>
	);
};

export default ReviewItem;
