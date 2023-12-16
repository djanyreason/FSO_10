import { gql } from '@apollo/client';

import { REPO_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
	) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
						id
						text
						rating
						createdAt
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
`;

export const CHECK_LOGIN = gql`
	query Me {
		me {
			id
			username
		}
	}
`;
