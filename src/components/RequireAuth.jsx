import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  const auth = useAuth();

  if (auth.loading) {
    return (
      <div className="bg-home">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "20px",
            fontFamily: "'Sansation', sans-serif",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
};

export default RequireAuth;
