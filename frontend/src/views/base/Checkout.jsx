// import { Link } from 'react-router-dom'

// import BaseHeader from '../partials/BaseHeader'
// import BaseFooter from '../partials/BaseFooter'

// function Checkout() {
//     return (
//         <>
//             <BaseHeader />

//             <section className="py-0">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="bg-light p-4 text-center rounded-3">
//                                 <h1 className="m-0">Checkout</h1>
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
//                                             <li className="breadcrumb-item">
//                                                 <a href="#" className='text-decoration-none text-dark'>Cart</a>
//                                             </li>
//                                             <li className="breadcrumb-item active" aria-current="page">
//                                                 Checkout
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
//                     <div className="row g-4 g-sm-5">
//                         <div className="col-xl-8 mb-4 mb-sm-0">
//                             <div className="alert alert-warning alert-dismissible d-flex justify-content-between align-items-center fade show py-2 pe-2" role="alert">
//                                 <div>
//                                     <i className="bi bi-exclamation-octagon-fill me-2" />
//                                     Review your courses before payment
//                                 </div>

//                                 <button type="button" className="btn btn-warning mb-0 text-primary-hover text-end" data-bs-dismiss="alert" aria-label="Close" >
//                                     <i className="bi bi-x-lg text-white" />
//                                 </button>
//                             </div>

//                             <div className="p-4 shadow rounded-3 mt-4">
//                                 <h5 className="mb-0 mb-3">Courses</h5>

//                                 <div className="table-responsive border-0 rounded-3">
//                                     <table className="table align-middle p-4 mb-0">
//                                         <tbody className="border-top-2">
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-lg-flex align-items-center">
//                                                         <div className="w-100px w-md-80px mb-2 mb-md-0">
//                                                             <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" style={{ width: "100px", height: "70px", objectFit: "cover" }} className="rounded" alt="" />
//                                                         </div>
//                                                         <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
//                                                             <a href="#" className='text-decoration-none text-dark' >Building Scalable APIs with GraphQL</a>
//                                                         </h6>
//                                                     </div>
//                                                 </td>
//                                                 <td className="text-center">
//                                                     <h5 className="text-success mb-0">$350</h5>
//                                                 </td>

//                                             </tr>

//                                             <tr>
//                                                 <td>
//                                                     <div className="d-lg-flex align-items-center">
//                                                         <div className="w-100px w-md-80px mb-2 mb-md-0">
//                                                             <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" style={{ width: "100px", height: "70px", objectFit: "cover" }} className="rounded" alt="" />
//                                                         </div>
//                                                         <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
//                                                             <a href="#" className='text-decoration-none text-dark' >Building Scalable APIs with GraphQL</a>
//                                                         </h6>
//                                                     </div>
//                                                 </td>
//                                                 <td className="text-center">
//                                                     <h5 className="text-success mb-0">$350</h5>
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td>
//                                                     <div className="d-lg-flex align-items-center">
//                                                         <div className="w-100px w-md-80px mb-2 mb-md-0">
//                                                             <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" style={{ width: "100px", height: "70px", objectFit: "cover" }} className="rounded" alt="" />
//                                                         </div>
//                                                         <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
//                                                             <a href="#" className='text-decoration-none text-dark' >Building Scalable APIs with GraphQL</a>
//                                                         </h6>
//                                                     </div>
//                                                 </td>
//                                                 <td className="text-center">
//                                                     <h5 className="text-success mb-0">$350</h5>
//                                                 </td>

//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <Link to={`/cart/`} className='btn btn-outline-secondary mt-3'>Edit Cart <i className='fas fa-edit'></i></Link>
//                             </div>

//                             <div className="shadow p-4 rounded-3 mt-5">
//                                 <h5 className="mb-0">Personal Details</h5>
//                                 <form className="row g-3 mt-0">
//                                     <div className="col-md-12 bg-light-input">
//                                         <label htmlFor="yourName" className="form-label">
//                                             Your name *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             id="yourName"
//                                             placeholder="Name"
//                                         />
//                                     </div>
//                                     <div className="col-md-6 bg-light-input">
//                                         <label htmlFor="emailInput" className="form-label">
//                                             Email address *
//                                         </label>
//                                         <input
//                                             type="email"
//                                             className="form-control"
//                                             id="emailInput"
//                                             placeholder="Email"
//                                         />
//                                     </div>
//                                     <div className="col-md-6 bg-light-input">
//                                         <label htmlFor="mobileNumber" className="form-label">
//                                             Mobile number *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             id="mobileNumber"
//                                             placeholder="Mobile number"
//                                         />
//                                     </div>
//                                     {/* Country option */}
//                                     <div className="col-md-12 bg-light-input">
//                                         <label htmlFor="mobileNumber" className="form-label">
//                                             Select country *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             id="mobileNumber"
//                                             placeholder="Country"
//                                         />
//                                     </div>

//                                 </form>
//                                 {/* Form END */}
//                             </div>

