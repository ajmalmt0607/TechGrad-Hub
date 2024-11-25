import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import VideoPlayer from "./Partials/VideoPlayer";
import useAxios from "../../utils/useAxios";
import UserData from "../plugins/UserData";
import Toast from "../plugins/Toast";
import { Play, Pause } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoSection = memo(
	({ videoSource, onPlayPause, isPlaying, isLoading, title, description }) => {
		const videoRef = useRef(null);

		return (
			<div className="w-full">
				<div className="w-full aspect-video">
					{isLoading ? (
						<Skeleton height="100%" width="100%" />
					) : (
						<VideoPlayer
							ref={videoRef}
							source={videoSource}
							onPlayPause={onPlayPause}
							isPlaying={isPlaying}
						/>
					)}
				</div>
				{isLoading ? (
					<>
						<Skeleton width={300} height={24} className="mt-3 mb-2" />
						<Skeleton count={3} />
					</>
				) : (
					<>
						<h1 className="text-3xl mt-3 font-bold mb-2">{title}</h1>
						<p className="text-gray-600 text-sm">{description}</p>
					</>
				)}
			</div>
		);
	}
);

VideoSection.displayName = "VideoSection";

const ContentSection = memo(
	({
		activeTab,
		setActiveTab,
		course,
		completionPercentage,
		questions,
		studentReview,
		onSetVariantItem,
		onMarkLessonAsCompleted,
		handleNoteChange,
		handleSubmitCreateNote,
		handleSubmitEditNote,
		handleDeleteNote,
		handleMessageChange,
		handleSaveQuestion,
		sendNewMessage,
		handleSearchQuestion,
		handleReviewChange,
		handleCreateReviewSubmit,
		handleUpdateReviewSubmit,
		createNote,
		selectedNote,
		createMessage,
		createReview,
		setShowNoteModal,
		showNoteModal,
		showQuestionModal,
		setShowQuestionModal,
		showConversationModal,
		setShowConversationModal,
		selectedConversation,
		setSelectedConversation,
		setSelectedNote,
		lastElementRef,
		currentlyPlayingLecture,
		isPlaying,
		isLoading,
		fetchCourseDetail,
	}) => {
		const [expandedSections, setExpandedSections] = useState({});

		const toggleSection = useCallback((sectionId) => {
			setExpandedSections((prev) => ({
				...prev,
				[sectionId]: !prev[sectionId],
			}));
		}, []);

		return (
			<div className="w-full lg:w-3/3 xl:max-w-[380px] 2 border-l bg-white h-[550px] overflow-hidden custom-scrollbar flex flex-col">
				<div className="flex border-b">
					{["Lectures", "Notes", "Discussion", "Review"].map((tab) => (
						<button
							key={tab}
							className={`flex-1 py-3 px-0 focus:outline-none ${
								activeTab === tab.toLowerCase()
									? "border-b-2 border-blue-500 text-blue-500"
									: "text-gray-500 hover:text-gray-700"
							}`}
							onClick={() => setActiveTab(tab.toLowerCase())}
						>
							{tab}
						</button>
					))}
				</div>

				<div className="flex-1 overflow-y-auto">
					<div className="p-5">
						{/* Lectures Tab */}
						{activeTab === "lectures" && (
							<div>
								<h2 className="text-lg font-bold mb-4">Course Content</h2>
								<div className="mb-6">
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-blue-600 h-2 rounded-full"
											style={{ width: `${completionPercentage}%` }}
										></div>
									</div>
									<p className="text-sm text-gray-600 mt-2">
										{course.completed_lesson?.length || 0} /{" "}
										{course.lectures?.length || 0} completed
									</p>
								</div>

								{isLoading ? (
									<Skeleton count={5} height={40} className="mb-2" />
								) : (
									course?.curriculum?.map((section) => (
										<div key={section.variant_id} className="mb-4">
											<button
												className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg"
												onClick={() => toggleSection(section.variant_id)}
											>
												<h3 className="font-semibold text-base">
													{section.title}
												</h3>
												<svg
													className={`w-5 h-5 transform ${
														expandedSections[section.variant_id]
															? "rotate-180"
															: ""
													}`}
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</button>
											{expandedSections[section.variant_id] && (
												<div className="mt-2">
													{section.variant_items?.map((lecture) => (
														<div
															key={lecture.variant_item_id}
															className={`flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer ${
																currentlyPlayingLecture?.variant_item_id ===
																lecture.variant_item_id
																	? "bg-blue-100"
																	: ""
															}`}
															onClick={() => onSetVariantItem(lecture)}
														>
															<div className="flex items-center gap-3">
																{currentlyPlayingLecture?.variant_item_id ===
																lecture.variant_item_id ? (
																	isPlaying ? (
																		<Pause className="w-5 h-5 text-blue-500" />
																	) : (
																		<Play className="w-5 h-5 text-blue-500" />
																	)
																) : (
																	<Play className="w-5 h-5 text-gray-500" />
																)}
																<span className="text-sm">{lecture.title}</span>
															</div>
															<div className="flex items-center gap-2">
																<span className="text-sm text-gray-600">
																	{lecture.content_duration || "0m"}
																</span>
																<input
																	type="checkbox"
																	checked={course?.completed_lesson?.some(
																		(cl) => cl.variant_item.id === lecture.id
																	)}
																	onChange={(e) => {
																		e.stopPropagation();
																		onMarkLessonAsCompleted(
																			lecture.variant_item_id
																		);
																	}}
																	className="h-4 w-4 rounded border-gray-300"
																	disabled={
																		currentlyPlayingLecture?.variant_item_id !==
																		lecture.variant_item_id
																	}
																/>
															</div>
														</div>
													))}
												</div>
											)}
										</div>
									))
								)}
							</div>
						)}

						{/* Notes Tab */}
						{activeTab === "notes" && (
							<div>
								<div className="flex justify-between items-center mb-6">
									<h2 className="text-2xl font-semibold">Notes</h2>
									<button
										onClick={() => setShowNoteModal(true)}
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
									>
										Add Note
									</button>
								</div>

								{isLoading ? (
									<Skeleton count={3} height={100} className="mb-4" />
								) : (
									course?.note?.map((note) => (
										<div key={note.id} className="mb-4 p-4 border rounded-lg">
											<h3 className="font-semibold mb-2">{note.title}</h3>
											<p className="text-gray-600 mb-4">{note.note}</p>
											<div className="flex gap-2">
												<button
													onClick={() => {
														setSelectedNote(note);
														setShowNoteModal(true);
													}}
													className="text-blue-500 hover:text-blue-700"
												>
													Edit
												</button>
												<button
													onClick={() => handleDeleteNote(note.id)}
													className="text-red-500 hover:text-red-700"
												>
													Delete
												</button>
											</div>
										</div>
									))
								)}

								{!isLoading && course?.note?.length === 0 && (
									<p className="text-center text-gray-500">No notes yet</p>
								)}
							</div>
						)}

						{/* Discussion Tab */}
						{activeTab === "discussion" && (
							<div>
								<div className="flex justify-between items-center mb-6">
									<h2 className="text-2xl font-semibold">Discussion</h2>
									<button
										onClick={() => setShowQuestionModal(true)}
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
									>
										Ask Question
									</button>
								</div>

								<div className="mb-6">
									<input
										type="text"
										placeholder="Search discussions..."
										onChange={handleSearchQuestion}
										className="w-full px-4 py-2 border rounded-lg"
									/>
								</div>

								{isLoading ? (
									<Skeleton count={3} height={80} className="mb-4" />
								) : (
									questions?.map((question) => (
										<div
											key={question.qa_id}
											className="mb-4 p-4 border rounded-lg"
										>
											<div className="flex items-center gap-3 mb-3">
												<img
													src={question.profile.image}
													alt="Profile"
													className="h-10 w-10 rounded-full object-cover"
												/>
												<div>
													<p className="font-semibold">
														{question.profile.full_name}
													</p>
													<p className="text-sm text-gray-500">
														{moment(question.date).format("DD MMM, YYYY")}
													</p>
												</div>
											</div>
											<h3 className="font-semibold mb-3">{question.title}</h3>
											<button
												onClick={() => {
													setSelectedConversation(question);
													setShowConversationModal(true);
												}}
												className="text-blue-500 hover:text-blue-700"
											>
												Join Conversation
											</button>
										</div>
									))
								)}

								{!isLoading && questions?.length === 0 && (
									<p className="text-center text-gray-500">
										No discussions yet
									</p>
								)}
							</div>
						)}

						{/* Review Tab */}
						{activeTab === "review" && (
							<div>
								<h2 className="text-2xl font-semibold mb-6">Leave a Review</h2>
								{isLoading ? (
									<Skeleton count={4} height={40} className="mb-4" />
								) : (
									<form
										onSubmit={
											studentReview
												? handleUpdateReviewSubmit
												: handleCreateReviewSubmit
										}
										className="space-y-4"
									>
										<div>
											<label className="block text-sm font-medium mb-2">
												Rating
											</label>
											<select
												name="rating"
												value={createReview.rating}
												onChange={handleReviewChange}
												className="w-full px-3 py-2 border rounded-lg"
											>
												<option value={1}>★☆☆☆☆ (1/5)</option>
												<option value={2}>★★☆☆☆ (2/5)</option>
												<option value={3}>★★★☆☆ (3/5)</option>
												<option value={4}>★★★★☆ (4/5)</option>
												<option value={5}>★★★★★ (5/5)</option>
											</select>
										</div>
										<div>
											<label className="block text-sm font-medium mb-2">
												Your Review
											</label>
											<textarea
												name="review"
												value={createReview.review}
												onChange={handleReviewChange}
												rows={5}
												className="w-full px-3 py-2 border rounded-lg"
												placeholder="Write your review..."
											></textarea>
										</div>
										<button
											type="submit"
											className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
										>
											{studentReview ? "Update Review" : "Post Review"}
										</button>
									</form>
								)}
							</div>
						)}
					</div>
				</div>

				{/* Note Modal */}
				{showNoteModal && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg w-full max-w-md">
							<h2 className="text-2xl font-semibold mb-4">
								{selectedNote ? "Edit Note" : "Add New Note"}
							</h2>
							<form
								onSubmit={
									selectedNote
										? (e) => handleSubmitEditNote(e, selectedNote.id)
										: handleSubmitCreateNote
								}
							>
								<input
									type="text"
									name="title"
									placeholder="Note Title"
									value={createNote.title || selectedNote?.title || ""}
									onChange={handleNoteChange}
									className="w-full px-3 py-2 border rounded-lg mb-4"
								/>
								<textarea
									name="note"
									placeholder="Note Content"
									value={createNote.note || selectedNote?.note || ""}
									onChange={handleNoteChange}
									rows={5}
									className="w-full px-3 py-2 border rounded-lg mb-4"
								></textarea>
								<div className="flex justify-end gap-2">
									<button
										type="button"
										onClick={() => {
											setShowNoteModal(false);
											setSelectedNote(null);
											setCreateNote({ title: "", note: "" });
										}}
										className="px-4 py-2 border rounded-lg"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
									>
										{selectedNote ? "Update Note" : "Save Note"}
									</button>
								</div>
							</form>
						</div>
					</div>
				)}

				{/* Question Modal */}
				{showQuestionModal && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg w-full max-w-md">
							<h2 className="text-2xl font-semibold mb-4">Ask New Question</h2>
							<form onSubmit={handleSaveQuestion}>
								<input
									type="text"
									name="title"
									placeholder="Question Title"
									value={createMessage.title}
									onChange={handleMessageChange}
									className="w-full px-3 py-2 border rounded-lg mb-4"
								/>
								<textarea
									name="message"
									placeholder="Question Details"
									value={createMessage.message}
									onChange={handleMessageChange}
									rows={5}
									className="w-full px-3 py-2 border rounded-lg mb-4"
								></textarea>
								<div className="flex justify-end gap-2">
									<button
										type="button"
										onClick={() => setShowQuestionModal(false)}
										className="px-4 py-2 border rounded-lg"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
									>
										Post Question
									</button>
								</div>
							</form>
						</div>
					</div>
				)}

				{/* Conversation Modal */}
				{showConversationModal && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg w-full max-w-3xl h-3/4 flex flex-col">
							<h2 className="text-2xl font-semibold mb-4">
								{selectedConversation?.title}
							</h2>
							<div className="flex-grow overflow-y-auto mb-4">
								{selectedConversation?.messages?.map((message) => (
									<div key={message.id} className="flex gap-3 mb-4">
										<img
											src={message.profile.image}
											alt="Profile"
											className="h-8 w-8 rounded-full object-cover"
										/>
										<div>
											<div className="flex items-center gap-2">
												<p className="font-semibold">
													{message.profile.full_name}
												</p>
												<p className="text-sm text-gray-500">
													{moment(message.date).format("DD MMM, YYYY")}
												</p>
											</div>
											<p className="mt-1">{message.message}</p>
										</div>
									</div>
								))}
								<div ref={lastElementRef} />
							</div>
							<form onSubmit={sendNewMessage} className="flex gap-2">
								<input
									type="text"
									name="message"
									placeholder="Type your message..."
									value={createMessage.message}
									onChange={handleMessageChange}
									className="flex-grow px-3 py-2 border rounded-lg"
								/>
								<button
									type="submit"
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
								>
									Send
								</button>
							</form>
							<button
								onClick={() => setShowConversationModal(false)}
								className="mt-4 w-full px-4 py-2 border rounded-lg"
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}
);

