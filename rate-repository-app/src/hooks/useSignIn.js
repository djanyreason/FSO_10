import { useMutation } from '@apollo/client';

import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
	const authStorage = useAuthStorage();
	const [mutate, result] = useMutation(AUTHENTICATE, {
		onCompleted: (result) => {
			authStorage.setAccessToken(result.authenticate.accessToken);
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
		const token = await authStorage.getAccessToken();
		return res;
	};

	return [signIn, result];
};

export default useSignIn;
