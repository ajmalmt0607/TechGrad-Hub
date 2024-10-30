// Global state management solution using the Zustand library in React
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

//////////////////////
// Store Creation: //
/////////////////////

// Create a Zustand store for managing user authentication state
const userAuthStore = create((set, get) => ({
	//////////////////////
	// State Variables: //
	/////////////////////

	// Store all user data (e.g., user ID, username, etc.)
	allUserData: null,
	// A boolean indicating if something is loading (e.g., login request)
	loading: false,

	//////////////////////
	// State Methods: //
	/////////////////////

	// Function to retrieve specific user information
	user: () => ({
		user_id: get().allUserData ? user_id || null : null, // Get user ID if logged in
		user_name: get().allUserData ? username || null : null, // Get username if logged in
	}),

	// Function to set (update) user data when user logs in
	setUser: (user) =>
		set({
			allUserData: user,
		}),

	// Function to update the loading state (true/false)
	setLoading: (loading) => set({ loading }),

	// Function to check if user data exists (to know if the user is logged in)
	isLoading: () => get().allUserData !== null,
}));

// Enable Zustand devtools for debugging in development environment
if (import.meta.env.DEV) {
	mountStoreDevtool("store", userAuthStore);
}

export { userAuthStore };
