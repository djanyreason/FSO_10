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

	if (!me) return null;
	if (!me.data.me) navigate('/');

	const reviews = me.data.me.reviews.edges.map((edge) => edge.node);

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => (
				<ReviewItem item={item} byUser={true} refetch={me.refetch} />
			)}
			keyExtractor={({ id }) => id}
			ItemSeparatorComponent={ItemSeparator}
		/>
	);
};

export default UserReviews;
