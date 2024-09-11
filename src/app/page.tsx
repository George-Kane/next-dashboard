'use client';
import GrantCard from '@/components/GrantCard';
import GrantOpportunitiesTable from '@/components/GrantOpportunitiesTable';
import FeedbackPopup from '@/components/FeedbackPopup';
import { GET_GRANTS_AND_FEEDBACKS } from '@/graphql/mutations';
import { useQuery } from '@apollo/client';

export default function Home() {
	let grants, feedbacks;
	const { data, loading } = useQuery(GET_GRANTS_AND_FEEDBACKS);

	if (loading) {
		return <div>loading.....</div>;
	}

	grants = data?.grants;
	feedbacks = data?.feedbacks;

	const dislikes = feedbacks.map(
		(feedback: { dislike_grant_id: number }) => feedback.dislike_grant_id
	);
	const likes = feedbacks.map(
		(feedback: { like_grant_id: number }) => feedback.like_grant_id
	);

	const filteredGrants = grants.filter(
		(grant: { id: number }) =>
			!dislikes.includes(grant.id) && !likes.includes(grant.id)
	);
	const likedGrants = grants.filter((grant: { id: number }) =>
		likes.includes(grant.id)
	);

	return (
		<main className="py-16 mx-auto max-w-7xl">
			<h2 className="text-xl text-gray-800 mb-4">New Matches</h2>
			<div className="flex flex-row">
				{filteredGrants.map((grant: { id: number }, index: number) =>
					index <= 3 ? (
						<GrantCard grant={grant} key={grant.id} />
					) : null
				)}
			</div>
			<h2 className="text-xl text-gray-800 mb-4 mt-16">
				All Grant Opportunities
			</h2>
			<GrantOpportunitiesTable likedGrants={likedGrants} />
			<FeedbackPopup />
		</main>
	);
}
