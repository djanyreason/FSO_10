import { View, StyleSheet, Alert } from 'react-native';
import * as Linking from 'expo-linking';

import ReviewActionButton from './ReviewActionButton';
import useDeleteReview from '../../hooks/useDeleteReview';
import theme from '../../theme';

const styles = StyleSheet.create({
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

const FooterButtons = ({ url, id, refetch }) => {
	const [deleteReview] = useDeleteReview();

	const confirmDelete = () => {
		Alert.alert(
			'Delete review',
			'Are you sure you want to delete this review?',
			[
				{
					text: 'Cancel',
					onPress: () => null,
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: () => {
						deleteReview(id);
						refetch();
					},
					style: 'destructive',
				},
			]
		);
	};

	return (
		<View style={styles.buttons}>
			<ReviewActionButton
				color={theme.colors.primary}
				text={'View repository'}
				onClick={() => Linking.openURL(url)}
			/>
			<ReviewActionButton
				color={'firebrick'}
				text={'Delete review'}
				onClick={confirmDelete}
			/>
		</View>
	);
};

export default FooterButtons;
