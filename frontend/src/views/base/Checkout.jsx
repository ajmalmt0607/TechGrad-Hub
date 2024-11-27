// import {
// 	ChevronRight,
// 	AlertTriangle,
// 	X,
// 	Edit2,
// 	CreditCard,
// 	Loader,
// } from "lucide-react";
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// import BaseHeader from "../partials/BaseHeader";
// import apiInstance from "../../utils/axios";
// import CartId from "../plugins/CartId";
// import Toast from "../plugins/Toast";
// import { CartContext } from "../plugins/Context";
// import { PAYPAL_CLIENT_ID, userId } from "../../utils/constants";

// export default function Checkout() {
// 	const [order, setOrder] = useState([]);
// 	const [coupon, setCoupon] = useState("");
// 	const [paymentLoading, setPaymentLoading] = useState(false);
// 	const param = useParams();

// 	const fetchOrder = async () => {
// 		try {
// 			apiInstance.get(`order/checkout/${param.order_oid}/`).then((res) => {
// 				console.log(res.data); // Check if total exists in the response
// 				setOrder(res.data);
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	const paypal_order = order.total;
// 	console.log(paypal_order);

// 	const navigate = useNavigate();

// 	const applyCoupon = async () => {
// 		const formdata = new FormData();
// 		formdata.append("order_oid", order?.oid);
// 		formdata.append("coupon_code", coupon);

// 		try {
// 			await apiInstance.post(`order/coupon/`, formdata).then((res) => {
// 				fetchOrder();
// 				Toast().fire({
// 					icon: res.data.icon,
// 					title: res.data.message,
// 				});
// 			});
// 		} catch (error) {
// 			if (
// 				error.response.data.includes("Coupon matching query does not exist.")
// 			) {
// 				Toast().fire({
// 					icon: "error",
// 					title: "Coupon does not exist",
// 				});
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		fetchOrder();
// 	}, []);
// 	console.log(typeof order.total); // Check the type

// 	// PayPal Payment
// 	const initialOptions = {
// 		clientId: PAYPAL_CLIENT_ID,
// 		currency: "USD",
// 		intent: "capture",
// 	};

// 	// Stripe Payment Method
// 	const payWithStripe = (event) => {
// 		setPaymentLoading(true);
// 		event.target.form.submit();
// 	};

// 	return (
// 		<>
// 			<BaseHeader />
// 			<div className="min-h-screen mt-14 bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
// 				<div className="max-w-6xl mx-auto">
// 					<div className="text-center mb-8">
// 						<h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
// 						<nav className="flex justify-center mt-2">
// 							<ol className="flex items-center space-x-2 text-sm text-gray-600">
// 								<li>
// 									<Link
// 										to="/"
// 										className="hover:text-indigo-600 transition-colors"
// 									>
// 										Home
// 									</Link>
// 								</li>
// 								<ChevronRight className="h-4 w-4" />
// 								<li>
// 									<Link
// 										to="/courses"
// 										className="hover:text-indigo-600 transition-colors"
// 									>
// 										Courses
// 									</Link>
// 								</li>
// 								<ChevronRight className="h-4 w-4" />
// 								<li>
// 									<Link
// 										to="/cart"
// 										className="hover:text-indigo-600 transition-colors"
// 									>
// 										Cart
// 									</Link>
// 								</li>
// 								<ChevronRight className="h-4 w-4" />
// 								<li className="text-indigo-600">Checkout</li>
// 							</ol>
// 						</nav>
// 					</div>

// 					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// 						<div className="lg:col-span-2 space-y-6">
// 							<div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 flex items-center justify-between rounded-lg">
// 								<div className="flex items-center">
// 									<AlertTriangle className="h-5 w-5 text-yellow-700 mr-2" />
// 									<p className="text-yellow-700">
// 										Review your courses before payment
// 									</p>
// 								</div>
// 								<button className="text-yellow-700 hover:text-yellow-900">
// 									<X className="h-5 w-5" />
// 								</button>
// 							</div>

