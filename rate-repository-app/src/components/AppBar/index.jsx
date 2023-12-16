import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../../theme';

import useCheckLogin from '../../hooks/useCheckLogin';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.header,
		paddingLeft: theme.layout.buffer * 2,
		paddingRight: theme.layout.buffer * 2,
		paddingBottom: theme.layout.buffer * 2,
		marginTop: theme.layout.buffer * 2,
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
