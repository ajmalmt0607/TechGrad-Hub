import { useEffect } from "react";
import { Link } from "react-router-dom";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";
import { LogIn, UserPlus } from "lucide-react";
import { logout } from "../../utils/auth";

function Logout() {
	useEffect(() => {
		logout();
	}, []);
	return (
		<>
			<section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
				<div className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
					<div className="text-center mb-6">
						<h1 className="text-2xl font-bold text-gray-900">
							You have been logged out
						</h1>
						<p className="text-gray-600 mt-2">
							Thanks for visiting our website, come back anytime!{" "}
							<Link className="text-blue-600" to={"/"}>
								Go to Home
							</Link>
						</p>
					</div>
					<div className="flex space-x-4 mt-6">
						<Link
							to="/login"
							className="w-full flex justify-center items-center py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-200 ease-in-out transform hover:scale-105"
						>
							Login <LogIn className="ml-2 h-5 w-5" />
						</Link>
						<Link
							to="/register"
							className="w-full flex justify-center items-center py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-200 ease-in-out transform hover:scale-105"
						>
							Register <UserPlus className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default Logout;
