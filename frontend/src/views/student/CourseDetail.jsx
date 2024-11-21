// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import {
// 	Play,
// 	Pause,
// 	Lock,
// 	CheckCircle,
// 	ChevronDown,
// 	ChevronUp,
// 	Edit,
// 	Trash2,
// 	MessageSquare,
// 	X,
// } from "lucide-react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import useAxios from "../../utils/useAxios";
// import UserData from "../plugins/UserData";
// import VideoPlayer from "./Partials/VideoPlayer";

// export default function CourseDetail() {
// 	const [course, setCourse] = useState(null);
// 	const [currentVideo, setCurrentVideo] = useState(null);
// 	const [expandedSection, setExpandedSection] = useState(null);
// 	const [completedLectures, setCompletedLectures] = useState(new Set());
// 	const [activeTab, setActiveTab] = useState("lectures");
// 	const [notes, setNotes] = useState([]);
// 	const [discussions, setDiscussions] = useState([]);
// 	const [showNoteModal, setShowNoteModal] = useState(false);
// 	const [showEditNoteModal, setShowEditNoteModal] = useState(false);
// 	const [editingNote, setEditingNote] = useState(null);
// 	const [showAskQuestionModal, setShowAskQuestionModal] = useState(false);
// 	const [showJoinConversationModal, setShowJoinConversationModal] =
// 		useState(false);
// 	const [selectedDiscussion, setSelectedDiscussion] = useState(null);
// 	const [isLoading, setIsLoading] = useState(true);

// 	const param = useParams();

// 	const fetchCourseDetail = useCallback(async () => {
// 		setIsLoading(true);
// 		try {
// 			const res = await useAxios().get(
// 				`student/course-detail/${UserData()?.user_id}/${param.enrollment_id}/`
// 			);
// 			setCourse(res.data);
// 			setCurrentVideo(res.data?.curriculum[0]?.variant_items[0]);
// 		} catch (error) {
// 			console.error("Error fetching course details:", error);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	}, [param.enrollment_id]);

// 	useEffect(() => {
// 		fetchCourseDetail();
// 	}, [fetchCourseDetail]);

// 	const handleVideoChange = useCallback((video) => {
// 		setCurrentVideo(video);
// 	}, []);

// 	const handleToggleCompleted = useCallback((lectureId) => {
// 		setCompletedLectures((prev) => {
// 			const newSet = new Set(prev);
// 			if (newSet.has(lectureId)) {
// 				newSet.delete(lectureId);
// 			} else {
// 				newSet.add(lectureId);
// 			}
// 			return newSet;
// 		});
// 	}, []);

// 	const calculateProgress = useCallback(() => {
// 		if (!course) return 0;
// 		const totalLectures = course.curriculum.reduce(
// 			(acc, section) => acc + section.variant_items.length,
// 			0
// 		);
// 		return (completedLectures.size / totalLectures) * 100;
// 	}, [course, completedLectures]);

// 	const handleAddNote = (event) => {
// 		event.preventDefault();
// 		const title = event.target.title.value;
// 		const content = event.target.content.value;
// 		const newNote = { id: notes.length + 1, title, content };
// 		setNotes([...notes, newNote]);
// 		setShowNoteModal(false);
// 	};

// 	const handleEditNote = (note) => {
// 		setEditingNote(note);
// 		setShowEditNoteModal(true);
// 	};

// 	const handleUpdateNote = (event) => {
// 		event.preventDefault();
// 		const updatedTitle = event.target.title.value;
// 		const updatedContent = event.target.content.value;
// 		const updatedNotes = notes.map((note) =>
// 			note.id === editingNote.id
// 				? { ...note, title: updatedTitle, content: updatedContent }
// 				: note
// 		);
// 		setNotes(updatedNotes);
// 		setShowEditNoteModal(false);
// 		setEditingNote(null);
// 	};

// 	const handleDeleteNote = (id) => {
// 		const updatedNotes = notes.filter((note) => note.id !== id);
// 		setNotes(updatedNotes);
// 	};

// 	const handleAskQuestion = (event) => {
// 		event.preventDefault();
// 		const question = event.target.question.value;
// 		const newDiscussion = {
// 			id: discussions.length + 1,
// 			user: "Current User",
// 			avatar: "/placeholder.svg?height=40&width=40",
// 			question,
// 			time: "Just now",
// 			replies: [],
// 		};
// 		setDiscussions([...discussions, newDiscussion]);
// 		setShowAskQuestionModal(false);
// 	};

