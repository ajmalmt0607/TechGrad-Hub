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
		<header className="bg-white text-gray-900 shadow-sm fixed border-b top-0 left-0 right-0 z-10">
			<div className="max-w-full mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center">
							<img src={logo} alt="Logo" className="h-14 w-auto" />
						</Link>
					</div>

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
							<Link
								to="cart"
								onClick={() => toggleDropdown("cart")}
								className="p-2 text-gray-600 hover:bg-gray-100 rounded-full block dropdown-toggle"
							>
								<ShoppingCart className="h-5 w-5" />
								{cartCount > 0 && (
									<span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">
										{cartCount}
									</span>
								)}
							</Link>
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
