import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useCreateReview from '../../hooks/useCreateReview';
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
	ownerName: '',
	repositoryName: '',
	rating: '',
	text: '',
};

const validationSchema = yup.object().shape({
	ownerName: yup.string().required('Repository owner name is required'),
	repositoryName: yup.string().required('Repository name is required'),
	rating: yup
		.number()
		.required('Rating is required')
		.integer('Rating must be an integer')
		.min(0, 'Rating must be 0 or more')
		.max(100, 'Rating must be 100 or less'),
});

const ReviewForm = ({ onSubmit }) => {
	return (
		<View style={styles.form}>
			<FormikTextInput
				name='ownerName'
				placeholder='Repository owner name'
				style={styles.input}
			/>
			<FormikTextInput
				name='repositoryName'
				placeholder='Repository Name'
				style={styles.input}
			/>
			<FormikTextInput
				name='rating'
				placeholder='Rating between 0 and 100'
				style={styles.input}
			/>
			<FormikTextInput
				name='text'
				placeholder='Review'
				style={styles.input}
				multiline
			/>
			<Pressable onPress={onSubmit} style={styles.button}>
				<Text style={styles.text} fontWeight={'bold'}>
					Create a review
				</Text>
			</Pressable>
		</View>
	);
};

const NewReviewForm = () => {
	const navigate = useNavigate();
	const [createReview] = useCreateReview();

	const onSubmit = async (values) => {
		const { ownerName, repositoryName, rating, text } = values;

		try {
			const { data } = await createReview({
				ownerName,
				repositoryName,
				rating: parseInt(rating),
				text,
			});
			const id = data.createReview.repositoryId;
			navigate(`/repo/${id}`);
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
			{({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default NewReviewForm;
