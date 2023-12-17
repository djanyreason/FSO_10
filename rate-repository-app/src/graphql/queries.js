import { gql } from '@apollo/client';

import { REPO_INFO, REVIEW_INFO, PAGE_INFO } from './fragments';
import ReviewItem from '../components/ReviewItem';

export const GET_REPOSITORIES = gql`
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
			first: $first
			after: $after
		) {
			totalCount
			edges {
				node {
					...RepoDetails
				}
				cursor
			}
			pageInfo {
				...PageCursorInfo
			}
		}
	}
	${REPO_INFO}
	${PAGE_INFO}
`;

export const GET_ONE_REPO = gql`
	query OneRepo($repositoryId: ID!, $first: Int, $after: String) {
		repository(id: $repositoryId) {
			...RepoDetails
			reviews(first: $first, after: $after) {
				edges {
					node {
						...ReviewInfo
						user {
							id
							username
						}
					}
					cursor
				}
				pageInfo {
					...PageCursorInfo
				}
			}
		}
	}
	${REPO_INFO}
	${REVIEW_INFO}
	${PAGE_INFO}
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
