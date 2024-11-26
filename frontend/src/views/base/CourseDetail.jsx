// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import {
// 	Play,
// 	Lock,
// 	TwitterIcon,
// 	FacebookIcon,
// 	LinkedinIcon,
// 	Loader,
// } from "lucide-react";

// import useAxios from "../../utils/useAxios";
// import { useParams } from "react-router-dom";
// import moment from "moment";
// import BaseHeader from "../partials/BaseHeader";
// import CartId from "../plugins/CartId";
// import GetCurrentAddress from "../plugins/UserCountry";
// import UserData from "../plugins/UserData";
// import Toast from "../plugins/Toast";
// import { CartContext } from "../plugins/Context";
// import apiInstance from "../../utils/axios";

// const CourseSkeleton = () => (
// 	<div className="animate-pulse">
// 		<div className="bg-gray-200 h-64 w-full rounded-lg mb-4"></div>
// 		<div className="space-y-2">
// 			<div className="h-4 bg-gray-200 rounded w-1/4"></div>
// 			<div className="h-8 bg-gray-200 rounded w-3/4"></div>
// 			<div className="h-4 bg-gray-200 rounded w-full"></div>
// 			<div className="h-4 bg-gray-200 rounded w-full"></div>
// 		</div>
// 		<div className="mt-4 flex space-x-2">
// 			{[1, 2, 3, 4].map((i) => (
// 				<div key={i} className="h-8 w-20 bg-gray-200 rounded"></div>
// 			))}
// 		</div>
// 	</div>
// );

// export default function CourseDetail() {
// 	const [course, setCourse] = useState([]);
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [addToCartBtn, setAddToCartBtn] = useState("Add to Cart");
// 	const [cartCount, setCartCount] = useContext(CartContext);

// 	const param = useParams();

// 	const country = GetCurrentAddress().country;
// 	const userId = UserData().user_id;

// 	const [activeTab, setActiveTab] = useState("overview");
// 	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
// 	const [openAccordion, setOpenAccordion] = useState("section-1");

// 	const fetchCourses = async () => {
// 		try {
// 			const res = await useAxios().get(`course/course-detail/${param.slug}/`);
// 			setCourse(res.data);
// 			setIsLoading(false);
// 			console.log("course-detail-base", res.data);
// 		} catch (error) {
// 			console.error(error);
// 			setIsLoading(false);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchCourses();
// 	}, []); // Dependency ensures it fetches when param.slug changes

// 	const addToCart = async (courseId, userId, price, country, cartId) => {
// 		setAddToCartBtn("Adding to Cart");
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
// 					setAddToCartBtn("Added to Cart");
// 					Toast().fire({ icon: "success", title: "Added to Cart" });
// 				});

// 			// set cart count after adding to cart
// 			apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
// 				setCartCount(res.data?.length);
// 			});
// 		} catch (error) {
// 			console.log(error);
// 			setAddToCartBtn("Add to Cart");
// 		}
// 	};