//                         </div>
//                         <div className="col-xl-4">
//                             <div className="row mb-0">
//                                 <div className="col-md-6 col-xl-12">
//                                     <div className="shadow p-4 mb-4 rounded-3">
//                                         <h4 className="mb-4">Order Summary</h4>
//                                         <div className="mb-4">
//                                             <div className="d-flex justify-content-between align-items-center">
//                                                 <span>Transaction ID</span>
//                                                 <p className="mb-0 h6 fw-light">DES23853</p>
//                                             </div>

//                                         </div>

//                                         {/* Course item START */}
//                                         <div className="row g-2 shadow p-2 mb-4 rounded-3">
//                                             <div className="col-sm-4">
//                                                 <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" className="rounded" style={{ width: "100px", height: "70px", objectFit: "cover" }} alt="" />
//                                             </div>
//                                             <div className="col-sm-8">
//                                                 <h6 className="mb-0">
//                                                     <a href="#" className='text-decoration-none text-dark'>Building Scalable APIs with GraphQL</a>
//                                                 </h6>
//                                                 <div className="d-flex justify-content-between align-items-center mt-3">
//                                                     <span className="text-success fw-bold">$150</span>
//                                                     <div className="text-primary-hover">
//                                                         <Link to="/cart/" className="text-body me-2">
//                                                             <i className="bi bi-pencil-square me-1" />
//                                                             Edit
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Course item START */}
//                                         <div className="row g-2 shadow p-2 mb-4 rounded-3">
//                                             <div className="col-sm-4">
//                                                 <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" className="rounded" style={{ width: "100px", height: "70px", objectFit: "cover" }} alt="" />
//                                             </div>
//                                             <div className="col-sm-8">
//                                                 <h6 className="mb-0">
//                                                     <a href="#" className='text-decoration-none text-dark'>Building Scalable APIs with GraphQL</a>
//                                                 </h6>
//                                                 <div className="d-flex justify-content-between align-items-center mt-3">
//                                                     <span className="text-success fw-bold">$150</span>
//                                                     <div className="text-primary-hover">
//                                                         <Link to="/cart/" className="text-body me-2">
//                                                             <i className="bi bi-pencil-square me-1" />
//                                                             Edit
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Course item START */}
//                                         <div className="row g-2 shadow p-2 mb-4 rounded-3">
//                                             <div className="col-sm-4">
//                                                 <img src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg" className="rounded" style={{ width: "100px", height: "70px", objectFit: "cover" }} alt="" />
//                                             </div>
//                                             <div className="col-sm-8">
//                                                 <h6 className="mb-0">
//                                                     <a href="#" className='text-decoration-none text-dark'>Building Scalable APIs with GraphQL</a>
//                                                 </h6>
//                                                 <div className="d-flex justify-content-between align-items-center mt-3">
//                                                     <span className="text-success fw-bold">$150</span>
//                                                     <div className="text-primary-hover">
//                                                         <Link to="/cart/" className="text-body me-2">
//                                                             <i className="bi bi-pencil-square me-1" />
//                                                             Edit
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="input-group mt-5">
//                                             <input className="form-control form-control" placeholder="COUPON CODE" />
//                                             <button type="button" className="btn btn-primary">Apply</button>
//                                         </div>

//                                         <div className="p-3 shadow rounded-3 mt-3">
//                                             <h4 className="mb-3">Cart Total</h4>
//                                             <ul class="list-group mb-3">
//                                                 <li class="list-group-item d-flex justify-content-between align-items-center">
//                                                     Sub Total
//                                                     <span>$10.99</span>
//                                                 </li>
//                                                 <li class="list-group-item d-flex justify-content-between align-items-center">
//                                                     Discount
//                                                     <span>$2.99</span>
//                                                 </li>
//                                                 <li class="list-group-item d-flex justify-content-between align-items-center">
//                                                     Tax
//                                                     <span>$0.99</span>
//                                                 </li>
//                                                 <li class="list-group-item d-flex fw-bold justify-content-between align-items-center">
//                                                     Total
//                                                     <span className='fw-bold'>$8.99</span>
//                                                 </li>
//                                             </ul>
//                                             <div className="d-grid">
//                                                 <Link to={`/success/txn_id/`} className="btn btn-lg btn-success mt-2"> Pay With PayPal</Link>
//                                                 <Link to={`/success/txn_id/`} className="btn btn-lg btn-success mt-2"> Pay With Stripe</Link>
//                                             </div>
//                                             <p className="small mb-0 mt-2 text-center">
//                                                 By proceeding to payment, you agree to these{" "}<a href="#"> <strong>Terms of Service</strong></a>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <BaseFooter />
//         </>
//     )
// }

// export default Checkout

