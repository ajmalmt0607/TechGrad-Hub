// import { Link } from "react-router-dom";

// function BaseHeader() {
// 	return (
// 		<div>
// 			<nav
// 				className="navbar navbar-expand-lg bg-body-tertiary"
// 				data-bs-theme="dark"
// 			>
// 				<div className="container">
// 					<Link className="navbar-brand" to="/">
// 						Desphixs
// 					</Link>
// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-bs-toggle="collapse"
// 						data-bs-target="#navbarSupportedContent"
// 						aria-controls="navbarSupportedContent"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 					>
// 						<span className="navbar-toggler-icon" />
// 					</button>
// 					<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
// 							<li className="nav-item">
// 								<Link className="nav-link" to="/pages/contact-us/">
// 									{" "}
// 									<i className="fas fa-phone"></i> Contact Us
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link className="nav-link" to="/pages/about-us/">
// 									<i className="fas fa-address-card"></i> About Us
// 								</Link>
// 							</li>
// 							<li className="nav-item dropdown">
// 								<a
// 									className="nav-link dropdown-toggle"
// 									href="#"
// 									role="button"
// 									data-bs-toggle="dropdown"
// 									aria-expanded="false"
// 								>
// 									<i className="fas fa-chalkboard-user"></i> Instructor
// 								</a>
// 								<ul className="dropdown-menu">
// 									<li>
// 										<Link
// 											className="dropdown-item"
// 											to={`/instructor/dashboard/`}
// 										>
// 											<i className="bi bi-grid-fill"></i> Dashboard
// 										</Link>
// 									</li>
// 									<li>
// 										<Link className="dropdown-item" to={`/instructor/courses/`}>
// 											<i className="fas fa-shopping-cart"></i> My Courses
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											className="dropdown-item"
// 											to={`/instructor/create-course/`}
// 										>
// 											<i className="fas fa-plus"></i> Create Course
// 										</Link>
// 									</li>
// 									<li>
// 										<Link className="dropdown-item" to={`/instructor/reviews/`}>
// 											<i className="fas fa-star"></i> Reviews{" "}
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											className="dropdown-item"
// 											to={`/instructor/question-answer/`}
// 										>
// 											<i className="fas fa-envelope"></i> Q/A{" "}
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											className="dropdown-item"
// 											to={`/instructor/students/`}
// 										>
// 											<i className="fas fa-users"></i> Students{" "}
// 										</Link>
// 									</li>
// 									<li>
// 										<Link className="dropdown-item" to={`/instructor/earning/`}>
// 											<i className="fas fa-dollar-sign"></i> Earning{" "}
// 										</Link>
// 									</li>

// 									<li>
// 										<Link className="dropdown-item" to={`/instructor/profile/`}>
// 											<i className="fas fa-gear"></i> Settings & Profile{" "}
// 										</Link>
// 									</li>
// 								</ul>
// 							</li>
// 							<li className="nav-item dropdown">
// 								<a
// 									className="nav-link dropdown-toggle"
// 									href="#"
// 									role="button"
// 									data-bs-toggle="dropdown"
// 									aria-expanded="false"
// 								>
// 									<i className="fas fa-graduation-cap"></i> Student
// 								</a>
// 								<ul className="dropdown-menu">
// 									<li>
// 										<Link className="dropdown-item" to={`/student/dashboard/`}>
// 											{" "}
// 											<i className="bi bi-grid-fill"></i> Dashboard
// 										</Link>
// 									</li>
// 									<li>
// 										<Link className="dropdown-item" to={`/student/courses/`}>
// 											{" "}
// 											<i className="fas fa-shopping-cart"></i>My Courses
// 										</Link>
// 									</li>

// 									<li>
// 										<Link className="dropdown-item" to={`/student/wishlist/`}>
// 											{" "}
// 											<i className="fas fa-heart"></i> Wishlist{" "}
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											className="dropdown-item"
// 											to={`/student/question-answer/`}
// 										>
// 											{" "}
// 											<i className="fas fa-envelope"></i> Q/A{" "}
// 										</Link>
// 									</li>
// 									<li>
// 										<Link className="dropdown-item" to={`/student/profile/`}>
// 											{" "}
// 											<i className="fas fa-gear"></i> Profile & Settings
// 										</Link>
// 									</li>
// 								</ul>
// 							</li>
// 						</ul>
// 						<form className="d-flex" role="search">
// 							<input
// 								className="form-control me-2 w-100"
// 								type="search"
// 								placeholder="Search Courses"
// 								aria-label="Search Courses"
// 							/>
// 							<button className="btn btn-outline-success w-50" type="submit">
// 								Search <i className="fas fa-search"></i>
// 							</button>
// 						</form>
// 						<Link to="/login/" className="btn btn-primary ms-2" type="submit">
// 							Login <i className="fas fa-sign-in-alt"></i>
// 						</Link>
// 						<Link
// 							to="/register/"
// 							className="btn btn-primary ms-2"
// 							type="submit"
// 						>
// 							Register <i className="fas fa-user-plus"> </i>
// 						</Link>
// 						<Link className="btn btn-success ms-2" to="/cart/">
// 							Cart (3) <i className="fas fa-shopping-cart"> </i>
// 						</Link>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// }

// export default BaseHeader;

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
	CircleUserRound,
	UserRound,
} from "lucide-react";
import { CartContext } from "../plugins/Context";
import logo from "../../assets/techgrad.svg";

export default function BaseHeader() {
	const [cartCount, setCartCount] = useContext(CartContext);

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

	return (
		<header className="bg-white text-gray-900 shadow-sm fixed top-0 left-0 right-0 z-10">
			<div className="max-w-full mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						{/* Logo */}
						<Link to="/" className="flex items-center mr-7">
							<span className="text-xl font-bold">TECHGRAD</span>
						</Link>

						{/* Navigation Links */}
						<nav className="hidden md:flex space-x-4">
							<Link
								to="/pages/contact-us/"
								className="text-gray-700 font-medium hover:text-gray-900"
							>
								Contact Us
							</Link>
							<Link
								to="/pages/about-us/"
								className="text-gray-700 font-medium hover:text-gray-900"
							>
								About Us
							</Link>

							{/* Instructor Dropdown */}
							<div className="relative">
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
											<DollarSign className="inline-block mr-2 h-4 w-4" />{" "}
											Earning
										</Link>
										<Link
											to="/instructor/profile/"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											<Settings className="inline-block mr-2 h-4 w-4" />{" "}
											Settings & Profile
										</Link>
									</div>
								)}
							</div>

							{/* Student Dropdown */}
							<div className="relative">
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
											<Settings className="inline-block mr-2 h-4 w-4" /> Profile
											& Settings
										</Link>
									</div>
								)}
							</div>
						</nav>
					</div>
					{/* Search Bar, Icons, and Buttons */}
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
									<span className="block px-4 py-2 font-bold">Cart (3)</span>
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
									<Link
										to="/login/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										Login
									</Link>
									<Link
										to="/register/"
										className="block px-4 py-2 hover:bg-gray-100"
									>
										Register
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
