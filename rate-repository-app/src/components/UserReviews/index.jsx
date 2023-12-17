import { useNavigate } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';

import ReviewItem from '../ReviewItem';
import useMyReviews from '../../hooks/useMyReviews';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
	const me = useMyReviews();
	const navigate = useNavigate();

	if (!me || !me.me) return null;
	if (!me.me) navigate('/');

	const reviews = me.me.reviews.edges.map((edge) => edge.node);

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => <ReviewItem item={item} byUser={true} />}
			keyExtractor={({ id }) => id}
			ItemSeparatorComponent={ItemSeparator}
		/>
	);
};

export default UserReviews;
