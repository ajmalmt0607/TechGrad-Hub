// import React from "react";
// import { Link } from "react-router-dom";

// import BaseHeader from "../partials/BaseHeader";
// import BaseFooter from "../partials/BaseFooter";

// function CourseDetail() {
// 	return (
// 		<>
// 			<BaseHeader />

// 			<>
// 				<section className="bg-light py-0 py-sm-5">
// 					<div className="container">
// 						<div className="row py-5">
// 							<div className="col-lg-8">
// 								{/* Badge */}
// 								<h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">
// 									Web Development
// 								</h6>
// 								{/* Title */}
// 								<h1 className="mb-3">
// 									The Comprehensive React.Js and Django Course - A Bundle of 12
// 									Courses in 1
// 								</h1>
// 								<p className="mb-3">
// 									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
// 									Doloribus facere hic quisquam suscipit aliquid distinctio
// 									repellat eum in molestias necessitatibus illum omnis autem
// 									laudantium adipisci, sit blanditiis accusantium dignissimos
// 									veniam!
// 								</p>
// 								{/* Content */}
// 								<ul className="list-inline mb-0">
// 									<li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
// 										<i className="fas fa-star text-warning me-2" />
// 										4.5/5.0
// 									</li>
// 									<li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
// 										<i className="fas fa-user-graduate text-orange me-2" />
// 										12k Enrolled
// 									</li>
// 									<li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
// 										<i className="fas fa-signal text-success me-2" />
// 										All levels
// 									</li>
// 									<li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
// 										<i className="bi bi-patch-exclamation-fill text-danger me-2" />
// 										Date Published 09/2021
// 									</li>
// 									<li className="list-inline-item h6 mb-0">
// 										<i className="fas fa-globe text-info me-2" />
// 										English
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="pb-0 py-lg-5">
// 					<div className="container">
// 						<div className="row">
// 							{/* Main content START */}
// 							<div className="col-lg-8">
// 								<div className="card shadow rounded-2 p-0">
// 									{/* Tabs START */}
// 									<div className="card-header border-bottom px-4 py-3">
// 										<ul
// 											className="nav nav-pills nav-tabs-line py-0"
// 											id="course-pills-tab"
// 											role="tablist"
// 										>
// 											{/* Tab item */}
// 											<li className="nav-item me-2 me-sm-4" role="presentation">
// 												<button
// 													className="nav-link mb-2 mb-md-0 active"
// 													id="course-pills-tab-1"
// 													data-bs-toggle="pill"
// 													data-bs-target="#course-pills-1"
// 													type="button"
// 													role="tab"
// 													aria-controls="course-pills-1"
// 													aria-selected="true"
// 												>
// 													Overview
// 												</button>
// 											</li>
// 											{/* Tab item */}
// 											<li className="nav-item me-2 me-sm-4" role="presentation">
// 												<button
// 													className="nav-link mb-2 mb-md-0"
// 													id="course-pills-tab-2"
// 													data-bs-toggle="pill"
// 													data-bs-target="#course-pills-2"
// 													type="button"
// 													role="tab"
// 													aria-controls="course-pills-2"
// 													aria-selected="false"
// 												>
// 													Curriculum
// 												</button>
// 											</li>
// 											{/* Tab item */}
// 											<li className="nav-item me-2 me-sm-4" role="presentation">
// 												<button
// 													className="nav-link mb-2 mb-md-0"
// 													id="course-pills-tab-3"
// 													data-bs-toggle="pill"
// 													data-bs-target="#course-pills-3"
// 													type="button"
// 													role="tab"
// 													aria-controls="course-pills-3"
// 													aria-selected="false"
// 												>
// 													Instructor
// 												</button>
// 											</li>
// 											{/* Tab item */}
// 											<li className="nav-item me-2 me-sm-4" role="presentation">
// 												<button
// 													className="nav-link mb-2 mb-md-0"
// 													id="course-pills-tab-4"
// 													data-bs-toggle="pill"
// 													data-bs-target="#course-pills-4"
// 													type="button"
// 													role="tab"
// 													aria-controls="course-pills-4"
// 													aria-selected="false"
// 												>
// 													Reviews
// 												</button>
// 											</li>
// 											{/* Tab item */}
// 											<li
// 												className="nav-item me-2 me-sm-4 d-none"
// 												role="presentation"
// 											>
// 												<button
// 													className="nav-link mb-2 mb-md-0"
// 													id="course-pills-tab-5"
// 													data-bs-toggle="pill"
// 													data-bs-target="#course-pills-5"
// 													type="button"
// 													role="tab"
// 													aria-controls="course-pills-5"
// 													aria-selected="false"
// 												>
// 													FAQs
// 												</button>
// 											</li>
// 											{/* Tab item */}
// 											<li
// 												className="nav-item me-2 me-sm-4 d-none"
// 												role="presentation"
// 											>
// 												<button
// 													className="nav-link mb-2 mb-md-0"
// 													id="course-pills-tab-6"
// 													data-bs-toggle="pill"
// 													data-bs-target="#course-pills-6"
// 													type="button"
// 													role="tab"
// 													aria-controls="course-pills-6"
// 													aria-selected="false"
// 												>
// 													Comment
// 												</button>
// 											</li>
// 										</ul>
// 									</div>
// 									{/* Tabs END */}
// 									{/* Tab contents START */}
// 									<div className="card-body p-4">
// 										<div
// 											className="tab-content pt-2"
// 											id="course-pills-tabContent"
// 										>
// 											{/* Content START */}
// 											<div
// 												className="tab-pane fade show active"
// 												id="course-pills-1"
// 												role="tabpanel"
// 												aria-labelledby="course-pills-tab-1"
// 											>
// 												<h5 className="mb-3">Course Description</h5>
// 												<p className="mb-3">
// 													Welcome to the
// 													<strong>
// 														Digital Marketing Ultimate Course Bundle - 12
// 														Courses in 1 (Over 36 hours of content)
// 													</strong>
// 												</p>
// 												<p className="mb-3">
// 													In this practical hands-on training, you’re going to
// 													learn to become a digital marketing expert with this
// 													<strong>
// 														ultimate course bundle that includes 12 digital
// 														marketing courses in 1!
// 													</strong>
// 												</p>
// 												<p className="mb-3">
// 													If you wish to find out the skills that should be
// 													covered in a basic digital marketing course syllabus
// 													in India or anywhere around the world, then reading
// 													this blog will help. Before we delve into the advanced
// 													<strong>
// 														<a
// 															href="#"
// 															className="text-reset text-decoration-underline"
// 														>
// 															digital marketing course
// 														</a>
// 													</strong>
// 													syllabus, let’s look at the scope of digital marketing
// 													and what the future holds.
// 												</p>
// 												<p className="mb-0">
// 													We focus a great deal on the understanding of
// 													behavioral psychology and influence triggers which are
// 													crucial for becoming a well rounded Digital Marketer.
// 													We understand that theory is important to build a
// 													solid foundation, we understand that theory alone
// 													isn’t going to get the job done so that’s why this
// 													course is packed with practical hands-on examples that
// 													you can follow step by step.
// 												</p>
// 												{/* List content */}
// 												<h5 className="mt-4">What you’ll learn</h5>
// 												<ul className="list-group list-group-borderless mb-3">
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Digital marketing course introduction
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Customer Life cycle
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														What is Search engine optimization(SEO)
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Facebook ADS
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Facebook Messenger Chatbot
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Search engine optimization tools
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Why SEO
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														URL Structure
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Featured Snippet
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														SEO tips and tricks
// 													</li>
// 													<li className="list-group-item h6 fw-light d-flex mb-0">
// 														<i className="fas fa-check-circle text-success me-2" />
// 														Google tag manager
// 													</li>
// 												</ul>
// 												<p className="mb-0">
// 													As it so contrasted oh estimating instrument. Size
// 													like body someone had. Are conduct viewing boy minutes
// 													warrant the expense? Tolerably behavior may admit
// 													daughters offending her ask own. Praise effect wishes
// 													change way and any wanted. Lively use looked latter
// 													regard had. Do he it part more last in.
// 												</p>
// 												{/* Course detail END */}
// 											</div>
// 											{/* Content END */}
// 											{/* Content START */}
// 											<div
// 												className="tab-pane fade"
// 												id="course-pills-2"
// 												role="tabpanel"
// 												aria-labelledby="course-pills-tab-2"
// 											>
// 												{/* Course accordion START */}
// 												<div
// 													className="accordion accordion-icon accordion-bg-light"
// 													id="accordionExample2"
// 												>
// 													{/* Item */}
// 													<div className="accordion-item mb-3">
// 														<h6
// 															className="accordion-header font-base"
// 															id="heading-1"
// 														>
// 															<button
// 																className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapse-1"
// 																aria-expanded="true"
// 																aria-controls="collapse-1"
// 															>
// 																Introduction of Digital Marketing
// 																<span className="small ms-0 ms-sm-2">
// 																	(3 Lectures)
// 																</span>
// 															</button>
// 														</h6>
// 														<div
// 															id="collapse-1"
// 															className="accordion-collapse collapse show"
// 															aria-labelledby="heading-1"
// 															data-bs-parent="#accordionExample2"
// 														>
// 															<div className="accordion-body mt-3">
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<a
// 																			href="#"
// 																			className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																		>
// 																			<i className="fas fa-play me-0" />
// 																		</a>
// 																		<span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
// 																			Introduction
// 																		</span>
// 																	</div>
// 																	<p className="mb-0">2m 10s</p>
// 																</div>
// 																<hr /> {/* Divider */}
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<a
// 																			href="#"
// 																			className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																		>
// 																			<i className="fas fa-play me-0" />
// 																		</a>
// 																		<span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
// 																			What is Digital Marketing What is Digital
// 																			Marketing
// 																		</span>
// 																	</div>
// 																	<p className="mb-0 text-truncate">15m 10s</p>
// 																</div>
// 																<hr /> {/* Divider */}
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<a
// 																			href="#"
// 																			className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																		>
// 																			<i className="fas fa-lock me-0" />
// 																		</a>
// 																		<span className="d-inline-block text-truncate text-muted ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
// 																			Type of Digital Marketing
// 																		</span>
// 																	</div>
// 																	<p className="mb-0">18m 10s</p>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 													{/* Item */}
// 													<div className="accordion-item mb-3">
// 														<h6
// 															className="accordion-header font-base"
// 															id="heading-2"
// 														>
// 															<button
// 																className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapse-2"
// 																aria-expanded="false"
// 																aria-controls="collapse-2"
// 															>
// 																Customer Life cycle
// 																<span className="small ms-0 ms-sm-2">
// 																	(4 Lectures)
// 																</span>
// 															</button>
// 														</h6>
// 														<div
// 															id="collapse-2"
// 															className="accordion-collapse collapse"
// 															aria-labelledby="heading-2"
// 															data-bs-parent="#accordionExample2"
// 														>
// 															{/* Accordion body START */}
// 															<div className="accordion-body mt-3">
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<a
// 																			href="#"
// 																			className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																		>
// 																			<i className="fas fa-play me-0" />
// 																		</a>
// 																		<span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
// 																			What is Digital Marketing
// 																		</span>
// 																	</div>
// 																	<p className="mb-0">11m 20s</p>
// 																</div>
// 																<hr /> {/* Divider */}
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<a
// 																			href="#"
// 																			className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																		>
// 																			<i className="fas fa-play me-0" />
// 																		</a>
// 																		<span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
// 																			15 Tips for Writing Magnetic Headlines
// 																		</span>
// 																	</div>
// 																	<p className="mb-0 text-truncate">25m 20s</p>
// 																</div>
// 																<hr /> {/* Divider */}
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<a
// 																			href="#"
// 																			className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																		>
// 																			<i className="fas fa-play me-0" />
// 																		</a>
// 																		<span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
// 																			How to Write Like Your Customers Talk
// 																		</span>
// 																	</div>
// 																	<p className="mb-0">11m 30s</p>
// 																</div>
// 																<hr /> {/* Divider */}
// 																{/* Course lecture */}
// 																<div className="d-flex justify-content-between align-items-center">
// 																	<div className="position-relative d-flex align-items-center">
// 																		<div>
// 																			<a
// 																				href="#"
// 																				className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
// 																				data-bs-toggle="modal"
// 																				data-bs-target="#exampleModal"
// 																			>
// 																				<i className="fas fa-play me-0" />
// 																			</a>
// 																		</div>
// 																		<div className="row g-sm-0 align-items-center">
// 																			<div className="col-sm-6">
// 																				<span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">
// 																					How to Flip Features Into Benefits
// 																				</span>
// 																			</div>
// 																			<div className="col-sm-6">
// 																				<span className="badge text-bg-orange ms-2 ms-md-0">
// 																					<i className="fas fa-lock fa-fw me-1" />
// 																					Premium
// 																				</span>
// 																			</div>
// 																		</div>
// 																	</div>
// 																	<p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
// 																		35m 30s
// 																	</p>
// 																</div>
// 															</div>
// 															{/* Accordion body END */}
// 														</div>
// 													</div>
// 												</div>
// 												{/* Course accordion END */}
// 											</div>
// 											{/* Content END */}
// 											{/* Content START */}
// 											<div
// 												className="tab-pane fade"
// 												id="course-pills-3"
// 												role="tabpanel"
// 												aria-labelledby="course-pills-tab-3"
// 											>
// 												{/* Card START */}
// 												<div className="card mb-0 mb-md-4">
// 													<div className="row g-0 align-items-center">
// 														<div className="col-md-5">
// 															{/* img */}
// 															<img
// 																src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
// 																className="img-fluid rounded-3"
// 																alt="instructor-image"
// 															/>
// 														</div>
// 														<div className="col-md-7">
// 															{/* Card body */}
// 															<div className="card-body">
// 																{/* Title */}
// 																<h3 className="card-title mb-0">
// 																	Destiny Franks
// 																</h3>
// 																<p className="mb-2">
// 																	Instructor of Web/Mobile App Development
// 																</p>
// 																{/* Social button */}
// 																<ul className="list-inline mb-3">
// 																	<li className="list-inline-item me-3">
// 																		<a href="#" className="fs-5 text-twitter">
// 																			<i className="fab fa-twitter-square" />
// 																		</a>
// 																	</li>
// 																	<li className="list-inline-item me-3">
// 																		<a href="#" className="fs-5 text-facebook">
// 																			<i className="fab fa-facebook-square" />
// 																		</a>
// 																	</li>
// 																	<li className="list-inline-item me-3">
// 																		<a href="#" className="fs-5 text-linkedin">
// 																			<i className="fab fa-linkedin" />
// 																		</a>
// 																	</li>
// 																</ul>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												{/* Card END */}
// 												{/* Instructor info */}
// 												<h5 className="mb-3">About Instructor</h5>
// 												<p className="mb-3">
// 													Fulfilled direction use continual set him propriety
// 													continued. Saw met applauded favorite deficient
// 													engrossed concealed and her. Concluded boy perpetual
// 													old supposing. Farther related bed and passage comfort
// 													civilly. Dashboard see frankness objection abilities.
// 													As hastened oh produced prospect formerly up am.
// 													Placing forming nay looking old married few has.
// 													Margaret disposed of add screened rendered six say his
// 													striking confined.
// 												</p>
// 												<p className="mb-3">
// 													As it so contrasted oh estimating instrument. Size
// 													like body someone had. Are conduct viewing boy minutes
// 													warrant the expense? Tolerably behavior may admit
// 													daughters offending her ask own. Praise effect wishes
// 													change way and any wanted.
// 												</p>
// 											</div>
// 											<div
// 												className="tab-pane fade"
// 												id="course-pills-4"
// 												role="tabpanel"
// 												aria-labelledby="course-pills-tab-4"
// 											>
// 												{/* Review START */}
// 												<div className="row mb-1">
// 													<h5 className="mb-4">Our Student Reviews</h5>
// 												</div>