// 							<div className="bg-white p-6 rounded-lg shadow">
// 								<h2 className="text-xl font-semibold mb-4">Courses</h2>
// 								<div className="space-y-4">
// 									{order?.order_items?.map((o, index) => (
// 										<div
// 											key={index}
// 											className="flex items-center space-x-4 py-4 border-b last:border-b-0"
// 										>
// 											<img
// 												src={o.course.image}
// 												width={100}
// 												height={70}
// 												alt="Course thumbnail"
// 												className="rounded"
// 											/>
// 											<div className="flex-grow">
// 												<h3 className="font-medium text-gray-900">
// 													{o.course.title}
// 												</h3>
// 												<p className="text-indigo-600 font-semibold">
// 													${o.price}
// 												</p>
// 											</div>
// 										</div>
// 									))}
// 								</div>
// 								<Link
// 									to="/cart"
// 									className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-800"
// 								>
// 									<Edit2 className="h-4 w-4 mr-1" /> Edit Cart
// 								</Link>
// 							</div>

// 							<div className="bg-white p-6 rounded-lg shadow">
// 								<h2 className="text-xl font-semibold mb-4">Personal Details</h2>
// 								<form className="space-y-4">
// 									<div>
// 										<label
// 											htmlFor="name"
// 											className="block text-sm font-medium text-gray-700"
// 										>
// 											Your name *
// 										</label>
// 										<input
// 											type="text"
// 											id="name"
// 											name="name"
// 											className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// 											placeholder="Name"
// 											readOnly
// 											value={order.full_name ?? ""}
// 										/>
// 									</div>
// 									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 										<div>
// 											<label
// 												htmlFor="email"
// 												className="block text-sm font-medium text-gray-700"
// 											>
// 												Email address *
// 											</label>
// 											<input
// 												type="email"
// 												id="email"
// 												name="email"
// 												className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// 												placeholder="Email"
// 												value={order.email ?? ""}
// 												readOnly
// 											/>
// 										</div>
// 									</div>
// 									<div>
// 										<label
// 											htmlFor="country"
// 											className="block text-sm font-medium text-gray-700"
// 										>
// 											Select country *
// 										</label>
// 										<input
// 											type="text"
// 											id="country"
// 											name="country"
// 											className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// 											placeholder="Country"
// 											value={order.country ?? ""}
// 											readOnly
// 										/>
// 									</div>
// 								</form>
// 							</div>
// 						</div>

// 						<div className="lg:col-span-1">
// 							<div className="bg-white p-6 rounded-lg shadow">
// 								<h2 className="text-xl font-semibold mb-4">Order Summary</h2>
// 								<p className="text-sm text-gray-600 mb-4">
// 									Transaction ID: DES23853
// 								</p>

// 								<div className="flex items-center mb-6">
// 									<input
// 										type="text"
// 										placeholder="COUPON CODE"
// 										className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// 										onChange={(e) => {
// 											setCoupon(e.target.value);
// 										}}
// 									/>
// 									<button
// 										className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
// 										type="button"
// 										onClick={applyCoupon}
// 									>
// 										Apply
// 									</button>
// 								</div>

