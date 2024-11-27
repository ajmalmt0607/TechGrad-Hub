// import { useState, useEffect, useContext } from "react";
// import {
// 	Users,
// 	Star,
// 	ShoppingCart,
// 	Search,
// 	ChevronLeft,
// 	ChevronRight,
// 	BookOpen,
// 	Clock,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import useAxios from "../../utils/useAxios";
// import { CartContext } from "../plugins/Context";
// import CartId from "../plugins/CartId";
// import GetCurrentAddress from "../plugins/UserCountry";
// import UserData from "../plugins/UserData";
// import Toast from "../plugins/Toast";
// import apiInstance from "../../utils/axios";

// export default function DiscoverPage() {
// 	const [courses, setCourses] = useState([]);
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [selectedLevel, setSelectedLevel] = useState("All");
// 	const [selectedLanguage, setSelectedLanguage] = useState("All");
// 	const [cartCount, setCartCount] = useContext(CartContext);

// 	const country = GetCurrentAddress().country;
// 	const userId = UserData()?.user_id;
// 	const cartId = CartId();

// 	// Pagination state
// 	const itemsPerPage = 4;
// 	const [currentPage, setCurrentPage] = useState(1);

// 	const fetchCourse = async () => {
// 		setIsLoading(true);
// 		try {
// 			const res = await useAxios().get(`/course/course-list/`);
// 			setCourses(res.data);
// 			setIsLoading(false);
// 		} catch (error) {
// 			console.log(error);
// 			setIsLoading(false);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchCourse();
// 	}, []);

// 	// Add to cart Functionality
// 	const addToCart = async (courseId, userId, price, country, cartId) => {
// 		const formdata = new FormData();
// 		// first one is the key to send the backend and the second is the key value passing from frontend
// 		formdata.append("course_id", courseId);
// 		formdata.append("user_id", userId);
// 		formdata.append("price", price);
// 		formdata.append("country_name", country);
// 		formdata.append("cart_id", cartId);

// 		try {
// 			await useAxios()
// 				.post(`course/cart/`, formdata)
// 				.then((res) => {
// 					console.log(res.data);
// 					Toast().fire({ icon: "success", title: "Added to Cart" });
// 				});

// 			// set cart count after adding to cart
// 			apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
// 				setCartCount(res.data?.length);
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	// Filter courses based on search, level, and language
// 	const filteredCourses = courses.filter((course) => {
// 		const matchesSearch = course.title
// 			.toLowerCase()
// 			.includes(searchQuery.toLowerCase());
// 		const matchesLevel =
// 			selectedLevel === "All" || course.level === selectedLevel;
// 		const matchesLanguage =
// 			selectedLanguage === "All" || course.language === selectedLanguage;
// 		return matchesSearch && matchesLevel && matchesLanguage;
// 	});

// 	// Calculate pagination
// 	const indexOfLastItem = currentPage * itemsPerPage;
// 	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// 	const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
// 	const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
// 	const PageNumbers = Array.from(
// 		{ length: totalPages },
// 		(_, index) => index + 1
// 	);

// 	// Loading skeleton component
// 	const CourseSkeleton = () => (
// 		<div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
// 			<div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
// 			<div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
// 			<div className="h-4 bg-gray-200 rounded w-1/2"></div>
// 		</div>
// 	);

// 	return (
// 		<main className="min-h-screen ">
// 			<div className="max-w-7xl  mx-auto">
// 				{/* Header Section */}
// 				<div className=" mb-7">
// 					<h1 className="text-2xl font-bold text-gray-900 mb-1">
// 						Discover Courses
// 					</h1>
// 					<p className="text-base text-gray-600 max-w-2xl">
// 						Explore our wide range of courses and start your learning journey
// 						today
// 					</p>
// 				</div>