// 												<div className="row">
// 													<div className="d-md-flex my-4">
// 														<div className="avatar avatar-xl me-4 flex-shrink-0">
// 															<img
// 																className="avatar-img rounded-circle"
// 																src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg"
// 																style={{
// 																	width: "50px",
// 																	height: "50px",
// 																	borderRadius: "50%",
// 																	objectFit: "cover",
// 																}}
// 																alt="avatar"
// 															/>
// 														</div>
// 														{/* Text */}
// 														<div>
// 															<div className="d-sm-flex mt-1 mt-md-0 align-items-center">
// 																<h5 className="me-3 mb-0">Sam Jay</h5>
// 																{/* Review star */}
// 																<ul className="list-inline mb-0">
// 																	<i className="fas fa-star text-warning" />
// 																	<i className="fas fa-star text-warning" />
// 																	<i className="fas fa-star text-warning" />
// 																	<i className="fas fa-star text-warning" />
// 																	<i className="far fa-star text-warning" />
// 																</ul>
// 															</div>
// 															{/* Info */}
// 															<p className="small mb-2">5 days ago</p>
// 															<p className="mb-2">
// 																Perceived end knowledge certainly day sweetness
// 																why cordially. Ask a quick six seven offer see
// 																among. Handsome met debating sir dwelling age
// 																material. As style lived he worse dried. Offered
// 																related so visitors we private removed. Moderate
// 																do subjects to distance.
// 															</p>
// 															{/* Like and dislike button */}
// 														</div>
// 													</div>
// 													{/* Comment children level 1 */}
// 													<hr />
// 													{/* Review item END */}
// 													{/* Review item START */}
// 													<div className="d-md-flex my-4">
// 														{/* Avatar */}
// 														<div className="avatar avatar-xl me-4 flex-shrink-0">
// 															<img
// 																className="avatar-img rounded-circle"
// 																src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg"
// 																style={{
// 																	width: "50px",
// 																	height: "50px",
// 																	borderRadius: "50%",
// 																	objectFit: "cover",
// 																}}
// 																alt="avatar"
// 															/>
// 														</div>
// 														{/* Text */}
// 														<div>
// 															<div className="d-sm-flex mt-1 mt-md-0 align-items-center">
// 																<h5 className="me-3 mb-0">Benny Doggo</h5>
// 																{/* Review star */}
// 																<ul className="list-inline mb-0">
// 																	<li className="list-inline-item me-0">
// 																		<i className="fas fa-star text-warning" />
// 																	</li>
// 																	<li className="list-inline-item me-0">
// 																		<i className="fas fa-star text-warning" />
// 																	</li>
// 																	<li className="list-inline-item me-0">
// 																		<i className="fas fa-star text-warning" />
// 																	</li>
// 																	<li className="list-inline-item me-0">
// 																		<i className="fas fa-star text-warning" />
// 																	</li>
// 																	<li className="list-inline-item me-0">
// 																		<i className="far fa-star text-warning" />
// 																	</li>
// 																</ul>
// 															</div>
// 															{/* Info */}
// 															<p className="small mb-2">2 days ago</p>
// 															<p className="mb-2">
// 																Handsome met debating sir dwelling age material.
// 																As style lived he worse dried. Offered related
// 																so visitors we private removed. Moderate do
// 																subjects to distance.
// 															</p>
// 														</div>
// 													</div>
// 													{/* Review item END */}
// 													{/* Divider */}
// 													<hr />
// 												</div>
// 												{/* Student review END */}
// 												{/* Leave Review START */}
// 												<div className="mt-2">
// 													<h5 className="mb-4">Leave a Review</h5>
// 													<form className="row g-3">
// 														{/* Rating */}
// 														<div className="col-12 bg-light-input">
// 															<select
// 																id="inputState2"
// 																className="form-select js-choice"
// 															>
// 																<option selected="">★★★★★ (5/5)</option>
// 																<option>★★★★☆ (4/5)</option>
// 																<option>★★★☆☆ (3/5)</option>
// 																<option>★★☆☆☆ (2/5)</option>
// 																<option>★☆☆☆☆ (1/5)</option>
// 															</select>
// 														</div>
// 														{/* Message */}
// 														<div className="col-12 bg-light-input">
// 															<textarea
// 																className="form-control"
// 																id="exampleFormControlTextarea1"
// 																placeholder="Your review"
// 																rows={3}
// 																defaultValue={""}
// 															/>
// 														</div>
// 														{/* Button */}
// 														<div className="col-12">
// 															<button
// 																type="submit"
// 																className="btn btn-primary mb-0"
// 															>
// 																Post Review
// 															</button>
// 														</div>
// 													</form>
// 												</div>
// 												{/* Leave Review END */}
// 											</div>
// 											{/* Content END */}
// 											{/* Content START */}
// 											<div
// 												className="tab-pane fade"
// 												id="course-pills-5"
// 												role="tabpanel"
// 												aria-labelledby="course-pills-tab-5"
// 											>
// 												{/* Title */}
// 												<h5 className="mb-3">Frequently Asked Questions</h5>
// 												{/* Accordion START */}
// 												<div
// 													className="accordion accordion-flush"
// 													id="accordionExample"
// 												>
// 													{/* Item */}
// 													<div className="accordion-item">
// 														<h2 className="accordion-header" id="headingOne">
// 															<button
// 																className="accordion-button collapsed"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapseOne"
// 																aria-expanded="true"
// 																aria-controls="collapseOne"
// 															>
// 																<span className="text-secondary fw-bold me-3">
// 																	01
// 																</span>
// 																<span className="h6 mb-0">
// 																	How Digital Marketing Work?
// 																</span>
// 															</button>
// 														</h2>
// 														<div
// 															id="collapseOne"
// 															className="accordion-collapse collapse show"
// 															aria-labelledby="headingOne"
// 															data-bs-parent="#accordionExample"
// 														>
// 															<div className="accordion-body pt-0">
// 																Comfort reached gay perhaps chamber his six
// 																detract besides add. Moonlight newspaper up its
// 																enjoyment agreeable depending. Timed voice share
// 																led him to widen noisy young. At weddings
// 																believed laughing although the material does the
// 																exercise of. Up attempt offered ye civilly so
// 																sitting to. She new course gets living within
// 																Elinor joy. She rapturous suffering concealed.
// 															</div>
// 														</div>
// 													</div>
// 													{/* Item */}
// 													<div className="accordion-item">
// 														<h2 className="accordion-header" id="headingTwo">
// 															<button
// 																className="accordion-button collapsed"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapseTwo"
// 																aria-expanded="false"
// 																aria-controls="collapseTwo"
// 															>
// 																<span className="text-secondary fw-bold me-3">
// 																	02
// 																</span>
// 																<span className="h6 mb-0">What is SEO?</span>
// 															</button>
// 														</h2>
// 														<div
// 															id="collapseTwo"
// 															className="accordion-collapse collapse"
// 															aria-labelledby="headingTwo"
// 															data-bs-parent="#accordionExample"
// 														>
// 															<div className="accordion-body pt-0">
// 																Pleasure and so read the was hope entire first
// 																decided the so must have as on was want up of I
// 																will rival in came this touched got a physics to
// 																travelling so all especially refinement
// 																monstrous desk they was arrange the overall
// 																helplessly out of particularly ill are purer.
// 																<p className="mt-2">
// 																	Person she control of to beginnings view
// 																	looked eyes Than continues its and because and
// 																	given and shown creating curiously to more in
// 																	are man were smaller by we instead the these
// 																	sighed Avoid in the sufficient me real man
// 																	longer of his how her for countries to brains
// 																	warned notch important Finds be to the of on
// 																	the increased explain noise of power deep
// 																	asking contribution this live of suppliers
// 																	goals bit separated poured sort several the
// 																	was organization the if relations go work
// 																	after mechanic But we've area wasn't
// 																	everything needs of and doctor where would.
// 																</p>
// 																Go he prisoners And mountains in just switching
// 																city steps Might rung line what Mr Bulk; Was or
// 																between towards the have phase were its world my
// 																samples are the was royal he luxury the about
// 																trying And on he to my enough is was the
// 																remember a although lead in were through serving
// 																their assistant fame day have for its after
// 																would cheek dull have what in go feedback
// 																assignment Her of a any help if the a of
// 																semantics is rational overhauls following in
// 																from our hazardous and used more he themselves
// 																the parents up just regulatory.
// 															</div>
// 														</div>
// 													</div>
// 													{/* Item */}
// 													<div className="accordion-item">
// 														<h2 className="accordion-header" id="headingThree">
// 															<button
// 																className="accordion-button collapsed"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapseThree"
// 																aria-expanded="false"
// 																aria-controls="collapseThree"
// 															>
// 																<span className="text-secondary fw-bold me-3">
// 																	03
// 																</span>
// 																<span className="h6 mb-0">
// 																	Who should join this course?
// 																</span>
// 															</button>
// 														</h2>
// 														<div
// 															id="collapseThree"
// 															className="accordion-collapse collapse"
// 															aria-labelledby="headingThree"
// 															data-bs-parent="#accordionExample"
// 														>
// 															<div className="accordion-body pt-0">
// 																Post no so what deal evil rent by real in. But
// 																her ready least set lived spite solid. September
// 																how men saw tolerably two behavior arranging.
// 																She offices for highest and replied one venture
// 																pasture. Applauded no discovery in newspaper
// 																allowance am northward. Frequently partiality
// 																possession resolution at or appearance
// 																unaffected me. Engaged its was the evident
// 																pleased husband. Ye goodness felicity do
// 																disposal dwelling no. First am plate jokes to
// 																began to cause a scale.
// 																<strong>
// 																	Subjects he prospect elegance followed no
// 																	overcame
// 																</strong>
// 																possible it on.
// 															</div>
// 														</div>
// 													</div>
// 													{/* Item */}
// 													<div className="accordion-item">
// 														<h2 className="accordion-header" id="headingFour">
// 															<button
// 																className="accordion-button collapsed"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapseFour"
// 																aria-expanded="false"
// 																aria-controls="collapseFour"
// 															>
// 																<span className="text-secondary fw-bold me-3">
// 																	04
// 																</span>
// 																<span className="h6 mb-0">
// 																	What are the T&amp;C for this program?
// 																</span>
// 															</button>
// 														</h2>
// 														<div
// 															id="collapseFour"
// 															className="accordion-collapse collapse"
// 															aria-labelledby="headingFour"
// 															data-bs-parent="#accordionExample"
// 														>
// 															<div className="accordion-body pt-0">
// 																Night signs creeping yielding green Seasons
// 																together man green fruitful make fish behold
// 																earth unto you'll lights living moving sea open
// 																for fish day multiply tree good female god had
// 																fruitful of creature fill shall don't day fourth
// 																lesser he the isn't let multiply may Creeping
// 																earth under was You're without which image stars
// 																in Own creeping night of wherein Heaven years
// 																their he over doesn't whose won't kind seasons
// 																light Won't that fish him whose won't also it
// 																dominion heaven fruitful Whales created And
// 																likeness doesn't that Years without divided
// 																saying morning creeping hath you'll seas cattle
// 																in multiply under together in us said above dry
// 																tree herb saw living darkness without have won't
// 																for i behold meat brought winged Moving living
// 																second beast Over fish place beast image very
// 																him evening Thing they're fruit together forth
// 																day Seed lights Land creature together Multiply
// 																waters form brought.
// 															</div>
// 														</div>
// 													</div>
// 													{/* Item */}
// 													<div className="accordion-item">
// 														<h2 className="accordion-header" id="headingFive">
// 															<button
// 																className="accordion-button collapsed"
// 																type="button"
// 																data-bs-toggle="collapse"
// 																data-bs-target="#collapseFive"
// 																aria-expanded="false"
// 																aria-controls="collapseFive"
// 															>
// 																<span className="text-secondary fw-bold me-3">
// 																	05
// 																</span>
// 																<span className="h6 mb-0">
// 																	What certificates will I be received for this
// 																	program?
// 																</span>
// 															</button>
// 														</h2>
// 														<div
// 															id="collapseFive"
// 															className="accordion-collapse collapse"
// 															aria-labelledby="headingFive"
// 															data-bs-parent="#accordionExample"
// 														>
// 															<div className="accordion-body pt-0">
// 																Smile spoke total few great had never their too
// 																Amongst moments do in arrived at my replied Fat
// 																weddings servants but man believed prospect
// 																Companions understood is as especially
// 																pianoforte connection introduced Nay newspaper
// 																can sportsman are admitting gentleman belonging
// 																his Is oppose no he summer lovers twenty in Not
// 																his difficulty boisterous surrounded bed Seems
// 																folly if in given scale Sex contented dependent
// 																conveying advantage.
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												{/* Accordion END */}
// 											</div>
// 											{/* Content END */}
// 											{/* Content START */}
// 											<div
// 												className="tab-pane fade"
// 												id="course-pills-6"
// 												role="tabpanel"
// 												aria-labelledby="course-pills-tab-6"
// 											>
// 												{/* Review START */}
// 												<div className="row">
// 													<div className="col-12">
// 														<h5 className="mb-4">Group Chat & Q/A Forum</h5>