// 								<div className="bg-gray-50 p-4 rounded-lg">
// 									<h3 className="text-lg font-semibold mb-3">Cart Total</h3>
// 									<ul className="space-y-2 mb-4">
// 										<li className="flex justify-between text-sm">
// 											<span className="text-gray-600">Sub Total</span>
// 											<span>${order.sub_total}</span>
// 										</li>
// 										<li className="flex justify-between text-sm">
// 											<span className="text-gray-600">Discount</span>
// 											<span>${order.saved}</span>
// 										</li>
// 										<li className="flex justify-between text-sm">
// 											<span className="text-gray-600">Tax</span>
// 											<span>${order.tax_fee}</span>
// 										</li>
// 										<li className="flex justify-between text-base font-semibold border-t pt-2">
// 											<span>Total</span>
// 											<span>${order.total}</span>
// 										</li>
// 									</ul>
// 									<div className="space-y-2">
// 										<form
// 											action={`http://127.0.0.1:8000/api/v1/payment/stripe-checkout/${order.oid}/`}
// 											className=""
// 											method="POST"
// 										>
// 											{paymentLoading === true ? (
// 												<button
// 													type="submit"
// 													onClick={payWithStripe}
// 													className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
// 												>
// 													{" "}
// 													<div className="flex justify-center">
// 														<p className="mr-1">Processing</p>
// 														<Loader className="animate-spin h-5 w-5 text-white" />
// 													</div>
// 												</button>
// 											) : (
// 												<button
// 													type="submit"
// 													onClick={payWithStripe}
// 													className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
// 												>
// 													<CreditCard className="inline-block mr-2 h-5 w-5" />
// 													Pay With Stripe
// 												</button>
// 											)}
// 										</form>
// 										{/* paypal initialOptions defined top */}
// 										<PayPalScriptProvider options={initialOptions}>
// 											{order.total !== undefined ? (
// 												<PayPalButtons
// 													className="mt-3"
// 													createOrder={(data, actions) => {
// 														return actions.order.create({
// 															purchase_units: [
// 																{
// 																	amount: {
// 																		currency_code: "USD",
// 																		value: order.total.toString(),
// 																	},
// 																},
// 															],
// 														});
// 													}}
// 													onApprove={(data, actions) => {
// 														return actions.order.capture().then((details) => {
// 															const name = details.payer.name.given_name;
// 															const status = details.status;
// 															const paypal_order_id = data.orderID;

// 															if (status === "COMPLETED") {
// 																navigate(
// 																	`/payment-success/${order.oid}/?paypal_order_id=${paypal_order_id}`
// 																);
// 															}
// 														});
// 													}}
// 												/>
// 											) : (
// 												<p>Loading order...</p>
// 											)}
// 										</PayPalScriptProvider>
// 									</div>
// 									<p className="text-xs text-center mt-4 text-gray-500">
// 										By proceeding to payment, you agree to these{" "}
// 										<Link to="#" className="text-indigo-600 hover:underline">
// 											Terms of Service
// 										</Link>
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
	ChevronRight,
	AlertTriangle,
	Edit2,
	CreditCard,
	Loader,
} from "lucide-react";
import apiInstance from "../../utils/axios";
import CartId from "../plugins/CartId";
import Toast from "../plugins/Toast";
import { PAYPAL_CLIENT_ID, userId } from "../../utils/constants";

