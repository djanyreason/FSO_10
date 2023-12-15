import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { useEffect } from 'react';

import useAuthStorage from '../hooks/useAuthStorage';

const doLogout = async (authStorage, apolloClient) => {
	await authStorage.removeAccessToken();
	apolloClient.resetStore();
};

const LogOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const navigate = useNavigate();

	useEffect(() => {
		doLogout(authStorage, apolloClient);
		navigate('/');
	}, []);

	return null;
};

export default LogOut;
