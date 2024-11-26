import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainWrapper from "./layouts/MainWrapper";
import PrivateRoute from "./layouts/PrivateRoute";

import Register from "../src/views/auth/Register";
import Login from "../src/views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreateNewPassword from "./views/auth/CreateNewPassword";
import Index from "./views/base/Index";
import CourseDetail from "./views/base/CourseDetail";
import Cart from "./views/base/Cart";
import Checkout from "./views/base/Checkout";
import Success from "./views/base/Success";
import Dashboard from "./views/student/Dashboard";

import { CartContext, ProfileContext } from "./views/plugins/Context";
import { useEffect, useState } from "react";
import apiInstance from "./utils/axios";
import CartId from "./views/plugins/CartId";
import Search from "./views/base/Search";
import Layout from "./views/student/Partials/Layout";
import NotFound from "./views/base/NotFound";
import StudentChangePassword from "./views/student/ChangePassword";
import { initializeAuth } from "./utils/initializeAuth";
import StudentCourses from "./views/student/Courses";
import StudentCoursesDetail from "./views/student/CourseDetail";
import StudentCoursesList from "./views/student/DiscoverPage";
import StudentWishList from "./views/student/Wishlist";
import StudentProfileEdit from "./views/student/Profile";
import useAxios from "./utils/useAxios";
import UserData from "./views/plugins/UserData";

function App() {
	const [cartCount, setCartCount] = useState(0);
	const [profile, setProfile] = useState([]);

	// Move initializeAuth to useEffect
	useEffect(() => {
		initializeAuth();
	}, []);

	useEffect(() => {
		// Fetching the Cart count
		apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
			setCartCount(res.data?.length);
		});

		// Fetching the User Profile
		useAxios()
			.get(`user/profile/${UserData()?.user_id}/`)
			.then((res) => {
				setProfile(res?.data);
			});
	}, []);

	return (
		<CartContext.Provider value={[cartCount, setCartCount]}>
			<ProfileContext.Provider value={[profile, setProfile]}>
				<BrowserRouter>
					<Routes>
						{/* Protected Routes for Students */}
						<Route path="/student" element={<Layout />}>
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="courses" element={<StudentCourses />} />
							<Route path="courses-list" element={<StudentCoursesList />} />
							<Route path="course-detail/:slug/" element={<CourseDetail />} />
							<Route
								path="courses/:enrollment_id/"
								element={<StudentCoursesDetail />}
							/>
							<Route path="wishlist" element={<StudentWishList />} />
							<Route path="edit-profile" element={<StudentProfileEdit />} />
							<Route
								path="change-password"
								element={<StudentChangePassword />}
							/>
							<Route path="cart/" element={<Cart />} />
							<Route path="checkout/:order_oid/" element={<Checkout />} />
							<Route path="payment-success/:order_oid/" element={<Success />} />

							{/* Catch-all route for unmatched paths */}
							<Route path="*" element={<NotFound />} />
						</Route>
						<Route path="/register/" element={<Register />} />
						<Route path="/login/" element={<Login />} />
						<Route path="/logout/" element={<Logout />} />
						<Route path="/forgot-password/" element={<ForgotPassword />} />
						<Route
							path="/create-new-password/"
							element={<CreateNewPassword />}
						/>
						{/* <Route path="/course-detail/" element={<CourseDetail />} /> */}

						{/* Base Routes */}
						<Route path="/" element={<Index />} />
						<Route path="/search/" element={<Search />} />
					</Routes>
				</BrowserRouter>
			</ProfileContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
