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
