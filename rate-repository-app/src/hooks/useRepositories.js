import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	const repoQL = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	return {
		...repoQL,
		repositories: repoQL.loading ? null : repoQL.data.repositories,
	};
};

export default useRepositories;