// 	const handleJoinConversation = (discussion) => {
// 		setSelectedDiscussion(discussion);
// 		setShowJoinConversationModal(true);
// 	};

// 	const handleReply = (event) => {
// 		event.preventDefault();
// 		const replyContent = event.target.reply.value;
// 		const updatedDiscussions = discussions.map((disc) => {
// 			if (disc.id === selectedDiscussion.id) {
// 				return {
// 					...disc,
// 					replies: [
// 						...disc.replies,
// 						{
// 							id: disc.replies.length + 1,
// 							user: "Current User",
// 							avatar: "/placeholder.svg?height=40&width=40",
// 							content: replyContent,
// 							time: "Just now",
// 						},
// 					],
// 				};
// 			}
// 			return disc;
// 		});
// 		setDiscussions(updatedDiscussions);
// 		setShowJoinConversationModal(false);
// 	};

// 	const Modal = ({ isOpen, onClose, title, children }) => {
// 		if (!isOpen) return null;
// 		return (
// 			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// 				<div className="bg-white rounded-lg w-full max-w-md">
// 					<div className="flex justify-between items-center p-4 border-b">
// 						<h3 className="text-lg font-semibold">{title}</h3>
// 						<button
// 							onClick={onClose}
// 							className="text-gray-500 hover:text-gray-700"
// 						>
// 							<X size={24} />
// 						</button>
// 					</div>
// 					<div className="p-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
// 						{children}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	};

// 	const memoizedVideoPlayer = useMemo(
// 		() => (
// 			<div className="aspect-video">
// 				{isLoading ? (
// 					<Skeleton height="100%" baseColor="#acaaf9" />
// 				) : (
// 					<VideoPlayer videoUrl={currentVideo?.url || ""} />
// 				)}
// 			</div>
// 		),
// 		[currentVideo?.url, isLoading]
// 	);

// 	return (
// 		<div className="container mx-auto flex flex-col lg:flex-row gap-4">
// 			<div className="lg:w-2/3">
// 				{memoizedVideoPlayer}
// 				{isLoading ? (
// 					<>
// 						<Skeleton width={300} height={24} className="mt-3 mb-2" />
// 						<Skeleton count={3} />
// 					</>
// 				) : (
// 					<>
// 						<h1 className="text-3xl mt-3 font-bold mb-2">
// 							{currentVideo?.title || course?.course?.title}
// 						</h1>
// 						<p className="text-gray-600 text-sm">
// 							{currentVideo?.description || course?.course?.description}
// 						</p>
// 					</>
// 				)}
// 			</div>
// 			<div className="lg:w-1/3 bg-white shadow-md overflow-hidden">
// 				<div className="border-b">
// 					<nav className="flex">
// 						{["lectures", "notes", "discussion", "review"].map((tab) => (
// 							<button
// 								key={tab}
// 								className={`px-4 py-4 text-sm font-medium ${
// 									activeTab === tab
// 										? "text-blue-600 border-b-2 border-blue-600"
// 										: "text-gray-500 hover:text-gray-700"
// 								}`}
// 								onClick={() => setActiveTab(tab)}
// 							>
// 								{tab.charAt(0).toUpperCase() + tab.slice(1)}
// 							</button>
// 						))}
// 					</nav>
// 				</div>