import {
	ChevronRight,
	AlertTriangle,
	X,
	Edit2,
	CreditCard,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import BaseHeader from "../partials/BaseHeader";
import apiInstance from "../../utils/axios";
import CartId from "../plugins/CartId";
import Toast from "../plugins/Toast";
import { CartContext } from "../plugins/Context";
import { userId } from "../../utils/constants";

export default function Checkout() {
	const [order, setOrder] = useState([]);
	const [coupon, setCoupon] = useState("");
	const param = useParams([]);

	const fetchOrder = async () => {
		try {
			apiInstance.get(`order/checkout/${param.order_oid}/`).then((res) => {
				setOrder(res.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const applyCoupon = async () => {
		const formdata = new FormData();
		formdata.append("order_oid", order?.oid);
		formdata.append("coupon_code", coupon);

		try {
			await apiInstance.post(`order/coupon/`, formdata).then((res) => {
				fetchOrder();
				Toast().fire({
					icon: res.data.icon,
					title: res.data.message,
				});
			});
		} catch (error) {
			if (
				error.response.data.includes("Coupon matching query does not exist.")
			) {
				Toast().fire({
					icon: "error",
					title: "Coupon does not exist",
				});
			}
		}
	};

	useEffect(() => {
		fetchOrder();
	}, []);

	const initialOptions = {
		clientId: PAYPAL_CLIENT_ID,
		currency: "USD",
		intent: "capture",
	};
	return (
		<>
			<BaseHeader />
			<div className="min-h-screen mt-14 bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
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
								<li>
									<Link
										to="/cart"
										className="hover:text-indigo-600 transition-colors"
									>
										Cart
									</Link>
								</li>
								<ChevronRight className="h-4 w-4" />
								<li className="text-indigo-600">Checkout</li>
							</ol>
						</nav>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2 space-y-6">
							<div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 flex items-center justify-between rounded-lg">
								<div className="flex items-center">
									<AlertTriangle className="h-5 w-5 text-yellow-700 mr-2" />
									<p className="text-yellow-700">
										Review your courses before payment
									</p>
								</div>
								<button className="text-yellow-700 hover:text-yellow-900">
									<X className="h-5 w-5" />
								</button>
							</div>

							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Courses</h2>
								<div className="space-y-4">
									{order?.order_items?.map((o, index) => (
										<div
											key={index}
											className="flex items-center space-x-4 py-4 border-b last:border-b-0"
										>
											<img
												src={o.course.image}
												width={100}
												height={70}
												alt="Course thumbnail"
												className="rounded"
											/>
											<div className="flex-grow">
												<h3 className="font-medium text-gray-900">
													{o.course.title}
												</h3>
												<p className="text-indigo-600 font-semibold">
													${o.price}
												</p>
											</div>
										</div>
									))}
								</div>
								<Link
									to="/cart"
									className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-800"
								>
									<Edit2 className="h-4 w-4 mr-1" /> Edit Cart
								</Link>
							</div>

							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Personal Details</h2>
								<form className="space-y-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Your name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											placeholder="Name"
											readOnly
											value={order.full_name ?? ""}
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700"
											>
												Email address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
												placeholder="Email"
												value={order.email ?? ""}
												readOnly
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor="country"
											className="block text-sm font-medium text-gray-700"
										>
											Select country *
										</label>
										<input
											type="text"
											id="country"
											name="country"
											className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											placeholder="Country"
											value={order.country ?? ""}
											readOnly
										/>
									</div>
								</form>
							</div>
						</div>

						<div className="lg:col-span-1">
							<div className="bg-white p-6 rounded-lg shadow">
								<h2 className="text-xl font-semibold mb-4">Order Summary</h2>
								<p className="text-sm text-gray-600 mb-4">
									Transaction ID: DES23853
								</p>

								<div className="flex items-center mb-6">
									<input
										type="text"
										placeholder="COUPON CODE"
										className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
										onChange={(e) => {
											setCoupon(e.target.value);
										}}
									/>
									<button
										className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
										type="button"
										onClick={applyCoupon}
									>
										Apply
									</button>
								</div>

								<div className="bg-gray-50 p-4 rounded-lg">
									<h3 className="text-lg font-semibold mb-3">Cart Total</h3>
									<ul className="space-y-2 mb-4">
										<li className="flex justify-between text-sm">
											<span className="text-gray-600">Sub Total</span>
											<span>${order.sub_total}</span>
										</li>
										<li className="flex justify-between text-sm">
											<span className="text-gray-600">Discount</span>
											<span>${order.saved}</span>
										</li>
										<li className="flex justify-between text-sm">
											<span className="text-gray-600">Tax</span>
											<span>${order.tax_fee}</span>
										</li>
										<li className="flex justify-between text-base font-semibold border-t pt-2">
											<span>Total</span>
											<span>${order.total}</span>
										</li>
									</ul>
									<div className="space-y-2">
										<Link
											to="/success/txn_id"
											className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
										>
											<CreditCard className="inline-block mr-2 h-5 w-5" />
											Pay With PayPal
										</Link>
										<Link
											to="/success/txn_id"
											className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
										>
											<CreditCard className="inline-block mr-2 h-5 w-5" />
											Pay With Stripe
										</Link>
									</div>
									<p className="text-xs text-center mt-4 text-gray-500">
										By proceeding to payment, you agree to these{" "}
										<Link to="#" className="text-indigo-600 hover:underline">
											Terms of Service
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
