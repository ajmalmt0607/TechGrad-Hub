import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/techgrad.svg";
import { Mail, Loader } from "lucide-react";
import apiInstance from "../../utils/axios";

function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
				console.log(res.data);
				setIsLoading(false);
			});
		} catch (error) {
			console.log("error:", error);
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
			<div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
				<div className="text-left">
					<img
						src={logo}
						alt="Company Logo"
						className="mx-auto h-12 border-2 rounded-md overflow-hidden"
					/>
					<h2 className="mt-4 text-3xl font-bold text-gray-900">
						Forgot Password
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Let’s help you get back into your account.
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="space-y-4">
						<div className="relative">
							<label htmlFor="email" className="sr-only">
								Email Address
							</label>
							<Mail
								className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none"
								size={18}
							/>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 rounded-md"
								placeholder="Email Address"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out transform hover:scale-105"
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className="animate-spin h-5 w-5 text-white" />
							) : (
								"Reset Password"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ForgotPassword;
