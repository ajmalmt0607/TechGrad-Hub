import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
	ChevronRight,
	Star,
	ShoppingCart,
	ChevronLeft,
	Play,
	Book,
	Users,
	Award,
	BarChart,
	Clock,
	Globe,
	Zap,
} from "lucide-react";
import Rater from "react-rater";
import useAxios from "../../utils/useAxios";

// Assuming these imports are correct for your project structure
import logo from "../../assets/techgrad.svg";
import teacher from "../../assets/Best Teacher.png";
import user from "../../assets/user-1.jpg";
import BaseHeader from "../partials/BaseHeader";
import CartId from "../plugins/CartId";
import GetCurrentAddress from "../plugins/UserCountry";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import apiInstance from "../../utils/axios";
import { CartContext } from "../plugins/Context";

const CourseSkeleton = () => (
	<div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
		<div className="h-48 bg-gray-300"></div>
		<div className="p-6">
			<div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
			<div className="flex justify-between items-center">
				<div className="h-6 bg-gray-300 rounded w-1/4"></div>
				<div className="h-10 w-10 bg-gray-300 rounded-full"></div>
			</div>
		</div>
	</div>
);

export default function Component() {
	const [courses, setCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [cartCount, setCartCount] = useContext(CartContext);

	const country = GetCurrentAddress().country;
	const userId = UserData().user_id;
	const cartId = CartId();

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

	useEffect(() => {
		fetchCourse();
	}, []);

	const addToCart = async (courseId, userId, price, country, cartId) => {
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
					Toast().fire({ icon: "success", title: "Added to Cart" });
				});

			// set cart count after adding to cart
			apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
				setCartCount(res.data?.length);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<BaseHeader />

			<main>
				<section className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-5xl md:text-6xl font-bold mb-6">
							Empower Your Learning Journey
						</h1>
						<p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
							Discover a world of knowledge with TechGrad&apos;s cutting-edge
							Learning Management System. Start your path to success today!
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-6">
							<button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center">
								<Book className="mr-2" size={20} />
								Explore Courses
							</button>
							<button className="bg-transparent text-white font-semibold py-3 px-8 rounded-md border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 ease-in-out flex items-center justify-center">
								<Users className="mr-2" size={20} />
								Sign Up for Free
							</button>
						</div>
					</div>
				</section>

				<section className="py-20 px-4 bg-white">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">
							Why Choose TechGrad?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									icon: Book,
									title: "Diverse Courses",
									description:
										"Access a wide range of courses across various disciplines.",
								},
								{
									icon: Users,
									title: "Expert Instructors",
									description:
										"Learn from industry professionals and experienced educators.",
								},
								{
									icon: Award,
									title: "Recognized Certificates",
									description:
										"Earn certificates valued by top employers worldwide.",
								},
								{
									icon: BarChart,
									title: "Track Progress",
									description:
										"Monitor your learning journey with detailed analytics.",
								},
							].map((feature, index) => (
								<div
									key={index}
									className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
								>
									<feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
									<h3 className="text-xl font-semibold mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-20 px-4 bg-gray-100">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">
							Most Popular Courses
						</h2>
						{isLoading ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
								{[...Array(8)].map((_, index) => (
									<CourseSkeleton key={index} />
								))}
							</div>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
								{courses?.slice(0, 8).map((course, index) => (
									<div
										key={index}
										className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
									>
										<Link
											to={`/course-detail/${course.slug}/`}
											className="flex-1 flex flex-col"
										>
											<div className="relative">
												<img
													src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
													alt="Course thumbnail"
													className="w-full h-48 object-cover"
												/>
											</div>
											<div className="p-6 flex flex-col justify-between flex-1">
												<div className="flex items-center mb-4 space-x-2">
													<span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
														{course.level}
													</span>
													<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
														{course.language}
													</span>
												</div>
												<h3 className="font-semibold text-lg mb-3 text-gray-900 line-clamp-2 leading-tight">
													{course.title}
												</h3>
												<p className="text-sm text-gray-600 mb-4 flex items-center">
													<Users size={16} className="mr-2" />
													By {course.teacher.full_name} •{" "}
													{course.students?.length} Student
													{course.students?.length !== 1 && "s"}
												</p>
												<div className="flex items-center mb-4">
													<div className="flex items-center mr-2">
														{[1, 2, 3, 4, 5].map((star) => (
															<Star
																key={star}
																size={16}
																className={
																	star <= Math.round(course.average_rating)
																		? "text-yellow-400 fill-current"
																		: "text-gray-300"
																}
															/>
														))}
													</div>
													<span className="text-sm text-gray-600">
														{course.average_rating?.toFixed(1)} (
														{course.reviews?.length} reviews)
													</span>
												</div>
											</div>
										</Link>
										<div className="p-6 pt-0 flex justify-between items-center mt-auto">
											<span className="font-bold text-2xl text-indigo-600">
												${course.price}
											</span>
											<button
												className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
												onClick={(e) => {
													e.stopPropagation(); // Prevent navigation
													e.preventDefault(); // Ensure the default link click behavior doesn't occur
													// Call your add-to-cart function here
													addToCart(
														course.id,
														userId,
														course.price,
														country,
														cartId
													);
												}}
											>
												<ShoppingCart size={20} />
											</button>
										</div>
									</div>
								))}
							</div>
						)}
						<div className="mt-12 text-center">
							<Link
								to="/courses"
								className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out"
							>
								View All Courses
							</Link>
						</div>
					</div>
				</section>

				<section className="py-20 px-4 bg-white">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">
							Learning Paths
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									icon: Globe,
									title: "Web Development",
									description: "Master front-end and back-end technologies",
									courses: 15,
									duration: "6 months",
								},
								{
									icon: BarChart,
									title: "Data Science",
									description:
										"Learn statistics, machine learning, and big data",
									courses: 12,
									duration: "8 months",
								},
								{
									icon: Zap,
									title: "Digital Marketing",
									description:
										"Explore SEO, social media, and content marketing",
									courses: 10,
									duration: "4 months",
								},
								{
									icon: Users,
									title: "UX/UI Design",
									description: "Create user-centered designs and prototypes",
									courses: 8,
									duration: "5 months",
								},
								{
									icon: ShoppingCart,
									title: "Mobile App Development",
									description: "Build iOS and Android applications",
									courses: 14,
									duration: "7 months",
								},
								{
									icon: Award,
									title: "Cloud Computing",
									description: "Learn AWS, Azure, and Google Cloud",
									courses: 11,
									duration: "6 months",
								},
							].map((path, index) => (
								<div
									key={index}
									className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
								>
									<path.icon className="w-12 h-12 text-indigo-600 mb-4" />
									<h3 className="text-xl font-semibold mb-3">{path.title}</h3>
									<p className="text-gray-600 mb-4">{path.description}</p>
									<div className="flex justify-between text-sm text-gray-500">
										<span className="flex items-center">
											<Book size={16} className="mr-2" />
											{path.courses} courses
										</span>
										<span className="flex items-center">
											<Clock size={16} className="mr-2" />
											{path.duration}
										</span>
									</div>
									<Link
										to={`/learning-path/${path.title.toLowerCase().replace(" ", "-")}`}
										className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
									>
										Explore Path →
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-20 px-4 bg-indigo-600 text-white">
					<div className="container mx-auto px-4 max-w-[1300px]">
						<div className="flex gap-6 flex-col md:flex-row items-center justify-between">
							<div className="md:w-1/2 mb-8 md:mb-0">
								<h2 className="text-4xl font-bold mb-6">
									Become an Instructor Today
								</h2>
								<p className="text-lg mb-8 opacity-90">
									Share your expertise with millions of students worldwide. Join
									our community of educators and make a difference in the world
									of online learning.
								</p>
								<button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 ease-in-out flex items-center">
									<Users className="mr-2" size={20} />
									Start Teaching Today
								</button>
							</div>
							<div className="">
								<img
									src={teacher}
									alt="Become an instructor"
									className="rounded-lg shadow-2xl"
									width={600}
									height={400}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 px-4 bg-gray-100">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">
							What Our Students Say
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[1, 2, 3].map((testimonial) => (
								<div
									key={testimonial}
									className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
								>
									<div className="flex items-center mb-6">
										<img
											src={user}
											alt="Student"
											className="w-16 h-16 rounded-full mr-4 border-4 border-indigo-100"
										/>
										<div>
											<h3 className="font-semibold text-lg text-gray-900">
												John Doe
											</h3>
											<p className="text-sm text-gray-600">Software Engineer</p>
										</div>
									</div>
									<p className="text-gray-600 mb-6 italic">
										&quot;The courses on TechGrad have been invaluable in
										advancing my career. The instructors are knowledgeable and
										the content is always up-to-date.&quot;
									</p>
									<div className="flex text-yellow-400">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star key={star} size={20} fill="currentColor" />
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-900 px-4 text-white py-12">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[
							{
								title: "About TechGrad",
								links: ["About Us", "Careers", "Press"],
							},
							{
								title: "Resources",
								links: ["Articles", "Webinars", "Ebooks"],
							},
							{
								title: "Connect",
								links: ["Twitter", "LinkedIn", "Facebook"],
							},
						].map((section, index) => (
							<div key={index}>
								<h3 className="font-semibold text-lg mb-4">{section.title}</h3>
								<ul className="space-y-2">
									{section.links.map((item) => (
										<li key={item}>
											<Link
												to="#"
												className="hover:text-indigo-400 transition-colors duration-300"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}

						<div>
							<h3 className="font-semibold text-lg mb-4">
								Subscribe to Our Newsletter
							</h3>
							<form className="flex flex-wrap gap-2">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-grow w-full sm:flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
								<button
									type="submit"
									className="bg-indigo-600 text-white px-4 py-3 rounded-md sm:rounded-l-none hover:bg-indigo-700 transition duration-300 w-full sm:w-auto"
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>

					<div className="mt-8 pt-6 border-t border-gray-700 text-center">
						<p className="text-sm">
							&copy; 2023 TechGrad. All rights reserved.
						</p>
						<ul className="flex justify-center space-x-4 mt-4">
							<li>
								<Link
									to="#"
									className="hover:text-indigo-400 transition-colors duration-300"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-indigo-400 transition-colors duration-300"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
