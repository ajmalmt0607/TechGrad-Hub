// import React from 'react'
// import { Link } from 'react-router-dom'

// import BaseHeader from '../partials/BaseHeader'
// import BaseFooter from '../partials/BaseFooter'

// function Cart() {
//     return (
//         <>
//             <BaseHeader />

//             <section className="py-0">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="bg-light p-4 text-center rounded-3">
//                                 <h1 className="m-0">My cart</h1>
//                                 {/* Breadcrumb */}
//                                 <div className="d-flex justify-content-center">
//                                     <nav aria-label="breadcrumb">
//                                         <ol className="breadcrumb breadcrumb-dots mb-0">
//                                             <li className="breadcrumb-item">
//                                                 <a href="#" className='text-decoration-none text-dark'>Home</a>
//                                             </li>
//                                             <li className="breadcrumb-item">
//                                                 <a href="#" className='text-decoration-none text-dark'>Courses</a>
//                                             </li>
//                                             <li className="breadcrumb-item active" aria-current="page">
//                                                 Cart
//                                             </li>
//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="pt-5">
//                 <div className="container">
//                     <form  >
//                         <div className="row g-4 g-sm-5">
//                             {/* Main content START */}
//                             <div className="col-lg-8 mb-4 mb-sm-0">
//                                 <div className="p-4 shadow rounded-3">
//                                     <h5 className="mb-0 mb-3">Cart Items (3)</h5>

//                                     <div className="table-responsive border-0 rounded-3">
//                                         <table className="table align-middle p-4 mb-0">
//                                             <tbody className="border-top-2">
//                                                 <tr>
//                                                     <td>
//                                                         <div className="d-lg-flex align-items-center">
//                                                             <div className="w-100px w-md-80px mb-2 mb-md-0">
//                                                                 <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" style={{ width: "100px", height: "70px", objectFit: "cover" }} className="rounded" alt="" />
//                                                             </div>
//                                                             <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
//                                                                 <a href="#" className='text-decoration-none text-dark' >Building Scalable APIs with GraphQL</a>
//                                                             </h6>
//                                                         </div>
//                                                     </td>
//                                                     <td className="text-center">
//                                                         <h5 className="text-success mb-0">$350</h5>
//                                                     </td>
//                                                     <td>
//                                                         <button className="btn btn-sm btn-danger px-2 mb-0">
//                                                             <i className="fas fa-fw fa-times" />
//                                                         </button>
//                                                     </td>
//                                                 </tr>

//                                                 <tr>
//                                                     <td>
//                                                         <div className="d-lg-flex align-items-center">
//                                                             <div className="w-100px w-md-80px mb-2 mb-md-0">
//                                                                 <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" style={{ width: "100px", height: "70px", objectFit: "cover" }} className="rounded" alt="" />
//                                                             </div>
//                                                             <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
//                                                                 <a href="#" className='text-decoration-none text-dark' >Building Scalable APIs with GraphQL</a>
//                                                             </h6>
//                                                         </div>
//                                                     </td>
//                                                     <td className="text-center">
//                                                         <h5 className="text-success mb-0">$350</h5>
//                                                     </td>
//                                                     <td>
//                                                         <button className="btn btn-sm btn-danger px-2 mb-0">
//                                                             <i className="fas fa-fw fa-times" />
//                                                         </button>
//                                                     </td>
//                                                 </tr>

//                                                 <tr>
//                                                     <td>
//                                                         <div className="d-lg-flex align-items-center">
//                                                             <div className="w-100px w-md-80px mb-2 mb-md-0">
//                                                                 <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" style={{ width: "100px", height: "70px", objectFit: "cover" }} className="rounded" alt="" />
//                                                             </div>
//                                                             <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
//                                                                 <a href="#" className='text-decoration-none text-dark' >Building Scalable APIs with GraphQL</a>
//                                                             </h6>
//                                                         </div>
//                                                     </td>
//                                                     <td className="text-center">
//                                                         <h5 className="text-success mb-0">$350</h5>
//                                                     </td>
//                                                     <td>
//                                                         <button className="btn btn-sm btn-danger px-2 mb-0">
//                                                             <i className="fas fa-fw fa-times" />
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>

