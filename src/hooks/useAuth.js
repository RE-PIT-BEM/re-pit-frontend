import { useEffect } from "react";
import useUserStore from "../lib/userStore";

const useAuth = () => {
  const { user, loading, initializeUser, isAuthenticated, logout } =
    useUserStore((state) => state);

  useEffect(() => {
    if (!isAuthenticated) {
      initializeUser();
    }
  }, [user, loading, initializeUser]);

  return { user, loading, isAuthenticated, logout };
};

export default useAuth;
