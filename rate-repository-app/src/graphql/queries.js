import { gql } from '@apollo/client';

import { REPO_INFO, REVIEW_INFO } from './fragments';
import ReviewItem from '../components/ReviewItem';

export const GET_REPOSITORIES = gql`
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
		) {
			edges {
				node {
					...RepoDetails
				}
			}
		}
	}
	${REPO_INFO}
`;

export const GET_ONE_REPO = gql`
	query OneRepo($repositoryId: ID!) {
		repository(id: $repositoryId) {
			...RepoDetails
			reviews {
				edges {
					node {
						...ReviewInfo
						user {
							id
							username
						}
					}
				}
			}
		}
	}
	${REPO_INFO}
	${REVIEW_INFO}
`;

export const CHECK_LOGIN = gql`
	query Me($includeReviews: Boolean = false) {
		me {
			id
			username
			reviews @include(if: $includeReviews) {
				edges {
					node {
						...ReviewInfo
						repository {
							fullName
							url
						}
					}
				}
			}
		}
	}
	${REVIEW_INFO}
`;
