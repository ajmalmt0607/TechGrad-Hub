// import React from "react";
// import BaseHeader from "../partials/BaseHeader";
// import BaseFooter from "../partials/BaseFooter";
// import { Link } from "react-router-dom";

// function Search() {
//   return (
//     <>
//       <BaseHeader />

//       <section className="mb-5" style={{ marginTop: "100px" }}>
//         <div className="container mb-lg-8 ">
//           <div className="row mb-5 mt-3">
//             {/* col */}
//             <div className="col-12">
//               <div className="mb-6">
//                 <h2 className="mb-1 h1">
//                   Showing Results for "LMS System Using Django"
//                 </h2>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-6">
//                 <input
//                   type="text"
//                   className="form-control lg mt-3"
//                   placeholder="Search Courses..."
//                   name=""
//                   id=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//                 <div className="col">
//                   {/* Card */}
//                   <div className="card card-hover">
//                     <Link to={`/course-detail/slug/`}>
//                       <img
//                         src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
//                         alt="course"
//                         className="card-img-top"
//                         style={{
//                           width: "100%",
//                           height: "200px",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </Link>
//                     {/* Card Body */}
//                     <div className="card-body">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <span className="badge bg-info">Intermediate</span>
//                         <a href="#" className="fs-5">
//                           <i className="fas fa-heart text-danger align-middle" />
//                         </a>
//                       </div>
//                       <h4 className="mb-2 text-truncate-line-2 ">
//                         <Link
//                           to={`/course-detail/slug/`}
//                           className="text-inherit text-decoration-none text-dark fs-5"
//                         >
//                           How to easily create a website with JavaScript
//                         </Link>
//                       </h4>
//                       <small>By: Claire Evans</small> <br />
//                       <small>16k Students</small> <br />
//                       <div className="lh-1 mt-3 d-flex">
//                         <span className="align-text-top">
//                           <span className="fs-6">
//                             <i className="fas fa-star text-warning"></i>
//                             <i className="fas fa-star text-warning"></i>
//                             <i className="fas fa-star text-warning"></i>
//                             <i className="fas fa-star text-warning"></i>
//                             <i className="fas fa-star-half text-warning"></i>
//                           </span>
//                         </span>
//                         <span className="text-warning">4.5</span>
//                         <span className="fs-6 ms-2">(9,300)</span>
//                       </div>
//                     </div>
//                     {/* Card Footer */}
//                     <div className="card-footer">
//                       <div className="row align-items-center g-0">
//                         <div className="col">
//                           <h5 className="mb-0">$39.00</h5>
//                         </div>
//                         <div className="col-auto">
//                           <button
//                             type="button"
//                             className="text-inherit text-decoration-none btn btn-primary me-2"
//                           >
//                             <i className="fas fa-shopping-cart text-primary text-white" />
//                           </button>
//                           <Link
//                             to={""}
//                             className="text-inherit text-decoration-none btn btn-primary"
//                           >
//                             Enroll Now{" "}
//                             <i className="fas fa-arrow-right text-primary align-middle me-2 text-white" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <nav className="d-flex mt-5">
//                 <ul className="pagination">
//                   <li className="">
//                     <button className="page-link me-1">
//                       <i className="ci-arrow-left me-2" />
//                       Previous
//                     </button>
//                   </li>
//                 </ul>
//                 <ul className="pagination">
//                   <li key={1} className="active">
//                     <button className="page-link">1</button>
//                   </li>
//                 </ul>
//                 <ul className="pagination">
//                   <li className={`totalPages`}>
//                     <button className="page-link ms-1">
//                       Next
//                       <i className="ci-arrow-right ms-3" />
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="my-8 py-lg-8">
//         {/* container */}
//         <div className="container">
//           {/* row */}
//           <div className="row align-items-center bg-primary gx-0 rounded-3 mt-5">
//             {/* col */}
//             <div className="col-lg-6 col-12 d-none d-lg-block">
//               <div className="d-flex justify-content-center pt-4">
//                 {/* img */}
//                 <div className="position-relative">
//                   <img
//                     src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png"
//                     alt="image"
//                     className="img-fluid mt-n8"
//                   />
//                   <div className="ms-n8 position-absolute bottom-0 start-0 mb-6">
//                     <img
//                       src="https://geeksui.codescandy.com/geeks/assets/images/svg/dollor.svg"
//                       alt="dollor"
//                     />
//                   </div>
//                   {/* img */}
//                   <div className="me-n4 position-absolute top-0 end-0">
//                     <img
//                       src="https://geeksui.codescandy.com/geeks/assets/images/svg/graph.svg"
//                       alt="graph"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 col-12">
//               <div className="text-white p-5 p-lg-0">
//                 {/* text */}
//                 <h2 className="h1 text-white">Become an instructor today</h2>
//                 <p className="mb-0">
//                   Instructors from around the world teach millions of students
//                   on Geeks. We provide the tools and skills to teach what you
//                   love.
//                 </p>
//                 <a href="#" className="btn bg-white text-dark fw-bold mt-4">
//                   Start Teaching Today <i className="fas fa-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <BaseFooter />
//     </>
//   );
// }

