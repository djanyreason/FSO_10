import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
	const repoQL = useQuery(GET_REPOSITORIES, {
		variables,
		fetchPolicy: 'cache-and-network',
	});

	return {
		...repoQL,
		repositories: repoQL.loading ? null : repoQL.data.repositories,
	};
};

export default useRepositories;