// 														{/* Comment item START */}
// 														<div className="border p-2 p-sm-4 rounded-3 mb-4">
// 															<ul className="list-unstyled mb-0">
// 																<li className="comment-item">
// 																	<div className="d-flex mb-3">
// 																		<div className="ms-2">
// 																			{/* Comment by */}
// 																			<div className="bg-light p-3 rounded">
// 																				<div className="d-flex justify-content-center">
// 																					<div className="me-2">
// 																						<h6 className="mb-1 lead fw-bold">
// 																							<a
// 																								href="#!"
// 																								className="text-decoration-none text-dark"
// 																							>
// 																								<span className="text-secondary">
// 																									By:
// 																								</span>{" "}
// 																								Frances Guerrero{" "}
// 																							</a>
// 																						</h6>
// 																						<p className="mb-0">
// 																							Removed demands expense account in
// 																							outward tedious do. Particular
// 																							waythoroughly unaffected
// 																							projection ar waythoroughly
// 																							unaffected projection?...
// 																						</p>
// 																						<p className="mt-4 fw-bold">
// 																							16 Replies
// 																						</p>
// 																					</div>
// 																					<small>5hr</small>
// 																				</div>
// 																			</div>
// 																			{/* Comment react */}
// 																			<ul className="nav nav-divider py-2 small">
// 																				<li className="nav-item">
// 																					<a
// 																						className="btn btn-primary btn-sm"
// 																						href="#"
// 																					>
// 																						Join Conversation{" "}
// 																						<i className="fas fa-arrow-right"></i>
// 																					</a>
// 																				</li>
// 																			</ul>
// 																		</div>
// 																	</div>
// 																</li>

