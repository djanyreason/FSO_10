import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		backgroundColor: 'white',
		padding: 15,
		paddingTop: 0,
	},
	input: {
		marginTop: 15,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 2,
		padding: 7,
	},
	button: {
		marginTop: 15,
		borderRadius: 2,
		backgroundColor: theme.colors.primary,
		display: 'flex',
		alignItems: 'center',
		padding: 9,
	},
	text: {
		color: 'white',
	},
});

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.form}>
			<FormikTextInput
				name='username'
				placeholder='Username'
				style={styles.input}
			/>
			<FormikTextInput
				name='password'
				placeholder='Password'
				style={styles.input}
				secureTextEntry
			/>
			<Pressable onPress={onSubmit} style={styles.button}>
				<Text style={styles.text} fontWeight={'bold'}>
					Sign In
				</Text>
			</Pressable>
		</View>
	);
};

export const SignInContainer = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

const SignIn = () => {
	const navigate = useNavigate();
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
