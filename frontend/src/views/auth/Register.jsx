import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/techgrad.svg";

import apiInstance from "../../utils/axios";
import { register } from "../../utils/auth";

import {
	Eye,
	EyeOff,
	User,
	Mail,
	Lock,
	LoaderCircle,
	Loader,
} from "lucide-react";

function Register() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const { error } = await register(fullName, email, password, password2);
		if (error) {
			alert(error);
			setIsLoading(false);
		} else {
			navigate("/");
			setIsLoading(false);
		}
	};

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);

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
					<h2 className="mt-4 text-3xl font-bold text-gray-900">
						Create your account
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Already have an account?{" "}
						<Link
							to="/login"
							className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
						>
							Sign in
						</Link>
					</p>
				</div>
				<form
					className="mt-8 space-y-6"
					action=""
					method="POST"
					onSubmit={handleSubmit}
				>
					<div className="space-y-4">
						<div className="relative">
							<label htmlFor="full-name" className="sr-only">
								Full Name
							</label>
							<User
								className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none"
								size={18}
							/>
							<input
								id="full-name"
								name="full_name"
								type="text"
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 rounded-md"
								placeholder="Full Name"
								onChange={(e) => {
									setFullName(e.target.value);
								}}
							/>
						</div>
						<div className="relative">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<Mail
								className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none"
								size={18}
							/>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 rounded-md"
								placeholder="Email address"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
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
								autoComplete="new-password"
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
							{/* Static message for password requirements */}
						</div>

						<div className="relative">
							<label htmlFor="confirm-password" className="sr-only">
								Confirm Password
							</label>
							<Lock
								className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none"
								size={18}
							/>
							<input
								id="confirm-password"
								name="confirm_password"
								type={showConfirmPassword ? "text" : "password"}
								autoComplete="new-password"
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 rounded-md"
								placeholder="Confirm Password"
								onChange={(e) => {
									setPassword2(e.target.value);
								}}
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
								onClick={toggleConfirmPasswordVisibility}
							>
								{showConfirmPassword ? (
									<EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
								) : (
									<Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
								)}
							</button>
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
								"Sign up"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