// 	return (
// 		<>
// 			<>
// 				<div className="min-h-screen max-w-6xl">
// 					<main className="container mx-auto ">
// 						{isLoading === true ? (
// 							<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
// 								<div className="lg:col-span-2">
// 									<CourseSkeleton />
// 								</div>
// 								<div className="lg:col-span-1">
// 									<div className="bg-white p-6 rounded-lg shadow">
// 										<CourseSkeleton />
// 									</div>
// 								</div>
// 							</div>
// 						) : (
// 							<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
// 								<div className="lg:col-span-2">
// 									<div className="mb-6">
// 										<span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
// 											{course?.category?.title}
// 										</span>
// 										<h1 className="text-3xl font-bold mt-2">{course?.title}</h1>
// 										<p
// 											className="text-gray-600 mt-2 text-sm"
// 											dangerouslySetInnerHTML={{
// 												__html: `${course?.description?.slice(0, 200)}`,
// 											}}
// 										></p>
// 										<div className="flex flex-wrap items-center gap-4 mt-4">
// 											<div className="flex items-center">
// 												<svg
// 													className="w-5 h-5 text-yellow-400"
// 													fill="currentColor"
// 													viewBox="0 0 20 20"
// 												>
// 													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// 												</svg>
// 												<span className="ml-1 text-sm">
// 													{course?.average_rating || 0}/5.0
// 												</span>
// 											</div>
// 											<div className="flex items-center">
// 												<svg
// 													className="w-5 h-5 text-gray-400"
// 													fill="none"
// 													stroke="currentColor"
// 													viewBox="0 0 24 24"
// 												>
// 													<path
// 														strokeLinecap="round"
// 														strokeLinejoin="round"
// 														strokeWidth={2}
// 														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
// 													/>
// 												</svg>
// 												<span className="ml-1 text-sm">
// 													{course?.student?.length || 0} Enrolled
// 												</span>
// 											</div>
// 											<div className="flex items-center">
// 												<svg
// 													className="w-5 h-5 text-gray-400"
// 													fill="none"
// 													stroke="currentColor"
// 													viewBox="0 0 24 24"
// 												>
// 													<path
// 														strokeLinecap="round"
// 														strokeLinejoin="round"
// 														strokeWidth={2}
// 														d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
// 													/>
// 												</svg>
// 												<span className="ml-1 text-sm">{course.level}</span>
// 											</div>
// 											<div className="flex items-center">
// 												<svg
// 													className="w-5 h-5 text-gray-400"
// 													fill="none"
// 													stroke="currentColor"
// 													viewBox="0 0 24 24"
// 												>
// 													<path
// 														strokeLinecap="round"
// 														strokeLinejoin="round"
// 														strokeWidth={2}
// 														d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
// 													/>
// 												</svg>
// 												<span className="ml-1 text-sm">
// 													{moment(course?.date).format("DD MMM, YYYY")}
// 												</span>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="mb-8">
// 										<div className="flex border-b">
// 											{["overview", "curriculum", "instructor", "reviews"].map(
// 												(tab) => (
// 													<button
// 														key={tab}
// 														className={`py-2 px-4 font-medium ${
// 															activeTab === tab
// 																? "text-blue-600 border-b-2 border-blue-600"
// 																: "text-gray-500 hover:text-gray-700"
// 														}`}
// 														onClick={() => setActiveTab(tab)}
// 													>
// 														{tab.charAt(0).toUpperCase() + tab.slice(1)}
// 													</button>
// 												)
// 											)}
// 										</div>
// 										<div className="mt-4">
// 											{activeTab === "overview" && (
// 												<div className="bg-white p-6 rounded-lg shadow">
// 													<h2 className="text-2xl font-semibold mb-4">
// 														Course Description
// 													</h2>
// 													<p
// 														className="mb-4 text-sm"
// 														dangerouslySetInnerHTML={{
// 															__html: `${course?.description}`,
// 														}}
// 													></p>
// 												</div>
// 											)}
// 											{activeTab === "curriculum" && (
// 												<div className="bg-white p-6 rounded-lg shadow">
// 													<h2 className="text-2xl font-semibold mb-4">
// 														Course Curriculum
// 													</h2>
// 													<div className="space-y-4">
// 														{course?.curriculum?.map((data, index) => (
// 															<div
// 																key={`section-${index + 1}`}
// 																className="border rounded-lg"
// 															>
// 																<button
// 																	className="flex justify-between items-center w-full p-4 text-left"
// 																	onClick={() =>
// 																		setOpenAccordion(
// 																			openAccordion === `section-${index + 1}`
// 																				? ""
// 																				: `section-${index + 1}`
// 																		)
// 																	}
// 																>
// 																	<span className="font-medium">
// 																		{data.title}
// 																	</span>
// 																	<svg
// 																		className={`w-5 h-5 transition-transform ${
// 																			openAccordion === `section-${index + 1}`
// 																				? "transform rotate-180"
// 																				: ""
// 																		}`}
// 																		fill="none"
// 																		stroke="currentColor"
// 																		viewBox="0 0 24 24"
// 																	>
// 																		<path
// 																			strokeLinecap="round"
// 																			strokeLinejoin="round"
// 																			strokeWidth={2}
// 																			d="M19 9l-7 7-7-7"
// 																		/>
// 																	</svg>
// 																</button>
// 																{openAccordion === `section-${index + 1}` && (
// 																	<div className="p-4 border-t">
// 																		<div className="space-y-2">
// 																			{data?.variant_items?.map(
// 																				(data, index) => (
// 																					<div
// 																						className="flex justify-between items-center"
// 																						key={index}
// 																					>
// 																						<div className="flex items-center">
// 																							{data.preview ? (
// 																								<Play className="w-4 h-4 mr-2 text-gray-400" /> // Play button icon when preview is true
// 																							) : (
// 																								<Lock className="w-4 h-4 mr-2 text-gray-400" /> // Lock icon when preview is false
// 																							)}
// 																							<span>{data.title}</span>
// 																						</div>
// 																						<span>{data.duration}</span>
// 																					</div>
// 																				)
// 																			)}
// 																		</div>
// 																	</div>
// 																)}
// 															</div>
// 														))}
// 													</div>
// 												</div>
// 											)}
// 											{activeTab === "instructor" && (
// 												<div className="bg-white p-6 rounded-lg shadow">
// 													<h2 className="text-2xl font-semibold mb-4">
// 														Instructor
// 													</h2>
// 													<div className="flex items-center">
// 														<img
// 															src={course.teacher.image}
// 															alt="Instructor"
// 															width={100}
// 															height={100}
// 															className="rounded-full"
// 														/>
// 														<div className="ml-4">
// 															<h3 className="text-xl font-semibold">
// 																{course.teacher.full_name}
// 															</h3>
// 															<p className="text-gray-600">
// 																{course.teacher.bio}
// 															</p>
// 															{/* Social Media Links */}
// 															<div className="flex mt-2 space-x-4">
// 																{course.teacher.twitter && (
// 																	<a
// 																		href={course.teacher.twitter}
// 																		target="_blank"
// 																		rel="noopener noreferrer"
// 																		className="text-blue-400 hover:text-blue-600"
// 																		aria-label="Twitter"
// 																	>
// 																		<TwitterIcon className="w-5 h-5" />
// 																	</a>
// 																)}
// 																{course.teacher.facebook && (
// 																	<a
// 																		href={course.teacher.facebook}
// 																		target="_blank"
// 																		rel="noopener noreferrer"
// 																		className="text-blue-600 hover:text-blue-800"
// 																		aria-label="Facebook"
// 																	>
// 																		<FacebookIcon className="w-5 h-5" />
// 																	</a>
// 																)}
// 																{course.teacher.linkedin && (
// 																	<a
// 																		href={course.teacher.linkedin}
// 																		target="_blank"
// 																		rel="noopener noreferrer"
// 																		className="text-blue-700 hover:text-blue-900"
// 																		aria-label="LinkedIn"
// 																	>
// 																		<LinkedinIcon className="w-5 h-5" />
// 																	</a>
// 																)}
// 															</div>
// 														</div>
// 													</div>
// 													<p className="mt-4">
// 														Fulfilled direction use continual set him propriety
// 														continued. Saw met applauded favorite deficient
// 														engrossed concealed and her. Concluded boy perpetual
// 														old supposing. Farther related bed and passage
// 														comfort civilly.
// 													</p>
// 												</div>
// 											)}
// 											{activeTab === "reviews" && (
// 												<div className="bg-white p-6 rounded-lg shadow">
// 													<h2 className="text-2xl font-semibold mb-4">
// 														Student Reviews
// 													</h2>
// 													<div className="space-y-4">
// 														<div className="flex items-start">
// 															<img
// 																src="/placeholder.svg?height=50&width=50"
// 																alt="Reviewer"
// 																width={50}
// 																height={50}
// 																className="rounded-full"
// 															/>
// 															<div className="ml-4">
// 																<h4 className="font-semibold">Sam Jay</h4>
// 																<div className="flex items-center">
// 																	{[...Array(5)].map((_, i) => (
// 																		<svg
// 																			key={i}
// 																			className="w-4 h-4 text-yellow-400"
// 																			fill="currentColor"
// 																			viewBox="0 0 20 20"
// 																		>
// 																			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// 																		</svg>
// 																	))}
// 																</div>
// 																<p className="text-sm text-gray-500">
// 																	5 days ago
// 																</p>
// 																<p className="mt-1">
// 																	Great course! The instructor explains
// 																	everything clearly and provides practical
// 																	examples.
// 																</p>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 											)}
// 										</div>
// 									</div>
// 								</div>

