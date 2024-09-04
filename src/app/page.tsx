import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import GrantCard from '@/components/GrantCard';

export default async function Home() {
	const {
		data: { grants },
	} = await client.query({
		query: gql`
			query Grants {
				grants {
					areasOfFunding
					avgAmount
					deadline
					foundation
					id
					location
					matchDate
					status
					title
				}
			}
		`,
	});
	console.log(grants);

	return (
		<main className="py-16 mx-auto max-w-7xl">
			<h2 className="text-xl text-gray-800 mb-4">New Matches</h2>
			<div className="flex flex-row">
				{grants.map((grant, index) =>
					index <= 3 ? (
						<GrantCard grant={grant} key={grant.id} />
					) : null
				)}
			</div>
		</main>
	);
}
