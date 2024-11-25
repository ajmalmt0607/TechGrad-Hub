import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import UserData from "../plugins/UserData";
import { CartContext } from "../plugins/Context";
import GetCurrentAddress from "../plugins/UserCountry";
import CartId from "../plugins/CartId";
import apiInstance from "../../utils/axios";

export default function WishlistPage() {
	const [wishlistItems, setWishlistItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [cartCount, setCartCount] = useContext(CartContext);

	const country = GetCurrentAddress().country;
	const userId = UserData()?.user_id;
	const cartId = CartId();

	const fetchWishlist = async () => {
		setIsLoading(true);
		try {
			const res = await useAxios().get(`student/wishlist/${userId}/`);
			setWishlistItems(res.data);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching wishlist:", error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchWishlist();
	}, []);

	const toggleWishlist = async (courseId, event) => {
		event.preventDefault();
		event.stopPropagation();
		const formdata = new FormData();
		formdata.append("course_id", courseId);
		formdata.append("user_id", userId);

		try {
			await useAxios().post(`student/wishlist/${userId}/`, formdata);
			fetchWishlist();
			showToast("Wishlist updated", "success");
		} catch (error) {
			console.error("Error updating wishlist:", error);
			showToast("Failed to update wishlist", "error");
		}
	};

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
			showToast("Added to Cart", "success");
			const res = await apiInstance.get(`course/cart-list/${cartId}/`);
			setCartCount(res.data?.length);
		} catch (error) {
			console.error("Error adding to cart:", error);
			showToast("Failed to add to cart", "error");
		}
	};

	const showToast = (message, type) => {
		// Create and show a toast notification
		const toast = document.createElement("div");
		toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${
			type === "success" ? "bg-green-500" : "bg-red-500"
		} transition-opacity duration-300`;
		toast.textContent = message;
		document.body.appendChild(toast);
		setTimeout(() => {
			toast.style.opacity = "0";
			setTimeout(() => document.body.removeChild(toast), 300);
		}, 2000);
	};

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
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-bold text-gray-900 flex items-center">
						My Wishlist
					</h1>
					<Link
						to="/student/courses-list"
						className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mr-1"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						Back to Discover
					</Link>
				</div>

				{isLoading ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[...Array(4)].map((_, index) => (
							<CourseSkeleton key={index} />
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{wishlistItems.map((course, index) => (
							<div
								key={index}
								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
							>
								<Link
									to={`/course-detail/${course.course.slug}/`}
									className="flex-1 flex flex-col"
								>
									<div className="relative">
										<img
											src={course.course.image}
											alt={course.course.title}
											className="w-full h-44 object-cover"
										/>
										<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
											${course.course.price}
										</div>
									</div>
									<div className="p-4 flex flex-col flex-1">
										<div className="flex justify-between items-center gap-2 mb-2">
											<div>
												<span className="bg-blue-100 mr-2 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
													{course.course.level}
												</span>
												<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
													{course.course.language}
												</span>
											</div>
											<button
												onClick={(e) => toggleWishlist(course.course.id, e)}
												className="text-red-500 hover:text-red-700 transition-colors"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
														clipRule="evenodd"
													/>
												</svg>
											</button>
										</div>
										<h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
											{course.course.title}
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
											<span>{course.course.duration || "8 weeks"}</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 ml-4 mr-1"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
											</svg>
											<span>{course.course.lessons_count || "24"} lessons</span>
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
													({course.course.reviews?.length || 0})
												</span>
											</div>
											<div className="flex items-center text-sm text-gray-600">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 mr-1"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
												</svg>
												{course.course.students?.length || 0}
											</div>
										</div>
										<button
											className="bg-indigo-600 flex items-center justify-center mt-3 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
											onClick={(e) =>
												addToCart(
													course.course.id,
													userId,
													course.course.price,
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
			</div>
		</main>
	);
}
