// Importing necessary dependencies
import axios from "axios"; // Library for making HTTP requests
import { getRefreshedToken, isAccessTokenExpired, setAuthUser } from "./auth"; // Functions for token handling
import { API_BASE_URL } from "./constants"; // Base API URL constant
import Cookies from "js-cookie"; // Library for handling cookies

// Custom hook to create and configure an Axios instance for API requests
const useAxios = () => {
	// Retrieving access and refresh tokens from cookies
	const accessToken = Cookies.get("access_token");
	const refreshToken = Cookies.get("refresh_token");

	// Creating a new Axios instance with custom configuration
	const axiosInstance = axios.create({
		baseURL: API_BASE_URL, // Setting base URL for all requests
		headers: { Authorization: `Bearer ${accessToken}` }, // Initial Authorization header
	});

	// Adding a request interceptor to check token expiry and refresh if necessary
	axiosInstance.interceptors.request.use(async (req) => {
		// If the access token is not expired, proceed with the request
		if (!isAccessTokenExpired) {
			return req;
		}

		// If expired, call getRefreshedToken() with the refresh token to get a new access token
		const response = await getRefreshedToken(refreshToken);
		// Set the new access and refresh tokens in cookies or local storage
		setAuthUser(response.access, response.refresh);
		// Update the Authorization header with the new access token
		req.headers.Authorization = `Bearer ${response.data?.access}`;
		return req; // Return the modified request
	});

	// Return the configured Axios instance for use in API calls
	return axiosInstance;
};

export default useAxios; // Export the custom hook for use in components

// Summary of Key Functions and Usage:

// axios.create: Creates a new Axios instance with specific configurations.
// interceptors.request.use: Checks the request before it's sent. Here, it ensures the access token is valid and refreshes it if necessary.
// Authorization Header: Authenticates the request with a bearer token (Authorization: Bearer <token>).
// Cookies: Stores tokens to retain user sessions across page reloads.

// breakdown of the main components in the code:

// axios:  A popular JavaScript library for making HTTP requests to APIs.
//         It simplifies tasks such as setting headers, handling responses, and more.
// axiosInstance:  A customized Axios instance created to handle requests specifically for this project.
//                 This instance is configured to add the baseURL and Authorization headers to each request.
//                 It allows consistent settings across all requests, especially for authenticated requests.
// Interceptors:      Axios interceptors allow you to intercept requests or responses before they are handled.
//                    In this code, axiosInstance.interceptors.request.use is a request interceptor that checks if the access token is expired before making each request.
//                    If it is, the interceptor automatically tries to refresh it by calling getRefreshedToken.