// 																<li className="comment-item">
// 																	<div className="d-flex mb-3">
// 																		<div className="ms-2">
// 																			{/* Comment by */}
// 																			<div className="bg-light p-3 rounded">
// 																				<div className="d-flex justify-content-center">
// 																					<div className="me-2">
// 																						<h6 className="mb-1 lead fw-bold">
// 																							<a
// 																								href="#!"
// 																								className="text-decoration-none text-dark"
// 																							>
// 																								<span className="text-secondary">
// 																									By:
// 																								</span>{" "}
// 																								Frances Guerrero{" "}
// 																							</a>
// 																						</h6>
// 																						<p className="mb-0">
// 																							Removed demands expense account in
// 																							outward tedious do. Particular
// 																							waythoroughly unaffected
// 																							projection ar waythoroughly
// 																							unaffected projection?...
// 																						</p>
// 																						<p className="mt-4 fw-bold">
// 																							16 Replies
// 																						</p>
// 																					</div>
// 																					<small>5hr</small>
// 																				</div>
// 																			</div>
// 																			{/* Comment react */}
// 																			<ul className="nav nav-divider py-2 small">
// 																				<li className="nav-item">
// 																					<a
// 																						className="btn btn-primary btn-sm"
// 																						href="#"
// 																					>
// 																						Join Conversation{" "}
// 																						<i className="fas fa-arrow-right"></i>
// 																					</a>
// 																				</li>
// 																			</ul>
// 																		</div>
// 																	</div>
// 																</li>
// 															</ul>
// 														</div>
// 														{/* Chat Detail Page */}
// 														<div className="border p-2 p-sm-4 rounded-3">
// 															<ul
// 																className="list-unstyled mb-0"
// 																style={{ overflowY: "scroll", height: "500px" }}
// 															>
// 																<li className="comment-item mb-3">
// 																	<div className="d-flex">
// 																		<div className="avatar avatar-sm flex-shrink-0">
// 																			<a href="#">
// 																				<img
// 																					className="avatar-img rounded-circle"
// 																					src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
// 																					style={{
// 																						width: "40px",
// 																						height: "40px",
// 																						borderRadius: "50%",
// 																						objectFit: "cover",
// 																					}}
// 																					alt="womans image"
// 																				/>
// 																			</a>
// 																		</div>
// 																		<div className="ms-2">
// 																			{/* Comment by */}
// 																			<div className="bg-light p-3 rounded w-100">
// 																				<div className="d-flex w-100 justify-content-center">
// 																					<div className="me-2 ">
// 																						<h6 className="mb-1 lead fw-bold">
// 																							<a
// 																								href="#!"
// 																								className="text-decoration-none text-dark"
// 																							>
// 																								{" "}
// 																								Louis Ferguson{" "}
// 																							</a>
// 																							<br />
// 																							<span
// 																								style={{
// 																									fontSize: "12px",
// 																									color: "gray",
// 																								}}
// 																							>
// 																								5hrs Ago
// 																							</span>
// 																						</h6>
// 																						<p className="mb-0 mt-3  ">
// 																							Removed demands expense account
// 																						</p>
// 																					</div>
// 																				</div>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</li>

