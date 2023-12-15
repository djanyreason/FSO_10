import { useQuery } from '@apollo/client';

import { CHECK_LOGIN } from '../graphql/queries';

const useCheckLogin = () => {
	const me = useQuery(CHECK_LOGIN);

	return me.loading ? null : me.data;
};

export default useCheckLogin;
