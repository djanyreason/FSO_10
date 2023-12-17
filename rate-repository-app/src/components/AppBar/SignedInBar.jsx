import { View, ScrollView } from 'react-native';

import AppBarTab from './AppBarTab';

const SignedInBar = ({ style }) => {
	return (
		<View style={style}>
			<ScrollView horizontal>
				<AppBarTab route={'/'}>Repositories</AppBarTab>
				<AppBarTab route={'/review'}>Create a review</AppBarTab>
				<AppBarTab route={'/userreviews'}>My reviews</AppBarTab>
				<AppBarTab route={'/logout'}>Sign out</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default SignedInBar;
