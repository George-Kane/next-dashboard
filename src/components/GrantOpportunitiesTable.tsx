import { Github } from 'lucide-react';
import React from 'react';

const GrantOpportunitiesTable = ({ likedGrants }) => {
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
					{likedGrants &&
						likedGrants.map((item, index) => (
							<tr key={index} className="hover:bg-gray-50">
								<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
									<div className="flex items-center">
										<Github className="w-4 h-4 text-black mr-2" />

										<div className="text-sm font-medium text-gray-900">
											{item.foundation}
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
									<div className="text-sm text-gray-900">
										{item.title}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
									<div className="text-sm text-gray-900">
										{item.avgAmount.toLocaleString()}
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
										{new Intl.DateTimeFormat('en-GB', {
											day: '2-digit',
											month: 'long',
										}).format(new Date(item.deadline))}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
									<div className="text-sm text-gray-900">
										{new Intl.DateTimeFormat('en-GB', {
											day: '2-digit',
											month: 'long',
											year: 'numeric',
										}).format(new Date(item.matchDate))}
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
