import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useQuery } from '@apollo/client';
import { CHECK_LOGIN } from '../graphql/queries';

import useCheckLogin from '../hooks/useCheckLogin';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.header,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
	},
	// ...
});

const AppBar = () => {
	const checkLogin = useCheckLogin();

	const noLogin = !checkLogin || !checkLogin.me;

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab route={'/'}>Repositories</AppBarTab>
				<AppBarTab route={noLogin ? '/signin' : '/logout'}>
					{noLogin ? 'Sign In' : 'Sign Out'}
				</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
