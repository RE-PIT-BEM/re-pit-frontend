import React, { useEffect } from "react";
import useUserStore from "../lib/userStore";

const WrapperApp = (props) => {
  const initUser = useUserStore((state) => state.initializeUser);

  useEffect(() => {
    initUser();
  }, []);

  return <>{props.children}</>;
};

export default WrapperApp;