// export default Search;
import { useState, useEffect, useContext } from "react";
import React from "react";
import {
	Heart,
	Star,
	ShoppingCart,
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import teacher from "../../assets/Best Teacher.png";
import user from "../../assets/user-1.jpg";
import BaseHeader from "../partials/BaseHeader";
import CartId from "../plugins/CartId";
import GetCurrentAddress from "../plugins/UserCountry";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import apiInstance from "../../utils/axios";
import { CartContext } from "../plugins/Context";
import useAxios from "../../utils/useAxios";

const CourseSkeleton = () => (
	<div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
		<div className="h-48 bg-gray-300"></div>
		<div className="p-6">
			<div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
			<div className="flex justify-between items-center">
				<div className="h-6 bg-gray-300 rounded w-1/4"></div>
				<div className="h-10 w-10 bg-gray-300 rounded-full"></div>
			</div>
		</div>
	</div>
);

export default function Search() {
	const [courses, setCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [cartCount, setCartCount] = useContext(CartContext);

	const country = GetCurrentAddress().country;
	const userId = UserData()?.user_id;
	const cartId = CartId();

	const fetchCourse = async () => {
		setIsLoading(true);
		try {
			const res = await useAxios().get(`/course/course-list/`);
			setCourses(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCourse();
	}, []);

	const addToCart = async (courseId, userId, price, country, cartId) => {
		const formdata = new FormData();
		// first one is the key to send the backend and the second is the key value passing from frontend
		formdata.append("course_id", courseId);
		formdata.append("user_id", userId);
		formdata.append("price", price);
		formdata.append("country_name", country);
		formdata.append("cart_id", cartId);

		try {
			await useAxios()
				.post(`course/cart/`, formdata)
				.then((res) => {
					console.log(res.data);
					Toast().fire({ icon: "success", title: "Added to Cart" });
				});

			// set cart count after adding to cart
			apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
				setCartCount(res.data?.length);
			});
		} catch (error) {
			console.log(error);
		}
	};

	// search Feature
	const [searchQuery, setsearchQuery] = useState("");

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase();
		setsearchQuery(query);

		if (query === "") {
			fetchCourse();
		} else {
			const course = courses.filter((course) => {
				return course.title.toLowerCase().includes(query);
			});
			setCourses(course);
		}
	};

	return (
		<>
			<BaseHeader />
			<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4 pt-20">
				<div className="max-w-7xl mx-auto space-y-8">
					<section className="bg-white p-5 rounded-lg shadow-lg">
						<h1 className="text-xl font-bold mb-4">
							Showing Results: for &quot;{searchQuery || " "}&quot;
						</h1>
						<div className="max-w-md">
							<input
								type="text"
								className="w-full px-3 py-[6px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
								placeholder="Search Courses..."
								onChange={handleSearch}
							/>
						</div>
					</section>

					{isLoading ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{[...Array(8)].map((_, index) => (
								<CourseSkeleton key={index} />
							))}
						</div>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{courses?.slice(0, 8).map((course, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
								>
									<Link
										to={`/course-detail/${course.slug}/`}
										className="flex-1 flex flex-col"
									>
										<div className="relative">
											<img
												src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
												alt="Course thumbnail"
												className="w-full h-48 object-cover"
											/>
										</div>
										<div className="p-4 flex flex-col justify-between flex-1">
											<div className="flex items-center mb-4 space-x-2">
												<span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
													{course.level}
												</span>
												<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
													{course.language}
												</span>
											</div>
											<h3 className="font-semibold text-lg mb-3 text-gray-900 line-clamp-2 leading-tight">
												{course.title}
											</h3>
											<p className="text-sm text-gray-600 mb-4 flex items-center">
												<Users size={16} className="mr-2" />
												By {course.teacher.full_name} •{" "}
												{course.students?.length} Student
												{course.students?.length !== 1 && "s"}
											</p>
											<div className="flex items-center mb-4">
												<div className="flex items-center mr-2">
													{[1, 2, 3, 4, 5].map((star) => (
														<Star
															key={star}
															size={16}
															className={
																star <= Math.round(course.average_rating)
																	? "text-yellow-400 fill-current"
																	: "text-gray-300"
															}
														/>
													))}
												</div>
												<span className="text-sm text-gray-600">
													{course.average_rating?.toFixed(1)} (
													{course.reviews?.length} reviews)
												</span>
											</div>
										</div>
									</Link>
									<div className="p-4 pt-0 flex justify-between items-center mt-auto">
										<span className="font-bold text-2xl text-indigo-600">
											${course.price}
										</span>
										<button
											className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
											onClick={(e) => {
												e.stopPropagation(); // Prevent navigation
												e.preventDefault(); // Ensure the default link click behavior doesn't occur
												// Call your add-to-cart function here
												addToCart(
													course.id,
													userId,
													course.price,
													country,
													cartId
												);
											}}
										>
											<ShoppingCart size={20} />
										</button>
									</div>
								</div>
							))}
						</div>
					)}

					<nav className="flex justify-center space-x-2">
						<button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
							<ChevronLeft className="h-4 w-4 mr-1" /> Previous
						</button>
						<button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
							1
						</button>
						<button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
							Next <ChevronRight className="h-4 w-4 ml-1" />
						</button>
					</nav>

					<section className="bg-indigo-600 rounded-lg overflow-hidden">
						<div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 flex items-center">
							<div className="max-w-xl">
								<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
									Become an instructor today
								</h2>
								<p className="mt-4 text-lg text-indigo-100">
									Instructors from around the world teach millions of students
									on Geeks. We provide the tools and skills to teach what you
									love.
								</p>
								<div className="mt-8">
									<Link
										href="#"
										className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
									>
										Start Teaching Today{" "}
										<ArrowRight className="ml-2 -mr-1 h-5 w-5" />
									</Link>
								</div>
							</div>
							<div className="hidden lg:block lg:flex-shrink-0">
								<img
									className="h-64 w-auto object-cover"
									src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png"
									alt="Become an instructor"
									width={300}
									height={256}
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
