import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  const auth = useAuth();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
};

export default RequireAuth;
