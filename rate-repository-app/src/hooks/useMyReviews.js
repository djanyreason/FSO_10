import { useQuery } from '@apollo/client';

import { CHECK_LOGIN } from '../graphql/queries';

const useMyReviews = () => {
	const me = useQuery(CHECK_LOGIN, {
		variables: { includeReviews: true },
		fetchPolicy: 'cache-and-network',
	});

	return me.loading ? null : me;
};

export default useMyReviews;