// 								<div className="lg:col-span-1">
// 									<div className="bg-white p-5 rounded-lg shadow">
// 										<div className="relative">
// 											<img
// 												src={course.image}
// 												alt="Course thumbnail"
// 												width={400}
// 												height={200}
// 												className="w-full rounded-lg"
// 											/>
// 											<button
// 												className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
// 												onClick={() => setIsVideoModalOpen(true)}
// 											>
// 												<svg
// 													className="w-6 h-6 text-blue-600"
// 													fill="none"
// 													stroke="currentColor"
// 													viewBox="0 0 24 24"
// 												>
// 													<path
// 														strokeLinecap="round"
// 														strokeLinejoin="round"
// 														strokeWidth={2}
// 														d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
// 													/>
// 													<path
// 														strokeLinecap="round"
// 														strokeLinejoin="round"
// 														strokeWidth={2}
// 														d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// 													/>
// 												</svg>
// 											</button>
// 										</div>
// 										<div className="mt-6">
// 											<div className="flex justify-between items-center">
// 												<span className="text-3xl font-bold">
// 													${course.price}
// 												</span>
// 												<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
// 													<svg
// 														className="w-5 h-5 text-gray-600"
// 														fill="none"
// 														stroke="currentColor"
// 														viewBox="0 0 24 24"
// 													>
// 														<path
// 															strokeLinecap="round"
// 															strokeLinejoin="round"
// 															strokeWidth={2}
// 															d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
// 														/>
// 													</svg>
// 												</button>
// 											</div>
// 											<div className="mt-4 space-y-2">
// 												{addToCartBtn === "Add to Cart" && (
// 													<button
// 														className="w-full text-sm bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
// 														onClick={() => {
// 															addToCart(
// 																course.id,
// 																userId,
// 																course.price,
// 																country,
// 																CartId()
// 															);
// 														}}
// 													>
// 														Add to Cart
// 													</button>
// 												)}
// 												{addToCartBtn === "Adding to Cart" && (
// 													<button
// 														className="w-full text-sm flex justify-center bg-indigo-600 text-white py-[10px] px-4 rounded hover:bg-blue-700 transition duration-300"
// 														onClick={() => {
// 															addToCart(
// 																course?.id,
// 																userId,
// 																course.price,
// 																country,
// 																CartId()
// 															);
// 														}}
// 													>
// 														<Loader className="animate-spin h-5 w-5 text-white" />
// 													</button>
// 												)}
// 												{addToCartBtn === "Added to Cart" && (
// 													<button
// 														className="w-full text-sm bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
// 														onClick={() => {
// 															addToCart(
// 																course.id,
// 																userId,
// 																course.price,
// 																country,
// 																CartId()
// 															);
// 														}}
// 													>
// 														Added to Cart
// 													</button>
// 												)}
// 											</div>
// 										</div>
// 										<div className="mt-6 border-t pt-6">
// 											<h3 className="text-lg font-semibold mb-4">
// 												This course includes:
// 											</h3>
// 											<ul className="space-y-2">
// 												{[
// 													{
// 														icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
// 														label: "Lectures",
// 														value: "30",
// 													},
// 													{
// 														icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
// 														label: "Duration",
// 														value: "4h 50m",
// 													},
// 													{
// 														icon: "M13 10V3L4 14h7v7l9-11h-7z",
// 														label: "Skills",
// 														value: "Beginner",
// 													},
// 													{
// 														icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
// 														label: "Language",
// 														value: "English",
// 													},
// 													{
// 														icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
// 														label: "Certificate",
// 														value: "Yes",
// 													},
// 												].map((item, index) => (
// 													<li
// 														key={index}
// 														className="flex justify-between items-center"
// 													>
// 														<div className="flex items-center">
// 															<svg
// 																className="w-5 h-5 text-gray-400 mr-2"
// 																fill="none"
// 																stroke="currentColor"
// 																viewBox="0 0 24 24"
// 															>
// 																<path
// 																	strokeLinecap="round"
// 																	strokeLinejoin="round"
// 																	strokeWidth={2}
// 																	d={item.icon}
// 																/>
// 															</svg>
// 															<span className="text-sm">{item.label}</span>
// 														</div>
// 														<span className="font-medium text-sm">
// 															{item.value}
// 														</span>
// 													</li>
// 												))}
// 											</ul>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						)}
// 					</main>

