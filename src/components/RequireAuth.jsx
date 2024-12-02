import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  const auth = useAuth();

  if (auth.loading) {
    return (
      <div className="bg-home">
        <div className="flex w-screen h-screen justify-center items-center text-justify font-sansation text-[25px] text-white px-48">
          daffa said : ui/ux dan front end ada bukti fisik yang dikerjakan. kalo
          back end apa kabar mas ?
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
