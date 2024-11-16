import { useState, useEffect } from "react";

function GetCurrentAddress() {
	const [address, setAddress] = useState("");

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			const { latitude, longitude } = pos.coords;
			// Here we pass the latitude and longitude to this url
			const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
			// Based on the latitude and longitude the url returnes country
			fetch(url)
				.then((response) => response.json())
				.then((data) => setAddress(data.address));
		});
	}, []);

	return address;
}

export default GetCurrentAddress;