// 				<div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
// 					{isLoading ? (
// 						<Skeleton count={8} />
// 					) : (
// 						<>
// 							{activeTab === "lectures" && (
// 								<div>
// 									<h2 className="text-xl font-semibold mb-4">Course Content</h2>
// 									<div className="mb-4">
// 										<div className="w-full bg-gray-200 rounded-full h-2.5">
// 											<div
// 												className="bg-blue-600 h-2.5 rounded-full"
// 												style={{ width: `${calculateProgress()}%` }}
// 											></div>
// 										</div>
// 										<p className="text-sm text-gray-600 mt-1">
// 											{completedLectures.size} /{" "}
// 											{course?.curriculum.reduce(
// 												(acc, section) => acc + section.variant_items.length,
// 												0
// 											)}{" "}
// 											completed
// 										</p>
// 									</div>
// 									{course?.curriculum?.map((section, index) => (
// 										<div key={index} className="mb-4">
// 											<button
// 												className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-lg"
// 												onClick={() =>
// 													setExpandedSection(
// 														expandedSection === section.variant_id
// 															? null
// 															: section.variant_id
// 													)
// 												}
// 											>
// 												<span className="font-semibold">{section.title}</span>
// 												{expandedSection === section.variant_id ? (
// 													<ChevronUp size={20} />
// 												) : (
// 													<ChevronDown size={20} />
// 												)}
// 											</button>
// 											{expandedSection === section.variant_id && (
// 												<div className="mt-2 space-y-2">
// 													{section.variant_items?.map(
// 														(lecture, lectureIndex) => (
// 															<div
// 																key={lectureIndex}
// 																className="flex items-center justify-between p-2 bg-white rounded-lg"
// 															>
// 																<div className="flex items-center">
// 																	{!lecture.preview ? (
// 																		<Lock
// 																			className="text-gray-400 mr-2"
// 																			size={20}
// 																		/>
// 																	) : (
// 																		<button
// 																			onClick={() => handleVideoChange(lecture)}
// 																			className="text-blue-600 mr-2"
// 																		>
// 																			{currentVideo?.id === lecture.id ? (
// 																				<Pause size={20} />
// 																			) : (
// 																				<Play size={20} />
// 																			)}
// 																		</button>
// 																	)}
// 																	<span
// 																		className={
// 																			!lecture.preview ? "text-gray-400" : ""
// 																		}
// 																	>
// 																		{lecture?.title}
// 																	</span>
// 																</div>
// 																<div className="flex items-center">
// 																	<span className="text-sm text-gray-500 mr-2">
// 																		{lecture.duration}
// 																	</span>
// 																	<button
// 																		disabled={!lecture.preview}
// 																		onClick={() =>
// 																			handleToggleCompleted(lecture.id)
// 																		}
// 																		className={`w-6 h-6 rounded-full border ${
// 																			completedLectures.has(lecture.id)
// 																				? "bg-green-500 border-green-500"
// 																				: "border-gray-300"
// 																		} flex items-center justify-center`}
// 																	>
// 																		{completedLectures.has(lecture.id) && (
// 																			<CheckCircle
// 																				className="text-white"
// 																				size={16}
// 																			/>
// 																		)}
// 																	</button>
// 																</div>
// 															</div>
// 														)
// 													)}
// 												</div>
// 											)}
// 										</div>
// 									))}
// 								</div>
// 							)}
// 							{activeTab === "notes" && (
// 								<div>
// 									<div className="flex justify-between items-center mb-4">
// 										<h2 className="text-xl font-semibold">
// 											Notes for: {currentVideo?.title}
// 										</h2>
// 										<button
// 											onClick={() => setShowNoteModal(true)}
// 											className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
// 										>
// 											Add Note <Edit className="inline-block ml-1" size={16} />
// 										</button>
// 									</div>
// 									{notes.map((note) => (
// 										<div
// 											key={note.id}
// 											className="bg-white p-4 rounded-lg shadow mb-4"
// 										>
// 											<h3 className="font-semibold mb-2">{note.title}</h3>
// 											<p className="text-gray-600 mb-4">{note.content}</p>
// 											<div className="flex space-x-2">
// 												<button
// 													onClick={() => handleEditNote(note)}
// 													className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
// 												>
// 													<Edit className="inline-block mr-1" size={16} /> Edit
// 												</button>
// 												<button
// 													onClick={() => handleDeleteNote(note.id)}
// 													className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
// 												>
// 													<Trash2 className="inline-block mr-1" size={16} />{" "}
// 													Delete
// 												</button>
// 											</div>
// 										</div>
// 									))}
// 								</div>
// 							)}
// 							{activeTab === "discussion" && (
// 								<div>
// 									<div className="mb-4">
// 										<input
// 											type="text"
// 											placeholder="Search discussions..."
// 											className="w-full p-2 border rounded-md"
// 										/>
// 									</div>
// 									<button
// 										onClick={() => setShowAskQuestionModal(true)}
// 										className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
// 									>
// 										Ask Question
// 									</button>
// 									{discussions.map((discussion) => (
// 										<div
// 											key={discussion.id}
// 											className="bg-white p-4 rounded-lg shadow mb-4"
// 										>
// 											<div className="flex items-center mb-2">
// 												<img
// 													src={discussion.avatar}
// 													alt={`${discussion.user} Avatar`}
// 													className="w-10 h-10 rounded-full mr-2"
// 												/>
// 												<div>
// 													<h3 className="font-semibold">{discussion.user}</h3>
// 													<p className="text-sm text-gray-500">
// 														Asked {discussion.time}
// 													</p>
// 												</div>
// 											</div>
// 											<h4 className="font-semibold mb-2">
// 												{discussion.question}
// 											</h4>
// 											<button
// 												onClick={() => handleJoinConversation(discussion)}
// 												className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
// 											>
// 												Join Conversation{" "}
// 												<MessageSquare
// 													className="inline-block ml-1"
// 													size={16}
// 												/>
// 											</button>
// 										</div>
// 									))}
// 								</div>
// 							)}
// 							{activeTab === "review" && (
// 								<div>
// 									<h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
// 									<form>
// 										<div className="mb-4">
// 											<label className="block text-sm font-medium mb-1">
// 												Rating
// 											</label>
// 											<select className="w-full p-2 border rounded-md">
// 												<option value="5">★★★★★ (5/5)</option>
// 												<option value="4">★★★★☆ (4/5)</option>
// 												<option value="3">★★★☆☆ (3/5)</option>
// 												<option value="2">★★☆☆☆ (2/5)</option>
// 												<option value="1">★☆☆☆☆ (1/5)</option>
// 											</select>
// 										</div>
// 										<div className="mb-4">
// 											<label className="block text-sm font-medium mb-1">
// 												Your review
// 											</label>
// 											<textarea
// 												className="w-full p-2 border rounded-md"
// 												rows={4}
// 												placeholder="Write your review here..."
// 											></textarea>
// 										</div>
// 										<button
// 											type="submit"
// 											className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
// 										>
// 											Post Review
// 										</button>
// 									</form>
// 								</div>
// 							)}
// 						</>
// 					)}
// 				</div>
// 			</div>

