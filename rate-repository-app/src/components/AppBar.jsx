import { View, StyleSheet, ScrollView } from 'react-native';
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
		display: 'flex',
		flexDirection: 'row',
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab route={'/'}>Repositories</AppBarTab>
				<AppBarTab route={'/signin'}>Sign In</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
