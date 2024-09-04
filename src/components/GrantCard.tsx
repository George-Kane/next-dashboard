import React from 'react';
import { Heart, ThumbsUp, ThumbsDown, Github } from 'lucide-react';

const GrantCard = ({ grant }) => {
	return (
		<div className="w-1/4 rounded-xl border border-gray-200 hover:border-orange-400 bg-white shadow-md relative group h-full p-4 m-2">
			<div className="flex items-center justify-between mb-2">
				<div className="flex items-center">
					<Github className="w-10 h-10 text-black mr-2" />
				</div>
				<div className="flex space-x-2">
					<ThumbsUp className="w-5 h-5 text-gray-400" />
					<ThumbsDown className="w-5 h-5 text-gray-400" />
				</div>
			</div>
			<span className="text-gray-600 font-medium">
				{grant.foundation}
			</span>
			<h2 className="text-xl text-gray-800 mb-4">{grant.title}</h2>

			<div className="flex mb-4">
				<div className="w-1/2 bg-orange-50 rounded-lg p-3 mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-coins w-6 h-6 text-orange-400 mb-1"
					>
						<circle cx="8" cy="8" r="6" />
						<path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
						<path d="M7 6h1v4" />
						<path d="m16.71 13.88.7.71-2.82 2.82" />
					</svg>
					<div className="text-2xl font-bold text-orange-400">
						{grant.avgAmount.toLocaleString()}
					</div>
					<div className="text-sm text-gray-600">Avg Amount</div>
				</div>
				<div className="w-1/2 bg-gray-100 rounded-lg p-3">
					<div className="text-sm text-gray-600 mb-1">Deadline</div>
					<div className="font-medium text-gray-800 border-b border-gray-300 pb-1">
						{new Intl.DateTimeFormat('en-GB', {
							day: '2-digit',
							month: 'long',
						}).format(new Date(grant.deadline))}
					</div>
					<div className="text-sm text-gray-600 mt-2">
						Getting Started
					</div>
					<div className="font-medium text-gray-800">
						Apply Online
					</div>
				</div>
			</div>

			<div className="mb-4 flex flex-row justify-between">
				<span className="text-sm text-gray-600">Location</span>
				<div className="font-medium text-gray-800">
					{grant.location}
				</div>
			</div>

			<div className="mb-4">
				<span className="text-sm text-gray-600">Area of Funding</span>
				<div className="flex flex-wrap gap-2 mt-1">
					{grant.areasOfFunding.map((area: string, index: number) => (
						<span
							key={index}
							className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
						>
							{area}
						</span>
					))}
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 p-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-300">
					Apply here
				</button>
			</div>
		</div>
	);
};

export default GrantCard;
