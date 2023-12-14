import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	NavButton: {
		padding: 2,
		paddingTop: 1,
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 4,
		marginRight: 4,
		backgroundColor: theme.colors.primary,
	},
});

const AppBarTab = ({ route, children }) => {
	return (
		<Pressable style={styles.NavButton}>
			<Link to={route}>
				<Text color='header'>{children}</Text>
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
