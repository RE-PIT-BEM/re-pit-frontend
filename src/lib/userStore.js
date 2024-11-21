import { create } from "zustand";
import { getAccessToken, removeAccessToken } from "./tokenUtils";
import api from "./api";

const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  login: (userData) =>
    set({ user: userData, isAuthenticated: true, loading: false }),
  logout: () => {
    removeAccessToken();
    set({ user: null, isAuthenticated: false, loading: false });
  },
  initializeUser: async () => {
    const token = getAccessToken();
    if (!token) {
      set({ loading: false });
      return;
    }

    try {
      const response = await api.get("/authorize", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        set({
          user: response.data.data.user,
          isAuthenticated: false,
          loading: false,
        });
      } else {
        set({ user: null, isAuthenticated: false, loading: false });
      }
    } catch (error) {
      console.error(error);
      set({ user: null, isAuthenticated: false, loading: false });
    }
  },
}));

export default useUserStore;