// 																<li className="comment-item mb-3">
// 																	<div className="d-flex">
// 																		<div className="avatar avatar-sm flex-shrink-0">
// 																			<a href="#">
// 																				<img
// 																					className="avatar-img rounded-circle"
// 																					src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
// 																					style={{
// 																						width: "40px",
// 																						height: "40px",
// 																						borderRadius: "50%",
// 																						objectFit: "cover",
// 																					}}
// 																					alt="womans image"
// 																				/>
// 																			</a>
// 																		</div>
// 																		<div className="ms-2">
// 																			{/* Comment by */}
// 																			<div className="bg-light p-3 rounded w-100">
// 																				<div className="d-flex w-100 justify-content-center">
// 																					<div className="me-2 ">
// 																						<h6 className="mb-1 lead fw-bold">
// 																							<a
// 																								href="#!"
// 																								className="text-decoration-none text-dark"
// 																							>
// 																								{" "}
// 																								Louis Ferguson{" "}
// 																							</a>
// 																							<br />
// 																							<span
// 																								style={{
// 																									fontSize: "12px",
// 																									color: "gray",
// 																								}}
// 																							>
// 																								5hrs Ago
// 																							</span>
// 																						</h6>
// 																						<p className="mb-0 mt-3  ">
// 																							Removed demands expense account
// 																							from the debby building in a hall
// 																							town tak with
// 																						</p>
// 																					</div>
// 																				</div>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</li>

// 																<li className="comment-item mb-3">
// 																	<div className="d-flex">
// 																		<div className="avatar avatar-sm flex-shrink-0">
// 																			<a href="#">
// 																				<img
// 																					className="avatar-img rounded-circle"
// 																					src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
// 																					style={{
// 																						width: "40px",
// 																						height: "40px",
// 																						borderRadius: "50%",
// 																						objectFit: "cover",
// 																					}}
// 																					alt="womans image"
// 																				/>
// 																			</a>
// 																		</div>
// 																		<div className="ms-2">
// 																			{/* Comment by */}
// 																			<div className="bg-light p-3 rounded w-100">
// 																				<div className="d-flex w-100 justify-content-center">
// 																					<div className="me-2 ">
// 																						<h6 className="mb-1 lead fw-bold">
// 																							<a
// 																								href="#!"
// 																								className="text-decoration-none text-dark"
// 																							>
// 																								{" "}
// 																								Louis Ferguson{" "}
// 																							</a>
// 																							<br />
// 																							<span
// 																								style={{
// 																									fontSize: "12px",
// 																									color: "gray",
// 																								}}
// 																							>
// 																								5hrs Ago
// 																							</span>
// 																						</h6>
// 																						<p className="mb-0 mt-3  ">
// 																							Removed demands expense account
// 																						</p>
// 																					</div>
// 																				</div>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</li>

// 																<li className="comment-item mb-3">
// 																	<div className="d-flex">
// 																		<div className="avatar avatar-sm flex-shrink-0">
// 																			<a href="#">
// 																				<img
// 																					className="avatar-img rounded-circle"
// 																					src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
// 																					style={{
// 																						width: "40px",
// 																						height: "40px",
// 																						borderRadius: "50%",
// 																						objectFit: "cover",
// 																					}}
// 																					alt="womans image"
// 																				/>
// 																			</a>
// 																		</div>
// 																		<div className="ms-2">
// 																			{/* Comment by */}
// 																			<div className="bg-light p-3 rounded w-100">
// 																				<div className="d-flex w-100 justify-content-center">
// 																					<div className="me-2 ">
// 																						<h6 className="mb-1 lead fw-bold">
// 																							<a
// 																								href="#!"
// 																								className="text-decoration-none text-dark"
// 																							>
// 																								{" "}
// 																								Louis Ferguson{" "}
// 																							</a>
// 																							<br />
// 																							<span
// 																								style={{
// 																									fontSize: "12px",
// 																									color: "gray",
// 																								}}
// 																							>
// 																								5hrs Ago
// 																							</span>
// 																						</h6>
// 																						<p className="mb-0 mt-3  ">
// 																							Removed demands expense account
// 																						</p>
// 																					</div>
// 																				</div>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</li>
// 															</ul>

// 															<form class="w-100 d-flex">
// 																<textarea
// 																	class="one form-control pe-4 bg-light w-75"
// 																	id="autoheighttextarea"
// 																	rows="1"
// 																	placeholder="Write a message..."
// 																></textarea>
// 																<button
// 																	class="btn btn-primary ms-2 mb-0 w-25"
// 																	type="button"
// 																>
// 																	Post <i className="fas fa-paper-plane"></i>
// 																</button>
// 															</form>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							{/* Main content END */}
// 							{/* Right sidebar START */}
// 							<div className="col-lg-4 pt-5 pt-lg-0">
// 								<div className="row mb-5 mb-lg-0">
// 									<div className="col-md-6 col-lg-12">
// 										{/* Video START */}
// 										<div className="card shadow p-2 mb-4 z-index-9">
// 											<div className="overflow-hidden rounded-3">
// 												<img
// 													src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg"
// 													className="card-img"
// 													alt="course image"
// 												/>
// 												<div
// 													className="m-auto rounded-2 mt-2 d-flex justify-content-center align-items-center"
// 													style={{ backgroundColor: "#ededed" }}
// 												>
// 													<a
// 														data-bs-toggle="modal"
// 														data-bs-target="#exampleModal"
// 														href="https://www.youtube.com/embed/tXHviS-4ygo"
// 														className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
// 														data-glightbox=""
// 														data-gallery="course-video"
// 													>
// 														<i className="fas fa-play" />
// 													</a>
// 													<span
// 														data-bs-toggle="modal"
// 														data-bs-target="#exampleModal"
// 														className="fw-bold"
// 													>
// 														Course Introduction Video
// 													</span>

