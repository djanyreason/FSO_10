import { useQuery } from '@apollo/client';

import { CHECK_LOGIN } from '../graphql/queries';

const useMyReviews = () => {
	const me = useQuery(CHECK_LOGIN, { variables: { includeReviews: true } });

	return me.loading ? null : me.data;
};

export default useMyReviews;
