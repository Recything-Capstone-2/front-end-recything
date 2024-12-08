import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      updateUser: (updatedData) => set((state) => ({
        user: {
          ...state.user,
          ...updatedData,
        },
      })),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
    }
  )
);

export default useUser;