// 													<div
// 														className="modal fade"
// 														id="exampleModal"
// 														tabIndex={-1}
// 														aria-labelledby="exampleModalLabel"
// 														aria-hidden="true"
// 													>
// 														<div className="modal-dialog">
// 															<div className="modal-content">
// 																<div className="modal-header">
// 																	<h1
// 																		className="modal-title fs-5"
// 																		id="exampleModalLabel"
// 																	>
// 																		Introduction Videos
// 																	</h1>
// 																	<button
// 																		type="button"
// 																		className="btn-close"
// 																		data-bs-dismiss="modal"
// 																		aria-label="Close"
// 																	/>
// 																</div>
// 																<div className="modal-body">...</div>
// 																<div className="modal-footer">
// 																	<button
// 																		type="button"
// 																		className="btn btn-secondary"
// 																		data-bs-dismiss="modal"
// 																	>
// 																		Close
// 																	</button>
// 																	<button
// 																		type="button"
// 																		className="btn btn-primary"
// 																	>
// 																		Save changes
// 																	</button>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 											{/* Card body */}
// 											<div className="card-body px-3">
// 												{/* Info */}
// 												<div className="d-flex justify-content-between align-items-center">
// 													{/* Price and time */}
// 													<div>
// 														<div className="d-flex align-items-center">
// 															<h3 className="fw-bold mb-0 me-2">$350</h3>
// 														</div>
// 													</div>
// 													{/* Share button with dropdown */}
// 													<div className="dropdown">
// 														{/* Share button */}
// 														<a
// 															href="#"
// 															className="btn btn-sm btn-light rounded small"
// 															role="button"
// 															id="dropdownShare"
// 															data-bs-toggle="dropdown"
// 															aria-expanded="false"
// 														>
// 															<i className="fas fa-fw fa-share-alt" />
// 														</a>
// 														{/* dropdown button */}
// 														<ul
// 															className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
// 															aria-labelledby="dropdownShare"
// 														>
// 															<li>
// 																<a className="dropdown-item" href="#">
// 																	<i className="fab fa-twitter-square me-2" />
// 																	Twitter
// 																</a>
// 															</li>
// 															<li>
// 																<a className="dropdown-item" href="#">
// 																	<i className="fab fa-facebook-square me-2" />
// 																	Facebook
// 																</a>
// 															</li>
// 															<li>
// 																<a className="dropdown-item" href="#">
// 																	<i className="fab fa-linkedin me-2" />
// 																	LinkedIn
// 																</a>
// 															</li>
// 															<li>
// 																<a className="dropdown-item" href="#">
// 																	<i className="fas fa-copy me-2" />
// 																	Copy link
// 																</a>
// 															</li>
// 														</ul>
// 													</div>
// 												</div>
// 												{/* Buttons */}
// 												<div className="mt-3 d-sm-flex justify-content-sm-between ">
// 													<Link
// 														to="/cart/"
// 														className="btn btn-primary mb-0 w-100 me-2"
// 													>
// 														<i className="fas fa-shopping-cart"></i> Add To Cart
// 													</Link>
// 													<Link
// 														to="/cart/"
// 														className="btn btn-success mb-0 w-100"
// 													>
// 														Enroll Now <i className="fas fa-arrow-right"></i>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>
// 										{/* Video END */}
// 										{/* Course info START */}
// 										<div className="card card-body shadow p-4 mb-4">
// 											{/* Title */}
// 											<h4 className="mb-3">This course includes</h4>
// 											<ul className="list-group list-group-borderless">
// 												<li className="list-group-item d-flex justify-content-between align-items-center">
// 													<span className="h6 fw-light mb-0">
// 														<i className="fas fa-fw fa-book-open text-primary me-2" />
// 														Lectures
// 													</span>
// 													<span>30</span>
// 												</li>
// 												<li className="list-group-item d-flex justify-content-between align-items-center d-none">
// 													<span className="h6 fw-light mb-0">
// 														<i className="fas fa-fw fa-clock text-primary me-2" />
// 														Duration
// 													</span>
// 													<span>4h 50m</span>
// 												</li>
// 												<li className="list-group-item d-flex justify-content-between align-items-center">
// 													<span className="h6 fw-light mb-0">
// 														<i className="fas fa-fw fa-signal text-primary me-2" />
// 														Skills
// 													</span>
// 													<span>Beginner</span>
// 												</li>
// 												<li className="list-group-item d-flex justify-content-between align-items-center">
// 													<span className="h6 fw-light mb-0">
// 														<i className="fas fa-fw fa-globe text-primary me-2" />
// 														Language
// 													</span>
// 													<span>English</span>
// 												</li>
// 												<li className="list-group-item d-flex justify-content-between align-items-center">
// 													<span className="h6 fw-light mb-0">
// 														<i className="fas fa-fw fa-user-clock text-primary me-2" />
// 														Published
// 													</span>
// 													<span>7th August, 2025</span>
// 												</li>
// 												<li className="list-group-item d-flex justify-content-between align-items-center">
// 													<span className="h6 fw-light mb-0">
// 														<i className="fas fa-fw fa-medal text-primary me-2" />
// 														Certificate
// 													</span>
// 													<span>Yes</span>
// 												</li>
// 											</ul>
// 										</div>
// 										{/* Course info END */}
// 									</div>
// 								</div>
// 								{/* Row End */}
// 							</div>
// 							{/* Right sidebar END */}
// 						</div>
// 						{/* Row END */}
// 					</div>
// 				</section>
// 				<section className="mb-5">
// 					<div className="container mb-lg-8 ">
// 						<div className="row mb-5 mt-3">
// 							{/* col */}
// 							<div className="col-12">
// 								<div className="mb-6">
// 									<h2 className="mb-1 h1">Related Courses</h2>
// 									<p>
// 										These are the most popular courses among Geeks Courses
// 										learners worldwide in year 2022
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-md-12">
// 								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
// 									<div className="col">
// 										{/* Card */}
// 										<div className="card card-hover">
// 											<Link to={`/course-detail/slug/`}>
// 												<img
// 													src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
// 													alt="course"
// 													className="card-img-top"
// 												/>
// 											</Link>
// 											{/* Card Body */}
// 											<div className="card-body">
// 												<div className="d-flex justify-content-between align-items-center mb-3">
// 													<span className="badge bg-info">Intermediate</span>
// 													<a href="#" className="fs-5">
// 														<i className="fas fa-heart text-danger align-middle" />
// 													</a>
// 												</div>
// 												<h4 className="mb-2 text-truncate-line-2 ">
// 													<Link
// 														to={`/course-detail/slug/`}
// 														className="text-inherit text-decoration-none text-dark fs-5"
// 													>
// 														How to easily create a website with JavaScript
// 													</Link>
// 												</h4>
// 												<small>By: Claire Evans</small> <br />
// 												<small>16k Students</small> <br />
// 												<div className="lh-1 mt-3 d-flex">
// 													<span className="align-text-top">
// 														<span className="fs-6">
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star-half text-warning"></i>
// 														</span>
// 													</span>
// 													<span className="text-warning">4.5</span>
// 													<span className="fs-6 ms-2">(9,300)</span>
// 												</div>
// 											</div>
// 											{/* Card Footer */}
// 											<div className="card-footer">
// 												<div className="row align-items-center g-0">
// 													<div className="col">
// 														<h5 className="mb-0">$39.00</h5>
// 													</div>
// 													<div className="col-auto">
// 														<a
// 															href="#"
// 															className="text-inherit text-decoration-none btn btn-primary"
// 														>
// 															<i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
// 															Enroll Now
// 														</a>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="col">
// 										{/* Card */}
// 										<div className="card card-hover">
// 											<Link to={`/course-detail/slug/`}>
// 												<img
// 													src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg"
// 													alt="course"
// 													className="card-img-top"
// 												/>
// 											</Link>
// 											{/* Card Body */}
// 											<div className="card-body">
// 												<div className="d-flex justify-content-between align-items-center mb-3">
// 													<span className="badge bg-info">Intermediate</span>
// 													<a href="#" className="fs-5">
// 														<i className="fas fa-heart text-danger align-middle" />
// 													</a>
// 												</div>
// 												<h4 className="mb-2 text-truncate-line-2 ">
// 													<Link
// 														to={`/course-detail/slug/`}
// 														className="text-inherit text-decoration-none text-dark fs-5"
// 													>
// 														How to easily create a website with JavaScript
// 													</Link>
// 												</h4>
// 												<small>By: Claire Evans</small> <br />
// 												<small>16k Students</small> <br />
// 												<div className="lh-1 mt-3 d-flex">
// 													<span className="align-text-top">
// 														<span className="fs-6">
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star-half text-warning"></i>
// 														</span>
// 													</span>
// 													<span className="text-warning">4.5</span>
// 													<span className="fs-6 ms-2">(9,300)</span>
// 												</div>
// 											</div>
// 											{/* Card Footer */}
// 											<div className="card-footer">
// 												<div className="row align-items-center g-0">
// 													<div className="col">
// 														<h5 className="mb-0">$39.00</h5>
// 													</div>
// 													<div className="col-auto">
// 														<a
// 															href="#"
// 															className="text-inherit text-decoration-none btn btn-primary"
// 														>
// 															<i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
// 															Enroll Now
// 														</a>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="col">
// 										{/* Card */}
// 										<div className="card card-hover">
// 											<Link to={`/course-detail/slug/`}>
// 												<img
// 													src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg"
// 													alt="course"
// 													className="card-img-top"
// 												/>
// 											</Link>
// 											{/* Card Body */}
// 											<div className="card-body">
// 												<div className="d-flex justify-content-between align-items-center mb-3">
// 													<span className="badge bg-info">Intermediate</span>
// 													<a href="#" className="fs-5">
// 														<i className="fas fa-heart text-danger align-middle" />
// 													</a>
// 												</div>
// 												<h4 className="mb-2 text-truncate-line-2 ">
// 													<Link
// 														to={`/course-detail/slug/`}
// 														className="text-inherit text-decoration-none text-dark fs-5"
// 													>
// 														Learn React.Js for Beginners from Start to Finish
// 													</Link>
// 												</h4>
// 												<small>By: Claire Evans</small> <br />
// 												<small>16k Students</small> <br />
// 												<div className="lh-1 mt-3 d-flex">
// 													<span className="align-text-top">
// 														<span className="fs-6">
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star-half text-warning"></i>
// 														</span>
// 													</span>
// 													<span className="text-warning">4.5</span>
// 													<span className="fs-6 ms-2">(9,300)</span>
// 												</div>
// 											</div>
// 											{/* Card Footer */}
// 											<div className="card-footer">
// 												<div className="row align-items-center g-0">
// 													<div className="col">
// 														<h5 className="mb-0">$39.00</h5>
// 													</div>
// 													<div className="col-auto">
// 														<a
// 															href="#"
// 															className="text-inherit text-decoration-none btn btn-primary"
// 														>
// 															<i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
// 															Enroll Now
// 														</a>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="col">
// 										{/* Card */}
// 										<div className="card card-hover">
// 											<Link to={`/course-detail/slug/`}>
// 												<img
// 													src="https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg"
// 													alt="course"
// 													className="card-img-top"
// 												/>
// 											</Link>
// 											{/* Card Body */}
// 											<div className="card-body">
// 												<div className="d-flex justify-content-between align-items-center mb-3">
// 													<span className="badge bg-info">Intermediate</span>
// 													<a href="#" className="fs-5">
// 														<i className="fas fa-heart text-danger align-middle" />
// 													</a>
// 												</div>
// 												<h4 className="mb-2 text-truncate-line-2 ">
// 													<Link
// 														to={`/course-detail/slug/`}
// 														className="text-inherit text-decoration-none text-dark fs-5"
// 													>
// 														How to easily create a website with JavaScript
// 													</Link>
// 												</h4>
// 												<small>By: Claire Evans</small> <br />
// 												<small>16k Students</small> <br />
// 												<div className="lh-1 mt-3 d-flex">
// 													<span className="align-text-top">
// 														<span className="fs-6">
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star text-warning"></i>
// 															<i className="fas fa-star-half text-warning"></i>
// 														</span>
// 													</span>
// 													<span className="text-warning">4.5</span>
// 													<span className="fs-6 ms-2">(9,300)</span>
// 												</div>
// 											</div>
// 											{/* Card Footer */}
// 											<div className="card-footer">
// 												<div className="row align-items-center g-0">
// 													<div className="col">
// 														<h5 className="mb-0">$39.00</h5>
// 													</div>
// 													<div className="col-auto">
// 														<a
// 															href="#"
// 															className="text-inherit text-decoration-none btn btn-primary"
// 														>
// 															<i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
// 															Enroll Now
// 														</a>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 			</>

