/** @type {import('tailwindcss').Config} */

export default {
	darkMode: "class", // Enable dark mode using class strategy
	content: ["./index.html", "./src/**/*.{html,js,jsx,tsx,ts}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			animation: {
				"fade-in-up": "fadeInUp 0.5s ease-out",
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [],
};
