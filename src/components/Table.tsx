import React from 'react';

const GrantOpportunitiesTable = () => {
	const data = [
		{
			foundation: 'Robinson Foundation',
			grant: 'Robinson Foundation Grant',
			amount: '$25,000',
			status: 'Applied',
			deadline: 'January 1st',
			matchDate: '20 December 2024',
			logo: '🔶', // You can replace this with actual images/icons
		},
		{
			foundation: 'Looking Out Foundation',
			grant: 'Looking Out Foundation Grant',
			amount: '$25,000',
			status: 'Rejected',
			deadline: 'January 1st',
			matchDate: '20 December 2024',
			logo: '🔴',
		},
		{
			foundation: 'Dribble Foundation',
			grant: 'Dribble Foundation Grant',
			amount: '$25,000',
			status: 'Accepted',
			deadline: 'January 1st',
			matchDate: '20 December 2024',
			logo: '🟠',
		},
		{
			foundation: 'Walki Foundation',
			grant: 'Walki wako Foundation',
			amount: '$25,000',
			status: 'Applied',
			deadline: 'January 1st',
			matchDate: '20 December 2024',
			logo: '🟢',
		},
	];

	const statusClasses = {
		Applied: 'bg-purple-100 text-purple-800',
		Rejected: 'bg-red-100 text-red-800',
		Accepted: 'bg-green-100 text-green-800',
	};

	return (
		<div className="">
			<table className="min-w-full bg-white border border-gray-200 rounded-xl">
				<thead>
					<tr>
						<th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 tracking-wider">
							Foundation name
						</th>
						<th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 tracking-wider">
							Grant name
						</th>
						<th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 tracking-wider">
							Average amount
						</th>
						<th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 tracking-wider">
							Status
						</th>
						<th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 tracking-wider">
							Deadline
						</th>
						<th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 tracking-wider">
							Match date
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index} className="hover:bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
								<div className="flex items-center">
									<div className="text-xl mr-2">
										{item.logo}
									</div>
									<div className="text-sm font-medium text-gray-900">
										{item.foundation}
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
								<div className="text-sm text-gray-900">
									{item.grant}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
								<div className="text-sm text-gray-900">
									{item.amount}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
								<span
									className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
										statusClasses[item.status]
									}`}
								>
									{item.status}
								</span>
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
								<div className="text-sm text-gray-900">
									{item.deadline}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
								<div className="text-sm text-gray-900">
									{item.matchDate}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default GrantOpportunitiesTable;
