import { create } from "zustand";

const useDropdownStore = create((set) => ({
  isDropdownOpen: false,
  toggleDropdown: () =>
    set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
}));

export default useDropdownStore;
