import { FlatList, View, StyleSheet } from 'react-native';
import { useState } from 'react';

import RepositoryItem from './RepositoryItem';
import OrderPicker from './OrderPicker';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, updateVariables }) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			ListHeaderComponent={<OrderPicker updateVariables={updateVariables} />}
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <RepositoryItem repo={item} solo={false} />}
		/>
	);
};

const RepositoryList = () => {
	const [variables, setVariables] = useState({
		orderBy: 'CREATED_AT',
		orderDirection: 'DESC',
	});

	const updateVariables = (itemValue) => {
		switch (itemValue) {
			case 'Latest repositories':
				setVariables({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
				break;
			case 'Highest rated repositories':
				setVariables({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' });
				break;
			case 'Lowest rated repositories':
				setVariables({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' });
				break;
			default:
				setVariables({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
				break;
		}
	};

	const { repositories } = useRepositories(variables);

	return (
		<RepositoryListContainer
			repositories={repositories}
			updateVariables={updateVariables}
		/>
	);
};

export default RepositoryList;
