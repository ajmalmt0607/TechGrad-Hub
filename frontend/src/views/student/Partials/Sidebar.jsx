import React, { useState } from "react";
import {
	Home,
	BookOpen,
	Heart,
	Menu,
	ChevronDown,
	Settings,
	Edit,
	GraduationCap,
	GlobeIcon,
} from "lucide-react";
import useSidebarStore from "../../../store/sidebar"; // Import the store
import { Link } from "react-router-dom";
import { CgPassword } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";

export function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isLearningOpen, setIsLearningOpen] = useState(false); // State to handle dropdown toggle

	const { selectedView, setSelectedView } = useSidebarStore((state) => ({
		selectedView: state.selectedView,
		setSelectedView: state.setSelectedView,
	}));

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
									selectedView === "Dashboard"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<Home
									className={`mr-4 h-5 w-5 ${
										selectedView === "Dashboard"
											? "text-blue-500"
											: "text-gray-700"
									}`}
								/>
								<span>Dashboard</span>
							</Link>
						</li>

						<li>
							<Link
								to="/student/courses"
								onClick={() => handleNavigation("MyCourses")}
								className={`w-full text-left p-3 flex items-center rounded-md ${
									selectedView === "MyCourses"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<BookOpen
									className={`mr-4 h-5 w-5 ${
										selectedView === "MyCourses"
											? "text-blue-500"
											: "text-gray-700"
									}`}
								/>
								<span>My Courses</span>
							</Link>
						</li>

						<li>
							<Link
								to="/student/courses-list"
								onClick={() => handleNavigation("Discover")}
								className={`w-full text-left p-3 flex items-center rounded-md ${
									selectedView === "Discover"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<GlobeIcon
									className={`mr-4 h-5 w-5 ${
										selectedView === "Discover"
											? "text-blue-500"
											: "text-gray-700"
									}`}
								/>
								<span>Discover</span>
							</Link>
						</li>

						<li>
							<Link
								to="/student/wishlist"
								onClick={() => handleNavigation("Wishlist")}
								className={`w-full text-left p-3 flex items-center rounded-md ${
									selectedView === "Wishlist"
										? "bg-blue-100 text-blue-500 border-l-4 border-blue-500"
										: "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
								}`}
							>
								<Heart
									className={`mr-4 h-5 w-5 ${
										selectedView === "Wishlist"
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
											to="/student/edit-profile"
											onClick={() => handleNavigation("Syllabus")}
											className={`w-full text-left p-3 flex items-center rounded-md ${
												selectedView === "Syllabus"
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
												selectedView === "ChangePassword"
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
											to="/logout"
											onClick={() => handleNavigation("logout")}
											className={`w-full text-left p-3 flex items-center rounded-md ${
												selectedView === "logout"
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
