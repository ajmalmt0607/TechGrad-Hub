import { useState } from "react";

import apiInstance from "../../utils/axios";
import { login } from "../../utils/auth";

import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader } from "lucide-react";
import logo from "../../assets/techgrad.svg";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const { error } = await login(email, password);

		if (error) {
			setIsLoading(false);
			alert(error);
		} else {
			navigate("/");
			setIsLoading;
		}
	};

	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
			<div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
				<div className="text-left">
					{/* Logo Section */}
					<img
						src={logo}
						alt="Company Logo"
						className="mx-auto h-12 border-2 rounded-md overflow-hidden"
					/>
					<h2 className="text-3xl font-bold mt-3 text-gray-900">Sign in</h2>
					<p className="mt-2 text-sm text-gray-600">
						Don’t have an account?{" "}
						<Link
							to="/register"
							className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
						>
							Sign up
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" noValidate onSubmit={handleSubmit}>
					<div className="space-y-4">
						{/* Email */}
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
								placeholder="Email address"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						{/* Password */}
						<div className="relative">
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<Lock
								className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none"
								size={18}
							/>
							<input
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 rounded-md"
								placeholder="Password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? (
									<EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
								) : (
									<Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
								)}
							</button>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-900"
							>
								Remember me
							</label>
						</div>
						<div className="text-sm">
							<Link
								to="/forgot-password"
								className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
							>
								Forgot your password?
							</Link>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out transform hover:scale-105"
							disabled={isLoading} // Disables button when loading
						>
							{isLoading ? (
								<Loader className="animate-spin h-5 w-5 text-white" />
							) : (
								"Sign in"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
