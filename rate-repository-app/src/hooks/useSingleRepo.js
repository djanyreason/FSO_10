import { useQuery } from '@apollo/client';

import { GET_ONE_REPO } from '../graphql/queries';

const useSingleRepo = (variables) => {
	const { data, loading, fetchMore, ...result } = useQuery(GET_ONE_REPO, {
		variables,
		fetchPolicy: 'cache-and-network',
	});

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data?.repository.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) return;

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				...variables,
			},
		});
	};

	return {
		loading,
		fetchMore: handleFetchMore,
		repository: data?.repository,
		...result,
	};
};

export default useSingleRepo;
