import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const [mutate, result] = useMutation(AUTHENTICATE, {
		onCompleted: (result) => {
			return result;
		},
		onError: (error) => {
			throw error;
		},
	});

	const signIn = async ({ username, password }) => {
		const res = await mutate({
			variables: { credentials: { username, password } },
		});
		await authStorage.setAccessToken(res.data.authenticate.accessToken);

		apolloClient.resetStore();

		return res;
	};

	return [signIn, result];
};

export default useSignIn;