export default function ModernCheckout() {
	const [order, setOrder] = useState({});
	const [coupon, setCoupon] = useState("");
	const [paymentLoading, setPaymentLoading] = useState(false);
	const { order_oid } = useParams();
	const navigate = useNavigate();

	const fetchOrder = async () => {
		try {
			const res = await apiInstance.get(`order/checkout/${order_oid}/`);
			setOrder(res.data);
		} catch (error) {
			console.error("Error fetching order:", error);
		}
	};

	useEffect(() => {
		fetchOrder();
	}, [order_oid]);

	const applyCoupon = async () => {
		const formdata = new FormData();
		formdata.append("order_oid", order?.oid);
		formdata.append("coupon_code", coupon);

		try {
			const res = await apiInstance.post(`order/coupon/`, formdata);
			fetchOrder();
			Toast().fire({
				icon: res.data.icon,
				title: res.data.message,
			});
		} catch (error) {
			if (
				error.response?.data?.includes("Coupon matching query does not exist.")
			) {
				Toast().fire({
					icon: "error",
					title: "Coupon does not exist",
				});
			}
		}
	};

	const payWithStripe = (event) => {
		setPaymentLoading(true);
		event.target.form.submit();
	};

	const initialOptions = {
		clientId: PAYPAL_CLIENT_ID,
		currency: "USD",
		intent: "capture",
	};

	return (
		<div className=" ">
			<div className="max-w-7xl mx-auto">
				{/* <div className=" mb-7">
					<h1 className="text-2xl font-extrabold text-gray-900 mb-4">
						Checkout
					</h1>
				</div> */}

				<div className=" rounded-lg overflow-hidden">
					{/* <div className="p-6 bg-yellow-50 border-b border-yellow-100">
						<div className="flex items-center">
							<AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
							<p className="text-yellow-700 font-medium">
								Review your courses before payment
							</p>
						</div>
					</div> */}

					<div className=" grid gap-12 lg:grid-cols-3">
						<div className="lg:col-span-2 space-y-6">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Checkout Page
								</h2>
								<div className="space-y-6 bg-white p-7 rounded">
									{order?.order_items?.map((item, index) => (
										<div key={index} className="flex items-center space-x-4">
											<img
												src={item.course.image}
												alt={item.course.title}
												className="w-24 h-16 object-cover rounded-md"
											/>
											<div className="flex-1">
												<h3 className="font-medium text-gray-900">
													{item.course.title}
												</h3>
												<p className="text-indigo-600 font-semibold">
													₹{item.price}
												</p>
											</div>
										</div>
									))}
								</div>
								<Link
									to="/student/cart"
									className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-800"
								>
									<Edit2 className="h-4 w-4 mr-1" /> Edit Cart Items
								</Link>
							</div>

							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Personal Details
								</h2>
								<form className="space-y-4 p-7 bg-white rounded">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Your name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={order.full_name || ""}
											readOnly
											className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											Email address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={order.email || ""}
											readOnly
											className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
										/>
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
											name="country"
											value={order.country || ""}
											readOnly
											className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
										/>
									</div>
								</form>
							</div>
						</div>

						<div className="lg:col-span-1">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h2 className="text-2xl font-bold text-gray-900 mb-2">
									Order Summary
								</h2>
								<p className="text-sm text-gray-600 mb-6">
									Transaction ID: DES23853
								</p>

								<div className="flex items-center mb-6">
									<input
										type="text"
										placeholder="COUPON CODE"
										className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
										onChange={(e) => setCoupon(e.target.value)}
									/>
									<button
										className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
										onClick={applyCoupon}
									>
										Apply
									</button>
								</div>

								<div className="space-y-2 mb-6">
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Sub Total</span>
										<span>₹{order.sub_total}</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Discount</span>
										<span>₹{order.saved}</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Tax</span>
										<span>₹{order.tax_fee}</span>
									</div>
									<div className="flex justify-between text-lg font-semibold border-t pt-2">
										<span>Total</span>
										<span>₹{order.total}</span>
									</div>
								</div>

								<div className="space-y-4">
									<form
										action={`http://127.0.0.1:8000/api/v1/payment/stripe-checkout/${order.oid}/`}
										method="POST"
									>
										<button
											type="submit"
											onClick={payWithStripe}
											className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
										>
											{paymentLoading ? (
												<>
													<Loader className="animate-spin h-5 w-5 mr-2" />
													Processing
												</>
											) : (
												<>
													<CreditCard className="h-5 w-5 mr-2" />
													Pay With Stripe
												</>
											)}
										</button>
									</form>

									<PayPalScriptProvider options={initialOptions}>
										{order.total !== undefined ? (
											<PayPalButtons
												createOrder={(data, actions) => {
													return actions.order.create({
														purchase_units: [
															{
																amount: {
																	currency_code: "USD",
																	value: order.total.toString(),
																},
															},
														],
													});
												}}
												onApprove={(data, actions) => {
													return actions.order.capture().then((details) => {
														const name = details.payer.name.given_name;
														const status = details.status;
														const paypal_order_id = data.orderID;

														if (status === "COMPLETED") {
															navigate(
																`/payment-success/${order.oid}/?paypal_order_id=${paypal_order_id}`
															);
														}
													});
												}}
											/>
										) : (
											<p>Loading order...</p>
										)}
									</PayPalScriptProvider>
								</div>

								<p className="text-xs text-center mt-6 text-gray-500">
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
	);
}
