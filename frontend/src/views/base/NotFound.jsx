import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="flex pt-10 items-center justify-center bg-gradient-to-r">
			<div className="text-center p-8 rounded-lg shadow-2xl max-w-md w-full">
				<h1 className="text-9xl font-bold text-blue-700 mb-4">404</h1>
				<p className="text-2xl font-semibold text-gray-800 mb-6">
					Oops! Page Not Found
				</p>
				<p className="text-gray-600 mb-8">
					Sorry, the page you are looking for doesn&apos;t exist or has been
					moved.
				</p>
				<div className="space-y-4">
					<Link
						to="/dashboard"
						className="block w-full py-3 px-6 text-center text-white bg-blue-700 hover:bg-blue-900 rounded-lg transition duration-300 ease-in-out"
					>
						Go Back Home
					</Link>
				</div>
			</div>
		</div>
	);
}
