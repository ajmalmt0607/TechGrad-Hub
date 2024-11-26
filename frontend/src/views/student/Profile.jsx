// import React from "react";

// function Profile() {
// 	return (
// 		<>
// 			<section className="pt-5 pb-5">
// 				<div className="container">
// 					<div className="row mt-0 mt-md-4">
// 						<div className="col-lg-9 col-md-8 col-12">
// 							{/* Card */}
// 							<div className="card">
// 								{/* Card header */}
// 								<div className="card-header">
// 									<h3 className="mb-0">Profile Details</h3>
// 									<p className="mb-0">
// 										You have full control to manage your own account setting.
// 									</p>
// 								</div>
// 								{/* Card body */}
// 								<form className="card-body">
// 									<div className="d-lg-flex align-items-center justify-content-between">
// 										<div className="d-flex align-items-center mb-4 mb-lg-0">
// 											<img
// 												src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
// 												id="img-uploaded"
// 												className="avatar-xl rounded-circle"
// 												alt="avatar"
// 												style={{
// 													width: "100px",
// 													height: "100px",
// 													borderRadius: "50%",
// 													objectFit: "cover",
// 												}}
// 											/>
// 											<div className="ms-3">
// 												<h4 className="mb-0">Your avatar</h4>
// 												<p className="mb-0">
// 													PNG or JPG no bigger than 800px wide and tall.
// 												</p>
// 												<input
// 													type="file"
// 													className="form-control mt-3"
// 													name=""
// 													id=""
// 												/>
// 											</div>
// 										</div>
// 									</div>
// 									<hr className="my-5" />
// 									<div>
// 										<h4 className="mb-0">Personal Details</h4>
// 										<p className="mb-4">
// 											Edit your personal information and address.
// 										</p>
// 										{/* Form */}
// 										<div className="row gx-3">
// 											{/* First name */}
// 											<div className="mb-3 col-12 col-md-12">
// 												<label className="form-label" htmlFor="fname">
// 													Full Name
// 												</label>
// 												<input
// 													type="text"
// 													id="fname"
// 													className="form-control"
// 													placeholder="First Name"
// 													required=""
// 												/>
// 												<div className="invalid-feedback">
// 													Please enter first name.
// 												</div>
// 											</div>
// 											{/* Last name */}
// 											<div className="mb-3 col-12 col-md-12">
// 												<label className="form-label" htmlFor="lname">
// 													About Me
// 												</label>
// 												<textarea
// 													name=""
// 													id=""
// 													cols="30"
// 													rows="5"
// 													className="form-control"
// 												></textarea>
// 												<div className="invalid-feedback">
// 													Please enter last name.
// 												</div>
// 											</div>

// 											{/* Country */}
// 											<div className="mb-3 col-12 col-md-12">
// 												<label className="form-label" htmlFor="editCountry">
// 													Country
// 												</label>
// 												<input
// 													type="text"
// 													id="country"
// 													className="form-control"
// 													placeholder="Country"
// 													required=""
// 												/>
// 												<div className="invalid-feedback">
// 													Please choose country.
// 												</div>
// 											</div>
// 											<div className="col-12">
// 												{/* Button */}
// 												<button className="btn btn-primary" type="submit">
// 													Update Profile <i className="fas fa-check-circle"></i>
// 												</button>
// 											</div>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// }

// export default Profile;

import React, { useEffect, useState, useContext } from "react";
import useAxios from "../../utils/useAxios";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import { ProfileContext } from "../plugins/Context";

export default function ModernProfile() {
	const [image, setImage] = useState(null);
	const [profile, setProfile] = useState(ProfileContext);
	const [profileData, setProfileData] = useState({
		image: "",
		full_name: "",
		about: "",
		country: "",
	});

	const fetchProfile = () => {
		useAxios()
			.get(`user/profile/${UserData()?.user_id}/`)
			.then((res) => {
				console.log(res.data);
				setProfile(res.data);
				setProfileData(res.data);
				setImage(res.data.image);
			});
	};

	console.log(profileData);

	useEffect(() => {
		fetchProfile();
	}, []);

	const handleProfileChange = (e) => {
		setProfileData({ ...profileData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setProfileData({ ...profileData, [e.target.name]: file });
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const res = await useAxios().get(`user/profile/${UserData()?.user_id}/`);
		const formdata = new FormData();
		if (profileData.image && profileData.image !== res.data.image) {
			formdata.append("image", profileData.image);
		}
		formdata.append("full_name", profileData.full_name);
		formdata.append("about", profileData.about);
		formdata.append("country", profileData.country);

		await useAxios()
			.patch(`user/profile/${UserData()?.user_id}/`, formdata, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res.data);
				Toast().fire({
					icon: "success",
					title: "Profile updated successfully!",
				});
			});
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-6xl">
				<div className="bg-white shadow-xl rounded-lg overflow-hidden">
					<div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
						<h1 className="text-2xl font-bold text-white">Profile Details</h1>
						<p className="text-blue-100">
							Manage your account settings and preferences.
						</p>
					</div>

					<form className="px-6 py-8" onSubmit={handleFormSubmit}>
						<div className="flex flex-col lg:flex-row">
							{/* Left Section */}
							<div className="lg:w-1/2 lg:pr-8">
								<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
									<div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200">
										{profile.image ? (
											<img
												src={image}
												alt="Profile"
												className="w-full h-full object-cover"
											/>
										) : (
											<svg
												className="w-full h-full text-gray-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
													clipRule="evenodd"
												/>
											</svg>
										)}
									</div>
									<div className="flex-1">
										<h2 className="text-xl font-semibold text-gray-800">
											Your avatar
										</h2>
										<p className="mt-1 text-sm text-gray-500">
											PNG or JPG no bigger than 800px wide and tall.
										</p>
										<input
											type="file"
											onChange={handleImageChange}
											name="image"
											className="mt-3 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
										/>
									</div>
								</div>

								<div className="mb-6">
									<label
										htmlFor="fullName"
										className="block text-sm font-medium text-gray-700"
									>
										Full Name
									</label>
									<input
										type="text"
										id="fullName"
										name="full_name"
										className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										placeholder="John Doe"
										value={profileData.full_name}
										onChange={handleProfileChange}
									/>
								</div>
							</div>

							{/* Right Section (Scrollable) */}
							<div className="lg:w-1/2 lg:pl-8 lg:border-l lg:border-gray-200 space-y-6 lg:max-h-[600px] lg:overflow-y-auto">
								<div>
									<label
										htmlFor="aboutMe"
										className="block text-sm font-medium text-gray-700"
									>
										About Me
									</label>
									<textarea
										id="aboutMe"
										onChange={handleProfileChange}
										name="about"
										rows="4"
										className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										placeholder="Tell us about yourself..."
										value={profileData.about}
									></textarea>
								</div>

								<div>
									<label
										htmlFor="country"
										className="block text-sm font-medium text-gray-700"
									>
										Country
									</label>
									<input
										type="text"
										id="country"
										onChange={handleProfileChange}
										name="country"
										className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										placeholder="United States"
										value={profileData.country}
									/>
								</div>
							</div>
						</div>

						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Update Profile
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="ml-2 -mr-1 h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
