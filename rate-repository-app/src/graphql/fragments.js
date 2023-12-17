import { gql } from '@apollo/client';

export const REPO_INFO = gql`
	fragment RepoDetails on Repository {
		id
		fullName
		description
		language
		forksCount
		stargazersCount
		ratingAverage
		reviewCount
		ownerAvatarUrl
		url
	}
`;

export const REVIEW_INFO = gql`
	fragment ReviewInfo on Review {
		id
		text
		rating
		createdAt
	}
`;

export const PAGE_INFO = gql`
	fragment PageCursorInfo on PageInfo {
		startCursor
		endCursor
		hasNextPage
	}
`;
