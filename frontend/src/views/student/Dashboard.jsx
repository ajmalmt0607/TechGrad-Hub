import React, { useContext, useEffect, useState } from "react";
import { Search, Book, CheckCircle, Award, FilePenLine } from "lucide-react";
import moment from "moment";
import UserData from "../plugins/UserData";
import useAxios from "../../utils/useAxios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { ProfileContext } from "../plugins/Context";

export default function Dashboard() {
	const [courses, setCourses] = useState([]);
	const [stats, setStats] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [profile, setProfile] = useContext(ProfileContext);

	console.log(profile);

	const fetchData = () => {
		setFetching(true);
		useAxios()
			.get(`student/summary/${UserData()?.user_id}/`)
			.then((res) => {
				console.log(res.data[0]);
				setStats(res.data[0]);
				console.log(stats);
			});

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

	// Skeleton for tbody rows
	const SkeletonRow = () => (
		<tr className="animate-pulse">
			<td className="px-6 py-4">
				<div className="flex items-center">
					<Skeleton circle height={40} width={40} />
					<div className="ml-4">
						<Skeleton width={200} height={20} />
						<Skeleton width={100} height={16} className="mt-2" />
					</div>
				</div>
			</td>
			<td className="px-6 py-4">
				<Skeleton width={80} height={20} />
			</td>
			<td className="px-6 py-4 text-center">
				<Skeleton width={50} height={20} />
			</td>
			<td className="px-6 py-4 text-center">
				<Skeleton width={50} height={20} />
			</td>
			<td className="px-6 py-4">
				<Skeleton width="100%" height={10} />
			</td>
			<td className="px-6 py-4">
				<Skeleton width={80} height={30} />
			</td>
		</tr>
	);

	return (
		<div className="space-y-8">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div className="flex items-center">
					<div className="w-12 h-12 mr-2 rounded-full overflow-hidden">
						<img className="w-full" src={profile.image} alt="" />
					</div>
					<div>
						<h1 className="text-2xl font-bold">{profile.full_name}</h1>
						<p className="text-gray-500 dark:text-gray-400">{profile.about}</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-2">
					<Link
						to={"/student/edit-profile"}
						className="flex px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 dark:bg-purple-500 dark:hover:bg-purple-600"
					>
						<FilePenLine className="mr-1" /> Edit Profile
					</Link>
					<button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
						Settings
					</button>
					<button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
						Contact Support
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Total Courses</h3>
						<Book className="h-6 w-6 text-purple-600 dark:text-purple-400" />
					</div>
					<p className="text-3xl font-bold mt-2">{stats.total_courses}</p>
				</div>
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Completed Lessons</h3>
						<CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
					</div>
					<p className="text-3xl font-bold mt-2">{stats.completed_lessons}</p>
				</div>
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Achieved Certificates</h3>
						<Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
					</div>
					<p className="text-3xl font-bold mt-2">
						{stats.achieved_certificates}
					</p>
				</div>
			</div>

			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-bold">Courses</h2>
				</div>
				<div className="flex flex-wrap items-center gap-2">
					{["All Courses", "In Progress", "Completed"].map((status) => (
						<button
							key={status}
							className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
						>
							{status}
						</button>
					))}
				</div>
				<div className="flex items-center space-x-2">
					<div className="relative flex-1">
						<input
							type="search"
							placeholder="Search Your Courses"
							className="w-full pl-10 pr-4  py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							onChange={handleSearch}
						/>
						<Search
							className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
							size={20}
						/>
					</div>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Courses
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Enrolled
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
							{/* Show Skeleton Rows when fetching */}
							{fetching &&
								[...Array(5)].map((_, index) => <SkeletonRow key={index} />)}
							{!fetching &&
								courses?.map((c, index) => (
									<tr key={index}>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<img
													className="h-10 w-12 rounded"
													src={c.course.image}
													alt="course-image"
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
										<td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 dark:text-gray-400">
											{moment(c.date).format("DD MMM YYYY")}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-400">
											{c.lectures?.length}
										</td>
										<td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
											{c.completed_lesson?.length}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div
													className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
													style={{
														width: `${
															c.lectures?.length > 0
																? (c.completed_lesson?.length /
																		c.lectures?.length) *
																	100
																: 0
														}%`,
													}}
												></div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
											{c.completed_lesson?.length < 1 && (
												<Link
													to={`/student/courses/${c.enrollment_id}/`}
													className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
												>
													Start
												</Link>
											)}
											{c.completed_lesson?.length > 0 && (
												<Link
													to={`/student/courses/${c.enrollment_id}/`}
													className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
												>
													Continue
												</Link>
											)}
										</td>
									</tr>
								))}

							{courses?.length < 1 && (
								<tr>
									<td className="px-6 font-medium py-6 text-center" colSpan="6">
										No courses found...
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}
