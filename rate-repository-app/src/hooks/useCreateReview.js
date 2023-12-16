import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW, {
		onCompleted: (result) => {
			return result;
		},
		onError: (error) => {
			throw error;
		},
	});

	const createReview = async ({ ownerName, rating, repositoryName, text }) => {
		const res = await mutate({
			variables: { review: { ownerName, rating, repositoryName, text } },
		});

		return res;
	};

	return [createReview, result];
};

export default useCreateReview;