//                                 {/* Personal info START */}
//                                 <div className="shadow p-4 rounded-3 mt-5">
//                                     {/* Title */}
//                                     <h5 className="mb-0">Personal Details</h5>
//                                     {/* Form START */}
//                                     <div className="row g-3 mt-0">
//                                         {/* Name */}
//                                         <div className="col-md-12 bg-light-input">
//                                             <label htmlFor="yourName" className="form-label">
//                                                 Your name *
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 id="yourName"
//                                                 placeholder="Name"
//                                             />
//                                         </div>
//                                         {/* Email */}
//                                         <div className="col-md-12 bg-light-input">
//                                             <label htmlFor="emailInput" className="form-label">
//                                                 Email address *
//                                             </label>
//                                             <input
//                                                 type="email"
//                                                 className="form-control"
//                                                 id="emailInput"
//                                                 placeholder="Email"
//                                             />
//                                         </div>

//                                         {/* Country option */}
//                                         <div className="col-md-12 bg-light-input">
//                                             <label htmlFor="mobileNumber" className="form-label">
//                                                 Select country *
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 id="mobileNumber"
//                                                 placeholder="Country"
//                                             />
//                                         </div>

//                                     </div>
//                                     {/* Form END */}
//                                 </div>
//                             </div>

//                             <div className="col-lg-4">
//                                 <div className="p-4 shadow rounded-3">
//                                     <h4 className="mb-3">Cart Total</h4>
//                                     <ul class="list-group mb-3">
//                                         <li class="list-group-item d-flex justify-content-between align-items-center">
//                                             Sub Total
//                                             <span>$10.99</span>
//                                         </li>
//                                         <li class="list-group-item d-flex justify-content-between align-items-center">
//                                             Tax
//                                             <span>$0.99</span>
//                                         </li>
//                                         <li class="list-group-item d-flex fw-bold justify-content-between align-items-center">
//                                             Total
//                                             <span className='fw-bold'>$8.99</span>
//                                         </li>
//                                     </ul>
//                                     <div className="d-grid">
//                                         <Link to={`/checkout/`} className="btn btn-lg btn-success">
//                                             Proceed to Checkout
//                                         </Link>
//                                     </div>
//                                     <p className="small mb-0 mt-2 text-center">
//                                         By proceeding to checkout, you agree to these{" "}<a href="#"> <strong>Terms of Service</strong></a>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </section>

//             <BaseFooter />
//         </>
//     )
// }

// export default Cart

