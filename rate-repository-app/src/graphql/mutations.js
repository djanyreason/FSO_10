import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
	mutation Mutation($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
			expiresAt
			user {
				username
			}
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation Mutation($review: CreateReviewInput) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

export const CREATE_USER = gql`
	mutation CreateUser($user: CreateUserInput) {
		createUser(user: $user) {
			username
		}
	}
`;
