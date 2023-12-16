import { useQuery } from '@apollo/client';

import { GET_ONE_REPO } from '../graphql/queries';

const useSingleRepo = (repositoryId) => {
	const repoQL = useQuery(GET_ONE_REPO, {
		variables: { repositoryId },
		fetchPolicy: 'cache-and-network',
	});

	return {
		...repoQL,
		repository: repoQL.loading ? null : repoQL.data.repository,
	};
};

export default useSingleRepo;