// 				{/* Search and Filters */}
// 				<div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
// 					<div className="relative flex-1 max-w-lg">
// 						<input
// 							type="text"
// 							placeholder="Search courses..."
// 							value={searchQuery}
// 							onChange={(e) => setSearchQuery(e.target.value)}
// 							className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// 						/>
// 						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
// 					</div>
// 					<div className="flex gap-4">
// 						<select
// 							value={selectedLevel}
// 							onChange={(e) => setSelectedLevel(e.target.value)}
// 							className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// 						>
// 							<option value="All">All Levels</option>
// 							<option value="Beginner">Beginner</option>
// 							<option value="Intermediate">Intermediate</option>
// 							<option value="Advanced">Advanced</option>
// 						</select>
// 						<select
// 							value={selectedLanguage}
// 							onChange={(e) => setSelectedLanguage(e.target.value)}
// 							className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// 						>
// 							<option value="All">All Languages</option>
// 							<option value="English">English</option>
// 							<option value="Spanish">Spanish</option>
// 						</select>
// 					</div>
// 				</div>

// 				{/* Course Grid */}
// 				{isLoading ? (
// 					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// 						{[...Array(8)].map((_, index) => (
// 							<CourseSkeleton key={index} />
// 						))}
// 					</div>
// 				) : (
// 					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// 						{currentItems.map((course, index) => (
// 							<div
// 								key={index}
// 								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
// 							>
// 								<Link
// 									to={`/course-detail/${course.slug}/`}
// 									className="flex-1 flex flex-col"
// 								>
// 									<div className="relative">
// 										<img
// 											src={course.image}
// 											alt={course.title}
// 											className="w-full h-44 object-cover"
// 										/>
// 										<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
// 											${course.price}
// 										</div>
// 									</div>
// 									<div className="p-4 flex flex-col flex-1">
// 										<div className="flex items-center gap-2 mb-2">
// 											<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
// 												{course.level}
// 											</span>
// 											<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
// 												{course.language}
// 											</span>
// 										</div>
// 										<h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
// 											{course.title}
// 										</h3>
// 										<div className="flex items-center text-sm text-gray-600 mb-2">
// 											<Clock className="h-4 w-4 mr-1" />
// 											<span>{course.duration || "8 weeks"}</span>
// 											<BookOpen className="h-4 w-4 ml-4 mr-1" />
// 											<span>{course.lessons_count || "24"} lessons</span>
// 										</div>
// 										{/* <div className="flex items-center mb-3">
// 											<img
// 												src={course.teacher.image || "/placeholder.svg"}
// 												alt={course.teacher.full_name}
// 												className="h-8 w-8 rounded-full mr-2"
// 											/>
// 											<span className="text-sm text-gray-600">
// 												{course.teacher.full_name}
// 											</span>
// 										</div> */}
// 										<div className="mt-auto flex items-center justify-between">
// 											<div className="flex items-center">
// 												{[1, 2, 3, 4, 5].map((star) => (
// 													<Star
// 														key={star}
// 														size={16}
// 														className={
// 															star <= Math.round(course.average_rating)
// 																? "text-yellow-400 fill-current"
// 																: "text-gray-300"
// 														}
// 													/>
// 												))}
// 												<span className="ml-2 text-sm text-gray-600">
// 													({course.reviews?.length || 0})
// 												</span>
// 											</div>
// 											<div className="flex items-center text-sm text-gray-600">
// 												<Users size={16} className="mr-1" />
// 												{course.students?.length || 0}
// 											</div>
// 										</div>
// 										<button
// 											className="bg-indigo-600 flex items-center justify-center mt-3 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
// 											onClick={(e) => {
// 												e.stopPropagation(); // Prevent navigation
// 												e.preventDefault(); // Ensure the default link click behavior doesn't occur
// 												// Call your add-to-cart function here
// 												addToCart(
// 													course.id,
// 													userId,
// 													course.price,
// 													country,
// 													cartId
// 												);
// 											}}
// 										>
// 											<span className="mr-2">Add to Cart</span>
// 											<ShoppingCart size={20} />
// 										</button>
// 									</div>
// 								</Link>
// 							</div>
// 						))}
// 					</div>
// 				)}

