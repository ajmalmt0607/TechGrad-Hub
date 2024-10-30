import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";

const MainWrapper = ({ children }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handler = async () => {
			setLoading(true);

			await setUser();

			setLoading(false);
		};

		handler();
	}, []);

	return <>{loading ? null : children}</>;
	// this code is for, we wrap our entire code in this warapper so if loading is true it return null, otherwise return the childern itself
};

export default MainWrapper;
