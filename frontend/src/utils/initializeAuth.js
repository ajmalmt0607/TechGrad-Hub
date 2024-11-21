import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";
import { userAuthStore } from "../store/auth";

export const initializeAuth = () => {
	const access_token = Cookie.get("access_token");

	if (access_token) {
		try {
			const user = jwt_decode(access_token);
			userAuthStore.getState().setUser(user);
		} catch (err) {
			console.error("Failed to decode token:", err);
		}
	}
};