// 				{/* Pagination */}
// 				{!isLoading && totalPages > 1 && (
// 					<div className="mt-8 flex justify-center gap-2">
// 						<button
// 							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// 							disabled={currentPage === 1}
// 							className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
// 						>
// 							<ChevronLeft className="h-4 w-4 mr-1" />
// 							Previous
// 						</button>
// 						{PageNumbers.map((number) => (
// 							<button
// 								key={number}
// 								onClick={() => setCurrentPage(number)}
// 								className={`px-4 py-2 text-sm font-medium rounded-md ${
// 									currentPage === number
// 										? "bg-blue-600 text-white"
// 										: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
// 								}`}
// 							>
// 								{number}
// 							</button>
// 						))}
// 						<button
// 							onClick={() =>
// 								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
// 							}
// 							disabled={currentPage === totalPages}
// 							className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
// 						>
// 							Next
// 							<ChevronRight className="h-4 w-4 ml-1" />
// 						</button>
// 					</div>
// 				)}
// 			</div>
// 		</main>
// 	);
// }

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import { CartContext } from "../plugins/Context";
import CartId from "../plugins/CartId";
import GetCurrentAddress from "../plugins/UserCountry";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import apiInstance from "../../utils/axios";

export default function DiscoverPage() {
	const [courses, setCourses] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedLevel, setSelectedLevel] = useState("All");
	const [selectedLanguage, setSelectedLanguage] = useState("All");
	const [cartCount, setCartCount] = useContext(CartContext);

	const country = GetCurrentAddress().country;
	const userId = UserData()?.user_id;
	const cartId = CartId();

	// Pagination state
	const itemsPerPage = 4;
	const [currentPage, setCurrentPage] = useState(1);

	const fetchCourse = async () => {
		setIsLoading(true);
		try {
			const res = await useAxios().get(`/course/course-list/`);
			setCourses(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	const fetchWishlist = async () => {
		try {
			const res = await useAxios().get(`student/wishlist/${userId}/`);
			setWishlist(res.data.map((item) => item.course.id));
		} catch (error) {
			console.error("Error fetching wishlist:", error);
		}
	};

	useEffect(() => {
		fetchCourse();
		fetchWishlist();
	}, []);

	const addToCart = async (courseId, userId, price, country, cartId, event) => {
		event.preventDefault();
		event.stopPropagation();
		const formdata = new FormData();
		formdata.append("course_id", courseId);
		formdata.append("user_id", userId);
		formdata.append("price", price);
		formdata.append("country_name", country);
		formdata.append("cart_id", cartId);

		try {
			await useAxios().post(`course/cart/`, formdata);
			Toast().fire({ icon: "success", title: "Added to Cart" });
			const res = await apiInstance.get(`course/cart-list/${CartId()}/`);
			setCartCount(res.data?.length);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleWishlist = async (courseId, event) => {
		event.preventDefault();
		event.stopPropagation();
		const formdata = new FormData();
		formdata.append("course_id", courseId);
		formdata.append("user_id", userId);

		try {
			await useAxios().post(`student/wishlist/${userId}/`, formdata);
			fetchWishlist();
			Toast().fire({ icon: "success", title: "Wishlist updated" });
		} catch (error) {
			console.error("Error updating wishlist:", error);
		}
	};

	// Filter courses based on search, level, and language
	const filteredCourses = courses.filter((course) => {
		const matchesSearch = course.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesLevel =
			selectedLevel === "All" || course.level === selectedLevel;
		const matchesLanguage =
			selectedLanguage === "All" || course.language === selectedLanguage;
		return matchesSearch && matchesLevel && matchesLanguage;
	});

	// Calculate pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
	const PageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	// Loading skeleton component
	const CourseSkeleton = () => (
		<div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
			<div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
			<div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
			<div className="h-4 bg-gray-200 rounded w-1/2"></div>
		</div>
	);

	return (
		<main className="min-h-screen">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="mb-6">
					<h1 className="text-2xl font-bold text-gray-900 mb-1">
						Discover Courses
					</h1>
					<p className="text-base text-gray-600 max-w-2xl">
						Explore our wide range of courses and start your learning journey
						today
					</p>
				</div>

				{/* Search and Filters */}
				<div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
					<div className="relative flex-1 max-w-lg">
						<input
							type="text"
							placeholder="Search courses..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="flex gap-4">
						<select
							value={selectedLevel}
							onChange={(e) => setSelectedLevel(e.target.value)}
							className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						>
							<option value="All">All Levels</option>
							<option value="Beginner">Beginner</option>
							<option value="Intermediate">Intermediate</option>
							<option value="Advanced">Advanced</option>
						</select>
						<select
							value={selectedLanguage}
							onChange={(e) => setSelectedLanguage(e.target.value)}
							className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						>
							<option value="All">All Languages</option>
							<option value="English">English</option>
							<option value="Spanish">Spanish</option>
						</select>
					</div>
				</div>

				{/* Course Grid */}
				{isLoading ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[...Array(8)].map((_, index) => (
							<CourseSkeleton key={index} />
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{currentItems.map((course, index) => (
							<div
								key={index}
								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
							>
								<Link
									to={`/student/course-detail/${course.slug}`}
									className="flex-1 flex flex-col"
								>
									<div className="relative">
										<img
											src={course.image}
											alt={course.title}
											className="w-full h-44 object-fill"
										/>
										<div className="absolute top-[140px] right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold text-blue-600">
											₹{course.price}
										</div>
										<button
											onClick={(e) => toggleWishlist(course.id, e)}
											className="absolute top-4 right-3 p-2 bg-white/60 backdrop-blur-xs rounded-full text-blue-600 hover:text-red-700 transition-colors"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												viewBox="0 0 20 20"
												fill={
													wishlist.includes(course.id) ? "currentColor" : "none"
												}
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													fillRule="evenodd"
													d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
													clipRule="evenodd"
												/>
											</svg>
										</button>
									</div>
									<div className="p-4 flex flex-col flex-1">
										<div className="flex items-center gap-2 mb-2">
											<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
												{course.level}
											</span>
											<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
												{course.language}
											</span>
										</div>
										<h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
											{course.title}
										</h3>
										<div className="flex items-center text-sm text-gray-600 mb-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 mr-1"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
													clipRule="evenodd"
												/>
											</svg>
											<span>{course.duration || "8 weeks"}</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 ml-4 mr-1"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
											</svg>
											<span>{course.lessons_count || "24"} lessons</span>
										</div>
										<div className="mt-auto flex items-center justify-between">
											<div className="flex items-center">
												{[1, 2, 3, 4, 5].map((star) => (
													<svg
														key={star}
														xmlns="http://www.w3.org/2000/svg"
														className={`h-4 w-4 ${
															star <= Math.round(course.average_rating)
																? "text-yellow-400"
																: "text-gray-300"
														}`}
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												))}
												<span className="ml-2 text-sm text-gray-600">
													({course.reviews?.length || 0})
												</span>
											</div>
											<div className="flex items-center text-sm text-gray-600">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 mr-1"
													viewBox="0 
0 20 20"
													fill="currentColor"
												>
													<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
												</svg>
												{course.students?.length || 0}
											</div>
										</div>
										<button
											className="bg-indigo-600 flex items-center justify-center mt-3 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
											onClick={(e) =>
												addToCart(
													course.id,
													userId,
													course.price,
													country,
													cartId,
													e
												)
											}
										>
											<span className="mr-2">Add to Cart</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
											</svg>
										</button>
									</div>
								</Link>
							</div>
						))}
					</div>
				)}

				{/* Pagination */}
				{!isLoading && totalPages > 1 && (
					<div className="mt-4 flex justify-center gap-2">
						<button
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
							className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
							Previous
						</button>
						{PageNumbers.map((number) => (
							<button
								key={number}
								onClick={() => setCurrentPage(number)}
								className={`px-4 py-2 text-sm font-medium rounded-md ${
									currentPage === number
										? "bg-blue-600 text-white"
										: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
								}`}
							>
								{number}
							</button>
						))}
						<button
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
							className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Next
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 ml-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
