import { useMutation } from '@apollo/client';

import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
	const [mutate, result] = useMutation(DELETE_REVIEW, {
		onCompleted: (result) => {
			return result;
		},
		onError: (error) => {
			throw error;
		},
	});

	const deleteReview = async (deleteReviewId) => {
		const res = await mutate({
			variables: { deleteReviewId },
		});

		return res;
	};

	return [deleteReview, result];
};

export default useDeleteReview;