// 			<BaseFooter />
// 		</>
// 	);
// }

// export default CourseDetail;

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
	Play,
	Lock,
	TwitterIcon,
	FacebookIcon,
	LinkedinIcon,
	Loader,
} from "lucide-react";

import useAxios from "../../utils/useAxios";
import { useParams } from "react-router-dom";
import moment from "moment";
import BaseHeader from "../partials/BaseHeader";
import CartId from "../plugins/CartId";
import GetCurrentAddress from "../plugins/UserCountry";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import { CartContext } from "../plugins/Context";
import apiInstance from "../../utils/axios";

export default function CourseDetail() {
	const [course, setCourse] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [addToCartBtn, setAddToCartBtn] = useState("Add to Cart");
	const [cartCount, setCartCount] = useContext(CartContext);

	const param = useParams();

	const country = GetCurrentAddress().country;
	const userId = UserData().user_id;

	const [activeTab, setActiveTab] = useState("overview");
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
	const [openAccordion, setOpenAccordion] = useState("section-1");

	const fetchCourses = () => {
		useAxios()
			.get(`course/course-detail/${param.slug}/`)
			.then((res) => {
				setCourse(res.data);
				setIsLoading(false);
				console.log(res.data);
			});
	};

	useEffect(() => {
		fetchCourses();
	}, []);

	const addToCart = async (courseId, userId, price, country, cartId) => {
		setAddToCartBtn("Adding to Cart");
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
					setAddToCartBtn("Added to Cart");
					Toast().fire({ icon: "success", title: "Added to Cart" });
				});

			// set cart count after adding to cart
			apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
				setCartCount(res.data?.length);
			});
		} catch (error) {
			console.log(error);
			setAddToCartBtn("Add to Cart");
		}
	};

	return (
		<>
			<BaseHeader />
			{isLoading === true ? (
				<p>Loading</p>
			) : (
				<>
					<div className="bg-gray-50 min-h-screen pt-14">
						<main className="container mx-auto px-4 py-8 xl:px-24">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
								<div className="lg:col-span-2">
									<div className="mb-6">
										<span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
											{course.category.title}
										</span>
										<h1 className="text-3xl font-bold mt-2">{course.title}</h1>
										<p
											className="text-gray-600 mt-2"
											dangerouslySetInnerHTML={{
												__html: `${course?.description?.slice(0, 200)}`,
											}}
										></p>
										<div className="flex flex-wrap items-center gap-4 mt-4">
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-yellow-400"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<span className="ml-1">
													{course.average_rating || 0}/5.0
												</span>
											</div>
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												<span className="ml-1">
													{course.student?.length || 0} Enrolled
												</span>
											</div>
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
													/>
												</svg>
												<span className="ml-1">{course.level}</span>
											</div>
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
													/>
												</svg>
												<span className="ml-1">
													{moment(course.date).format("DD MMM, YYYY")}
												</span>
											</div>
										</div>
									</div>

									<div className="mb-8">
										<div className="flex border-b">
											{["overview", "curriculum", "instructor", "reviews"].map(
												(tab) => (
													<button
														key={tab}
														className={`py-2 px-4 font-medium ${
															activeTab === tab
																? "text-blue-600 border-b-2 border-blue-600"
																: "text-gray-500 hover:text-gray-700"
														}`}
														onClick={() => setActiveTab(tab)}
													>
														{tab.charAt(0).toUpperCase() + tab.slice(1)}
													</button>
												)
											)}
										</div>
										<div className="mt-4">
											{activeTab === "overview" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Course Description
													</h2>
													<p
														className="mb-4"
														dangerouslySetInnerHTML={{
															__html: `${course?.description}`,
														}}
													></p>
												</div>
											)}
											{activeTab === "curriculum" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Course Curriculum
													</h2>
													<div className="space-y-4">
														{course?.curriculum?.map((data, index) => (
															<div
																key={`section-${index + 1}`}
																className="border rounded-lg"
															>
																<button
																	className="flex justify-between items-center w-full p-4 text-left"
																	onClick={() =>
																		setOpenAccordion(
																			openAccordion === `section-${index + 1}`
																				? ""
																				: `section-${index + 1}`
																		)
																	}
																>
																	<span className="font-medium">
																		{data.title}
																	</span>
																	<svg
																		className={`w-5 h-5 transition-transform ${
																			openAccordion === `section-${index + 1}`
																				? "transform rotate-180"
																				: ""
																		}`}
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M19 9l-7 7-7-7"
																		/>
																	</svg>
																</button>
																{openAccordion === `section-${index + 1}` && (
																	<div className="p-4 border-t">
																		<div className="space-y-2">
																			{data?.variant_items?.map(
																				(data, index) => (
																					<div
																						className="flex justify-between items-center"
																						key={index}
																					>
																						<div className="flex items-center">
																							{data.preview ? (
																								<Play className="w-4 h-4 mr-2 text-gray-400" /> // Play button icon when preview is true
																							) : (
																								<Lock className="w-4 h-4 mr-2 text-gray-400" /> // Lock icon when preview is false
																							)}
																							<span>{data.title}</span>
																						</div>
																						<span>{data.duration}</span>
																					</div>
																				)
																			)}
																		</div>
																	</div>
																)}
															</div>
														))}
													</div>
												</div>
											)}
											{activeTab === "instructor" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Instructor
													</h2>
													<div className="flex items-center">
														<img
															src={course.teacher.image}
															alt="Instructor"
															width={100}
															height={100}
															className="rounded-full"
														/>
														<div className="ml-4">
															<h3 className="text-xl font-semibold">
																{course.teacher.full_name}
															</h3>
															<p className="text-gray-600">
																{course.teacher.bio}
															</p>
															{/* Social Media Links */}
															<div className="flex mt-2 space-x-4">
																{course.teacher.twitter && (
																	<a
																		href={course.teacher.twitter}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-blue-400 hover:text-blue-600"
																		aria-label="Twitter"
																	>
																		<TwitterIcon className="w-5 h-5" />
																	</a>
																)}
																{course.teacher.facebook && (
																	<a
																		href={course.teacher.facebook}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-blue-600 hover:text-blue-800"
																		aria-label="Facebook"
																	>
																		<FacebookIcon className="w-5 h-5" />
																	</a>
																)}
																{course.teacher.linkedin && (
																	<a
																		href={course.teacher.linkedin}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-blue-700 hover:text-blue-900"
																		aria-label="LinkedIn"
																	>
																		<LinkedinIcon className="w-5 h-5" />
																	</a>
																)}
															</div>
														</div>
													</div>
													<p className="mt-4">
														Fulfilled direction use continual set him propriety
														continued. Saw met applauded favorite deficient
														engrossed concealed and her. Concluded boy perpetual
														old supposing. Farther related bed and passage
														comfort civilly.
													</p>
												</div>
											)}
											{activeTab === "reviews" && (
												<div className="bg-white p-6 rounded-lg shadow">
													<h2 className="text-2xl font-semibold mb-4">
														Student Reviews
													</h2>
													<div className="space-y-4">
														<div className="flex items-start">
															<img
																src="/placeholder.svg?height=50&width=50"
																alt="Reviewer"
																width={50}
																height={50}
																className="rounded-full"
															/>
															<div className="ml-4">
																<h4 className="font-semibold">Sam Jay</h4>
																<div className="flex items-center">
																	{[...Array(5)].map((_, i) => (
																		<svg
																			key={i}
																			className="w-4 h-4 text-yellow-400"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
																		</svg>
																	))}
																</div>
																<p className="text-sm text-gray-500">
																	5 days ago
																</p>
																<p className="mt-1">
																	Great course! The instructor explains
																	everything clearly and provides practical
																	examples.
																</p>
															</div>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>

								<div className="lg:col-span-1">
									<div className="bg-white p-6 rounded-lg shadow">
										<div className="relative">
											<img
												src={course.image}
												alt="Course thumbnail"
												width={400}
												height={200}
												className="w-full rounded-lg"
											/>
											<button
												className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
												onClick={() => setIsVideoModalOpen(true)}
											>
												<svg
													className="w-6 h-6 text-blue-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</button>
										</div>
										<div className="mt-6">
											<div className="flex justify-between items-center">
												<span className="text-3xl font-bold">
													${course.price}
												</span>
												<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
													<svg
														className="w-5 h-5 text-gray-600"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
														/>
													</svg>
												</button>
											</div>
											<div className="mt-4 space-y-2">
												{addToCartBtn === "Add to Cart" && (
													<button
														className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
														onClick={() => {
															addToCart(
																course.id,
																userId,
																course.price,
																country,
																CartId()
															);
														}}
													>
														Add to Cart
													</button>
												)}
												{addToCartBtn === "Adding to Cart" && (
													<button
														className="w-full flex justify-center bg-indigo-600 text-white py-[10px] px-4 rounded hover:bg-blue-700 transition duration-300"
														onClick={() => {
															addToCart(
																course?.id,
																userId,
																course.price,
																country,
																CartId()
															);
														}}
													>
														<Loader className="animate-spin h-5 w-5 text-white" />
													</button>
												)}
												{addToCartBtn === "Added to Cart" && (
													<button
														className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
														onClick={() => {
															addToCart(
																course.id,
																userId,
																course.price,
																country,
																CartId()
															);
														}}
													>
														Added to Cart
													</button>
												)}
												<button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
													Enroll Now
												</button>
											</div>
										</div>
										<div className="mt-6 border-t pt-6">
											<h3 className="text-lg font-semibold mb-4">
												This course includes:
											</h3>
											<ul className="space-y-2">
												{[
													{
														icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
														label: "Lectures",
														value: "30",
													},
													{
														icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
														label: "Duration",
														value: "4h 50m",
													},
													{
														icon: "M13 10V3L4 14h7v7l9-11h-7z",
														label: "Skills",
														value: "Beginner",
													},
													{
														icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
														label: "Language",
														value: "English",
													},
													{
														icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
														label: "Certificate",
														value: "Yes",
													},
												].map((item, index) => (
													<li
														key={index}
														className="flex justify-between items-center"
													>
														<div className="flex items-center">
															<svg
																className="w-5 h-5 text-gray-400 mr-2"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d={item.icon}
																/>
															</svg>
															<span>{item.label}</span>
														</div>
														<span className="font-medium">{item.value}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>

							<section className="mt-12">
								<h2 className="text-2xl font-bold mb-6">Related Courses</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
									{[1, 2, 3, 4].map((course) => (
										<div
											key={course}
											className="bg-white rounded-lg shadow overflow-hidden"
										>
											<img
												src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
												alt={`Course ${course}`}
												width={400}
												height={200}
												className="w-full h-48 object-cover"
											/>
											<div className="p-4">
												<div className="flex justify-between items-center mb-2">
													<span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
														Intermediate
													</span>
													<button className="text-gray-400 hover:text-red-500">
														<svg
															className="w-5 h-5"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
															/>
														</svg>
													</button>
												</div>
												<h3 className="text-lg font-semibold mb-2">
													How to easily create a website with React
												</h3>
												<p className="text-sm text-gray-600 mb-2">
													By John Doe
												</p>
												<div className="flex items-center mb-2">
													{[...Array(5)].map((_, i) => (
														<svg
															key={i}
															className="w-4 h-4 text-yellow-400"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg>
													))}
													<span className="text-sm ml-1">4.5 (2,550)</span>
												</div>
												<div className="flex justify-between items-center">
													<span className="text-lg font-bold">$89.99</span>
													<button className="bg-indigo-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 transition duration-300">
														Add to Cart
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</section>
						</main>

						{isVideoModalOpen && (
							<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
								<div className="bg-white p-4 rounded-lg max-w-3xl w-full">
									<div className="flex justify-between items-center mb-4">
										<h2 className="text-xl font-bold">
											Course Introduction Video
										</h2>
										<button
											onClick={() => setIsVideoModalOpen(false)}
											className="text-gray-500 hover:text-gray-700"
										>
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
									<div className="aspect-w-16 aspect-h-9">
										<iframe
											src="https://www.youtube.com/embed/dQw4w9WgXcQ"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="w-full h-96"
										></iframe>
									</div>
								</div>
							</div>
						)}
					</div>
				</>
			)}
		</>
	);
}