// 			<Modal
// 				isOpen={showNoteModal}
// 				onClose={() => setShowNoteModal(false)}
// 				title="Add New Note"
// 			>
// 				<form onSubmit={handleAddNote}>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="title"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Note Title
// 						</label>
// 						<input
// 							type="text"
// 							id="title"
// 							name="title"
// 							required
// 							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="content"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Note Content
// 						</label>
// 						<textarea
// 							id="content"
// 							name="content"
// 							rows="3"
// 							required
// 							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// 						></textarea>
// 					</div>
// 					<div className="flex justify-end">
// 						<button
// 							type="button"
// 							onClick={() => setShowNoteModal(false)}
// 							className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
// 						>
// 							Cancel
// 						</button>
// 						<button
// 							type="submit"
// 							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// 						>
// 							Save Note
// 						</button>
// 					</div>
// 				</form>
// 			</Modal>

// 			<Modal
// 				isOpen={showEditNoteModal}
// 				onClose={() => setShowEditNoteModal(false)}
// 				title="Edit Note"
// 			>
// 				<form onSubmit={handleUpdateNote}>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="title"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Note Title
// 						</label>
// 						<input
// 							type="text"
// 							id="title"
// 							name="title"
// 							required
// 							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// 							defaultValue={editingNote?.title}
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="content"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Note Content
// 						</label>
// 						<textarea
// 							id="content"
// 							name="content"
// 							rows="3"
// 							required
// 							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// 							defaultValue={editingNote?.content}
// 						></textarea>
// 					</div>
// 					<div className="flex justify-end">
// 						<button
// 							type="button"
// 							onClick={() => setShowEditNoteModal(false)}
// 							className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
// 						>
// 							Cancel
// 						</button>
// 						<button
// 							type="submit"
// 							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// 						>
// 							Save Changes
// 						</button>
// 					</div>
// 				</form>
// 			</Modal>

// 			<Modal
// 				isOpen={showAskQuestionModal}
// 				onClose={() => setShowAskQuestionModal(false)}
// 				title="Ask New Question"
// 			>
// 				<form onSubmit={handleAskQuestion}>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="question"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							What's your question?
// 						</label>
// 						<textarea
// 							id="question"
// 							name="question"
// 							rows="3"
// 							required
// 							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// 						></textarea>
// 					</div>
// 					<div className="flex justify-end">
// 						<button
// 							type="button"
// 							onClick={() => setShowAskQuestionModal(false)}
// 							className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
// 						>
// 							Close
// 						</button>
// 						<button
// 							type="submit"
// 							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// 						>
// 							Post Question
// 						</button>
// 					</div>
// 				</form>
// 			</Modal>

