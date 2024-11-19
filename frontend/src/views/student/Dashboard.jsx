import React from "react";
import { Search, Book, CheckCircle, Award } from "lucide-react";

const courses = [
	{
		id: 1,
		title: "The Python Course: build web application",
		level: "Beginner",
		language: "French",
		enrolled: "Feb 28, 2024",
		lectures: 1,
		completed: 0,
		progress: 0,
		image: "/placeholder.svg?height=100&width=200",
	},
	{
		id: 2,
		title: "Node.js Tutorials - For beginners and professionals",
		level: "Advanced",
		language: "English",
		enrolled: "Feb 28, 2024",
		lectures: 11,
		completed: 3,
		progress: 27,
		image: "/placeholder.svg?height=100&width=200",
	},
];

export default function Dashboard() {
	return (
		<div className="space-y-8">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-2xl font-bold">Welcome, Temporibus Asperiorer</h1>
					<p className="text-gray-500 dark:text-gray-400">
						tepu@mailinator.com
					</p>
				</div>
				<div className="flex flex-wrap gap-2">
					<button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
						Create New Course
					</button>
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
					<p className="text-3xl font-bold mt-2">2</p>
				</div>
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Complete Lessons</h3>
						<CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
					</div>
					<p className="text-3xl font-bold mt-2">3</p>
				</div>
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Achieved Certificates</h3>
						<Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
					</div>
					<p className="text-3xl font-bold mt-2">0</p>
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
							{courses.map((course) => (
								<tr key={course.id}>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<img
												className="h-10 w-10 rounded-full"
												src={course.image}
												alt=""
											/>
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-900 dark:text-white">
													{course.title}
												</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
														{course.level}
													</span>
													<span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
														{course.language}
													</span>
												</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 dark:text-gray-400">
										{course.enrolled}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-400">
										{course.lectures}
									</td>
									<td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
										{course.completed}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
											<div
												className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
												style={{ width: `${course.progress}%` }}
											></div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
										<button className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300">
											Continue
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}
