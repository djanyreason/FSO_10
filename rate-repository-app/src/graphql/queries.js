import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					language
					fullName
					description
					ownerAvatarUrl
					stargazersCount
					forksCount
					reviewCount
					ratingAverage
				}
			}
		}
	}
`;

// other queries...
