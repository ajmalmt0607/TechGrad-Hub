import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
	Bell,
	MessageSquare,
	Search,
	ShoppingCart,
	ChevronDown,
	Grid,
	User,
	Heart,
	DollarSign,
	Settings,
	UserRound,
} from "lucide-react";
import { CartContext } from "../../plugins/Context";
import logo from "../../../assets/techgrad.svg";
import { userAuthStore } from "../../../store/auth";

export default function BaseHeader() {
	const [cartCount] = useContext(CartContext);
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (dropdownName) => {
		setOpenDropdown((prevDropdown) =>
			prevDropdown === dropdownName ? null : dropdownName
		);
	};

	useEffect(() => {
		const closeDropdowns = (e) => {
			if (!e.target.closest(".dropdown-toggle")) {
				setOpenDropdown(null);
			}
		};

		document.addEventListener("click", closeDropdowns);
		return () => document.removeEventListener("click", closeDropdowns);
	}, []);

	// checking user is logged in or not
	const [isLoggedIn, user] = userAuthStore((state) => [
		state.isLoggedIn,
		state.user,
	]);

	console.log(isLoggedIn());

	return (
		<header className="bg-white text-gray-900 shadow-sm fixed top-0 left-0 right-0 z-10">
			<div className="max-w-full mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center">
							<img src={logo} alt="Logo" className="h-14 w-auto" />
						</Link>
					</div>

					{/* Navigation Links (hidden on mobile) */}
					{/* <nav className="hidden md:flex space-x-4 ml-4"> */}
					{/* Instructor Dropdown */}
					{/* <div className="relative">
							<button
								onClick={() => toggleDropdown("instructor")}
								className="flex items-center font-medium text-gray-700 hover:text-gray-900 dropdown-toggle"
							>
								Instructor <ChevronDown className="ml-1 h-4 w-4" />
							</button>
							{openDropdown === "instructor" && (
								<div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
									<Link
										to="/instructor/dashboard/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<Grid className="inline-block mr-2 h-4 w-4" /> Dashboard
									</Link>
									<Link
										to="/instructor/courses/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<ShoppingCart className="inline-block mr-2 h-4 w-4" /> My
										Courses
									</Link>
									<Link
										to="/instructor/create-course/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										Create Course
									</Link>
									<Link
										to="/instructor/reviews/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										Reviews
									</Link>
									<Link
										to="/instructor/question-answer/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										Q/A
									</Link>
									<Link
										to="/instructor/students/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<User className="inline-block mr-2 h-4 w-4" /> Students
									</Link>
									<Link
										to="/instructor/earning/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<DollarSign className="inline-block mr-2 h-4 w-4" /> Earning
									</Link>
									<Link
										to="/instructor/profile/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<Settings className="inline-block mr-2 h-4 w-4" /> Settings
										& Profile
									</Link>
								</div>
							)}
						</div> */}

					{/* Student Dropdown */}
					{/* <div className="relative">
							<button
								onClick={() => toggleDropdown("student")}
								className="flex items-center font-medium text-gray-700 hover:text-gray-900 dropdown-toggle"
							>
								Student <ChevronDown className="ml-1 h-4 w-4" />
							</button>
							{openDropdown === "student" && (
								<div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
									<Link
										to="/student/dashboard/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<Grid className="inline-block mr-2 h-4 w-4" /> Dashboard
									</Link>
									<Link
										to="/student/courses/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<ShoppingCart className="inline-block mr-2 h-4 w-4" /> My
										Courses
									</Link>
									<Link
										to="/student/wishlist/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<Heart className="inline-block mr-2 h-4 w-4" /> Wishlist
									</Link>
									<Link
										to="/student/question-answer/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										Q/A
									</Link>
									<Link
										to="/student/profile/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										<Settings className="inline-block mr-2 h-4 w-4" /> Profile &
										Settings
									</Link>
								</div>
							)}
						</div> */}
					{/* </nav> */}

					{/* Search Bar, Icons, and Dropdowns */}
					<div className="flex items-center space-x-4">
						{/* Search Bar */}
						<div className="relative hidden sm:block">
							<input
								type="search"
								placeholder="Search Courses"
								className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-gray-200 w-64"
							/>
							<Search
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
								size={20}
							/>
						</div>

						{/* Message Icon */}
						<button className="hidden sm:inline-flex p-2 text-gray-600 hover:bg-gray-100 rounded-full">
							<MessageSquare className="h-5 w-5" />
						</button>

						{/* Notification Icon */}
						<button className="hidden sm:inline-flex p-2 text-gray-600 hover:bg-gray-100 rounded-full">
							<Bell className="h-5 w-5" />
						</button>

						{/* Cart Icon with Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown("cart")}
								className="p-2 text-gray-600 hover:bg-gray-100 rounded-full dropdown-toggle"
							>
								<ShoppingCart className="h-5 w-5" />
								{cartCount > 0 && (
									<span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">
										{cartCount}
									</span>
								)}
							</button>
							{openDropdown === "cart" && (
								<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
									<span className="block px-4 py-2 font-bold">
										Cart ({cartCount})
									</span>
									<hr />
									<Link
										to="/cart/"
										className="block w-full text-left px-4 py-2 hover:bg-gray-100"
									>
										View Cart
									</Link>
									<button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
										Checkout
									</button>
								</div>
							)}
						</div>

						{/* User Icon and Login/Register Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown("user")}
								className="p-2 text-gray-600 hover:bg-gray-100 rounded-full dropdown-toggle"
							>
								<UserRound className="h-5 w-5" />
							</button>
							{openDropdown === "user" && (
								<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
									{isLoggedIn() === true ? (
										<>
											{/* Logout Link */}
											<Link
												to="/logout/"
												className="block px-4 py-2 hover:bg-gray-100"
											>
												Logout
											</Link>
										</>
									) : (
										<>
											{/* login and register Link */}
											<Link
												to="/login/"
												className="block px-4 py-2 hover:bg-gray-100"
											>
												login
											</Link>
											<Link
												to="/register/"
												className="block px-4 py-2 hover:bg-gray-100"
											>
												register
											</Link>
										</>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
