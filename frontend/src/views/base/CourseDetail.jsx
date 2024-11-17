import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
	Play,
	Lock,
	TwitterIcon,
	FacebookIcon,
	LinkedinIcon,
	Loader,
} from "lucide-react";

import useAxios from "../../utils/useAxios";
import { useParams } from "react-router-dom";
import moment from "moment";
import BaseHeader from "../partials/BaseHeader";
import CartId from "../plugins/CartId";
import GetCurrentAddress from "../plugins/UserCountry";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import { CartContext } from "../plugins/Context";
import apiInstance from "../../utils/axios";

const CourseSkeleton = () => (
	<div className="animate-pulse">
		<div className="bg-gray-200 h-64 w-full rounded-lg mb-4"></div>
		<div className="space-y-2">
			<div className="h-4 bg-gray-200 rounded w-1/4"></div>
			<div className="h-8 bg-gray-200 rounded w-3/4"></div>
			<div className="h-4 bg-gray-200 rounded w-full"></div>
			<div className="h-4 bg-gray-200 rounded w-full"></div>
		</div>
		<div className="mt-4 flex space-x-2">
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className="h-8 w-20 bg-gray-200 rounded"></div>
			))}
		</div>
	</div>
);

export default function CourseDetail() {
	const [course, setCourse] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [addToCartBtn, setAddToCartBtn] = useState("Add to Cart");
	const [cartCount, setCartCount] = useContext(CartContext);

	const param = useParams();

	const country = GetCurrentAddress().country;
	const userId = UserData().user_id;

	const [activeTab, setActiveTab] = useState("overview");
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
	const [openAccordion, setOpenAccordion] = useState("section-1");

	const fetchCourses = async () => {
		try {
			const res = await useAxios().get(`course/course-detail/${param.slug}/`);
			setCourse(res.data);
			setIsLoading(false);
			console.log(res.data);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCourses();
	}, []); // Dependency ensures it fetches when param.slug changes

	const addToCart = async (courseId, userId, price, country, cartId) => {
		setAddToCartBtn("Adding to Cart");
		const formdata = new FormData();
		// first one is the key to send the backend and the second is the key value passing from frontend
		formdata.append("course_id", courseId);
		formdata.append("user_id", userId);
		formdata.append("price", price);
		formdata.append("country_name", country);
		formdata.append("cart_id", cartId);

		try {
			await useAxios()
				.post(`course/cart/`, formdata)
				.then((res) => {
					console.log(res.data);
					setAddToCartBtn("Added to Cart");
					Toast().fire({ icon: "success", title: "Added to Cart" });
				});

			// set cart count after adding to cart
			apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
				setCartCount(res.data?.length);
			});
		} catch (error) {
			console.log(error);
			setAddToCartBtn("Add to Cart");
		}
	};

	return (
		<>
			<BaseHeader />
			<>
				<div className="bg-gray-50 min-h-screen pt-14">
					<main className="container mx-auto px-4 py-8 xl:px-24">
						{isLoading === true ? (
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
								<div className="lg:col-span-2">
									<CourseSkeleton />
								</div>
								<div className="lg:col-span-1">
									<div className="bg-white p-6 rounded-lg shadow">
										<CourseSkeleton />
									</div>
								</div>
							</div>
						) : (
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
								<div className="lg:col-span-2">
									<div className="mb-6">
										<span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
											{course?.category?.title}
										</span>
										<h1 className="text-3xl font-bold mt-2">{course?.title}</h1>
										<p
											className="text-gray-600 mt-2"
											dangerouslySetInnerHTML={{
												__html: `${course?.description?.slice(0, 200)}`,
											}}
										></p>
										<div className="flex flex-wrap items-center gap-4 mt-4">
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-yellow-400"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<span className="ml-1">
													{course?.average_rating || 0}/5.0
												</span>
											</div>
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												<span className="ml-1">
													{course?.student?.length || 0} Enrolled
												</span>
											</div>
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
													/>
												</svg>
												<span className="ml-1">{course.level}</span>
											</div>
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
													/>
												</svg>
												<span className="ml-1">
													{moment(course?.date).format("DD MMM, YYYY")}
												</span>
											</div>
										</div>
									</div>

									<div className="mb-8">
										<div className="flex border-b">
											{["overview", "curriculum", "instructor", "reviews"].map(
												(tab) => (
													<button
														key={tab}
														className={`py-2 px-4 font-medium ${
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
										</div>
										<div className="mt-4">
											{activeTab === "overview" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Course Description
													</h2>
													<p
														className="mb-4"
														dangerouslySetInnerHTML={{
															__html: `${course?.description}`,
														}}
													></p>
												</div>
											)}
											{activeTab === "curriculum" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Course Curriculum
													</h2>
													<div className="space-y-4">
														{course?.curriculum?.map((data, index) => (
															<div
																key={`section-${index + 1}`}
																className="border rounded-lg"
															>
																<button
																	className="flex justify-between items-center w-full p-4 text-left"
																	onClick={() =>
																		setOpenAccordion(
																			openAccordion === `section-${index + 1}`
																				? ""
																				: `section-${index + 1}`
																		)
																	}
																>
																	<span className="font-medium">
																		{data.title}
																	</span>
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
																	<div className="p-4 border-t">
																		<div className="space-y-2">
																			{data?.variant_items?.map(
																				(data, index) => (
																					<div
																						className="flex justify-between items-center"
																						key={index}
																					>
																						<div className="flex items-center">
																							{data.preview ? (
																								<Play className="w-4 h-4 mr-2 text-gray-400" /> // Play button icon when preview is true
																							) : (
																								<Lock className="w-4 h-4 mr-2 text-gray-400" /> // Lock icon when preview is false
																							)}
																							<span>{data.title}</span>
																						</div>
																						<span>{data.duration}</span>
																					</div>
																				)
																			)}
																		</div>
																	</div>
																)}
															</div>
														))}
													</div>
												</div>
											)}
											{activeTab === "instructor" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Instructor
													</h2>
													<div className="flex items-center">
														<img
															src={course.teacher.image}
															alt="Instructor"
															width={100}
															height={100}
															className="rounded-full"
														/>
														<div className="ml-4">
															<h3 className="text-xl font-semibold">
																{course.teacher.full_name}
															</h3>
															<p className="text-gray-600">
																{course.teacher.bio}
															</p>
															{/* Social Media Links */}
															<div className="flex mt-2 space-x-4">
																{course.teacher.twitter && (
																	<a
																		href={course.teacher.twitter}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-blue-400 hover:text-blue-600"
																		aria-label="Twitter"
																	>
																		<TwitterIcon className="w-5 h-5" />
																	</a>
																)}
																{course.teacher.facebook && (
																	<a
																		href={course.teacher.facebook}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-blue-600 hover:text-blue-800"
																		aria-label="Facebook"
																	>
																		<FacebookIcon className="w-5 h-5" />
																	</a>
																)}
																{course.teacher.linkedin && (
																	<a
																		href={course.teacher.linkedin}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-blue-700 hover:text-blue-900"
																		aria-label="LinkedIn"
																	>
																		<LinkedinIcon className="w-5 h-5" />
																	</a>
																)}
															</div>
														</div>
													</div>
													<p className="mt-4">
														Fulfilled direction use continual set him propriety
														continued. Saw met applauded favorite deficient
														engrossed concealed and her. Concluded boy perpetual
														old supposing. Farther related bed and passage
														comfort civilly.
													</p>
												</div>
											)}
											{activeTab === "reviews" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Student Reviews
													</h2>
													<div className="space-y-4">
														<div className="flex items-start">
															<img
																src="/placeholder.svg?height=50&width=50"
																alt="Reviewer"
																width={50}
																height={50}
																className="rounded-full"
															/>
															<div className="ml-4">
																<h4 className="font-semibold">Sam Jay</h4>
																<div className="flex items-center">
																	{[...Array(5)].map((_, i) => (
																		<svg
																			key={i}
																			className="w-4 h-4 text-yellow-400"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
																		</svg>
																	))}
																</div>
																<p className="text-sm text-gray-500">
																	5 days ago
																</p>
																<p className="mt-1">
																	Great course! The instructor explains
																	everything clearly and provides practical
																	examples.
																</p>
															</div>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>

								<div className="lg:col-span-1">
									<div className="bg-white p-6 rounded-lg shadow">
										<div className="relative">
											<img
												src={course.image}
												alt="Course thumbnail"
												width={400}
												height={200}
												className="w-full rounded-lg"
											/>
											<button
												className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
												onClick={() => setIsVideoModalOpen(true)}
											>
												<svg
													className="w-6 h-6 text-blue-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</button>
										</div>
										<div className="mt-6">
											<div className="flex justify-between items-center">
												<span className="text-3xl font-bold">
													${course.price}
												</span>
												<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
													<svg
														className="w-5 h-5 text-gray-600"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
														/>
													</svg>
												</button>
											</div>
											<div className="mt-4 space-y-2">
												{addToCartBtn === "Add to Cart" && (
													<button
														className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
														onClick={() => {
															addToCart(
																course.id,
																userId,
																course.price,
																country,
																CartId()
															);
														}}
													>
														Add to Cart
													</button>
												)}
												{addToCartBtn === "Adding to Cart" && (
													<button
														className="w-full flex justify-center bg-indigo-600 text-white py-[10px] px-4 rounded hover:bg-blue-700 transition duration-300"
														onClick={() => {
															addToCart(
																course?.id,
																userId,
																course.price,
																country,
																CartId()
															);
														}}
													>
														<Loader className="animate-spin h-5 w-5 text-white" />
													</button>
												)}
												{addToCartBtn === "Added to Cart" && (
													<button
														className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
														onClick={() => {
															addToCart(
																course.id,
																userId,
																course.price,
																country,
																CartId()
															);
														}}
													>
														Added to Cart
													</button>
												)}
												<button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
													Enroll Now
												</button>
											</div>
										</div>
										<div className="mt-6 border-t pt-6">
											<h3 className="text-lg font-semibold mb-4">
												This course includes:
											</h3>
											<ul className="space-y-2">
												{[
													{
														icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
														label: "Lectures",
														value: "30",
													},
													{
														icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
														label: "Duration",
														value: "4h 50m",
													},
													{
														icon: "M13 10V3L4 14h7v7l9-11h-7z",
														label: "Skills",
														value: "Beginner",
													},
													{
														icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
														label: "Language",
														value: "English",
													},
													{
														icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
														label: "Certificate",
														value: "Yes",
													},
												].map((item, index) => (
													<li
														key={index}
														className="flex justify-between items-center"
													>
														<div className="flex items-center">
															<svg
																className="w-5 h-5 text-gray-400 mr-2"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d={item.icon}
																/>
															</svg>
															<span>{item.label}</span>
														</div>
														<span className="font-medium">{item.value}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						)}

						<section className="mt-12">
							<h2 className="text-2xl font-bold mb-6">Related Courses</h2>
							{isLoading ? (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
									{[...Array(4)].map((_, index) => (
										<CourseSkeleton key={index} />
									))}
								</div>
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
									{[1, 2, 3, 4].map((course) => (
										<div
											key={course}
											className="bg-white rounded-lg shadow overflow-hidden"
										>
											<img
												src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
												alt={`Course ${course}`}
												width={400}
												height={200}
												className="w-full h-48 object-cover"
											/>
											<div className="p-4">
												<div className="flex justify-between items-center mb-2">
													<span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
														Intermediate
													</span>
													<button className="text-gray-400 hover:text-red-500">
														<svg
															className="w-5 h-5"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
															/>
														</svg>
													</button>
												</div>
												<h3 className="text-lg font-semibold mb-2">
													How to easily create a website with React
												</h3>
												<p className="text-sm text-gray-600 mb-2">
													By John Doe
												</p>
												<div className="flex items-center mb-2">
													{[...Array(5)].map((_, i) => (
														<svg
															key={i}
															className="w-4 h-4 text-yellow-400"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg>
													))}
													<span className="text-sm ml-1">4.5 (2,550)</span>
												</div>
												<div className="flex justify-between items-center">
													<span className="text-lg font-bold">$89.99</span>
													<button className="bg-indigo-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 transition duration-300">
														Add to Cart
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							)}
						</section>
					</main>

					{isVideoModalOpen && (
						<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
							<div className="bg-white p-4 rounded-lg max-w-3xl w-full">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-xl font-bold">
										Course Introduction Video
									</h2>
									<button
										onClick={() => setIsVideoModalOpen(false)}
										className="text-gray-500 hover:text-gray-700"
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
								<div className="aspect-w-16 aspect-h-9">
									<iframe
										src="https://www.youtube.com/embed/dQw4w9WgXcQ"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="w-full h-96"
									></iframe>
								</div>
							</div>
						</div>
					)}
				</div>
			</>
		</>
	);
}
