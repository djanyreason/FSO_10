import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepoItem from './RepositoryList/SingleRepoItem';
import NewReviewForm from './NewReviewForm';
import NewUserForm from './NewUserForm';
import AppBar from './AppBar';
import SignIn from './SignIn';
import LogOut from './SignIn/LogOut';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.mainBackground,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<Routes>
				<Route path='/repo/:id' element={<SingleRepoItem />} />
				<Route path='/newuser' element={<NewUserForm />} />
				<Route path='/review' element={<NewReviewForm />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/logout' element={<LogOut />} />
				<Route path='/' element={<RepositoryList />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</View>
	);
};

export default Main;