// 					{isVideoModalOpen && (
// 						<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// 							<div className="bg-white p-4 rounded-lg max-w-3xl w-full">
// 								<div className="flex justify-between items-center mb-4">
// 									<h2 className="text-xl font-bold">
// 										Course Introduction Video
// 									</h2>
// 									<button
// 										onClick={() => setIsVideoModalOpen(false)}
// 										className="text-gray-500 hover:text-gray-700"
// 									>
// 										<svg
// 											className="w-6 h-6"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24"
// 										>
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M6 18L18 6M6 6l12 12"
// 											/>
// 										</svg>
// 									</button>
// 								</div>
// 								<div className="aspect-w-16 aspect-h-9">
// 									<iframe
// 										src="https://www.youtube.com/embed/dQw4w9WgXcQ"
// 										frameBorder="0"
// 										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 										allowFullScreen
// 										className="w-full h-96"
// 									></iframe>
// 								</div>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</>
// 		</>
// 	);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"use client";

import { useState, useEffect, useRef } from "react";
import {
	Play,
	Lock,
	Twitter,
	Facebook,
	Linkedin,
	X,
	Star,
	Clock,
	Globe,
	Award,
	BookOpen,
	Heart,
	Users,
} from "lucide-react";
import useAxios from "../../utils/useAxios";
import { useParams } from "react-router-dom";
import moment from "moment";
import CartId from "../plugins/CartId";
import GetCurrentAddress from "../plugins/UserCountry";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import { useContext } from "react";
import { CartContext } from "../plugins/Context";
import apiInstance from "../../utils/axios";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StarRating = ({ rating }) => (
	<div className="flex items-center">
		{[1, 2, 3, 4, 5].map((star) => (
			<Star
				key={star}
				className={`w-4 h-4 ${
					star <= rating
						? "text-yellow-400 fill-yellow-400"
						: "text-gray-300 fill-gray-300"
				}`}
			/>
		))}
	</div>
);

