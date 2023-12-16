import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../../hooks/useSignIn';
import useCreateUser from '../../hooks/useCreateUser';
import Text from '../Text';
import FormikTextInput from '../Text/FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		backgroundColor: 'white',
		padding: theme.layout.buffer * 3,
		paddingTop: 0,
	},
	input: {
		marginTop: theme.layout.buffer * 3,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: theme.layout.borderRadius,
		padding: theme.layout.buffer,
	},
	button: {
		marginTop: theme.layout.buffer * 3,
		borderRadius: theme.layout.borderRadius,
		backgroundColor: theme.colors.primary,
		display: 'flex',
		alignItems: 'center',
		padding: theme.layout.buffer * 2,
	},
	text: {
		color: 'white',
	},
});

const initialValues = {
	username: '',
	password: '',
	confirmation: '',
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(5, 'Username must be at least 5 characters long')
		.max(50, 'Username may not be more than 50 characters long'),
	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password must be at least 5 characters long')
		.max(50, 'Password may not be more than 50 characters long'),
	confirmation: yup
		.string()
		.oneOf(
			[yup.ref('password'), null],
			'Password confirmation must match password'
		)
		.required('Password confirmation is required'),
});

const UserForm = ({ onSubmit }) => {
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
			<FormikTextInput
				name='confirmation'
				placeholder='Password confirmation'
				style={styles.input}
				secureTextEntry
			/>
			<Pressable onPress={onSubmit} style={styles.button}>
				<Text style={styles.text} fontWeight={'bold'}>
					Sign up
				</Text>
			</Pressable>
		</View>
	);
};

const NewUserForm = () => {
	const navigate = useNavigate();
	const [createUser] = useCreateUser();
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const userData = await createUser({ username, password });
		} catch (error) {
			console.log(error);
		}

		try {
			const signInData = await signIn({ username, password });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <UserForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default NewUserForm;
