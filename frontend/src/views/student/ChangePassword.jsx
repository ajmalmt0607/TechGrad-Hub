import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import useAxios from "../../utils/useAxios";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";

export default function ChangePassword() {
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [password, setPassword] = useState({
		old_password: "",
		new_password: "",
		confirm_new_password: "",
	});

	const handlePasswordChange = (event) => {
		setPassword({ ...password, [event.target.name]: event.target.value });
	};

	const changePasswordSubmit = async (e) => {
		e.preventDefault();

		if (password.confirm_new_password !== password.new_password) {
			Toast().fire({
				icon: "error",
				title: "Passwords do not match",
			});
			return;
		}

		const formdata = new FormData();
		formdata.append("user_id", UserData()?.user_id);
		formdata.append("old_password", password.old_password);
		formdata.append("new_password", password.new_password);

		try {
			const res = await useAxios().post(`user/change-password/`, formdata);
			Toast().fire({
				icon: res.data.icon,
				title: res.data.message,
			});
			if (res.data.icon === "success") {
				setPassword({
					old_password: "",
					new_password: "",
					confirm_new_password: "",
				});
			}
		} catch (error) {
			Toast().fire({
				icon: "error",
				title: "An error occurred while changing the password",
			});
			console.error(error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-xl mx-auto">
				<div className="bg-white shadow-xl rounded-lg overflow-hidden">
					<div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
						<h2 className="text-2xl font-bold text-white">Change Password</h2>
						<p className="text-blue-100">
							Update your account password securely.
						</p>
					</div>
					<form className="px-6 py-8 space-y-6" onSubmit={changePasswordSubmit}>
						<div className="space-y-2">
							<label
								htmlFor="oldPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Old Password
							</label>
							<div className="relative">
								<input
									type={showOldPassword ? "text" : "password"}
									id="oldPassword"
									name="old_password"
									value={password.old_password}
									onChange={handlePasswordChange}
									className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your old password"
									required
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center"
									onClick={() => setShowOldPassword(!showOldPassword)}
								>
									{showOldPassword ? (
										<EyeOff className="h-5 w-5 text-gray-400" />
									) : (
										<Eye className="h-5 w-5 text-gray-400" />
									)}
								</button>
							</div>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="newPassword"
								className="block text-sm font-medium text-gray-700"
							>
								New Password
							</label>
							<div className="relative">
								<input
									type={showNewPassword ? "text" : "password"}
									id="newPassword"
									name="new_password"
									value={password.new_password}
									onChange={handlePasswordChange}
									className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your new password"
									required
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center"
									onClick={() => setShowNewPassword(!showNewPassword)}
								>
									{showNewPassword ? (
										<EyeOff className="h-5 w-5 text-gray-400" />
									) : (
										<Eye className="h-5 w-5 text-gray-400" />
									)}
								</button>
							</div>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm New Password
							</label>
							<div className="relative">
								<input
									type={showConfirmPassword ? "text" : "password"}
									id="confirmPassword"
									name="confirm_new_password"
									value={password.confirm_new_password}
									onChange={handlePasswordChange}
									className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Confirm your new password"
									required
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center"
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								>
									{showConfirmPassword ? (
										<EyeOff className="h-5 w-5 text-gray-400" />
									) : (
										<Eye className="h-5 w-5 text-gray-400" />
									)}
								</button>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								<Lock className="h-5 w-5 mr-2" />
								Change Password
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