export default function CourseDetail() {
	const [course, setCourse] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [addToCartBtn, setAddToCartBtn] = useState("Add to Cart");
	const [cartCount, setCartCount] = useContext(CartContext);
	const [currentVideo, setCurrentVideo] = useState(null);
	const [currentVideoTitle, setCurrentVideoTitle] = useState("");
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
	const [wishlist, setWishlist] = useState([]);
	const [activeTab, setActiveTab] = useState("curriculum");
	const [openAccordion, setOpenAccordion] = useState("section-1");
	const [isInCart, setIsInCart] = useState(false);
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);

	const videoRef = useRef(null);
	const param = useParams();
	const country = GetCurrentAddress().country;
	const userId = UserData().user_id;

	const fetchCourses = async () => {
		try {
			const res = await useAxios().get(`course/course-detail/${param.slug}/`);
			setCourse(res.data);
			if (res.data?.curriculum?.[0]?.variant_items?.[0]?.url) {
				setCurrentVideo(res.data.curriculum[0].variant_items[0].url);
				setCurrentVideoTitle(res.data.curriculum[0].variant_items[0].title);
			}
			setIsLoading(false);
		} catch (error) {
			console.error(error);
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

	const fetchCart = async () => {
		try {
			const res = await apiInstance.get(`course/cart-list/${CartId()}/`);
			setIsInCart(res.data.some((item) => item.course.id === course?.id));
			setCartCount(res.data.length);
		} catch (error) {
			console.error("Error fetching cart:", error);
		}
	};

	useEffect(() => {
		fetchCourses();
		fetchWishlist();
	}, []);

	useEffect(() => {
		if (course) {
			fetchCart();
		}
	}, [course]);

	const addToCart = async (courseId, userId, price, country, cartId) => {
		setAddToCartBtn("Adding to Cart...");
		const formdata = new FormData();
		formdata.append("course_id", courseId);
		formdata.append("user_id", userId);
		formdata.append("price", price);
		formdata.append("country_name", country);
		formdata.append("cart_id", cartId);

		try {
			await useAxios().post(`course/cart/`, formdata);
			setAddToCartBtn("Added to Cart");
			setIsInCart(true);
			Toast().fire({ icon: "success", title: "Added to Cart" });

			const res = await apiInstance.get(`course/cart-list/${CartId()}/`);
			setCartCount(res.data?.length);
		} catch (error) {
			console.error(error);
			setAddToCartBtn("Add to Cart");
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

	const handleVideoClick = (videoUrl, videoTitle, isPreview) => {
		if (isPreview) {
			setCurrentVideo(videoUrl);
			setCurrentVideoTitle(videoTitle);
			setIsVideoModalOpen(true);
			setIsVideoLoaded(false); // Reset loading state for the new video
		}
	};

	if (isLoading) {
		return (
			<div className="min-h-screen container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-8">
						<Skeleton height={400} />
						<Skeleton height={200} />
						<Skeleton height={400} />
					</div>
					<div className="lg:col-span-1">
						<Skeleton height={600} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-8">
						<div className="bg-white rounded-xl shadow-sm overflow-hidden">
							<div className="relative aspect-video">
								<img
									src={course.image}
									alt={course.title}
									className="w-full h-full object-cover"
								/>
								<button
									className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-60"
									onClick={() => setIsVideoModalOpen(true)}
								>
									<Play className="w-16 h-16 text-white" />
								</button>
							</div>
							<div className="p-6">
								<h1 className="text-3xl font-bold mb-4">{course.title}</h1>
								<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
									<div className="flex items-center gap-1">
										<StarRating rating={course.average_rating || 0} />
										<span>({course.rating_count || 0})</span>
									</div>
									<div className="flex items-center gap-1">
										<Users className="w-4 h-4" />
										<span>{course.student?.length || 0} students</span>
									</div>
									<div className="flex items-center gap-1">
										<Globe className="w-4 h-4" />
										<span>{course.language}</span>
									</div>
									<div className="flex items-center gap-1">
										<Globe className="w-4 h-4" />
										<span>{course.teacher?.full_name}</span>
									</div>
								</div>
								{/* <div className="flex items-center gap-4 mb-6">
									<img
										src={course.teacher?.image}
										alt={course.teacher?.full_name}
										className="w-12 h-12 rounded-full object-cover"
									/>
									<div>
										<p className="font-semibold">{course.teacher?.full_name}</p>
										<p className="text-sm text-gray-600">
											{course.teacher?.title}
										</p>
									</div>
								</div> */}
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-sm overflow-hidden">
							<div className="border-b">
								<nav className="flex" aria-label="Tabs">
									{["overview", "curriculum", "instructor", "reviews"].map(
										(tab) => (
											<button
												key={tab}
												className={`py-4 px-6 text-sm font-medium ${
													activeTab === tab
														? "text-blue-600 border-b-2 border-blue-600"
														: "text-gray-500 hover:text-gray-700"
												}`}
												onClick={() => setActiveTab(tab)}
											>
												{tab.charAt(0).toUpperCase() + tab.slice(1)}
											</button>
										)
									)}
								</nav>
							</div>

							<div className="p-6">
								{activeTab === "overview" && (
									<div
										className="prose max-w-none"
										dangerouslySetInnerHTML={{ __html: course.description }}
									/>
								)}

								{activeTab === "curriculum" && (
									<div className="space-y-4">
										{course.curriculum?.map((section, index) => (
											<div
												key={`section-${index + 1}`}
												className="border rounded-lg overflow-hidden"
											>
												<button
													className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
													onClick={() =>
														setOpenAccordion(
															openAccordion === `section-${index + 1}`
																? ""
																: `section-${index + 1}`
														)
													}
												>
													<span className="font-medium">{section.title}</span>
													<svg
														className={`w-5 h-5 transition-transform ${
															openAccordion === `section-${index + 1}`
																? "transform rotate-180"
																: ""
														}`}
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												</button>
												{openAccordion === `section-${index + 1}` && (
													<div className="p-4 bg-white">
														<div className="space-y-2">
															{section.variant_items?.map((item, idx) => (
																<div
																	key={idx}
																	className={`flex justify-between items-center p-2 rounded-lg transition-colors ${
																		item.preview
																			? "cursor-pointer hover:bg-gray-50"
																			: "opacity-75"
																	}`}
																	onClick={() =>
																		handleVideoClick(
																			item.url,
																			item.title,
																			item.preview
																		)
																	}
																>
																	<div className="flex items-center gap-3">
																		{item.preview ? (
																			<Play className="w-4 h-4 text-blue-600" />
																		) : (
																			<Lock className="w-4 h-4 text-gray-400" />
																		)}
																		<span
																			className={
																				item.preview ? "text-blue-600" : ""
																			}
																		>
																			{item.title}
																		</span>
																		{item.preview && (
																			<span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
																				Preview
																			</span>
																		)}
																	</div>
																	<span className="text-sm text-gray-500">
																		{item.duration}
																	</span>
																</div>
															))}
														</div>
													</div>
												)}
											</div>
										))}
									</div>
								)}

								{activeTab === "instructor" && (
									<div className="space-y-6">
										<div className="flex items-start gap-6">
											<img
												src={course.teacher?.image}
												alt={course.teacher?.full_name}
												className="w-24 h-24 rounded-lg object-cover"
											/>
											<div className="flex-1">
												<h3 className="text-xl font-semibold mb-2">
													{course.teacher?.full_name}
												</h3>
												<p className="text-gray-600 mb-4">
													{course.teacher?.bio}
												</p>
												<div className="flex items-center gap-4">
													{course.teacher?.facebook && (
														<a
															href={course.teacher?.facebook}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-600 hover:text-blue-600 transition-colors"
														>
															<Facebook className="w-5 h-5" />
														</a>
													)}
													{course.teacher?.twitter && (
														<a
															href={course.teacher?.twitter}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-600 hover:text-blue-400 transition-colors"
														>
															<Twitter className="w-5 h-5" />
														</a>
													)}
													{course.teacher?.linkedin && (
														<a
															href={course.teacher?.linkedin}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-600 hover:text-blue-700 transition-colors"
														>
															<Linkedin className="w-5 h-5" />
														</a>
													)}
												</div>
											</div>
										</div>
										{/* <div className="grid grid-cols-2 gap-4">
											<div className="bg-gray-50 p-4 rounded-lg text-center">
												<div className="text-2xl font-bold text-gray-900">
													{course.teacher?.courses?.length || 0}
												</div>
												<div className="text-sm text-gray-600">Courses</div>
											</div>
											<div className="bg-gray-50 p-4 rounded-lg text-center">
												<div className="text-2xl font-bold text-gray-900">
													{course.teacher?.students?.length || 0}
												</div>
												<div className="text-sm text-gray-600">Students</div>
											</div>
										</div> */}
									</div>
								)}

								{activeTab === "reviews" && (
									<div className="space-y-6">
										<div className="flex items-center justify-between mb-6">
											<h2 className="text-xl font-semibold">Student Reviews</h2>
											<div className="flex items-center gap-2">
												<StarRating rating={course.average_rating || 0} />
												<span className="font-medium">
													{course.average_rating || 0}/5
												</span>
											</div>
										</div>
										{course.reviews?.map((review, index) => (
											<div key={index} className="border-b pb-6 last:border-0">
												<div className="flex items-start gap-4">
													<img
														src={review.profile?.image}
														alt={review.profile?.full_name}
														className="w-10 h-10 rounded-full object-cover"
													/>
													<div className="flex-1">
														<div className="flex items-start justify-between">
															<div>
																<h4 className="font-medium">
																	{review.profile?.full_name}
																</h4>
																<div className="flex items-center gap-2 mt-1">
																	<StarRating rating={review.rating} />
																	<span className="text-sm text-gray-500">
																		{moment(review.date).fromNow()}
																	</span>
																</div>
															</div>
															{review.profile?.country && (
																<div className="text-sm text-gray-500">
																	{review.profile.country}
																</div>
															)}
														</div>
														<p className="mt-2 text-gray-600">
															{review.review}
														</p>
														{review.reply && (
															<div className="mt-4 ml-4 p-4 bg-gray-50 rounded-lg">
																<div className="flex items-center gap-2 mb-2">
																	<img
																		src={course.teacher?.image}
																		alt={course.teacher?.full_name}
																		className="w-8 h-8 rounded-full"
																	/>
																	<div>
																		<div className="font-medium">
																			{course.teacher?.full_name}
																		</div>
																		<div className="text-sm text-gray-500">
																			Instructor
																		</div>
																	</div>
																</div>
																<p className="text-gray-600">{review.reply}</p>
															</div>
														)}
													</div>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="lg:col-span-1">
						<div className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
							<div className="mb-6">
								<div className="flex items-center justify-between mb-4">
									<div className="text-3xl font-bold">${course.price}</div>
									{course.original_price && (
										<div className="text-lg text-gray-500 line-through">
											${course.original_price}
										</div>
									)}
								</div>
								<div className="space-y-3">
									<button
										className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
											isInCart
												? "bg-green-600"
												: "bg-blue-600 hover:bg-blue-700"
										}`}
										onClick={() =>
											addToCart(
												course.id,
												userId,
												course.price,
												country,
												CartId()
											)
										}
										disabled={isInCart}
									>
										{isInCart ? "Added to Cart" : "Add to Cart"}
									</button>
									<button
										className="w-full py-3 px-4 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
										onClick={(e) => toggleWishlist(course.id, e)}
									>
										{wishlist.includes(course.id)
											? "Remove from Wishlist"
											: "Add to Wishlist"}
									</button>
								</div>
							</div>
							<div className="space-y-4">
								<h3 className="font-semibold text-lg">This course includes:</h3>
								<ul className="space-y-2">
									<li className="flex items-center gap-3">
										<Clock className="w-5 h-5 text-gray-400" />
										<span>{course.lectures?.length || 0} lectures</span>
									</li>
									<li className="flex items-center gap-3">
										<Globe className="w-5 h-5 text-gray-400" />
										<span>{course.language}</span>
									</li>
									<li className="flex items-center gap-3">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<span>{course.level}</span>
									</li>
									<li className="flex items-center gap-3">
										<Award className="w-5 h-5 text-gray-400" />
										<span>Certificate of completion</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{isVideoModalOpen && currentVideo && (
				<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
						{/* Modal Header */}
						<div className="flex justify-between items-center p-4 border-b">
							<h3 className="text-lg font-semibold">{currentVideoTitle}</h3>
							<button
								onClick={() => setIsVideoModalOpen(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{/* Video Player */}
						<div
							className="aspect-video min-h-[360px] bg-black"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Plyr
								source={{
									type: "video",
									sources: [
										{
											src: currentVideo,
											type: "video/mp4",
										},
									],
								}}
								options={{
									controls: [
										"play-large",
										"play",
										"progress",
										"current-time",
										"mute",
										"volume",
										"captions",
										"settings",
										"pip",
										"airplay",
										"fullscreen",
									],
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
