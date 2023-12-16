import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from './AppBarTab';

const SignedOutBar = ({ style }) => {
	return (
		<View style={style}>
			<ScrollView horizontal>
				<AppBarTab route={'/'}>Repositories</AppBarTab>
				<AppBarTab route={'/signin'}>Sign In</AppBarTab>
				<AppBarTab route={'/newuser'}>Sign Up</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default SignedOutBar;