ContentSection.displayName = "ContentSection";

const CourseDetail = () => {
	const [course, setCourse] = useState([]);
	const [variantItem, setVariantItem] = useState(null);
	const [completionPercentage, setCompletionPercentage] = useState(0);
	const [markAsCompletedStatus, setMarkAsCompletedStatus] = useState({});
	const [createNote, setCreateNote] = useState({ title: "", note: "" });
	const [selectedNote, setSelectedNote] = useState(null);
	const [createMessage, setCreateMessage] = useState({
		title: "",
		message: "",
	});
	const [questions, setQuestions] = useState([]);
	const [selectedConversation, setSelectedConversation] = useState(null);
	const [createReview, setCreateReview] = useState({ rating: 1, review: "" });
	const [studentReview, setStudentReview] = useState([]);
	const [activeTab, setActiveTab] = useState("lectures");
	const [showNoteModal, setShowNoteModal] = useState(false);
	const [showQuestionModal, setShowQuestionModal] = useState(false);
	const [showConversationModal, setShowConversationModal] = useState(false);
	const [currentlyPlayingLecture, setCurrentlyPlayingLecture] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const param = useParams();
	const lastElementRef = useRef();

	const fetchCourseDetail = useCallback(async () => {
		setIsLoading(true);
		try {
			const res = await useAxios().get(
				`student/course-detail/${UserData()?.user_id}/${param.enrollment_id}/`
			);
			setCourse(res.data);
			setQuestions(res.data.question_answer);
			setStudentReview(res.data.review);
			const percentageCompleted =
				(res.data.completed_lesson?.length / res.data.lectures?.length) * 100;
			setCompletionPercentage(percentageCompleted?.toFixed(0));
			// Set initial expanded section and selected lecture
			// if (
			// 	res.data.curriculum &&
			// 	res.data.curriculum.length > 0 &&
			// 	variantItem === null &&
			// 	currentlyPlayingLecture === null
			// ) {
			// 	const firstSection = res.data.curriculum[0];

			// 	if (
			// 		firstSection.variant_items &&
			// 		firstSection.variant_items.length > 0 &&
			// 		variantItem === null &&
			// 		currentlyPlayingLecture === null
			// 	) {
			// 		const firstLecture = firstSection.variant_items[0];
			// 		setVariantItem(firstLecture);
			// 		setCurrentlyPlayingLecture(firstLecture);
			// 	}
			// }
		} catch (error) {
			console.error("Error fetching course details:", error);
			Toast().fire({
				icon: "error",
				title: "Failed to load course details",
			});
		} finally {
			setIsLoading(false);
		}
	}, [param.enrollment_id]);

	useEffect(() => {
		fetchCourseDetail();
	}, [fetchCourseDetail]);

	const handleMarkLessonAsCompleted = useCallback(
		async (variantItemId) => {
			const key = `lecture_${variantItemId}`;
			setMarkAsCompletedStatus((prev) => ({
				...prev,
				[key]: "Updating",
			}));

			const formdata = new FormData();
			formdata.append("user_id", UserData()?.user_id || 0);
			formdata.append("course_id", course.course?.id);
			formdata.append("variant_item_id", variantItemId);

			try {
				await useAxios().post(`student/course-completed/`, formdata);
				await fetchCourseDetail();
				setMarkAsCompletedStatus((prev) => ({
					...prev,
					[key]: "Updated",
				}));
			} catch (error) {
				console.error("Error marking lesson as completed:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to mark lesson as completed",
				});
				setMarkAsCompletedStatus((prev) => ({
					...prev,
					[key]: "Failed",
				}));
			}
		},
		[course.course?.id, fetchCourseDetail]
	);

	const handleNoteChange = useCallback((event) => {
		const { name, value } = event.target;
		setCreateNote((prev) => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const handleSubmitCreateNote = useCallback(
		async (e) => {
			e.preventDefault();
			const formdata = new FormData();

			formdata.append("user_id", UserData()?.user_id);
			formdata.append("enrollment_id", param.enrollment_id);
			formdata.append("title", createNote.title);
			formdata.append("note", createNote.note);

			try {
				await useAxios().post(
					`student/course-note/${UserData()?.user_id}/${param.enrollment_id}/`,
					formdata
				);
				await fetchCourseDetail();
				Toast().fire({
					icon: "success",
					title: "Note created",
				});
				setCreateNote({ title: "", note: "" });
				setShowNoteModal(false);
			} catch (error) {
				console.error("Error creating note:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to create note",
				});
			}
		},
		[createNote, param.enrollment_id, fetchCourseDetail]
	);

	const handleSubmitEditNote = useCallback(
		async (e, noteId) => {
			e.preventDefault();
			const formdata = new FormData();

			formdata.append("user_id", UserData()?.user_id);
			formdata.append("enrollment_id", param.enrollment_id);
			formdata.append("title", createNote.title || selectedNote?.title);
			formdata.append("note", createNote.note || selectedNote?.note);

			try {
				await useAxios().patch(
					`student/course-note-detail/${UserData()?.user_id}/${param.enrollment_id}/${noteId}/`,
					formdata
				);
				await fetchCourseDetail();
				Toast().fire({
					icon: "success",
					title: "Note updated",
				});
				setSelectedNote(null);
				setShowNoteModal(false);
			} catch (error) {
				console.error("Error updating note:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to update note",
				});
			}
		},
		[createNote, selectedNote, param.enrollment_id, fetchCourseDetail]
	);

	const handleDeleteNote = useCallback(
		async (noteId) => {
			try {
				await useAxios().delete(
					`student/course-note-detail/${UserData()?.user_id}/${param.enrollment_id}/${noteId}/`
				);
				await fetchCourseDetail();
				Toast().fire({
					icon: "success",
					title: "Note deleted",
				});
			} catch (error) {
				console.error("Error deleting note:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to delete note",
				});
			}
		},
		[param.enrollment_id, fetchCourseDetail]
	);

	const handleMessageChange = useCallback((event) => {
		const { name, value } = event.target;
		setCreateMessage((prev) => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const handleSaveQuestion = useCallback(
		async (e) => {
			e.preventDefault();
			const formdata = new FormData();

			formdata.append("course_id", course.course?.id);
			formdata.append("user_id", UserData()?.user_id);
			formdata.append("title", createMessage.title);
			formdata.append("message", createMessage.message);

			try {
				await useAxios().post(
					`student/question-answer-list-create/${course.course?.id}/`,
					formdata
				);
				await fetchCourseDetail();
				Toast().fire({
					icon: "success",
					title: "Question sent",
				});
				setCreateMessage({ title: "", message: "" });
				setShowQuestionModal(false);
			} catch (error) {
				console.error("Error saving question:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to send question",
				});
			}
		},
		[course.course?.id, createMessage, fetchCourseDetail]
	);

	const sendNewMessage = useCallback(
		async (e) => {
			e.preventDefault();
			const formdata = new FormData();
			formdata.append("course_id", course.course?.id);
			formdata.append("user_id", UserData()?.user_id);
			formdata.append("message", createMessage.message);
			formdata.append("qa_id", selectedConversation?.qa_id);

			try {
				const res = await useAxios().post(
					`student/question-answer-message-create/`,
					formdata
				);
				setSelectedConversation(res.data.question);
				console.log(res.data.question);

				setCreateMessage({ title: "", message: "" });
				fetchCourseDetail();
			} catch (error) {
				console.error("Error sending message:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to send message",
				});
			}
		},
		[
			course.course?.id,
			createMessage.message,
			selectedConversation?.qa_id,
			fetchCourseDetail,
		]
	);

	useEffect(() => {
		if (lastElementRef.current) {
			lastElementRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [selectedConversation]);

	const handleSearchQuestion = useCallback(
		(event) => {
			const query = event.target.value.toLowerCase();
			if (query === "") {
				fetchCourseDetail();
			} else {
				const filtered = questions?.filter((question) => {
					return question.title.toLowerCase().includes(query);
				});
				setQuestions(filtered);
			}
		},
		[questions, fetchCourseDetail]
	);

	const handleReviewChange = useCallback((event) => {
		const { name, value } = event.target;
		setCreateReview((prev) => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const handleCreateReviewSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			const formdata = new FormData();
			formdata.append("course_id", course.course?.id);
			formdata.append("user_id", UserData()?.user_id);
			formdata.append("rating", createReview.rating);
			formdata.append("review", createReview.review);

			try {
				await useAxios().post(`student/rate-course/`, formdata);
				await fetchCourseDetail();
				Toast().fire({
					icon: "success",
					title: "Review created",
				});
				setCreateReview({ rating: 1, review: "" });
			} catch (error) {
				console.error("Error creating review:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to create review",
				});
			}
		},
		[course.course?.id, createReview, fetchCourseDetail]
	);

	const handleUpdateReviewSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			const formdata = new FormData();
			formdata.append("course", course.course?.id);
			formdata.append("user", UserData()?.user_id);
			formdata.append("rating", createReview.rating || studentReview?.rating);
			formdata.append("review", createReview.review || studentReview?.review);

			try {
				await useAxios().patch(
					`student/review-detail/${UserData()?.user_id}/${studentReview?.id}/`,
					formdata
				);
				await fetchCourseDetail();
				Toast().fire({
					icon: "success",
					title: "Review updated",
				});
			} catch (error) {
				console.error("Error updating review:", error);
				Toast().fire({
					icon: "error",
					title: "Failed to update review",
				});
			}
		},
		[course.course?.id, createReview, studentReview, fetchCourseDetail]
	);

	const handleSetVariantItem = useCallback((item) => {
		setVariantItem(item);
		setCurrentlyPlayingLecture(item);
		setIsPlaying(true);
	}, []);

	const handlePlayPause = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	return (
		<div className="flex gap-4 flex-col xl:flex-row bg-gray-100">
			<VideoSection
				videoSource={variantItem?.url || course?.lectures?.[0]?.url}
				onPlayPause={handlePlayPause}
				isPlaying={isPlaying}
				title={variantItem?.title}
				description={variantItem?.description}
			/>

			<ContentSection
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				course={course}
				completionPercentage={completionPercentage}
				questions={questions}
				studentReview={studentReview}
				onSetVariantItem={handleSetVariantItem}
				onMarkLessonAsCompleted={handleMarkLessonAsCompleted}
				handleNoteChange={handleNoteChange}
				handleSubmitCreateNote={handleSubmitCreateNote}
				handleSubmitEditNote={handleSubmitEditNote}
				handleDeleteNote={handleDeleteNote}
				handleMessageChange={handleMessageChange}
				handleSaveQuestion={handleSaveQuestion}
				sendNewMessage={sendNewMessage}
				handleSearchQuestion={handleSearchQuestion}
				handleReviewChange={handleReviewChange}
				handleCreateReviewSubmit={handleCreateReviewSubmit}
				handleUpdateReviewSubmit={handleUpdateReviewSubmit}
				createNote={createNote}
				selectedNote={selectedNote}
				createMessage={createMessage}
				createReview={createReview}
				setShowNoteModal={setShowNoteModal}
				showNoteModal={showNoteModal}
				showQuestionModal={showQuestionModal}
				setShowQuestionModal={setShowQuestionModal}
				showConversationModal={showConversationModal}
				setShowConversationModal={setShowConversationModal}
				selectedConversation={selectedConversation}
				setSelectedConversation={setSelectedConversation}
				setSelectedNote={setSelectedNote}
				lastElementRef={lastElementRef}
				currentlyPlayingLecture={currentlyPlayingLecture}
				isPlaying={isPlaying}
				fetchCourseDetail={fetchCourseDetail}
			/>
		</div>
	);
};

export default CourseDetail;

////////////////////////////////////////////////////////////////