// 			<Modal
// 				isOpen={showJoinConversationModal}
// 				onClose={() => setShowJoinConversationModal(false)}
// 				title="Join Conversation"
// 			>
// 				<div className="mb-4 max-h-60 overflow-y-auto custom-scrollbar">
// 					<div className="flex mb-4">
// 						<img
// 							src={selectedDiscussion?.avatar}
// 							alt="User Avatar"
// 							className="w-10 h-10 rounded-full mr-2"
// 						/>
// 						<div>
// 							<h6 className="font-semibold">{selectedDiscussion?.user}</h6>
// 							<p className="text-sm text-gray-500">
// 								{selectedDiscussion?.time}
// 							</p>
// 							<p className="mt-1">{selectedDiscussion?.question}</p>
// 						</div>
// 					</div>
// 					{selectedDiscussion?.replies.map((reply) => (
// 						<div key={reply.id} className="flex mb-4 ml-8">
// 							<img
// 								src={reply.avatar}
// 								alt="User Avatar"
// 								className="w-8 h-8 rounded-full mr-2"
// 							/>
// 							<div>
// 								<h6 className="font-semibold">{reply.user}</h6>
// 								<p className="text-sm text-gray-500">{reply.time}</p>
// 								<p className="mt-1">{reply.content}</p>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 				<form onSubmit={handleReply}>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="reply"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Your reply
// 						</label>
// 						<textarea
// 							id="reply"
// 							name="reply"
// 							rows="3"
// 							required
// 							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// 							placeholder="What's your reply?"
// 						></textarea>
// 					</div>
// 					<div className="flex justify-end">
// 						<button
// 							type="submit"
// 							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// 						>
// 							Post Reply
// 						</button>
// 					</div>
// 				</form>
// 			</Modal>
// 		</div>
// 	);
// }

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
	Play,
	Pause,
	Lock,
	CheckCircle,
	ChevronDown,
	ChevronUp,
	Edit,
	Trash2,
	MessageSquare,
	X,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAxios from "../../utils/useAxios";
import UserData from "../plugins/UserData";
import VideoPlayer from "./Partials/VideoPlayer";

