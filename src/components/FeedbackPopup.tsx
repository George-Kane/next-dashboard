'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { X } from 'lucide-react';

import { GET_GRANTS_AND_FEEDBACKS, SUBMIT_FEEDBACK } from '@/graphql/mutations';

const FeedbackPopup = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [feedback, setFeedback] = useState('');
	const [grantID, setGrantID] = useState(0);
	const [likeOrNot, setLikeOrNot] = useState('');
	const searchParams = useSearchParams();
	const [submitFeedback, { data, loading, error }] = useMutation(
		SUBMIT_FEEDBACK,
		{
			refetchQueries: [{ query: GET_GRANTS_AND_FEEDBACKS }],
		}
	);

	useEffect(() => {
		if (
			searchParams.get('feedback') === 'like' ||
			searchParams.get('feedback') === 'dislike'
		) {
			setIsOpen(true);
			setGrantID(+searchParams.get('grantID'));
			setLikeOrNot(searchParams.get('feedback') as 'like' | 'dislike');
		}
	}, [searchParams]);

	const handleClose = () => {
		setIsOpen(false);

		const url = new URL(window.location.href);
		url.searchParams.delete('feedback');
		url.searchParams.delete('grantID');
		window.history.replaceState({}, '', url);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitFeedback({
			variables: {
				createFeedbackInput: {
					feedback,
					like_grant_id: likeOrNot === 'like' ? grantID : null,
					dislike_grant_id: likeOrNot === 'dislike' ? grantID : null,
				},
			},
		});
		setFeedback('');
		handleClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg p-6 w-full max-w-md">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">
						{likeOrNot.substring(0, 1).toUpperCase() +
							likeOrNot.substring(1)}{' '}
						Feedback
					</h2>
					<button
						onClick={handleClose}
						className="text-gray-500 hover:text-gray-700"
					>
						<X size={24} />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<textarea
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded mb-4"
						rows={4}
						placeholder="Enter your feedback here..."
						required
					></textarea>
					<button
						type="submit"
						className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-300"
					>
						Submit Feedback
					</button>
				</form>
			</div>
		</div>
	);
};

export default FeedbackPopup;
