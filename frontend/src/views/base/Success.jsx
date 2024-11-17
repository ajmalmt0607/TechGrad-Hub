// import React from 'react'
// import { Link } from 'react-router-dom'

// import BaseHeader from '../partials/BaseHeader'
// import BaseFooter from '../partials/BaseFooter'

// function Success() {
//     return (
//         <>
//             <BaseHeader />

//             <section className="pt-0  position-relative overflow-hidden my-auto">
//                 <div className="container position-relative">
//                     <div className="row g-5 align-items-center justify-content-center">
//                         <div className="col-lg-5">
//                             <h1 className="text-success">Enrollment Successful!</h1>
//                             <p> Hey there, you enrollment in the 2 courses where successful, visit your <a href="">My Courses</a> page, to view the courses now.</p>
//                             <button type="button" className="btn btn-primary mb-0 rounded-2">View Enrolled Courses <i className='fas fa-arrow-right'></i></button>
//                         </div>
//                         <div className="col-lg-7 text-center">
//                             <img src="https://assets.materialup.com/uploads/bc4c9683-f623-42ef-9014-464ba0411c79/preview.png" className="h-300px h-sm-400px h-md-500px h-xl-700px" alt="" />
//                         </div>

//                         {/* Processing */}
//                         <div className="col-lg-5">
//                             <h1 className="text-warning">Processing Payment <i className='fas fa-spinner fa-spin'></i></h1>
//                             <p> Hey there, hold on while we process your payment, please do not leave the page.</p>
//                         </div>
//                         <div className="col-lg-7 text-center">
//                             <img sty src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1259.gif" className="h-300px h-sm-400px h-md-500px h-xl-700px" alt="" />
//                         </div>

//                         {/* Failed */}
//                         <div className="col-lg-5">
//                             <h1 className="text-danger">Payment Failed 😔</h1>
//                             <p>Unfortunately, phew! Your payment did not go through. <br /> Please try again.</p>
//                             <button type="button" className="btn btn-danger mb-0 rounded-2">Try again <i className='fas fa-repeat'></i></button>

//                         </div>
//                         <div className="col-lg-7 text-center">
//                             <img sty src="https://media3.giphy.com/media/h4OGa0npayrJX2NRPT/giphy.gif?cid=790b76117pc6298jypyph0liy6xlp3lzb7b2y405ixesujeu&ep=v1_stickers_search&rid=giphy.gif&ct=e" className="h-300px h-sm-400px h-md-500px h-xl-700px" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <BaseFooter />
//         </>
//     )
// }

// export default Success

import React, { useState, useEffect } from "react";
import {
	CheckCircle,
	Loader,
	AlertCircle,
	ArrowRight,
	RotateCw,
	MessageSquareWarning,
} from "lucide-react";
import BaseHeader from "../partials/BaseHeader";
import { Link, useParams } from "react-router-dom";
import apiInstance from "../../utils/axios";

export default function Success() {
	const [order, setOrder] = useState([]);
	const [orderMessage, setOrderMessage] = useState("");

	const param = useParams();
	const urlParams = new URLSearchParams(window.location.search); // This How we take the URL parameters
	const sessionId = urlParams.get("session_id");
	const paypalOrderId = urlParams.get("paypal_order_id");

	console.log(sessionId);
	console.log(paypalOrderId);
	console.log(param);

	useEffect(() => {
		const formdata = new FormData();

		formdata.append("order_oid", param.order_oid);
		formdata.append("session_id", sessionId);
		formdata.append("paypal_order_id", paypalOrderId);

		setOrderMessage("Processing Payment");

		try {
			apiInstance.post(`payment/payment-success/`, formdata).then((res) => {
				console.log(res.data);
				setOrderMessage(res.data.message);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	console.log(orderMessage);

	return (
		<>
			<BaseHeader />
			<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col gap-8 items-center">
						{/* Success State */}
						{orderMessage === "Payment Successful" && (
							<>
								<div className="bg-white mt-32 max-w-[710px] p-8 rounded-lg shadow-lg">
									<CheckCircle className="w-16 h-16 text-green-500 mb-4" />
									<h1 className="text-3xl font-bold text-green-600 mb-4">
										Enrollment Successful!
									</h1>
									<p className="text-gray-600 mb-6">
										Hey there, your enrollment in the 2 courses was successful.
										Visit your{" "}
										<Link
											to="/my-courses"
											className="text-indigo-600 hover:underline"
										>
											My Courses
										</Link>{" "}
										page to view the courses now.
									</p>
									<Link
										to="/my-courses"
										className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
									>
										View Enrolled Courses{" "}
										<ArrowRight className="ml-2 w-4 h-4" />
									</Link>
								</div>
							</>
						)}

						{/* Processing State */}
						{orderMessage === "Processing Payment" && (
							<>
								<div className="bg-white mt-32 p-8 rounded-lg shadow-lg">
									<Loader className="w-16 h-16 text-yellow-500 mb-4 animate-spin" />
									<h1 className="text-3xl font-bold text-yellow-600 mb-4">
										Processing Payment
									</h1>
									<p className="text-gray-600 mb-6">
										Hey there, hold on while we process your payment. Please do
										not leave the page.
									</p>
								</div>
							</>
						)}

						{/* Already Paid State */}
						{orderMessage === "Payment Already Paid" && (
							<>
								<div className="bg-white mt-32 p-8 rounded-lg shadow-lg">
									<MessageSquareWarning className="w-16 h-16 text-yellow-500 mb-4" />
									<h1 className="text-3xl font-bold text-yellow-600 mb-4">
										Payment Already Paid
									</h1>
									<p className="text-gray-600 mb-6">
										Hey there, hold on while we process your payment. Please do
										not leave the page.
									</p>
								</div>
							</>
						)}

						{/* Failed State */}
						{orderMessage === "Payment Failed" && (
							<>
								<div className="bg-white mt-32 p-8 rounded-lg shadow-lg">
									<AlertCircle className="w-16 h-16 text-red-500 mb-4" />
									<h1 className="text-3xl font-bold text-red-600 mb-4">
										Payment Failed 😔
									</h1>
									<p className="text-gray-600 mb-6">
										Unfortunately, your payment did not go through. Please try
										again.
									</p>
									<button className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
										Try again <RotateCw className="ml-2 w-4 h-4" />
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
