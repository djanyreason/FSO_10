import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import SignedOutBar from './SignedOutBar';
import SignedInBar from './SignedInBar';
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
		<View>
			{noLogin ? (
				<SignedOutBar style={styles.container} />
			) : (
				<SignedInBar style={styles.container} />
			)}
		</View>
	);
};

export default AppBar;
