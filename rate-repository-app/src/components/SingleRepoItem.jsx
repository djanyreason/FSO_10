import { useParams } from 'react-router-native';
import { View } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useSingleRepo from '../hooks/useSingleRepo';

const SingleRepoItem = () => {
	const { id } = useParams();

	const { repository } = useSingleRepo(id);

	if (!repository) return null;

	return <RepositoryItem repo={repository} solo={true} />;
};

export default SingleRepoItem;
