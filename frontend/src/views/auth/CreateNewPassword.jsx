import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../assets/techgrad.svg";
import { Eye, EyeOff, Lock, Loader } from "lucide-react";
import apiInstance from "../../utils/axios";

function CreateNewPassword() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const navigate = useNavigate();
	const [searchParam] = useSearchParams();

	const otp = searchParam.get("otp");
	const uuidb64 = searchParam.get("uuidb64");
	const refresh_token = searchParam.get("refresh_token");

	const handleCreatePassword = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (confirmPassword !== password) {
			alert("Passwords do not match.");
			return;
		} else {
			const formdata = new FormData();
			formdata.append("otp", otp); // Here the "otp" is key name that expecting backend when requesting, the next one is key value (otp)
			formdata.append("uuidb64", uuidb64);
			formdata.append("password", password);
			formdata.append("refresh_token", refresh_token);

			try {
				await apiInstance
					.post(`user/password-change/`, formdata)
					.then((res) => {
						console.log(res.data);
						setIsLoading(false);
						navigate("/login/");
						alert(res.data.message);
					});
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		}
	};

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
			<div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
				<div className="text-center">
					<img
						src={logo}
						alt="Company Logo"
						className="mx-auto h-12 border-2 rounded-md overflow-hidden"
					/>
					<h2 className="mt-4 text-3xl font-bold text-gray-900">
						Create New Password
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Choose a new password for your account
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleCreatePassword}>
					<div className="space-y-4">
						<div className="relative">
							<label htmlFor="password" className="sr-only">
								New Password
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
								placeholder="New Password"
								onChange={(e) => setPassword(e.target.value)}
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
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 rounded-md"
								placeholder="Confirm Password"
								onChange={(e) => setConfirmPassword(e.target.value)}
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
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className="animate-spin h-5 w-5 text-white" />
							) : (
								"Save New Password"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateNewPassword;
