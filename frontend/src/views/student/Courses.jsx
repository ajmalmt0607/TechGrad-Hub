import React, { useState, useEffect } from "react";
import { Search, Book } from "lucide-react";
import moment from "moment";

import UserData from "../plugins/UserData";
import useAxios from "../../utils/useAxios";

export default function Courses() {
	const [courses, setCourses] = useState([]);
	const [fetching, setFetching] = useState(true);

	const fetchData = () => {
		setFetching(true);

		useAxios()
			.get(`student/course-list/${UserData()?.user_id}/`)
			.then((res) => {
				console.log(res.data);
				setCourses(res.data);
				setFetching(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleSearch = (event) => {
		const query = event.target.value.toLowerCase();
		console.log(query);
		if (query === "") {
			fetchData();
		} else {
			const filteredCourses = courses.filter((c) => {
				return c.course.title.toLowerCase().includes(query);
			});
			setCourses(filteredCourses);
		}
	};

	const SkeletonRow = () => (
		<tr className="animate-pulse">
			<td className="px-6 py-4">
				<div className="flex items-center">
					<div className="h-10 w-10 rounded-full bg-gray-300"></div>
					<div className="ml-4">
						<div className="h-4 w-48 bg-gray-300 rounded"></div>
						<div className="h-3 w-32 bg-gray-300 rounded mt-2"></div>
					</div>
				</div>
			</td>
			<td className="px-6 py-4">
				<div className="h-4 w-24 bg-gray-300 rounded"></div>
			</td>
			<td className="px-6 py-4 text-center">
				<div className="h-4 w-8 bg-gray-300 rounded mx-auto"></div>
			</td>
			<td className="px-6 py-4 text-center">
				<div className="h-4 w-8 bg-gray-300 rounded mx-auto"></div>
			</td>
			<td className="px-6 py-4">
				<div className="h-8 w-24 bg-gray-300 rounded"></div>
			</td>
		</tr>
	);

	return (
		<div className="space-y-8">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-2xl font-bold">My Courses</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Start watching courses now from your dashboard page.
					</p>
				</div>
			</div>

			<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-semibold">Enrolled Courses</h2>
					<div className="flex items-center space-x-2">
						<div className="relative">
							<input
								type="search"
								placeholder="Search Your Courses"
								className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								onChange={handleSearch}
							/>
							<Search
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
								size={20}
							/>
						</div>
					</div>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Courses
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Date Enrolled
								</th>
								<th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Lectures
								</th>
								<th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Completed
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Progress
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
							{fetching
								? [...Array(3)].map((_, index) => <SkeletonRow key={index} />)
								: courses.map((c, index) => (
										<tr key={index}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<img
														className="h-10 w-10 rounded-full object-cover"
														src={c.course.image}
														alt={c.course.title}
													/>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 dark:text-white">
															{c.course.title}
														</div>
														<div className="text-sm text-gray-500 dark:text-gray-400">
															<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
																{c.course.level}
															</span>
															<span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
																{c.course.language}
															</span>
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
												{moment(c.date).format("DD MMM YYYY")}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-400">
												{c.lectures?.length}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-400">
												{c.completed_lesson?.length}
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
													<div
														className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
														style={{ width: `${27}%` }}
													></div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
												<button className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300">
													{c.completed_lesson?.length > 0
														? "Continue"
														: "Start"}
												</button>
											</td>
										</tr>
									))}
							{!fetching && courses.length === 0 && (
								<tr>
									<td
										className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
										colSpan={5}
									>
										No courses found...
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
