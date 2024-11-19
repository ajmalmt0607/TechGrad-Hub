import { create } from "zustand";

const useSidebarStore = create((set) => ({
	selectedView: "Dashboard", // Default view
	setSelectedView: (view) => set({ selectedView: view }),
}));

export default useSidebarStore;
