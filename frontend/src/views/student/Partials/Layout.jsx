import { Outlet } from "react-router-dom";
import BaseHeader from "./BaseHeader";
import { Sidebar } from "./Sidebar";

export default function Layout() {
	return (
		<div className="min-h-screen bg-gray-100">
			<BaseHeader />
			<div className="flex pt-16">
				<Sidebar />
				<main
					className="flex-1 p-8 ml-64 overflow-auto scrollbar-hide"
					style={{ height: "calc(100vh - 4rem)" }}
				>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
