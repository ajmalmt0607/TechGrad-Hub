import React, { useState } from "react";
import {
	Home,
	BookOpen,
	Heart,
	Menu,
	ChevronDown,
	Settings,
	Edit,
} from "lucide-react";
import useSidebarStore from "../../../store/sidebar"; // Import the store
import { Link, useLocation } from "react-router-dom";
import { CgPassword } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";

export function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isLearningOpen, setIsLearningOpen] = useState(false); // State to handle dropdown toggle
	const setSelectedView = useSidebarStore((state) => state.setSelectedView);
	const location = useLocation(); // Get current route path

	// Function to toggle sidebar visibility
	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	// Function to handle navigation and store the selected view
	const handleNavigation = (view) => {
		setSelectedView(view); // Update the selected view in the store
		setIsSidebarOpen(false); // Optionally close sidebar on small screens
	};

	// Function to toggle dropdown
	const toggleLearningDropdown = () => {
		setIsLearningOpen((prev) => !prev);
	};

	return (
		<>
			<div className="sm:hidden fixed top-4 left-4 z-20">
				<button
					onClick={toggleSidebar}
					className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
				>
					<Menu className="h-6 w-6" />
				</button>
			</div>

			<div
				className={`fixed top-[65px] bottom-0 left-0 z-10 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} sm:translate-x-0`}
			>
				<nav className="p-4">
					<ul className="space-y-2">
						<li>
							<Link
								to="/student/dashboard"
								onClick={() => handleNavigation("Dashboard")}
								className={`w-full text-left p-3 flex items-center rounded-md ${
									location.pathname === "/student/dashboard"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<Home
									className={`mr-4 h-5 w-5 ${
										location.pathname === "/student/dashboard"
											? "text-blue-500"
											: "text-gray-700"
									}`}
								/>
								<span>Dashboard</span>
							</Link>
						</li>

						<li>
							<Link
								to="/student/my-courses"
								onClick={() => handleNavigation("MyCourses")}
								className={`w-full text-left p-3 flex items-center rounded-md ${
									location.pathname === "/student/my-courses"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<BookOpen
									className={`mr-4 h-5 w-5 ${
										location.pathname === "/student/my-courses"
											? "text-blue-500"
											: "text-gray-700"
									}`}
								/>
								<span>My Courses</span>
							</Link>
						</li>

						<li>
							<Link
								to="/student/wishlist"
								onClick={() => handleNavigation("Wishlist")}
								className={`w-full text-left p-3 flex items-center rounded-md ${
									location.pathname === "/student/wishlist"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<Heart
									className={`mr-4 h-5 w-5 ${
										location.pathname === "/student/wishlist"
											? "text-blue-500"
											: "text-gray-700"
									}`}
								/>
								<span>Wishlist</span>
							</Link>
						</li>

						{/* Learning Dropdown */}
						<li>
							<button
								onClick={toggleLearningDropdown}
								className="w-full text-left p-3 flex border-l-4 border-white hover:border-gray-100 items-center rounded-md hover:bg-gray-100 text-gray-700"
							>
								<Settings className="mr-4 h-5 w-5" />
								<span className="flex-1">Settings</span>
								<ChevronDown
									className={`h-5 w-5 ${isLearningOpen ? "rotate-180" : ""}`}
								/>
							</button>

							{/* Dropdown items */}
							{isLearningOpen && (
								<ul className="space-y-2 mt-2">
									<li>
										<Link
											to="/student/syllabus"
											onClick={() => handleNavigation("Syllabus")}
											className={`w-full text-left p-3 flex items-center rounded-md ${
												location.pathname === "/student/syllabus"
													? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
													: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
											}`}
										>
											<Edit className="mr-4 h-5 w-5" />
											<span>Edit Profile</span>
										</Link>
									</li>
									<li>
										<Link
											to="/student/change-password"
											onClick={() => handleNavigation("ChangePassword")}
											className={`w-full text-left p-3 flex items-center rounded-md ${
												location.pathname === "/student/change-password"
													? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
													: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
											}`}
										>
											<CgPassword className="mr-4 h-5 w-5" />
											<span>Change Password</span>
										</Link>
									</li>
									<li>
										<Link
											to="/student/workshops"
											onClick={() => handleNavigation("Workshops")}
											className={`w-full text-left p-3 flex items-center rounded-md ${
												location.pathname === "/student/workshops"
													? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
													: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
											}`}
										>
											<GoSignOut className="mr-4 h-5 w-5" />
											<span>Sign Out</span>
										</Link>
									</li>
								</ul>
							)}
						</li>

						{/* Add more dropdowns or links here */}
					</ul>
				</nav>
			</div>

			{/* Background overlay for small screens */}
			{isSidebarOpen && (
				<div
					onClick={toggleSidebar}
					className="fixed inset-0 bg-black opacity-50 z-5 sm:hidden"
				/>
			)}
		</>
	);
}
