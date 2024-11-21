import React from "react";

export default function Loader() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
			<div className="w-16 h-16 mb-4">
				<svg className="w-full h-full animate-spin" viewBox="0 0 24 24">
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
						fill="none"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</div>
			<h2 className="text-2xl font-bold text-gray-800 text-center">techgrad</h2>
			<p className="mt-2 text-sm text-gray-600 text-center">
				Loading your learning experience...
			</p>
		</div>
	);
}
