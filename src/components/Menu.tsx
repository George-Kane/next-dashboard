'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MenuBar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<span className="text-2xl font-bold text-indigo-600">
								Vee
							</span>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a
									href="#"
									className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
								>
									Social media
								</a>
								<div className="relative">
									<button
										onClick={() =>
											setIsDropdownOpen(!isDropdownOpen)
										}
										className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
									>
										Grants
										<ChevronDown className="ml-1 h-4 w-4" />
									</button>
									{isDropdownOpen && (
										<div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
											<div
												className="py-1"
												role="menu"
												aria-orientation="vertical"
												aria-labelledby="options-menu"
											>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
													role="menuitem"
												>
													Posts approval
												</a>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
													role="menuitem"
												>
													Social calendar
												</a>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							<button className="bg-gray-100 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="sr-only">
									View notifications
								</span>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MenuBar;
