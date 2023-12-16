import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import ReviewItem from '../ReviewItem';
import useSingleRepo from '../../hooks/useSingleRepo';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepoItem = () => {
	const { id } = useParams();

	const { repository } = useSingleRepo(id);

	if (!repository) return null;

	const reviews = repository.reviews.edges.map((edge) => edge.node);

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => <ReviewItem item={item} />}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={
				<View>
					<RepositoryItem repo={repository} solo={true} />
					{ItemSeparator()}
				</View>
			}
			ItemSeparatorComponent={ItemSeparator}
		/>
	);
};

export default SingleRepoItem;