import React, { useContext, useEffect, useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import BaseHeader from "../partials/BaseHeader";
import apiInstance from "../../utils/axios";
import CartId from "../plugins/CartId";
import Toast from "../plugins/Toast";
import { CartContext } from "../plugins/Context";
import { userId } from "../../utils/constants";

export default function Cart() {
	const [cart, setCart] = useState([]);
	const [cartStats, setCartStats] = useState({});
	const [cartCount, setCartCount] = useContext(CartContext);
	const [bioData, setBioData] = useState({
		full_name: "",
		email: "",
		country: "",
	});

	const fetchCartData = async () => {
		try {
			const cartResponse = await apiInstance.get(
				`course/cart-list/${CartId()}/`
			);
			const statsResponse = await apiInstance.get(`cart/stats/${CartId()}/`);
			setCart(cartResponse.data);
			setCartStats(statsResponse.data);
			setCartCount(cartResponse.data.length);
		} catch (error) {
			console.error("Error fetching cart data:", error);
		}
	};

	useEffect(() => {
		fetchCartData();
	}, []);

	const handleBioDataChange = (e) => {
		setBioData({ ...bioData, [e.target.name]: e.target.value });
	};

	const deleteCartItem = async (itemId) => {
		try {
			await apiInstance.delete(
				`course/cart-item-delete/${CartId()}/${itemId}/`
			);
			Toast().fire({
				icon: "success",
				title: "Item removed from cart",
			});
			fetchCartData();
		} catch (error) {
			console.error("Error deleting cart item:", error);
		}
	};

	const navigate = useNavigate();

	const createOrder = async (e) => {
		e.preventDefault();
		if (!cart.length) {
			Toast().fire({
				icon: "error",
				title: "Your cart is empty!",
			});
			return;
		}
		if (!bioData.full_name || !bioData.email || !bioData.country) {
			Toast().fire({
				icon: "error",
				title: "Please complete your personal details",
			});
			return;
		}

		try {
			const formData = new FormData();
			formData.append("full_name", bioData.full_name);
			formData.append("email", bioData.email);
			formData.append("country", bioData.country);
			formData.append("cart_id", CartId());
			formData.append("user_id", userId);

			await apiInstance.post(`order/create-order/`, formData).then((res) => {
				navigate(`/checkout/${res.data.order_oid}`);
			});
			Toast().fire({
				icon: "success",
				title: "Order placed successfully",
			});
			fetchCartData(); // Update stats and count
		} catch (error) {
			console.error("Order creation failed:", error);
		}
	};

	return (
		<>
			<BaseHeader />
			<div className="min-h-screen flex mt-6 items-center justify-center bg-white p-4">
				<div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
					<h1 className="text-3xl font-bold text-gray-900 text-center">
						My Cart
					</h1>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Cart Items */}
						<div className="md:col-span-2 space-y-6">
							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">
									Cart Items ({cart?.length})
								</h2>
								<div className="space-y-4">
									{cart.length > 0 ? (
										cart.map((course, index) => (
											<div
												key={index}
												className="flex items-center space-x-4 py-4 border-b last:border-b-0"
											>
												<img
													src={course.course.image}
													width={80}
													height={60}
													alt="Course thumbnail"
													className="rounded"
												/>
												<div className="flex-grow">
													<h3 className="font-medium text-gray-900">
														{course.course.name}
													</h3>
													<p className="text-indigo-600 font-semibold">
														${course.price}
													</p>
												</div>
												<button
													onClick={() => deleteCartItem(course.id)}
													className="text-red-500 hover:text-red-700 transition-colors"
												>
													<X className="h-5 w-5" />
												</button>
											</div>
										))
									) : (
										<p className="mt-4 p-4">Your Cart is Empty</p>
									)}
								</div>
							</div>

							{/* Personal Details Form */}
							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Personal Details</h2>
								<form className="space-y-4">
									<input
										type="text"
										name="full_name"
										placeholder="Full Name"
										value={bioData.full_name}
										onChange={handleBioDataChange}
										className="w-full px-3 py-2 border rounded-md"
									/>
									<input
										type="email"
										name="email"
										placeholder="Email Address"
										value={bioData.email}
										onChange={handleBioDataChange}
										className="w-full px-3 py-2 border rounded-md"
									/>
									<input
										type="text"
										name="country"
										placeholder="Country"
										value={bioData.country}
										onChange={handleBioDataChange}
										className="w-full px-3 py-2 border rounded-md"
									/>
								</form>
							</div>
						</div>

						{/* Cart Status */}
						<div className="md:col-span-1">
							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
								<ul className="space-y-3 mb-6">
									<li className="flex justify-between">
										<span>Sub Total</span>
										<span>${cartStats.price?.toFixed(2)}</span>
									</li>
									<li className="flex justify-between">
										<span>Tax</span>
										<span>${cartStats.tax?.toFixed(2)}</span>
									</li>
									<li className="flex justify-between font-semibold">
										<span>Total</span>
										<span>${cartStats.total?.toFixed(2)}</span>
									</li>
								</ul>

								{/* Checkout Button */}
								<button
									onClick={createOrder}
									disabled={cart.length === 0}
									className={`w-full py-2 px-4 rounded-md text-white ${
										cart.length > 0
											? "bg-indigo-600 hover:bg-indigo-700"
											: "bg-gray-400 cursor-not-allowed"
									}`}
								>
									Proceed to Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
