import { FlatList, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';

import RepositoryItem from './RepositoryItem';
import RepoListHeader from './RepoListHeader';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
	renderHeader = () => {
		const { updateVariables, updateFilter } = this.props;

		return (
			<RepoListHeader
				updateVariables={updateVariables}
				updateFilter={updateFilter}
			/>
		);
	};

	render() {
		const { repositories } = this.props;

		const repositoryNodes = repositories
			? repositories.edges.map((edge) => edge.node)
			: [];
		return (
			<FlatList
				ListHeaderComponent={this.renderHeader}
				data={repositoryNodes}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item }) => <RepositoryItem repo={item} solo={false} />}
			/>
		);
	}
}

const RepositoryList = () => {
	const [variables, setVariables] = useState({
		orderBy: 'CREATED_AT',
		orderDirection: 'DESC',
	});
	const [filter, setFilter] = useState('');

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

	const updateFilter = (newVal) => {
		setFilter(newVal);
	};

	const { repositories } = useRepositories({
		...variables,
		searchKeyword: filter,
	});

	return (
		<RepositoryListContainer
			repositories={repositories}
			updateVariables={updateVariables}
			updateFilter={updateFilter}
		/>
	);
};

export default RepositoryList;