export default function CourseDetail() {
	const [course, setCourse] = useState(null);
	const [currentVideo, setCurrentVideo] = useState(null);
	const [expandedSection, setExpandedSection] = useState(null);
	const [completedLectures, setCompletedLectures] = useState(new Set());
	const [activeTab, setActiveTab] = useState("lectures");
	const [notes, setNotes] = useState([]);
	const [discussions, setDiscussions] = useState([]);
	const [showNoteModal, setShowNoteModal] = useState(false);
	const [showEditNoteModal, setShowEditNoteModal] = useState(false);
	const [editingNote, setEditingNote] = useState(null);
	const [showAskQuestionModal, setShowAskQuestionModal] = useState(false);
	const [showJoinConversationModal, setShowJoinConversationModal] =
		useState(false);
	const [selectedDiscussion, setSelectedDiscussion] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [key, setKey] = useState(0);

	const param = useParams();

	const fetchCourseDetail = useCallback(async () => {
		setIsLoading(true);
		try {
			const res = await useAxios().get(
				`student/course-detail/${UserData()?.user_id}/${param.enrollment_id}/`
			);
			setCourse(res.data);
			setCurrentVideo(res.data?.curriculum[0]?.variant_items[0]);
		} catch (error) {
			console.error("Error fetching course details:", error);
		} finally {
			setIsLoading(false);
		}
	}, [param.enrollment_id]);

	useEffect(() => {
		fetchCourseDetail();
	}, [fetchCourseDetail]);

	const handleVideoChange = useCallback((video) => {
		setCurrentVideo(video);
		setKey((prevKey) => prevKey + 1);
	}, []);

	const handleToggleCompleted = useCallback((lectureId) => {
		setCompletedLectures((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(lectureId)) {
				newSet.delete(lectureId);
			} else {
				newSet.add(lectureId);
			}
			return newSet;
		});
	}, []);

	const calculateProgress = useCallback(() => {
		if (!course) return 0;
		const totalLectures = course.curriculum.reduce(
			(acc, section) => acc + section.variant_items.length,
			0
		);
		return (completedLectures.size / totalLectures) * 100;
	}, [course, completedLectures]);

	const handleAddNote = (event) => {
		event.preventDefault();
		const title = event.target.title.value;
		const content = event.target.content.value;
		const newNote = { id: notes.length + 1, title, content };
		setNotes([...notes, newNote]);
		setShowNoteModal(false);
	};

	const handleEditNote = (note) => {
		setEditingNote(note);
		setShowEditNoteModal(true);
	};

	const handleUpdateNote = (event) => {
		event.preventDefault();
		const updatedTitle = event.target.title.value;
		const updatedContent = event.target.content.value;
		const updatedNotes = notes.map((note) =>
			note.id === editingNote.id
				? { ...note, title: updatedTitle, content: updatedContent }
				: note
		);
		setNotes(updatedNotes);
		setShowEditNoteModal(false);
		setEditingNote(null);
	};

	const handleDeleteNote = (id) => {
		const updatedNotes = notes.filter((note) => note.id !== id);
		setNotes(updatedNotes);
	};

	const handleAskQuestion = (event) => {
		event.preventDefault();
		const question = event.target.question.value;
		const newDiscussion = {
			id: discussions.length + 1,
			user: "Current User",
			avatar: "/placeholder.svg?height=40&width=40",
			question,
			time: "Just now",
			replies: [],
		};
		setDiscussions([...discussions, newDiscussion]);
		setShowAskQuestionModal(false);
	};

	const handleJoinConversation = (discussion) => {
		setSelectedDiscussion(discussion);
		setShowJoinConversationModal(true);
	};

	const handleReply = (event) => {
		event.preventDefault();
		const replyContent = event.target.reply.value;
		const updatedDiscussions = discussions.map((disc) => {
			if (disc.id === selectedDiscussion.id) {
				return {
					...disc,
					replies: [
						...disc.replies,
						{
							id: disc.replies.length + 1,
							user: "Current User",
							avatar: "/placeholder.svg?height=40&width=40",
							content: replyContent,
							time: "Just now",
						},
					],
				};
			}
			return disc;
		});
		setDiscussions(updatedDiscussions);
		setShowJoinConversationModal(false);
	};

	const Modal = ({ isOpen, onClose, title, children }) => {
		if (!isOpen) return null;
		return (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
				<div className="bg-white rounded-lg w-full max-w-md">
					<div className="flex justify-between items-center p-4 border-b">
						<h3 className="text-lg font-semibold">{title}</h3>
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700"
						>
							<X size={24} />
						</button>
					</div>
					<div className="p-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
						{children}
					</div>
				</div>
			</div>
		);
	};

	const memoizedVideoPlayer = useMemo(
		() => (
			<div className="aspect-video">
				{isLoading ? (
					<Skeleton height="100%" />
				) : (
					<VideoPlayer
						key={currentVideo?.id}
						videoUrl={currentVideo?.url || ""}
					/>
				)}
			</div>
		),
		[currentVideo?.id, currentVideo?.url, isLoading]
	);

	return (
		<div className="container mx-auto flex flex-col lg:flex-row gap-4">
			<div className="lg:w-2/3">
				{memoizedVideoPlayer}
				{isLoading ? (
					<>
						<Skeleton width={300} height={24} className="mt-3 mb-2" />
						<Skeleton count={3} />
					</>
				) : (
					<>
						<h1 className="text-3xl mt-3 font-bold mb-2">
							{currentVideo?.title || course?.course?.title}
						</h1>
						<p className="text-gray-600 text-sm">
							{currentVideo?.description || course?.course?.description}
						</p>
					</>
				)}
			</div>
			<div className="lg:w-1/3 bg-white shadow-md rounded-sm overflow-hidden">
				<div className="border-b">
					<nav className="flex">
						{["lectures", "notes", "discussion", "review"].map((tab) => (
							<button
								key={tab}
								className={`px-4 py-4 text-sm font-medium ${
									activeTab === tab
										? "text-blue-600 border-b-2 border-blue-600"
										: "text-gray-500 hover:text-gray-700"
								}`}
								onClick={() => setActiveTab(tab)}
							>
								{tab.charAt(0).toUpperCase() + tab.slice(1)}
							</button>
						))}
					</nav>
				</div>

				<div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
					{isLoading ? (
						<Skeleton count={10} />
					) : (
						<>
							{activeTab === "lectures" && (
								<div>
									<h2 className="text-xl font-semibold mb-4">Course Content</h2>
									<div className="mb-4">
										<div className="w-full bg-gray-200 rounded-full h-2.5">
											<div
												className="bg-blue-600 h-2.5 rounded-full"
												style={{ width: `${calculateProgress()}%` }}
											></div>
										</div>
										<p className="text-sm text-gray-600 mt-1">
											{completedLectures.size} /{" "}
											{course?.curriculum.reduce(
												(acc, section) => acc + section.variant_items.length,
												0
											)}{" "}
											completed
										</p>
									</div>
									{course?.curriculum?.map((section, index) => (
										<div key={index} className="mb-4">
											<button
												className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-lg"
												onClick={() =>
													setExpandedSection(
														expandedSection === section.variant_id
															? null
															: section.variant_id
													)
												}
											>
												<span className="font-semibold">{section.title}</span>
												{expandedSection === section.variant_id ? (
													<ChevronUp size={20} />
												) : (
													<ChevronDown size={20} />
												)}
											</button>
											{expandedSection === section.variant_id && (
												<div className="mt-2 space-y-2">
													{section.variant_items?.map(
														(lecture, lectureIndex) => (
															<div
																key={lectureIndex}
																className="flex items-center justify-between p-2 bg-white rounded-lg"
															>
																<div className="flex items-center">
																	{!lecture.preview ? (
																		<Lock
																			className="text-gray-400 mr-2"
																			size={20}
																		/>
																	) : (
																		<button
																			onClick={() => handleVideoChange(lecture)}
																			className="text-blue-600 mr-2"
																		>
																			{currentVideo?.id === lecture.id ? (
																				<Pause size={20} />
																			) : (
																				<Play size={20} />
																			)}
																		</button>
																	)}
																	<span
																		className={
																			!lecture.preview ? "text-gray-400" : ""
																		}
																	>
																		{lecture?.title}
																	</span>
																</div>
																<div className="flex items-center">
																	<span className="text-sm text-gray-500 mr-2">
																		{lecture.duration}
																	</span>
																	<button
																		disabled={!lecture.preview}
																		onClick={() =>
																			handleToggleCompleted(lecture.id)
																		}
																		className={`w-6 h-6 rounded-full border ${
																			completedLectures.has(lecture.id)
																				? "bg-green-500 border-green-500"
																				: "border-gray-300"
																		} flex items-center justify-center`}
																	>
																		{completedLectures.has(lecture.id) && (
																			<CheckCircle
																				className="text-white"
																				size={16}
																			/>
																		)}
																	</button>
																</div>
															</div>
														)
													)}
												</div>
											)}
										</div>
									))}
								</div>
							)}
							{activeTab === "notes" && (
								<div>
									<div className="flex justify-between items-center mb-4">
										<h2 className="text-xl font-semibold">
											Notes for: {currentVideo?.title}
										</h2>
										<button
											onClick={() => setShowNoteModal(true)}
											className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
										>
											Add Note <Edit className="inline-block ml-1" size={16} />
										</button>
									</div>
									{notes.map((note) => (
										<div
											key={note.id}
											className="bg-white p-4 rounded-lg shadow mb-4"
										>
											<h3 className="font-semibold mb-2">{note.title}</h3>
											<p className="text-gray-600 mb-4">{note.content}</p>
											<div className="flex space-x-2">
												<button
													onClick={() => handleEditNote(note)}
													className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
												>
													<Edit className="inline-block mr-1" size={16} /> Edit
												</button>
												<button
													onClick={() => handleDeleteNote(note.id)}
													className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
												>
													<Trash2 className="inline-block mr-1" size={16} />{" "}
													Delete
												</button>
											</div>
										</div>
									))}
								</div>
							)}
							{activeTab === "discussion" && (
								<div>
									<div className="mb-4">
										<input
											type="text"
											placeholder="Search discussions..."
											className="w-full p-2 border rounded-md"
										/>
									</div>
									<button
										onClick={() => setShowAskQuestionModal(true)}
										className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
									>
										Ask Question
									</button>
									{discussions.map((discussion) => (
										<div
											key={discussion.id}
											className="bg-white p-4 rounded-lg shadow mb-4"
										>
											<div className="flex items-center mb-2">
												<img
													src={discussion.avatar}
													alt={`${discussion.user} Avatar`}
													className="w-10 h-10 rounded-full mr-2"
												/>
												<div>
													<h3 className="font-semibold">{discussion.user}</h3>
													<p className="text-sm text-gray-500">
														Asked {discussion.time}
													</p>
												</div>
											</div>
											<h4 className="font-semibold mb-2">
												{discussion.question}
											</h4>
											<button
												onClick={() => handleJoinConversation(discussion)}
												className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
											>
												Join Conversation{" "}
												<MessageSquare
													className="inline-block ml-1"
													size={16}
												/>
											</button>
										</div>
									))}
								</div>
							)}
							{activeTab === "review" && (
								<div>
									<h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
									<form>
										<div className="mb-4">
											<label className="block text-sm font-medium mb-1">
												Rating
											</label>
											<select className="w-full p-2 border rounded-md">
												<option value="5">★★★★★ (5/5)</option>
												<option value="4">★★★★☆ (4/5)</option>
												<option value="3">★★★☆☆ (3/5)</option>
												<option value="2">★★☆☆☆ (2/5)</option>
												<option value="1">★☆☆☆☆ (1/5)</option>
											</select>
										</div>
										<div className="mb-4">
											<label className="block text-sm font-medium mb-1">
												Your review
											</label>
											<textarea
												className="w-full p-2 border rounded-md"
												rows={4}
												placeholder="Write your review here..."
											></textarea>
										</div>
										<button
											type="submit"
											className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
										>
											Post Review
										</button>
									</form>
								</div>
							)}
						</>
					)}
				</div>
			</div>

			<Modal
				isOpen={showNoteModal}
				onClose={() => setShowNoteModal(false)}
				title="Add New Note"
			>
				<form onSubmit={handleAddNote}>
					<div className="mb-4">
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700"
						>
							Note Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="content"
							className="block text-sm font-medium text-gray-700"
						>
							Note Content
						</label>
						<textarea
							id="content"
							name="content"
							rows="3"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						></textarea>
					</div>
					<div className="flex justify-end">
						<button
							type="button"
							onClick={() => setShowNoteModal(false)}
							className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Save Note
						</button>
					</div>
				</form>
			</Modal>

			<Modal
				isOpen={showEditNoteModal}
				onClose={() => setShowEditNoteModal(false)}
				title="Edit Note"
			>
				<form onSubmit={handleUpdateNote}>
					<div className="mb-4">
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700"
						>
							Note Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
							defaultValue={editingNote?.title}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="content"
							className="block text-sm font-medium text-gray-700"
						>
							Note Content
						</label>
						<textarea
							id="content"
							name="content"
							rows="3"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
							defaultValue={editingNote?.content}
						></textarea>
					</div>
					<div className="flex justify-end">
						<button
							type="button"
							onClick={() => setShowEditNoteModal(false)}
							className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Save Changes
						</button>
					</div>
				</form>
			</Modal>

			<Modal
				isOpen={showAskQuestionModal}
				onClose={() => setShowAskQuestionModal(false)}
				title="Ask New Question"
			>
				<form onSubmit={handleAskQuestion}>
					<div className="mb-4">
						<label
							htmlFor="question"
							className="block text-sm font-medium text-gray-700"
						>
							What's your question?
						</label>
						<textarea
							id="question"
							name="question"
							rows="3"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						></textarea>
					</div>
					<div className="flex justify-end">
						<button
							type="button"
							onClick={() => setShowAskQuestionModal(false)}
							className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
						>
							Close
						</button>
						<button
							type="submit"
							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Post Question
						</button>
					</div>
				</form>
			</Modal>

			<Modal
				isOpen={showJoinConversationModal}
				onClose={() => setShowJoinConversationModal(false)}
				title="Join Conversation"
			>
				<div className="mb-4 max-h-60 overflow-y-auto custom-scrollbar">
					<div className="flex mb-4">
						<img
							src={selectedDiscussion?.avatar}
							alt="User Avatar"
							className="w-10 h-10 rounded-full mr-2"
						/>
						<div>
							<h6 className="font-semibold">{selectedDiscussion?.user}</h6>
							<p className="text-sm text-gray-500">
								{selectedDiscussion?.time}
							</p>
							<p className="mt-1">{selectedDiscussion?.question}</p>
						</div>
					</div>
					{selectedDiscussion?.replies.map((reply) => (
						<div key={reply.id} className="flex mb-4 ml-8">
							<img
								src={reply.avatar}
								alt="User Avatar"
								className="w-8 h-8 rounded-full mr-2"
							/>
							<div>
								<h6 className="font-semibold">{reply.user}</h6>
								<p className="text-sm text-gray-500">{reply.time}</p>
								<p className="mt-1">{reply.content}</p>
							</div>
						</div>
					))}
				</div>
				<form onSubmit={handleReply}>
					<div className="mb-4">
						<label
							htmlFor="reply"
							className="block text-sm font-medium text-gray-700"
						>
							Your reply
						</label>
						<textarea
							id="reply"
							name="reply"
							rows="3"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
							placeholder="What's your reply?"
						></textarea>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Post Reply
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}
