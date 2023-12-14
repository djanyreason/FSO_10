import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.header,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		marginTop: 10,
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab>Repositories</AppBarTab>
		</View>
	);
};

export default AppBar;
