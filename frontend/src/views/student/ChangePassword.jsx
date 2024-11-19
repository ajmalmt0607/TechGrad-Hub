import React, { useState, useEffect, useContext } from "react";
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
		console.log(password);
	};

	const changePasswordSubmit = async (e) => {
		e.preventDefault();

		// Check if new passwords match
		if (password.confirm_new_password !== password.new_password) {
			Toast().fire({
				icon: "error",
				title: "Passwords do not match",
			});
			return; // Stop further execution if passwords don't match
		}

		const formdata = new FormData();
		formdata.append("user_id", UserData()?.user_id);
		formdata.append("old_password", password.old_password);
		formdata.append("new_password", password.new_password);

		try {
			const res = await useAxios().post(`user/change-password/`, formdata);
			console.log(res.data);
			Toast().fire({
				icon: res.data.icon,
				title: res.data.message,
			});
		} catch (error) {
			Toast().fire({
				icon: "error",
				title: "An error occurred while changing the password",
			});
			console.error(error);
		}
	};

	return (
		<div className="bg-white dark:bg-gray-800 max-w-[800px] p-6 rounded-lg shadow-sm">
			<h2 className="text-2xl font-bold mb-6">Change Password</h2>
			<form className="space-y-6" onSubmit={changePasswordSubmit}>
				<div className="space-y-2">
					<label
						htmlFor="oldPassword"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Old Password
					</label>
					<div className="relative">
						<input
							type={showOldPassword ? "text" : "password"}
							id="oldPassword"
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							placeholder="Enter your old password"
							required
							name="old_password"
							value={password.old_password}
							onChange={handlePasswordChange}
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
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						New Password
					</label>
					<div className="relative">
						<input
							type={showNewPassword ? "text" : "password"}
							id="newPassword"
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							placeholder="Enter your new password"
							required
							name="new_password"
							value={password.new_password}
							onChange={handlePasswordChange}
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
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Confirm New Password
					</label>
					<div className="relative">
						<input
							type={showConfirmPassword ? "text" : "password"}
							id="confirmPassword"
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							placeholder="Confirm your new password"
							required
							name="confirm_new_password"
							value={password.confirm_new_password}
							onChange={handlePasswordChange}
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
				<button
					type="submit"
					className="w-full px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 dark:bg-purple-500 dark:hover:bg-purple-600"
				>
					<div className="flex items-center justify-center">
						<Lock className="h-5 w-5 mr-2" />
						Change Password
					</div>
				</button>
			</form>
		</div>
	);
}
