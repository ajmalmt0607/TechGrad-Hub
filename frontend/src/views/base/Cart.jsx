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
import { X, ChevronRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import BaseHeader from "../partials/BaseHeader";
import apiInstance from "../../utils/axios";
import CartId from "../plugins/CartId";
import Toast from "../plugins/Toast";
import { CartContext } from "../plugins/Context";

export default function Cart() {
	const [cart, setCart] = useState([]);
	const [cartStats, setCartStats] = useState([]);
	const [cartCount, setCartCount] = useContext(CartContext);
	const [bioData, setBioData] = useState({
		full_name: "",
		email: "",
		country: "",
	});

	const fetchCartItem = async () => {
		try {
			await apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
				console.log(res.data);
				setCart(res.data);
			});

			await apiInstance.get(`cart/stats/${CartId()}/`).then((res) => {
				console.log(res.data);
				setCartStats(res.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCartItem();
	}, []);

	const cartItemDelte = async (itemId) => {
		await apiInstance
			.delete(`course/cart-item-delete/${CartId()}/${itemId}/`)
			.then((res) => {
				console.log(res.data);
				fetchCartItem();
				Toast().fire({
					icon: "success",
					title: "Item deleted successfully",
				});
				// set cart count after adding to cart
				apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
					setCartCount(res.data?.length);
				});
			});
	};

	const handleBioDataChange = (e) => {
		setBioData({ ...bioData, [e.target.name]: e.target.value });
	};

	console.log(bioData);

	return (
		<>
			<BaseHeader />
			<div className="min-h-screen flex mt-6 items-center justify-center bg-white from-purple-50 to-indigo-100 p-4">
				<div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
					<div className="text-center">
						<h1 className="text-3xl font-bold text-gray-900">My Cart</h1>
						<nav className="flex justify-center mt-2">
							<ol className="flex items-center space-x-2 text-sm text-gray-600">
								<li>
									<Link
										to="/"
										className="hover:text-indigo-600 transition-colors"
									>
										Home
									</Link>
								</li>
								<ChevronRight className="h-4 w-4" />
								<li>
									<Link
										to="/courses"
										className="hover:text-indigo-600 transition-colors"
									>
										Courses
									</Link>
								</li>
								<ChevronRight className="h-4 w-4" />
								<li className="text-indigo-600">Cart</li>
							</ol>
						</nav>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="md:col-span-2 space-y-6">
							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">
									Cart Items ({cart?.length})
								</h2>
								<div className="space-y-4">
									{cart?.map((course, index) => (
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
													Building Scalable APIs with GraphQL
												</h3>
												<p className="text-indigo-600 font-semibold">
													${course.price}
												</p>
											</div>
											<button
												onClick={() => cartItemDelte(course.id)}
												className="text-red-500 hover:text-red-700 transition-colors"
											>
												<X className="h-5 w-5" />
											</button>
										</div>
									))}
									{cart?.length < 1 && (
										<p className="mt-4 p-4">Your Cart is Empty</p>
									)}
								</div>
							</div>

							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Personal Details</h2>
								<form className="space-y-4">
									<div className="relative">
										<input
											type="text"
											id="name"
											name="full_name"
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
											placeholder="Your name"
											value={bioData.full_name}
											onChange={handleBioDataChange}
										/>
										<Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
									</div>
									<div className="relative">
										<input
											type="email"
											id="email"
											name="email"
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
											placeholder="Email address"
											value={bioData.email}
											onChange={handleBioDataChange}
										/>
										<Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
									</div>
									<div className="relative">
										<input
											type="text"
											id="country"
											name="country"
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
											placeholder="Select country"
											value={bioData.country}
											onChange={handleBioDataChange}
										/>
										<MapPin className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
									</div>
								</form>
							</div>
						</div>

						<div className="md:col-span-1">
							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Cart Total</h2>
								<ul className="space-y-3 mb-6">
									<li className="flex justify-between text-sm">
										<span className="text-gray-600">Sub Total</span>
										<span className="font-semibold">
											${cartStats?.price?.toFixed(2)}
										</span>
									</li>
									<li className="flex justify-between text-sm">
										<span className="text-gray-600">Tax</span>
										<span className="font-semibold">
											${cartStats?.tax?.toFixed(2)}
										</span>
									</li>
									<li className="flex justify-between text-base font-semibold border-t pt-3">
										<span>Total</span>
										<span>${cartStats?.total?.toFixed(2)}</span>
									</li>
								</ul>
								<Link
									to="/checkout"
									className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
								>
									Proceed to Checkout
								</Link>
								<p className="text-xs text-center mt-4 text-gray-500">
									By proceeding to checkout, you agree to these{" "}
									<Link to="#" className="text-indigo-600 hover:underline">
										Terms of Service
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
