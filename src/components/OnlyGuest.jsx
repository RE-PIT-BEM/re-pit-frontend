import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const OnlyGuest = (props) => {
  const auth = useAuth();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/request" />;
  }

  return <>{props.children}</>;
};

export default OnlyGuest;
