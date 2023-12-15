import { useMutation } from '@apollo/client';

import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHENTICATE, {
		onError: (error) => {
			throw error;
		},
	});

	const signIn = async ({ username, password }) => {
		try {
			await mutate({ variables: { credentials: { username, password } } });
		} catch (error) {
			throw error;
		}

		return result;
	};

	return [signIn, result];
};

export default useSignIn;
